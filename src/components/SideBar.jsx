import React, { useContext, useState } from 'react'
import { MusicContext } from '../context/musicContext';
import { CiSearch } from "react-icons/ci";
import SongCard from './SongCard';
import SimmerUiSideBar from './SimmerUiSideBar';

const SideBar = ({loader}) => {
  const {songList} = useContext(MusicContext);
  const [isTopTrack,setIsTopTrack] = useState(false);
  const [searching,setSearching]= useState(false);
  const [searchKeyWord,setSearhKeyWord]= useState('');
  let debounceTimer =null;

  function searchHandler(event)
  {
    if(!searching) setSearching(true);

    if(debounceTimer==null)
    {
      debounceTimer = setTimeout(function(){
        setSearhKeyWord(event.target.value ?  event.target.value.toLowerCase() : ""); 
         clearInterval(debounceTimer);
         debounceTimer=null;
         setSearching(false)
      },500);
    }
    
  }
  
  return (
    <div className='w-full h-full'>
      <div className='flex w-[258px] h-[32px] gap-[40px] font-inter
      text-[24px] leading-[32px] font-semibold
      '><button className={`text-[#FFFFFF] ${isTopTrack ? 'opacity-50' : 'opacity-100' }`} onClick={() => setIsTopTrack(false)}>For You</button> <button className={`text-[#FFFFFF] ${isTopTrack ? 'opacity-100' : 'opacity-50' }`} onClick={() => setIsTopTrack(true)}>Top Tracks</button></div>
      <div className='w-[432px] flex bg-opacity-10 bg-white items-center rounded-lg  my-6'>
        <input placeholder='Search Song, Artist' className=' w-full py-[8px] px-[16px] text-white  bg-transparent outline-none  text-[18px]  leading-[28px]'
        onChange={searchHandler}
        >
        
        </input>
        <CiSearch className='w-[32px] h-[32px] bg-transparent text-white opacity-60 mr-1'/>
      </div>
      <div className='h-[720px]'>
        {
          !searching && !loader ? 
          (
            searchKeyWord=="" 
            ? 
            songList.map((song,index) => 
            !isTopTrack ? <SongCard song = {song} index={index}></SongCard> : (song.top_track ? <SongCard song = {song} index={index}></SongCard> : null )
            )
            :
            songList.filter((song) => song?.name.toLowerCase().includes(searchKeyWord) || song?.artist.toLowerCase().includes(searchKeyWord) ).map((song,index) => 
            !isTopTrack ? <SongCard song = {song} index={index} ></SongCard> : (song.top_track ? <SongCard song = {song} index={index}></SongCard> : null )
            )
          ) 
          :
          (<SimmerUiSideBar></SimmerUiSideBar>)
        }
      </div>
    </div>
  )
}

export default SideBar