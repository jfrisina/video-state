import { useState, useRef } from "react";

// Add a ref to the video element, and call its play() and pause() methods within the button's handleClick() function.

// Afterwards, find a way to keep the isPlaying state in sync with the video's state even if the user right-clicks the video and plays it using the built-in browser controls. To do so, use setIsPlaying() with the onPlay and onPause video events.



export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) videoRef.current.play()
      else videoRef.current.pause();
  }


  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video 
        ref={videoRef} 
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        width="75%">
        <source src="waves.mp4" type="video/mp4" />
      </video>
    </>
  );
}
