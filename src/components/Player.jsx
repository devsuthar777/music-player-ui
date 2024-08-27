import React, { useContext } from 'react'
import { MusicContext } from '../context/musicContext';
import MusicController from './MusicController';
import Seekbar from './Seekbar';
import SimmerUIPlayer from './SimmerUIPlayer';
const urlImgBase = process.env.REACT_APP_SONGS_COVER;

const Player = () => {
  const {currentSong,playerLoad,setPlayerLoad} = useContext(MusicContext);
  console.log("currsentsong",currentSong);
  return (
    
    <div className='md:w-[480px] w-full h-[692px] flex flex-col   gap-[24px]'>
    {
      playerLoad ? <SimmerUIPlayer/> : (<>
      <div className='w-full h-[68px] flex flex-col gap-[8px]'>
        <h1 className='text-[32px] leading-[36px] text-white font-semibold'>{currentSong.name}</h1>
        <p className='text-[16px] leading-[24px] text-white opacity-[60%]'>{currentSong.artist}</p>
      </div>
      <div className='w-full h-[510px] rounded-md'>
          <img className='w-[480px] h-[480px] rounded-md' src={urlImgBase+currentSong.cover}>
          </img>
          <Seekbar/>
       </div>
      </>)
    }
      
    {
      playerLoad ?   <></> : <MusicController/>
    }

    </div>
  )
}

export default Player