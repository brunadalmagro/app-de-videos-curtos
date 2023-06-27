import React, { useEffect, useState } from "react";
import "./App.css";
import Videos from "./Pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  const [video, setVideos] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, "videos")
    const videosSnapshot = await getDocs(videosCollection)
    
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        <Videos
          likes={9697}
          messages={374}
          shares={989}
          name="Beautiful_places"
          description="Japan in winter"
          music="Musica épica"
          url="https://cdn.pixabay.com/vimeo/811140145/casa-155837.mp4?width=360&hash=58d58b7d9df782ac9634e53f0745b6ca64288e40"
        />
        <Videos
          likes={127}
          messages={74}
          shares={80}
          name="Engyn_akiurt"
          description="Happy to share my art!"
          music="Original song"
          url="https://cdn.pixabay.com/vimeo/750216590/garota-131155.mp4?width=360&hash=51dbacaa27eee551b2e84ac4b06fb67f4a086ed7"
        />
        <Videos
          likes={940}
          messages={474}
          shares={200}
          name="Sweet_poopies1"
          description="It`s so cuuut!"
          url="https://cdn.pixabay.com/vimeo/772291290/cachorro-139433.mp4?width=720&hash=ab870e9916926227b70db106e5df96957b6f05b1"
        />
      </div>
    </div>
  );
}

export default App;
