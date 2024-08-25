import React, { createContext, useEffect, useState } from 'react';

const MusicContext = createContext();

const MusicProvider = ({ children }) => {
   
    const [loader,setLoader] = useState(true);
    const [songList,setSongList] = useState(null);
    const [currentSong,setCurrentSong] = useState(null);

    const useMusic = (url) => {
        useEffect(() => {
            fetch(url).then((response) => response.json())
        .then((data) => {setSongList(data.data);console.log(data.data); setCurrentSong(data.data[0] );})
        .catch((error) => { console.log("something wrong with fetching songs!",error)})
        .finally(()=> setLoader(false));

        
        },[])
    
        return [loader,songList];
    }

    return (
        <MusicContext.Provider value={{ loader,songList, useMusic,currentSong}}>
            {children}
        </MusicContext.Provider>
    );
};

export { MusicContext, MusicProvider };
