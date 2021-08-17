import React from "react";
import YouTube from "react-youtube";
import Vimeo from "@u-wave/react-vimeo";
import "./Video.css"

const Video = ({url}) => {
  let id = null;

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  // const src = "https://www.youtube.com/watch?v=dOUj7zzd_98";
  // const src = "https://www.youtube.com/watch?v=GgFIjQzfWjA";
  const src = url;


  if (src.startsWith("https://www.youtube.com/watch")) {
    id = new URL(src).searchParams.get("v");
  } else if (src.startsWith("https://www.youtube.com/embed/")) {
    id = new URL(src).pathname.slice(7);
  } else if (src.startsWith("https://youtu.be/")) {
    id = new URL(src).pathname;
  }

  if (src.startsWith("https://vimeo.com/")) {
    id = new URL(src).pathname.slice(1);
  }

  return (
    <>
      <div className="video-container shadow" style={{backgroundColor: "black"}}> 
        {(src.startsWith("https://www.youtube") ||
          src.startsWith("https://youtu.be")) && (
          <YouTube
            height="100%"
            width="100%"
            videoId={id}
            controls="1"
            allow="fullscreen"
            opts={{
              playerVars: {
                autoplay: 1,
              },
            }}
            onReady={_onReady}

          />
        )}
        {src.includes("vimeo") && (
          <Vimeo
            height="100%"
            width="100%"
            video={id}
            autoplay
          />
        )}
      </div>
    </>
  );
};

export default Video;
