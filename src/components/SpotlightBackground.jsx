import { useState, useEffect, useCallback } from "react";

export default function SpotlightBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <>
      {/* Main spotlight that follows cursor */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(75, 46, 131, 0.12), transparent 40%)`,
        }}
      />

      {/* Smaller, brighter inner spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(123, 79, 212, 0.08), transparent 40%)`,
        }}
      />

      {/* Static ambient glow - top left */}
      <div className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] z-0 opacity-30">
        <div className="w-full h-full bg-husky-purple/20 rounded-full blur-[150px]" />
      </div>

      {/* Static ambient glow - bottom right */}
      <div className="pointer-events-none fixed bottom-0 right-0 w-[500px] h-[500px] z-0 opacity-20">
        <div className="w-full h-full bg-husky-purple-light/15 rounded-full blur-[120px]" />
      </div>
    </>
  );
}
