import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

const AudioPlayer = ({ src, caption, title = "Audio Recording" }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = React.useRef(null);

    useEffect(() => {
        if (src) {
            audioRef.current = new Audio(src);

            audioRef.current.addEventListener('timeupdate', () => {
                if (audioRef.current) {
                    const p = (audioRef.current.currentTime / audioRef.current.duration) * 100;
                    setProgress(p || 0);
                }
            });

            audioRef.current.addEventListener('ended', () => {
                setIsPlaying(false);
                setProgress(0);
            });

            return () => {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current = null;
                }
            };
        }
    }, [src]);

    const togglePlay = () => {
        if (!audioRef.current) {
            if (!src) {
                alert("Please upload the audio file first!");
                return;
            }
            return;
        }

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Playback failed", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="w-full max-w-md bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden my-6">
            <div className="p-4 flex items-center gap-4">
                <button
                    onClick={togglePlay}
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                    {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                </button>

                <div className="flex-1">
                    <div className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-1">
                        {title}
                    </div>
                    <div className="h-8 flex items-center gap-1">
                        {/* Simulated Waveform that reacts to play state */}
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="w-1 bg-gray-200 rounded-full transition-all duration-300"
                                style={{
                                    height: isPlaying
                                        ? `${Math.max(20, Math.random() * 100)}%`
                                        : `${30 + Math.sin(i) * 20}%`,
                                    backgroundColor: i / 20 * 100 < progress ? '#f97316' : '#e5e7eb'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {caption && (
                <div className="px-4 pb-4 pt-0">
                    <p className="text-sm text-gray-600 italic border-l-2 border-orange-200 pl-3 py-1">
                        "{caption}"
                    </p>
                </div>
            )}
        </div>
    );
};

export default AudioPlayer;
