import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
import { MusicContext } from './context/musicContext';
import spotLogo from './assets/Vector.png';
import SideBar from './components/SideBar';
import Player from './components/Player';
const url = process.env.REACT_APP_SONGS_URL;
function App() {

  const {useMusic,currentSong} = useContext(MusicContext);

  const [loader,songList] = useMusic(url);

  console.log(songList);
  
  

  return (
     <div className={`w-full h-[895px] bg-gradient-to-r from-[${currentSong?.accent ? currentSong?.accent : '#331E00' }] to-[#000000] 
     flex justify-between relative
    `}>

    
      <div className='absolute top-[32px] left-[32px]'><img src={spotLogo}></img></div>
      <div className='absolute top-[40px] left-[280px]'>

          
           <SideBar loader={loader}/>
        
      </div>
      <div className='absolute top-[101px] left-[874px]'>
        {
          loader ? <div className='loader'></div> 
          : <Player loader={loader}/>
        }
      </div>
    </div>
    
  );
}

export default App;
