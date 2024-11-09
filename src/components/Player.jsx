import { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { FaPause, } from 'react-icons/fa';


const Player = ({ currentSong, onNext, onPrev }) => {
    const soundRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isLooping, setIsLooping] = useState(false);


    console.log(currentSong)

    useEffect(() => {
        if (currentSong && soundRef.current) {
            soundRef.current.unload(); // Unload previous song if it exists
        }

        if (currentSong) {
            // Initialize Howl for new song
            soundRef.current = new Howl({
                src: [currentSong.file],
                html5: true,
                onplay: () => {
                    setDuration(soundRef.current.duration());
                    setIsPlaying(true); // Set playing status to true when song starts
                    requestAnimationFrame(updateTime); // Start updating time
                },
                onend: () => {
                    if (isLooping) {
                        soundRef.current.play(); // Replay if looping
                    } else {
                        setIsPlaying(false); // Stop playing when song ends
                        onNext(); // Go to the next song automatically
                    }
                }
            });

            soundRef.current.play();
        }

        // Clean up function to unload sound and stop playback when component unmounts or currentSong changes
        return () => {
            if (soundRef.current) {
                soundRef.current.unload(); // Clean up the song
            }
        };
    }, [currentSong, isLooping, onNext]);

    const updateTime = () => {
        if (soundRef.current && isPlaying) {
            setCurrentTime(soundRef.current.seek());
            requestAnimationFrame(updateTime);
        }
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            soundRef.current.pause();
        } else {
            soundRef.current.play();
            requestAnimationFrame(updateTime);
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e) => {
        const newTime = parseFloat(e.target.value);
        soundRef.current.seek(newTime);
        setCurrentTime(newTime);
    };


    const formatTime = (time) => {
        const minutes = Math.floor(time / 60) || 0;
        const seconds = Math.floor(time % 60) || 0;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return currentSong && (
        <div className='flex flex-col justify-end  ml-4 mr-3 mt-[180%]'>
            <div className="w-50 p-4 bg-[#6B0000] text-white rounded-lg flex flex-col items-center">
                <h3 className="text-sm mb-2">Now Playing</h3>
                <img src={currentSong.image} alt={currentSong.name} className="w-40 h-40 rounded-lg mb-4" />
                <h4 className="text-lg font-bold">{currentSong.name.slice(0, 15)}</h4>

                <div className="flex items-center gap-4 mt-4">
                    <span className='text-sm'>{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-1"
                    />
                    <span className='text-sm'>{formatTime(duration)}</span>
                </div>

                <div className="flex items-center justify-between mt-4 h-10 w-full">
                    <img src='/Repeat.svg' onClick={() => setIsLooping(!isLooping)} className='cursor-pointer text-md' />
                    <img src='/Backward.svg' onClick={onPrev} className="cursor-pointer text-sm" />
                    {isPlaying ? (
                        <FaPause onClick={togglePlayPause} className="cursor-pointer text-sm w-10 h-6" />
                    ) : (
                        <img src='/Play.svg' onClick={togglePlayPause} className="cursor-pointer text-sm" />
                    )}
                    <img src='/Next.svg' onClick={onNext} className="cursor-pointer text-sm" />
                    <img src='/Random.svg'
                        className={`cursor-pointer text-sm ${isLooping ? 'text-yellow-400' : ''}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Player;
