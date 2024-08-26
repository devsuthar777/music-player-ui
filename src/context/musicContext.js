import React, { createContext, useEffect, useState } from 'react';

const MusicContext = createContext();

const MusicProvider = ({ children }) => {
   
    const [loader,setLoader] = useState(true);
    const [songList,setSongList] = useState(null);
    const [currentSong,setCurrentSong] = useState(null);
    const [currtSongIndex,setCurrSongIndex]= useState(0);
    const [musicInstance,setMusicInstance]= useState(currentSong?.url ? new Audio(currentSong.url) : null);
    const [isPlaying,setIsPlaying] = useState(false);

    const useMusic = (url) => {
        useEffect(() => {
            fetch(url).then((response) => response.json())
        .then((data) => {setSongList(data.data); 
             console.log(data.data); 
             setCurrentSong(data.data[currtSongIndex] ); 
             setMusicInstance( new Audio(data.data[currtSongIndex].url))   
            })
        .catch((error) => { console.log("something wrong with fetching songs!",error)})
        .finally(()=> setLoader(false));

        
        },[])
    
        return [loader,songList];
    }

    useEffect(()=>{
        setCurrentSong(songList ? songList[currtSongIndex] : null);

    },[currtSongIndex])

    useEffect(() => {
        setMusicInstance(currentSong?.url ? new Audio(currentSong.url) : null);
    },[currentSong]);

    useEffect(()=> {
        if(musicInstance) 
            {
                musicInstance.play()
                .then(function(){setIsPlaying(true);})
                .catch((error)=>{
                    console.log(error)
                    setIsPlaying(false);
                }
            
            );
                

            }

        console.log("newMusicInstance",musicInstance);        

    },[musicInstance]);

    return (
        <MusicContext.Provider value={{ loader,songList, useMusic, currentSong,setCurrentSong,setCurrSongIndex,currtSongIndex,musicInstance,isPlaying,setIsPlaying}}>
            {children}
        </MusicContext.Provider>
    );
};

export { MusicContext, MusicProvider };
