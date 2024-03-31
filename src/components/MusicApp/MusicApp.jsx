import React from 'react'

const MusicApp = ({songData}) => {
    return (
        <div className='py-3 px-3 text-white'>
            <div className='flex gap-3'>
                <div className='w-[25%] h-[100vh] overflow-y-auto no-scrollbar'>
                   <div>
                   <ul className='px-3 py-2 rounded-[10px] bg-[#191919] shadow mb-3'>
                       <img className='w-[100px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png" alt="logo" />

                        <li className='py-2'>
                            <button><i className="fa-solid fa-search mr-3 btn-seach"></i></button>
                            <input type="text" className='bg-[#191919] px-3 py-2 outline-none' placeholder='Search'/>
                        </li>
                    </ul>

                    <div className='py-2 px-3 rounded-[10px] bg-[#191919] shadow'>
                        <div className='flex justify-between items-center mb-4'>
                            <div className='flex gap-2'>
                            <i className="fa-solid fa-home"></i>
                            <span>Your Library</span>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <i className="fa-solid fa-plus w-[40px] h-[40px] flex items-center justify-center bg-white text-black rounded"></i>
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        <ul className='flex items-center gap-2 flex-wrap mb-3'>
                            <li className='py-1 px-3 rounded-[30px] bg-[#232323]'>Playlist</li>
                            <li className='py-1 px-3 rounded-[30px] bg-[#232323]'>Podcasts & Shows</li>
                            <li className='py-1 px-3 rounded-[30px] bg-[#232323]'>Albums</li>
                            <li className='py-1 px-3 rounded-[30px] bg-[#232323]'>Artists</li>
                        </ul>
                        <div className='flex items-center justify-between mb-4'>
                            <i className="fa-solid fa-search text-[20px]"></i>
                            <div>
                                <span className='d-inline-block mr-2'>Recents</span>
                                <i className="fa-solid fa-bars"></i>
                            </div>
                        </div>

                        <div>
                            {
                                songData.map((item)=>{
                                    return <iframe
                                    src={`https://open.spotify.com/embed/track/${item.id}`}
                                    width="100%"
                                    height="80"
                                    frameborder="0"
                                    allowtransparency="true"
                                    allow="encrypted-media"
                                    className='mb-3 px-3'
                                />
                                })
                            }
                        </div>
                   </div>

                    </div>
                </div>

                <div className='w-[50%]'>
                    
                </div>

                <div className='w-[25%] '>

                </div>
            </div>
        </div>
    )
}

export default MusicApp
