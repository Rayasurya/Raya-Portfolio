import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';
import { Button } from '../ui/button';

export const SvgOptimizer = () => {
    const [svgInput, setSvgInput] = useState('');
    const [svgOutput, setSvgOutput] = useState('');
    const [stats, setStats] = useState({ original: 0, optimized: 0, saved: 0 });
    const [copied, setCopied] = useState(false);

    const optimizeSvg = (svg) => {
        if (!svg) {
            setSvgOutput('');
            setStats({ original: 0, optimized: 0, saved: 0 });
            return;
        }

        let optimized = svg;
        const originalSize = svg.length;

        // Remove XML declaration
        optimized = optimized.replace(/<\?xml[^?]*\?>/g, '');

        // Remove comments
        optimized = optimized.replace(/<!--[\s\S]*?-->/g, '');

        // Remove title and desc tags
        optimized = optimized.replace(/<title>[\s\S]*?<\/title>/gi, '');
        optimized = optimized.replace(/<desc>[\s\S]*?<\/desc>/gi, '');

        // Round decimal precision to 2 places
        optimized = optimized.replace(/(\d+\.\d{3,})/g, (match) => {
            return parseFloat(match).toFixed(2);
        });

        // Remove empty groups
        optimized = optimized.replace(/<g\s*>\s*<\/g>/g, '');

        // Remove excess whitespace
        optimized = optimized.replace(/\s+/g, ' ').trim();

        const optimizedSize = optimized.length;
        const savedPercentage = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

        setSvgOutput(optimized);
        setStats({
            original: originalSize,
            optimized: optimizedSize,
            saved: savedPercentage
        });
    };

    const handleCopy = async () => {
        await navigator.clipboard.writeText(svgOutput);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            {/* Tool Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg">
                        <Sparkles className="text-amber-600" size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">SVG Optimizer</h3>
                        <p className="text-sm text-gray-500">Clean your SVG code</p>
                    </div>
                </div>
            </div>

            {/* Input */}
            <div className="mb-3">
                <label className="block text-xs font-medium text-gray-700 mb-1">Paste SVG Code</label>
                <textarea
                    value={svgInput}
                    onChange={(e) => {
                        setSvgInput(e.target.value);
                        optimizeSvg(e.target.value);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-xs font-mono resize-none"
                    rows={4}
                    placeholder="<svg>...</svg>"
                />
            </div>

            {/* Stats */}
            {svgOutput && (
                <div className="mb-3 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                            <div className="text-xs text-gray-600">Original</div>
                            <div className="text-sm font-bold text-gray-900">{stats.original}b</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-600">Optimized</div>
                            <div className="text-sm font-bold text-gray-900">{stats.optimized}b</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-600">Saved</div>
                            <div className="text-sm font-bold text-amber-600">{stats.saved}%</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Output */}
            {svgOutput && (
                <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-700 mb-1">Clean Code</label>
                    <div className="relative">
                        <textarea
                            value={svgOutput}
                            readOnly
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs font-mono resize-none bg-gray-50"
                            rows={3}
                        />
                    </div>
                </div>
            )}

            {/* Copy Button */}
            <Button
                onClick={handleCopy}
                variant="default"
                size="sm"
                className="w-full"
                disabled={!svgOutput}
            >
                {copied ? (
                    <>
                        <Check size={14} className="mr-2" />
                        Copied!
                    </>
                ) : (
                    <>
                        <Copy size={14} className="mr-2" />
                        Copy Clean Code
                    </>
                )}
            </Button>
        </div>
    );
};
