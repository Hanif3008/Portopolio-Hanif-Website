import { memo, useRef, useState } from 'react';

const tracks = [
  {
    id: 0,
    title: "Sunset Bridge",
    artist: "Shoji Meguro",
    audio: "/sounds/sunsetbridge.mp3",
    image: "/images/profile-section.jpg"
  },
  {
    id: 1,
    title: "Beneath Mask",
    artist: "Shoji Meguro", 
    audio: "/sounds/beneaththemask.mp3",
    image: "/images/profile-section4.jpeg"
  }
];

const MusicPlayer = memo(() => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
    } else {
      if (!audio.src) {
        audio.src = tracks[currentTrack].audio;
      }
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    }
  };

  const handleEnded = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
      setCurrentTime(0);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(audio.duration);
    }
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolume = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  const changeTrack = (trackIndex) => {
    const audio = audioRef.current;
    if (!audio) return;
    const wasPlaying = isPlaying;
    if (wasPlaying) {
      audio.pause();
    }
    audio.src = tracks[trackIndex].audio;
    setCurrentTrack(trackIndex);
    setCurrentTime(0);
    if (wasPlaying) {
      setTimeout(() => {
        audio.play().catch(() => {});
      }, 100);
    }
  };

  const nextTrack = () => {
    const next = (currentTrack + 1) % tracks.length;
    changeTrack(next);
  };

  const prevTrack = () => {
    const prev = (currentTrack - 1 + tracks.length) % tracks.length;
    changeTrack(prev);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const preventDownload = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className="music-player">
      <div className="music-player-mini">
        <div className="music-player-mini-img">
          <img src={tracks[currentTrack].image} alt={tracks[currentTrack].title} decoding="async" onContextMenu={preventDownload} style={{ userSelect: 'none', pointerEvents: 'none' }}/>
        </div>
        <div className="music-player-mini-title">
          <div className="music-title">
            <h3>{tracks[currentTrack].title}</h3>
          </div>
          <div className="music-subtitle">
            <h4>{tracks[currentTrack].artist}</h4>
          </div>
        </div>
      </div>
      <div className="music-player-expand" onClick={() => setIsExpanded(!isExpanded)}>
        <ion-icon name={isExpanded ? "caret-up" : "caret-down"}></ion-icon>
      </div>
      <div className={`music-player-big ${isExpanded ? "show" : ""}`}>
        <div className="music-player-big-img">
          <img src={tracks[currentTrack].image} alt={tracks[currentTrack].title} decoding="async" onContextMenu={preventDownload} style={{ userSelect: 'none', pointerEvents: 'none' }}/>
        </div>
        <div className="track-selector">
          {tracks.map((track, index) => (
            <button key={track.id} className={`track-btn ${currentTrack === index ? 'active' : ''}`} onClick={() => changeTrack(index)}>
              {track.title}
            </button>
          ))}
        </div>
        <div className="music-info">
          <h3>{tracks[currentTrack].title}</h3>
          <p>{tracks[currentTrack].artist}</p>
        </div>
        <div className="progress-section">
          <span>{formatTime(currentTime)}</span>
          <input type="range" min="0" max={duration || 0} value={currentTime} onChange={handleSeek}/>
          <span>{formatTime(duration)}</span>
        </div>
        <div className="controls">
          <ion-icon name="play-skip-back" onClick={prevTrack}></ion-icon>
          <ion-icon name={isPlaying ? "pause-circle" : "play-circle"} onClick={togglePlay}></ion-icon>
          <ion-icon name="play-skip-forward" onClick={nextTrack}></ion-icon>
        </div>
        <div className="volume-control">
          <ion-icon name="volume-medium"></ion-icon>
          <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume}/>
          <span>{Math.round(volume * 100)}%</span>
        </div>
        <audio ref={audioRef} type="audio/mpeg" preload="none" onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} onLoadedMetadata={handleLoadedMetadata}/>
      </div>
      <style jsx>{`
        .music-player-big {
          opacity: 0;
          transform: translateY(-10px);
          transition: 0.4s ease;
          pointer-events: none;
        }
        .music-player-big.show {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .track-selector {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
          justify-content: center;
        }

        .track-btn {
          padding: 8px 16px;
          border: 1px solid #ccc;
          background: transparent;
          color: white;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 12px;
        }

        .track-btn.active {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .track-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .music-player-mini-img img,
        .music-player-big-img img {
          user-select: none;
          -webkit-user-drag: none;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
});

export default MusicPlayer;
