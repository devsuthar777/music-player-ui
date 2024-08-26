import React, { useContext } from 'react'
import { MusicContext } from '../context/musicContext';
import MusicController from './MusicController';
const urlImgBase = process.env.REACT_APP_SONGS_COVER;

const Player = () => {
  const {currentSong} = useContext(MusicContext);
  console.log("currsentsong",currentSong);
  return (
    <div className='w-[480px] h-[692px] flex flex-col gap-[24px]'>
      <div className='w-[193px] h-[68px] flex flex-col gap-[8px]'>
        <h1 className='text-[32px] leading-[36px] text-white font-semibold'>{currentSong.name}</h1>
        <p className='text-[16px] leading-[24px] text-white opacity-[60%]'>{currentSong.artist}</p>
      </div>
      <div className='w-full h-[510px] rounded-md'>
       <img className='w-[480px] h-[480px] rounded-md' src={urlImgBase+currentSong.cover}>
       </img>
       <div  className='mt-[16px] h-[6px] w-full bg-white bg-opacity-[20%] rounded-md'><div className='w-[50%] bg-white h-full rounded-md'></div></div>
       </div>

       <MusicController/>

    </div>
  )
}

export default Player