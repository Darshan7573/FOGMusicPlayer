// SongList.js
import { useState } from 'react';
import { songsData } from '../assets/assets';
import { IoMusicalNotes } from "react-icons/io5";

const SongList = ({ setCurrentSong, }) => {
    const [activeSongId, setActiveSongId] = useState(null);

    const handleRowClick = (song) => {
        setActiveSongId(song.id);
        setCurrentSong(song);
    };

    console.log(setCurrentSong)

    return (
        <div className="w-full h-64 overflow-y-scroll rounded-lg p-4 hide-scrollbar mt-9">
            <table className="text-left text-white w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Playing</th>
                        <th className="px-4 py-2">Time</th>
                        <th className="px-4 py-2">Album</th>
                    </tr>
                </thead>
                <tbody>
                    {songsData.map((song) => (
                        <tr
                            key={song.id}
                            onClick={() => handleRowClick(song)}
                            className={`cursor-pointer ${activeSongId === song.id ? 'bg-[#520000] transition-all duration-500 border-l-4 border-[#e73c3c]' : 'bg-transparent'}`}
                        >
                            <td className="px-4 py-2">{activeSongId === song.id ? <IoMusicalNotes /> : song.id}</td>

                            <td className="px-4 py-2 flex items-center space-x-3">
                                <img src={`${song.image}`} alt={song.name} className="w-8 h-8" />
                                <span>{song.name}</span>
                            </td>
                            <td className="px-4 py-2">{song.plays}</td>
                            <td className="px-4 py-2">{song.duration}</td>
                            <td className="px-4 py-2">{song.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SongList;
