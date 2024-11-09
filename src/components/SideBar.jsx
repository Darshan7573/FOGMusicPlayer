const SideBar = () => {
    return (
        <div className="bg-[#0E0E0E]  flex-col hidden sm:flex justify-between w-[250px] h-screen p-6">
            <div>
                <div className="flex items-center w-[311px] mt-[26px] ml-[-15px]">
                    <img src='/Logo.svg' className="text-red-600  text-3xl w-[64px] h-[50px] top-[4.5px]" />
                    <h1 className="text-white font-bold text-2xl">
                        <span className="text-red-500 font-bold">Dream</span>Music
                    </h1>
                </div>

                <div className="mt-[60px] left-[70px]">
                    <div className="">
                        <p className="text-white text-xs uppercase">Menu</p>
                    </div>
                    <ul className="flex gap-4 flex-col text-center mt-3">
                        <li className="text-white flex items-center gap-4 cursor-pointer hover:bg-black py-2 px-2 transition-all duration-300"><img src="/Home.svg" className="w-[25.67px] h-[21.24px] text-red-600" /><span className="text-sm">Home</span></li>
                        <li className="text-white  flex items-center gap-4 cursor-pointer hover:bg-black py-2 px-2 transition-all duration-300"><img src="/Trends.svg" className="w-[25.67px] h-[21.24px] text-red-600" /><span className="text-sm">Trends</span></li>
                        <li className="text-white  flex  items-center gap-4 cursor-pointer hover:bg-black py-2 px-2 transition-all duration-300"><img src="/Library.svg" className="w-[25.67px] h-[21.24px] text-red-600" /><span className="text-sm">Library</span></li>
                        <li className="text-white  flex items-center gap-4 cursor-pointer hover:bg-black py-2 px-2 transition-all duration-300"><img src="/Discover.svg" className="w-[25.67px] h-[21.24px] text-red-600" /><span className="text-sm">Discover</span></li>
                    </ul>
                </div>
            </div>
            <div className=" left-[70px]">
                <div className="text-xs text-white uppercase">General</div>
                <ul className="flex flex-col mt-3 gap-4">
                    <li className="flex gap-4 items-center cursor-pointer hover:bg-black py-2 px-2 transition-all duration-300 "><img src="/Settings.svg" className="text-red-600 w-[21.75px]" /><span className="text-white text-sm">Settings</span></li>
                    <li className="flex gap-4 items-center cursor-pointer hover:bg-black py-2 px-2 transition-all duration-300 "><img src="/Log Out.svg" className="text-red-600 w-[21.75px] h-[19.24px]" /><span className="text-white text-sm">Log Out</span></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar