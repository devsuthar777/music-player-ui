import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { MusicContext } from './context/musicContext';
import spotLogo from './assets/Vector.png';
import SideBar from './components/SideBar';
import Player from './components/Player';
const url = process.env.REACT_APP_SONGS_URL;
function App() {

  const {useMusic,currentSong} = useContext(MusicContext);

  const [loader,songList] = useMusic(url);

  const [menuShow,setMenuShow]= useState(true);

  console.log(songList);

  useEffect(()=>{

    if (window.innerWidth <= 768) {
      setMenuShow(false);
  } else {
    setMenuShow(true);
  }

   
   

  },[])
  

  return (
     <div className={`w-full h-full min-h-screen  
     flex xl:flex-row flex-col gap-0   lg:items-start  justify-around
    `} style={{backgroundImage: `linear-gradient(to right, ${currentSong?.accent ? currentSong?.accent : `#331E00`}, #000000)`}}>

    
      <div className=' mt-2  md:mt-5 md:ml-3 mx-auto'><img src={spotLogo}></img>
      </div>

      <div className='flex lg:flex-row md:flex-col flex-col-reverse xl:gap-32 md:gap-14 gap-0   mx-auto  '>
      
        <div className={`mt-10 md:mr-12 md:ml-0 ml-2 mr-2   ${menuShow ? `visible` : `hidden`}`}>
          <SideBar loader={loader}/>
          
        </div>
        <div className=' md:mt-[101px] mt-0 md:mr-12 md:ml-0 ml-2 mr-2 '>
          <Player loader={loader}/>
          
            <a to={"#sideBar"} className='bg-none inline-block w-full outline text-center text-white rounded-full py-3 opacity-65 mb-4 md:hidden visible' onClick={()  => setMenuShow(menu => !menu)}> Toggle Menu</a>
          
        </div>

      </div>

    </div>
    
  );
}

export default App;
