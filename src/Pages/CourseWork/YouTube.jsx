import React, { useEffect, useRef } from "react";
import YouTubePlayer from "youtube-player";

const YouTubePlayerComponent = () => {
    const playerRef = useRef(null);

    useEffect(() => {
        // Replace 'YOUR_VIDEO_ID' with the actual YouTube video ID you want to play.
        const videoId = "8dPFP8HfVbg";

        // Initialize the YouTube player.
        const player = YouTubePlayer("player", {
            videoId: videoId,
            width: 640, // Set the player's width
            height: 360, // Set the player's height
        });

        // Optional: Add event listeners or perform other actions with the player.
        player.on("stateChange", (event) => {
            // Handle player state changes if needed.
        });

        // Cleanup when the component unmounts.
        return () => {
            player.destroy();
        };
    }, []);

    return <div id="player"></div>;
};

export default YouTubePlayerComponent;
