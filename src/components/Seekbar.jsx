import React, { useContext, useEffect, useState } from 'react'
import { MusicContext } from '../context/musicContext';

const Seekbar = () => {
    const {musicInstance,currtSongIndex} = useContext(MusicContext);
    const [barProgress,setBarProgress] = useState(0);


     useEffect(() => {
        
        const timer = setInterval(() => {
          setBarProgress(parseInt(musicInstance.currentTime / musicInstance.duration * 100));
          //console.log(musicInstance.currentTime);
        }, 1000);
    
     
        return () => clearInterval(timer);
      }, [musicInstance]);
    
  
    function seekBarChange(event)
    {
        console.log(event.target.value);
        setBarProgress(event.target.value);
        musicInstance.currentTime= (event.target.value/100)*musicInstance.duration;
    }

  return (
    <div className=' relative flex items-center flex-wrap justify-center'>
    <input
        type="range"
        min="0"
        max="100"
        className='w-full absolute top-4 left-0 z-10 cursor-pointer'
        value={barProgress}
        onChange={seekBarChange}

        
      />
        <div  className=' cursor-pointer mt-[16px] h-[6px] w-full bg-white bg-opacity-[20%] rounded-md absolute top-0 left-0   z-0 '>
             <div className={` bg-white h-full rounded-md`} style={{width :barProgress+"%"}}>
          </div>
    </div>
    </div>
        
      )
}

export default Seekbar