import * as React from "react";

export default function WaveformPlayer({
    audioSrc,
    width = 400,
    height = 60,
    className = "",
}) {
    const [audio] = React.useState(new Audio(audioSrc));
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const handleTimeUpdate = () => {
            setProgress((audio.currentTime / audio.duration) * 100);
        };

        audio.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.pause();
        };
    }, [audio]);

    const togglePlay = () => {
        if (isPlaying) audio.pause();
        else audio.play();
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const seekTime = (clickX / rect.width) * audio.duration;
        audio.currentTime = seekTime;
    };

    return (
        <div className={`flex flex-col items-center gap-3 ${className}`}>
            <div
                className="relative w-full rounded-md cursor-pointer overflow-hidden bg-gray-100"
                style={{ width, height }}
                onClick={handleSeek}
            >
                {/* Background wave */}
                <div className="absolute inset-0 flex justify-between items-center px-0.5">
                    {Array.from({ length: 40 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="rounded-sm bg-gray-300"
                            style={{
                                width: 2,
                                height: `${10 + Math.random() * (height - 20)}px`,
                            }}
                        />
                    ))}
                </div>

                {/* Progress overlay */}
                <div
                    className="absolute top-0 left-0 h-full rounded-md flex justify-between items-center px-0.5 transition-all duration-100"
                    style={{
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #E67E22 0%, #E67E22 100%)',
                    }}
                >
                    {Array.from({ length: 40 }).map((_, idx) => {
                        const isVisible = (progress / 100) * 40 > idx;
                        return isVisible ? (
                            <div
                                key={idx}
                                className="rounded-sm bg-white"
                                style={{
                                    width: 2,
                                    height: `${10 + Math.random() * (height - 20)}px`,
                                }}
                            />
                        ) : null;
                    })}
                </div>
            </div>

            <button
                onClick={togglePlay}
                className="px-6 py-2 text-sm font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    );
}
