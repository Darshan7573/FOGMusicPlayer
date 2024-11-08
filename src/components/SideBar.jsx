import { IoMusicalNotes } from "react-icons/io5";
import { FaHome, FaChartLine, FaMusic, FaCompass, FaCog, FaSignOutAlt } from "react-icons/fa";


const SideBar = () => {
    return (
        <div className="bg-[#0E0E0E]
 flex flex-col justify-between w-[250px] h-screen p-6">
            <div>
                <div className="flex items-center space-x-2 w-[311px] mt-[26px]">
                    <IoMusicalNotes className="text-red-600  text-3xl w-[40px] h=[55.5px] top-[4.5px] left-[8px]" />
                    <h1 className="text-white font-bold text-xl">
                        <span className="text-red-500">Dream</span>Music
                    </h1>
                </div>

                <div className="mt-[60px] left-[70px]">
                    <div className="">
                        <p className="text-white text-xs uppercase">Menu</p>
                    </div>
                    <ul className="flex gap-4 flex-col text-center mt-3">
                        <li className="text-white flex items-center gap-4"><FaHome className="w-[25.67px] h-[24.24px] text-red-600" /><span className="text-sm">Home</span></li>
                        <li className="text-white  flex items-center gap-4"><FaChartLine className="w-[25.67px] h-[24.24px] text-red-600" /><span className="text-sm">Trends</span></li>
                        <li className="text-white  flex  items-center gap-4"><FaMusic className="w-[25.67px] h-[24.24px] text-red-600" /><span className="text-sm">Library</span></li>
                        <li className="text-white  flex items-center gap-4"><FaCompass className="w-[25.67px] h-[24.24px] text-red-600" /><span className="text-sm">Discover</span></li>
                    </ul>
                </div>
            </div>
            <div className=" left-[70px]">
                <div className="text-xs text-white uppercase">General</div>
                <ul className="flex flex-col mt-3 gap-4">
                    <li className="flex gap-4 items-center "><FaCog className="text-red-600 w-[25.67px]" /><span className="text-white text-sm">Settings</span></li>
                    <li className="flex gap-4 items-center "><FaSignOutAlt className="text-red-600 w-[25.67px] h-[19.24px]" /><span className="text-white text-sm">Log Out</span></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar