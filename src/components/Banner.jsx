// Banner.js
import SongList from "../components/SongList";

const Banner = ({ setCurrentSong, currentSong }) => {
    return (
        <div className="w-[800px] h-[343px] top-[150px] left-[100px] relative mt-[-10px]">
            <div className="flex flex-row absolute top-[30%] left-[50px] transform -translate-x-1/2 w-[15px] items-center gap-2">
                <img src="/Vector.png" alt="Verified Icon" />
                <p className="text-white">Verified</p>
            </div>
            <div className="flex flex-col justify-between absolute top-32 bottom-[30px] left-[200px] transform -translate-x-1/2 gap-16">
                <h1 className="text-white text-4xl font-bold">Michael Jackson</h1>
                <p className="text-white text-sm">27.852.501 monthly listeners</p>
            </div>
            <img src="/Background.png" className="w-[900px] h-full object-cover rounded-[50px]" />
            <img src="/Michael.svg" className="absolute top-[-125px] left-[30%] w-[535px] h-[432px]" />
        </div>
    );
};

export default Banner;
