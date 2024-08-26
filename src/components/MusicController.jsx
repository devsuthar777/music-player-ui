import React, { useContext, useEffect, useRef, useState } from 'react'

import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/RightArrow.png';
import RunIcon from '../assets/RunIcon.png';
import { PiSpeakerHighFill } from "react-icons/pi";
import { MusicContext } from '../context/musicContext';
import { FaCirclePlay } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";

const MusicController = () => { 
    const {currentSong,songList,setCurrSongIndex,currtSongIndex,isPlaying,setIsPlaying,musicInstance} = useContext(MusicContext);
    const audioPlayer = useRef(null);
    
    
    const pausPlayHandler = () => {
        if (musicInstance) {
          if (isPlaying) {
            musicInstance.pause();

          } else {
            musicInstance.play().catch((error)=> {
                console.log(error);
               
            });
          }
          setIsPlaying(!isPlaying);
        }
      };

    const leftHandler = () =>
    {   
        musicInstance.pause();
        setIsPlaying(false);
        setCurrSongIndex((index) => index ? index-1 : index);
        console.log("sdfsdf",currtSongIndex,currentSong);
        
    }

    const rightHandler = ()  => {
        musicInstance.pause();
        setIsPlaying(false);
        setCurrSongIndex((index) => index <  songList.length -1 ? index+1 : 0);
        console.log("sdfsdf",currtSongIndex,currentSong);
        

    }

  return (
    <div className='w-full h-[51px] flex justify-between'>
    
      <div className='w-[48px] h-[48px]'>
        <div className='w-full h-full rounded-full bg-white bg-opacity-15 gap-1 flex justify-center items-center'>
            <div className='w-[3px] h-[3px] bg-white rounded-full'></div>
            <div className='w-[3px] h-[3px] bg-white rounded-full'></div>
            <div className='w-[3px] h-[3px] bg-white rounded-full'></div>
        </div>
      </div>
      <div className='flex items-center justify-between w-[176px] '>
        <img className='w-[32px] h-[32px]' src={leftArrow} onClick={leftHandler}></img>
        {
            !isPlaying ?  <FaCirclePlay className='w-[48px] h-[48px] text-white'  onClick={pausPlayHandler}></FaCirclePlay>
                      :  <FaPauseCircle className='w-[48px] h-[48px] text-white'  onClick={pausPlayHandler}></FaPauseCircle>
        }
        
        <img className='w-[32px] h-[32px]' src={rightArrow} onClick={rightHandler}></img>
      </div>
      <div className='w-[48px] h-[48px] rounded-full bg-white bg-opacity-20 flex items-center justify-center'><PiSpeakerHighFill className='text-white w-[20px] h-[16px]'/></div>
    </div>
  )
}

export default MusicController