import Banner from "../components/Banner"
import NavBar from "../components/NavBar"
import Player from "../components/Player"
import SideBar from "../components/SideBar"
// import SongList from "../components/SongList"

const HomePage = () => {
    return (
        <>
            <div className="flex h-screen">
                <SideBar />
                <div className="flex-1 bg-gradient-to-t from-[#0a0303] to-[#7E0301]">
                    <NavBar />
                    <Banner />
                    {/* <SongList /> */}
                </div>
                <div className="flex-2 w-[270px]">
                    <Player />
                </div>
            </div>
        </>

    )
}

export default HomePage