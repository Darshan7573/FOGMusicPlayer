import { IoMdSearch } from "react-icons/io";

const NavBar = () => {
    return (
        <div className="items-center p-[35px] ml-[100px] mt-9">
            <div className="flex flex-row  h-[27px] top-[45px] left-[519px] gap-[50px]">
                <ul className="flex flex-row gap-6 text-sm text-white cursor-pointer">
                    <li>Music</li>
                    <li>Podcast</li>
                    <li>Live</li>
                    <li>Radio</li>
                </ul>
                <div className="relative ml-[100px] flex items-center">
                    <input
                        className="border-none text-[18px] bg-[#200101] text-white  rounded-[50px] w-[400px] top-[30px] left-[964px] h-[38px] focus:outline-none pl-[20px]"
                        type="text"
                        placeholder="Michale JackSon"
                    />
                    <IoMdSearch className="absolute text-2xl right-3 top-1/2 transform -translate-y-1/2 text-white" />
                </div>

            </div>
        </div>
    )
}

export default NavBar