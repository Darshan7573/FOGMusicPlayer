const Banner = () => {
    return (
        <div className="w-[800px] h-[343px] top-[150px] left-[100px] relative">
            <div className="flex flex-row absolute top-[30%] left-7 transform -translate-x-1/2 w-[15px] items-center gap-2">
                <img src="/Vector.png" alt="Verified Icon" />
                <p className="text-white">Verified</p>
            </div>
            <div className="flex flex-col absolute top-32 bottom-[30px] left-[200px] transform -translate-x-1/2 gap-16">
                <h1 className="text-white text-5xl font-bold">Michael Jackson</h1>
                <p className="text-white text-sm">27.852.501 monthly listeners</p>
            </div>
            <img
                src="/Background.png"
                className="w-[900px] h-full object-cover rounded-[50px]"
            />
            <img
                src="/Michael.png"
                className="absolute top-[-158px] left-[30%] w-[535px] h-[452px]"
            />
        </div>
    );
};

export default Banner;
