import { memo } from "react";

const BackgroundVideo = memo(function BackgroundVideo() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Geometric abstract video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-[0.07] mix-blend-screen scale-110"
      >
        <source
          src="https://cdn.pixabay.com/video/2020/10/28/53812-475059916_large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient overlay to fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-transparent to-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/60" />
    </div>
  );
});

export default BackgroundVideo;
