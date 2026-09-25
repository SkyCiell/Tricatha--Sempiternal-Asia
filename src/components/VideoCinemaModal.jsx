import React, { useEffect, useRef, useState } from "react";
import { X, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, ShieldCheck } from "lucide-react";

export default function VideoCinemaModal({ isOpen, onClose, videoSrc = "/hero-bg.mp4" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(60);
  const [volume, setVolume] = useState(0.85);

  // Keyboard accessibility: Escape to close, Space to play/pause
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === " " && e.target.tagName !== "BUTTON" && e.target.tagName !== "INPUT") {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isPlaying, onClose]);

  // Lock body scroll and pause background audio while modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      document.body.style.overflow = "";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
    if (!newMuted && volume === 0) {
      setVolume(0.5);
      videoRef.current.volume = 0.5;
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      if (val === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else if (isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const formatTime = (secs) => {
    if (isNaN(secs)) return "00:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="TSA Operational Showreel Cinema View"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#071731] border border-white/20 rounded-xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0A1F44] border-b border-white/10 text-white">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-200">
              TSA OPERATIONAL ARCHIVE REEL
            </span>
            <span className="text-white/30 hidden sm:inline">/</span>
            <span className="text-xs text-slate-400 font-sans hidden sm:inline">
              Verified Summit &amp; Plenary Execution
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#071731] border border-white/15 text-[10px] font-mono text-emerald-400 font-semibold">
              4K CINEMA PRO-RES
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] cursor-pointer"
              aria-label="Close cinema modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Screen Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
            className="w-full h-full object-contain cursor-pointer"
          />

          {/* Center Play Overlay Icon when Paused */}
          {!isPlaying && (
            <button
              type="button"
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#C8102E]/90 hover:bg-[#C8102E] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Play video"
            >
              <Play className="w-7 h-7 ml-1" />
            </button>
          )}

          {/* Lower HUD Tag */}
          <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2 px-3 py-1 rounded bg-[#071731]/80 backdrop-blur-xs border border-white/15 text-[11px] font-mono text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>IEIS &amp; EUROCHAM PLENARY DELEGATIONS</span>
          </div>
        </div>

        {/* Bottom Playback & Scrubber Controls */}
        <div className="px-4 sm:px-6 py-4 bg-[#0A1F44] border-t border-white/10 space-y-3">
          {/* Progress Scrubber */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-slate-300 tabular-nums w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min="0"
              max={duration || 60}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C8102E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
              aria-label="Video scrubber"
            />
            <span className="font-mono text-xs text-slate-400 tabular-nums w-10">
              {formatTime(duration)}
            </span>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={togglePlay}
                className="p-2 rounded bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center gap-1.5 font-mono text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                <span className="font-semibold">{isPlaying ? "PAUSE" : "PLAY"}</span>
              </button>

              <button
                type="button"
                onClick={handleRestart}
                className="p-2 rounded bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 font-mono text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                aria-label="Restart video from beginning"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">REPLAY</span>
              </button>

              <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="p-2 rounded bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-slate-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-emerald-400" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 sm:w-24 h-1 bg-white/20 rounded appearance-none cursor-pointer accent-[#C8102E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                  aria-label="Volume slider"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden md:inline font-mono text-[11px] text-slate-400">
                Press [Space] to Pause · [Esc] to Exit
              </span>
              <button
                type="button"
                onClick={handleFullscreen}
                className="p-2 rounded bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 font-mono text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                aria-label="Enter fullscreen mode"
              >
                <Maximize className="w-4 h-4" />
                <span className="hidden sm:inline">EXPAND</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
