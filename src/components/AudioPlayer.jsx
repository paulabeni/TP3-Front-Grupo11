// src/components/AudioPlayer.jsx
import { useState, useEffect, useRef, createContext, useContext } from 'react';
import './AudioPlayer.css';

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.volume = 0.7;
    }

    const audio = audioRef.current;
    const handleEnded = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleError = () => setIsPlaying(false);

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    audio.src = currentTrack.preview;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [currentTrack, isPlaying]);

  const playTrack = (track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      setCurrentTime(0);
    }
  };

  const stopTrack = () => {
    setIsPlaying(false);
    setCurrentTrack(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const seekTo = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <AudioContext.Provider value={{ currentTrack, isPlaying, currentTime, duration, playTrack, stopTrack, seekTo }}>
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => useContext(AudioContext);

// Card simplificada (reutiliza estilos de MediaPages.css)
export function MusicaCardWithPlayer({ song }) {
  const { currentTrack, isPlaying, playTrack } = useAudio();
  const isCurrentTrack = currentTrack?.id === song.trackId;
  const isThisPlaying = isCurrentTrack && isPlaying;

  return (
    <article className={`card-media fade-in ${isCurrentTrack ? 'playing' : ''}`}>
      <div className="card-media-image">
        <img
          src={song.artworkUrl100?.replace('100x100', '600x600') || song.artworkUrl100}
          alt={song.trackName}
          loading="lazy"
        />
      </div>

      <div className="media-info">
        <h3>{song.trackName}</h3>
        <p><strong>Artista:</strong> {song.artistName}</p>
        <p><strong>Álbum:</strong> {song.collectionName}</p>
        <p><strong>Género:</strong> {song.primaryGenreName}</p>

        <button
          onClick={() => playTrack({
            id: song.trackId,
            title: song.trackName,
            artist: song.artistName,
            preview: song.previewUrl,
            cover: song.artworkUrl100?.replace('100x100', '600x600')
          })}
          className={`btn-preview ${isThisPlaying ? 'playing' : ''}`}
        >
          {isThisPlaying ? '⏸️ Pausar' : '▶️ Preview 30s'}
        </button>

        <a href={song.trackViewUrl} target="_blank" rel="noopener noreferrer" className="btn-itunes">
          🍎 Ver en iTunes
        </a>
      </div>
    </article>
  );
}

// Player global simplificado
export function GlobalMusicPlayer() {
  const { currentTrack, isPlaying, currentTime, duration, playTrack, stopTrack, seekTo } = useAudio();

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentTrack) return null;

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="global-music-player">
      <div className="player-content">
        <img
          src={currentTrack.cover || '/img/placeholder-artist.webp'}
          alt={currentTrack.title}
          className={`player-cover ${isPlaying ? 'spinning' : ''}`}
        />

        <div className="player-info">
          <h4 className="player-title">{currentTrack.title}</h4>
          <p className="player-artist">{currentTrack.artist}</p>

          <div className="progress-container">
            <span className="progress-time">{formatTime(currentTime)}</span>
            <div
              className="progress-bar"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                seekTo(percent * duration);
              }}
            >
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <span className="progress-time">{formatTime(duration)}</span>
          </div>
        </div>

        <div className="player-controls">
          <button onClick={() => playTrack(currentTrack)} className="player-btn">
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button onClick={stopTrack} className="player-btn">⏹️</button>
        </div>
      </div>

      <div className="player-footer">
        🎵 Preview de 30s • Powered by iTunes API
      </div>
    </div>
  );
}