/* eslint-disable react/prop-types */
// SongList.js
import { songsData } from '../assets/assets';
import { IoMusicalNotes } from "react-icons/io5";

const SongList = ({ setCurrentSong, currentSong }) => {

    const handleRowClick = (song) => {
        setCurrentSong(song);
    };

    return (
        <div className="w-full h-48 overflow-y-scroll rounded-lg p-4 hide-scrollbar mt-[200px]">
            <div className='flex justify-between text-white pl-2 pr-2'>
                <p className='text-xl font-bold'>Popular</p>
                <p className='text-sm'>See All</p>
            </div>
            <table className="text-left text-white w-full">
                <thead className='uppercase text-[#CFC5C5]'>
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Playing</th>
                        <th className="px-4 py-2">Time</th>
                        <th className="px-4 py-2">Album</th>
                    </tr>
                </thead>
                <tbody className='h-4'>
                    {songsData.map((song) => (
                        <tr
                            key={song.id}
                            onClick={() => handleRowClick(song)}
                            className={`cursor-pointer ${currentSong.id === song.id ? 'bg-[#520000] transition-all duration-500 border-l-4 border-[#e73c3c]' : 'bg-transparent'}`}
                        >
                            <td className="px-2 py-2">{currentSong.id === song.id ? <IoMusicalNotes /> : song.id}</td>

                            <td className="px-2 py-2 flex items-center gap-3">
                                <img src={`${song.image}`} alt={song.name} className="w-[54px] h-[54px]" />
                                <span className='text-[#CFC5C5]'>{song.name}</span>
                            </td>
                            <td className="px-4 py-2 text-[#CFC5C5]">{song.plays}</td>
                            <td className="px-4 py-2 text-[#CFC5C5]">{song.duration}</td>
                            <td className="px-4 py-2 text-[#CFC5C5]">{song.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SongList;
