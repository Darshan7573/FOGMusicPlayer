// import Banner from "../components/Banner"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
// import SongList from "../components/SongList"

const HomePage = () => {
    return (
        <>
            <div className="flex h-screen">
                <SideBar />
                <div className="flex-1 bg-gradient-to-t from-[#0a0303] to-[#7E0301]">
                    <NavBar />
                    {/* <Banner />
                    <SongList /> */}
                </div>
            </div>
        </>

    )
}

export default HomePage