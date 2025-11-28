import React, { useState } from 'react';
import { Music, X, Volume2 } from 'lucide-react';

const AudioFab = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [volume, setVolume] = useState(50);

    return (
        <div className="fixed bottom-[100px] right-5 z-[990] md:bottom-8 md:right-8">
            {/* Expanded Slider */}
            <div
                className={`absolute bottom-full right-0 mb-4 bg-white/90 backdrop-blur-xl border border-gray-200 p-4 rounded-2xl shadow-xl transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="h-48 flex flex-col items-center gap-4 w-12">
                    <Volume2 size={20} className="text-gray-500" />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="h-full w-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black"
                        style={{ writingMode: 'bt-lr', WebkitAppearance: 'slider-vertical' }}
                    />
                </div>
            </div>

            {/* FAB Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
                {isOpen ? <X size={20} /> : <Music size={20} />}
            </button>
        </div>
    );
};

export default AudioFab;
