import { memo, useEffect, useState } from 'react';

const SnowEffect = memo(() => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = [];
    for (let i = 0; i < 50; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 10 + Math.random() * 20,
        animationDelay: Math.random() * 2,
        size: 5 + Math.random() * 10,
        opacity: 0.3 + Math.random() * 1.5,
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <>
      <div className="snow-container">
        {snowflakes.map((flake) => (
          <div 
            key={flake.id} 
            className="snowflake" 
            style={{ 
              left: `${flake.left}%`, 
              animationDuration: `${flake.animationDuration}s`, 
              animationDelay: `${flake.animationDelay}s`, 
              width: `${flake.size}px`, 
              height: `${flake.size}px`, 
              opacity: flake.opacity,
              backgroundImage: "url('/images/snow.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}
          />
        ))}
      </div>
      <style jsx>{`
        .snow-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }
        .snowflake {
          position: absolute;
          top: -50px;
          background: transparent;
          border-radius: 50%;
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes fall {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
          }
          25% {
            transform: translateX(50px) rotate(90deg);
          }
          50% {
            transform: translateX(-50px) rotate(180deg);
          }
          75% {
            transform: translateX(50px) rotate(270deg);
          }
          100% {
            transform: translateY(100vh) translateX(0) rotate(360deg);
            opacity: 0.3;
          }
        }
        .snowflake:nth-child(odd) {
          animation-name: fall-sway;
        }
        .snowflake:nth-child(3n) {
          animation-name: fall-swirl;
        }
        @keyframes fall-sway {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
          }
          33% {
            transform: translateX(30px) rotate(120deg);
          }
          66% {
            transform: translateX(-30px) rotate(240deg);
          }
          100% {
            transform: translateY(100vh) translateX(0) rotate(360deg);
            opacity: 0.3;
          }
        }
        @keyframes fall-swirl {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateX(40px) rotate(180deg) scale(0.8);
          }
          100% {
            transform: translateY(100vh) translateX(0) rotate(360deg) scale(1);
            opacity: 0.3;
          }
        }
      `}</style>
    </>
  );
});

export default SnowEffect;
