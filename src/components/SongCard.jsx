import React, { useContext, useState } from 'react'
import { MusicContext } from '../context/musicContext';
const urlImgBase = process.env.REACT_APP_SONGS_COVER;

const SongCard = ({song,index}) => {
 
  const {songList,setCurrSongIndex,musicInstance} = useContext(MusicContext);
  const [audio,setAudio] = useState(new Audio(song.url));
  const [duration,setDuration] = useState("00:00");
  audio.addEventListener('loadedmetadata', function(){
    setDuration(parseInt(audio.duration/60) +  ":"+ parseInt(audio.duration%60));
  });

  function perticularSongClick(){
    if(musicInstance) 
      {
          musicInstance.pause()
          
      
      }
    setCurrSongIndex(index);
  }

  return (
    <div className='w-[432px] py-[16px] h-[80px] text-white flex justify-between group cursor-pointer' onClick={perticularSongClick}>
        <div className='flex gap-[16px]'>
            <img className='w-[48px] h-[48px] rounded-full group-hover:scale-110 group-hover:border transition-all duration-100' src={urlImgBase+song.cover} loading='lazy' ></img>
            <div className=''>
                <p className='text-[18px] leading-[24px] text-white group'>{song.name}</p>
                <p className='text-white text-[14px] opacity-[60%] group'>{song.artist}</p>
            </div>
        
        </div>
        
        <p className='text-[18px] opacity-[60%] group'>{ duration}</p>
        
    </div>
  )
}

export default SongCard