import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar() {

    const [liked, setLiked] = useState(false)

    function handleLike(){
        setLiked(!liked)
    }

  return (
    <div className="videoSidebar">
      <div 
      className="videoSidebar__options"
      onClick={handleLike}
      >
        { liked ? <FavoriteIcon fontSize="medium"/> :         <FavoriteBorderIcon fontSize="medium" /> }

        <p> {liked ? 820 + 1 : 300} </p>
      </div>

      <div className="videoSidebar__options">
        <ChatIcon fontSize="medium" />
        <p>200 </p>
      </div>

      <div className="videoSidebar__options">
        <ShareIcon fontSize="medium" />
        <p>800 </p>
      </div>
    </div>
  );
}

export default VideoSidebar;
