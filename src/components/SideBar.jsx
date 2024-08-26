import React, { useContext, useState } from 'react'
import { MusicContext } from '../context/musicContext';
import { CiSearch } from "react-icons/ci";
import SongCard from './SongCard';

const SideBar = () => {
  const {songList} = useContext(MusicContext);
  const [isTopTrack,setIsTopTrack] = useState(false);
  
  return (
    <div className='w-full h-full'>
      <div className='flex w-[258px] h-[32px] gap-[40px] font-inter
      text-[24px] leading-[32px] font-semibold
      '><button className={`text-[#FFFFFF] ${isTopTrack ? 'opacity-50' : 'opacity-100' }`} onClick={() => setIsTopTrack(false)}>For You</button> <button className={`text-[#FFFFFF] ${isTopTrack ? 'opacity-100' : 'opacity-50' }`} onClick={() => setIsTopTrack(true)}>Top Tracks</button></div>
      <div className='w-full flex bg-opacity-10 bg-white items-center rounded-lg  my-6'>
        <input placeholder='Search Song, Artist' className=' w-full py-[8px] px-[16px] text-white  bg-transparent outline-none  text-[18px]  leading-[28px]'>
        </input>
        <CiSearch className='w-[32px] h-[32px] bg-transparent text-white opacity-60 mr-1'/>
      </div>
      <div className='h-[720px]'>
        {
          songList.map((song,index) => 
            !isTopTrack ? <SongCard song = {song} index={index}></SongCard> : (song.top_track ? <SongCard song = {song} index={index}></SongCard> : null )
          )
        }
      </div>
    </div>
  )
}

export default SideBar