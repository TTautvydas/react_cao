import React, { useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef();

  function playButton() {
    videoRef.current.play();
  }

  function pauseButton() {
    videoRef.current.pause();
  }

  return (
    <div>
      <video ref={videoRef}>
        <source src="/videoTest.mp4" />
      </video>
      <button onClick={playButton}>Play</button>
      <button onClick={pauseButton}>Pause</button>
    </div>
  );
}
