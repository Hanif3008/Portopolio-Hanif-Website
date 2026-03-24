import { useEffect, useRef, useState, memo } from "react";
import SnowEffect from "./SnowEffect";
import MusicPlayer from "./MusicPlayer";
import HeroDateTime from "./HeroDateTime";
import WalkingAnimation from "./WalkingAnimation";

const MainHero = memo(() => {
  const totalVideos = 3;
  const switchIntervalMs = 8000;
  const fadeDurationMs = 1600;

  const [frontVideo, setFrontVideo] = useState(1);
  const [backVideo, setBackVideo] = useState(2);
  const [isFading, setIsFading] = useState(false);
  const [isInitialFade, setIsInitialFade] = useState(true);
  const backRef = useRef(null);
  const frontVideoRef = useRef(1);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsInitialFade(false), 1500);
    return () => clearTimeout(fadeTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (frontVideoRef.current % totalVideos) + 1;
      setIsFading(true);
      setBackVideo(next);

      timeoutRef.current = setTimeout(() => {
        frontVideoRef.current = next;
        setFrontVideo(next);
        setBackVideo((next % totalVideos) + 1);
        setIsFading(false);
      }, fadeDurationMs);
    }, switchIntervalMs);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const el = backRef.current;
    if (!el) return;
    el.load();
    el.play().catch(() => {});
  }, [backVideo]);

  return (
    <>
      <SnowEffect />
      <main className="hero-section">
        <MusicPlayer />

        <div className="hero-name">
          <div className={`svg-mask ${isInitialFade ? "initial-fade" : ""}`}>
            <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <mask id="text-mask" x="0" y="0" width="100%" height="100%">
                  <rect width="100%" height="100%" fill="black" />
                  <text className="hanif" x="50%" y="65%" textAnchor="middle" fill="white" fontSize="220" fontFamily="var(--font-menu)" fontWeight="900" letterSpacing="5" >
                    HANIF
                  </text>
                </mask>
              </defs>
              <foreignObject x="0" y="0" width="100%" height="100%" mask="url(#text-mask)">
                <div className={`video-wrapper ${isFading ? "fade" : ""}`}>
                  <video src={`/videos/video${frontVideo}.mp4`} autoPlay loop muted playsInline preload="metadata" className="video front" />
                  <video ref={backRef} src={`/videos/video${backVideo}.mp4`} autoPlay loop muted playsInline preload="metadata" className="video back" />
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>

        <HeroDateTime />

        <div className="hero-light"></div>
        <div className="hero-bg"></div>

        <WalkingAnimation />
      </main>
    </>
  );
});

export default MainHero;
