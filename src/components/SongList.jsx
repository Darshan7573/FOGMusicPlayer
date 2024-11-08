import { useState } from 'react';

const SongList = () => {
    const [activeSongId, setActiveSongId] = useState(null);

    const songs = [
        { id: 1, title: 'Billie Jean', plays: '1.040.811.084', time: '4:53', album: 'Thriller 25 Sup...' },
        { id: 2, title: 'Beat It', plays: '643.786.045', time: '4:18', album: 'Thriller 25 Sup...' },
        { id: 3, title: 'Smooth Criminal - 2012 Remaster', plays: '407.234.004', time: '4:17', album: 'Thriller 25 Sup...' },
        { id: 4, title: "Don't Stop 'Til You Get Enough", plays: '316.391.952', time: '6:05', album: 'Bad 25th Anni...' },
        { id: 5, title: 'Rock With You - Single Version', plays: '268.187.218', time: '3:40', album: 'Off The Wall' },
        // Add more songs as needed
    ];

    const handleRowClick = (id) => {
        setActiveSongId(id);
    };

    return (
        <div className="w-full h-64 overflow-y-scroll rounded-lg p-4 hide-scrollbar mt-9">
            <table className="w-full text-left text-white">
                <thead>
                    <tr >
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Playing</th>
                        <th className="px-4 py-2">Time</th>
                        <th className="px-4 py-2">Album</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song) => (
                        <tr
                            key={song.id}
                            onClick={() => handleRowClick(song.id)}
                            className={`cursor-pointer border-b ${activeSongId === song.id ? 'bg-red-700 transition-all duration-500' : 'bg-transparent'
                                }`}
                        >
                            <td className="px-4 py-2">{song.id}</td>
                            <td className="px-4 py-2 flex items-center space-x-3">
                                <img src={`/path/to/album${song.id}.jpg`} alt={song.title} className="w-8 h-8" />
                                <span>{song.title}</span>
                            </td>
                            <td className="px-4 py-2">{song.plays}</td>
                            <td className="px-4 py-2">{song.time}</td>
                            <td className="px-4 py-2">{song.album}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SongList;
