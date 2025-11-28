import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

const AudioPlayer = ({ src, caption, title = "Audio Recording", variant }) => {
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

    if (variant === 'whatsapp') {
        return (
            <div className="w-full max-w-md my-6">
                <div className="bg-[#DCF8C6] p-3 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-none shadow-sm inline-flex items-center gap-3 relative max-w-[90%]">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden border-2 border-white">
                        <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-xs">
                            👤
                        </div>
                    </div>

                    {/* Player Controls */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={togglePlay}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                        </button>

                        <div className="flex flex-col justify-center w-32 md:w-48">
                            <div className="h-6 flex items-center gap-0.5 opacity-60">
                                {/* WhatsApp style waveform */}
                                {[...Array(30)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-1 bg-gray-600 rounded-full transition-all duration-150"
                                        style={{
                                            height: isPlaying
                                                ? `${Math.max(20, Math.random() * 100)}%`
                                                : `${30 + Math.sin(i * 0.5) * 40}%`,
                                            opacity: i / 30 * 100 < progress ? 1 : 0.4
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Timestamp/Duration */}
                    <div className="absolute bottom-1 right-3 text-[10px] text-gray-500 font-medium">
                        {isPlaying ? "Playing..." : "0:42"} • 14:02
                    </div>
                </div>

                {caption && (
                    <p className="text-sm text-gray-500 mt-2 ml-2 italic">
                        "{caption}"
                    </p>
                )}
            </div>
        );
    }

    // Helper to format time
    const formatTime = (seconds) => {
        if (isNaN(seconds) || !seconds) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    if (variant === 'ambient-card') {
        return (
            <div className="w-full my-8 relative group">
                {/* Background Context Blur - Placeholder for "Shop Context" */}
                <div className="absolute inset-0 bg-gray-900 rounded-2xl overflow-hidden opacity-90">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
                    {/* Abstract noise texture */}
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
                </div>

                {/* Glassmorphism Card */}
                <div className="relative z-10 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/5">

                    {/* Meta Tags */}
                    <div className="flex gap-2 mb-6">
                        <span className="px-2 py-1 bg-white/5 text-white/70 text-[10px] uppercase tracking-wider rounded-md border border-white/10 flex items-center gap-1 backdrop-blur-sm">
                            📍 Indiranagar, Bangalore
                        </span>
                        <span className="px-2 py-1 bg-red-500/10 text-red-300 text-[10px] uppercase tracking-wider rounded-md border border-red-500/20 flex items-center gap-1 backdrop-blur-sm">
                            🔊 85dB (High)
                        </span>
                    </div>

                    {/* Main Player Area */}
                    <div className="flex items-center gap-5">
                        <button
                            onClick={togglePlay}
                            className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white flex items-center justify-center transition-all shadow-lg shadow-orange-900/20 hover:scale-105 active:scale-95 group-hover:shadow-orange-500/30 border border-white/10"
                        >
                            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                        </button>

                        <div className="flex-1">
                            <div className="flex justify-between items-end mb-2">
                                <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                                    {title}
                                </div>
                                <div className="text-[10px] font-mono text-gray-400 tabular-nums">
                                    {formatTime(audioRef.current?.currentTime || 0)} / {formatTime(audioRef.current?.duration || 0)}
                                </div>
                            </div>

                            {/* Live Waveform Visualization */}
                            <div className="h-10 flex items-end gap-1 w-full">
                                {[...Array(30)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-t-sm transition-all duration-100 ease-in-out"
                                        style={{
                                            height: isPlaying
                                                ? `${Math.max(15, Math.random() * 100)}%`
                                                : `${20 + Math.sin(i * 0.5) * 30}%`,
                                            backgroundColor: i / 30 * 100 < progress ? '#f97316' : 'rgba(255, 255, 255, 0.1)'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Karaoke Caption */}
                    {caption && (
                        <div className="mt-6 pt-4 border-t border-white/10">
                            <p className="text-lg font-medium text-white/90 leading-relaxed font-serif italic">
                                "{caption}"
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

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
