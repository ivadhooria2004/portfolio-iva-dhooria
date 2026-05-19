"use client";

import { memo } from "react";

const BackgroundVideo = memo(function BackgroundVideo() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2020/10/28/53812-475059916_large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark purple overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(107, 79, 160, 0.6)' }}
      />
    </div>
  );
});

export default BackgroundVideo;
