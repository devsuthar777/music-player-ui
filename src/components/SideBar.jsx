import React, { useContext } from 'react'
import { MusicContext } from '../context/musicContext';
import { CiSearch } from "react-icons/ci";
import SongCard from './SongCard';

const SideBar = () => {
  const {songList} = useContext(MusicContext);
  
  return (
    <div className='w-full h-full'>
      <div className='flex w-[258px] h-[32px] gap-[40px] font-inter
      text-[24px] leading-[32px] font-semibold
      '><button className='text-[#FFFFFF] '>For You</button> <button className='text-[#FFFFFF] opacity-50'>Top Tracks</button></div>
      <div className='w-full flex bg-opacity-10 bg-white items-center rounded-lg  my-6'>
        <input placeholder='Search Song, Artist' className=' w-full py-[8px] px-[16px] text-white  bg-transparent outline-none  text-[18px]  leading-[28px]'>
        </input>
        <CiSearch className='w-[32px] h-[32px] bg-transparent text-white opacity-60 mr-1'/>
      </div>
      <div className='h-[720px]'>
        {
          songList.map((song) => 
            <SongCard song = {song}></SongCard>
          )
        }
      </div>
    </div>
  )
}

export default SideBar