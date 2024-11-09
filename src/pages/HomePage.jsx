import { useState } from "react";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Player from "../components/Player";
import SideBar from "../components/SideBar";
import { songsData } from "../assets/assets";
import SongList from "../components/SongList";

const HomePage = () => {
    const [currentSong, setCurrentSong] = useState(songsData[0]); // Keep track of the current song

    // Function to handle the next song
    const handleNextSong = () => {
        const currentIndex = songsData.indexOf(currentSong);
        const nextIndex = (currentIndex + 1) % songsData.length;
        setCurrentSong(songsData[nextIndex]);
    };

    // Function to handle the previous song
    const handlePrevSong = () => {
        const currentIndex = songsData.indexOf(currentSong);
        const prevIndex = (currentIndex - 1 + songsData.length) % songsData.length;
        setCurrentSong(songsData[prevIndex]);
    };

    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="flex-1 bg-gradient-to-t from-[#0a0303] to-[#7E0301] h-screen overflow-hidden">
                <NavBar />
                <div className="relative z-10">
                    <Banner setCurrentSong={setCurrentSong} currentSong={currentSong} /> {/* Pass setCurrentSong to Banner */}
                </div>
                <div className="relative z-0 h-[calc(100%-320px)] overflow-y-auto">
                    <SongList setCurrentSong={setCurrentSong} currentSong={currentSong} /> {/* Pass setCurrentSong to SongList */}

                </div>
            </div>
            <div className="w-[270px] bg-gradient-to-t from-[#4C0000] to-[#0A0A0A]">
                <Player
                    currentSong={currentSong} // Pass currentSong to Player
                    onNext={handleNextSong}
                    onPrev={handlePrevSong}
                    songsData={songsData}
                />
            </div>
        </div>
    );
};

export default HomePage;
