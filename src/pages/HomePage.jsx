import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Player from "../components/Player";
import SideBar from "../components/SideBar";

const HomePage = () => {
    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="flex-1 bg-gradient-to-t from-[#0a0303] to-[#7E0301] h-screen overflow-y-scroll hide-scrollbar">
                <NavBar />
                <Banner />
            </div>
            <div className="w-[270px]">
                <Player />
            </div>
        </div>
    );
};

export default HomePage;
