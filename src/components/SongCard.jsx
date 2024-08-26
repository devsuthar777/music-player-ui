import React, { useState } from 'react'
const urlImgBase = process.env.REACT_APP_SONGS_COVER;

const SongCard = ({song}) => {
 
  const [audio,setAudio] = useState(new Audio(song.url));
  const [duration,setDuration] = useState("00:00");
  audio.addEventListener('loadedmetadata', function(){
    setDuration(parseInt(audio.duration/60) +  ":"+ parseInt(audio.duration%60));
  });

  return (
    <div className='w-[432px] py-[16px] h-[80px] text-white flex justify-between'>
        <div className='flex gap-[16px]'>
            <img className='w-[48px] h-[48px] rounded-full' src={urlImgBase+song.cover} loading='lazy' ></img>
            <div className=''>
                <p className='text-[18px] leading-[24px] text-white'>{song.name}</p>
                <p className='text-white text-[14px] opacity-[60%]'>{song.artist}</p>
            </div>
        
        </div>
        
        <p className='text-[18px] opacity-[60%]'>{ duration}</p>
        
    </div>
  )
}

export default SongCard