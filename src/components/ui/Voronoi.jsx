import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Group } from '@visx/group';
import { LinearGradient } from '@visx/gradient';
import { RectClipPath } from '@visx/clip-path';
import { voronoi, Polygon } from '@visx/delaunay';
import { localPoint } from '@visx/event';
import { getSeededRandom } from '@visx/mock-data';

const seededRandom = getSeededRandom(0.88);

const data = new Array(150).fill(null).map(() => ({
    x: seededRandom(),
    y: seededRandom(),
    id: Math.random().toString(36).slice(2),
}));

const defaultMargin = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0, // Removed bottom margin to fill container
};

export const Voronoi = ({ width, height, margin = defaultMargin }) => {
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const voronoiDiagram = useMemo(
        () =>
            voronoi({
                data,
                x: (d) => d.x * innerWidth,
                y: (d) => d.y * innerHeight,
                width: innerWidth,
                height: innerHeight,
            }),
        [innerWidth, innerHeight],
    );

    const svgRef = useRef(null);
    const [hoveredId, setHoveredId] = useState(null);
    const [neighborIds, setNeighborIds] = useState(new Set());

    return width < 10 || height < 10 ? null : (
        <svg width={width} height={height} ref={svgRef} className="rounded-3xl">
            {/* Grey/Black/White Gradients */}
            <LinearGradient id="voronoi_grey" from="#f2f2f2" to="#e0e0e0" rotate={45} />
            <LinearGradient id="voronoi_hover" from="#333333" to="#000000" rotate={45} />

            <RectClipPath id="voronoi_clip" width={innerWidth} height={innerHeight} rx={14} />

            <Group
                top={margin.top}
                left={margin.left}
                clipPath="url(#voronoi_clip)"
                onMouseMove={(event) => {
                    if (!svgRef.current) return;

                    const point = localPoint(svgRef.current, event);
                    if (!point) return;

                    const closest = voronoiDiagram.delaunay.find(point.x, point.y);
                    if (closest !== undefined && data[closest].id !== hoveredId) {
                        const neighbors = Array.from(voronoiDiagram.neighbors(closest));
                        setNeighborIds(new Set(neighbors.map((d) => data[d].id)));
                        setHoveredId(data[closest].id);
                    }
                }}
                onMouseLeave={() => {
                    setHoveredId(null);
                    setNeighborIds(new Set());
                }}
            >
                {data.map((d, i) => (
                    <Polygon
                        key={`polygon-${d.id}`}
                        polygon={voronoiDiagram.cellPolygon(i)}
                        fill={
                            hoveredId && (d.id === hoveredId || neighborIds.has(d.id))
                                ? 'url(#voronoi_hover)'
                                : 'url(#voronoi_grey)'
                        }
                        stroke="#fff"
                        strokeWidth={1}
                        fillOpacity={hoveredId && neighborIds.has(d.id) ? 0.5 : 1}
                        style={{ transition: 'all 0.2s ease' }}
                    />
                ))}
                {data.map(({ x, y, id }) => (
                    <circle
                        key={`circle-${id}`}
                        r={2}
                        cx={x * innerWidth}
                        cy={y * innerHeight}
                        fill={id === hoveredId ? '#fff' : '#aaa'}
                        fillOpacity={0.8}
                        style={{ pointerEvents: 'none' }}
                    />
                ))}
            </Group>
        </svg>
    );
};

export const VoronoiDemo = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full flex justify-center items-center bg-gray-50 overflow-hidden rounded-3xl">
            <Voronoi
                width={dimensions.width}
                height={dimensions.height}
            />
        </div>
    );
};
