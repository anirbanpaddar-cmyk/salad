import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  CheckCircle2,
  Clock,
  Film,
  RotateCcw,
  X,
  Radio,
} from 'lucide-react';
import bengaliWomanImg from '../assets/images/bengali_woman_salad_1790605574968.jpg';
import saladVideoSrc from '../assets/videos/salad_kitchen_prep.webm';
import { TextScanner } from '@/components/ui/animated-text-10';
import { Button } from '@/components/ui/button';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(68);

  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const chapters = [
    {
      seconds: 0,
      time: '0:00',
      title: 'সকালের তাজা ফসল',
      english: 'Farm Harvest',
      desc: 'স্থানীয় অরগানিক খামার থেকে ভোরের শিশিরভেজা লেটুস, পালং ও শসা সংগ্রহ।',
      icon: '🌱',
    },
    {
      seconds: 18,
      time: '0:18',
      title: 'ট্রিপল-ওয়াশ পিউরিফিকেশন',
      english: 'Triple-Wash Protocol',
      desc: 'ওজোনাইজড বিশুদ্ধ ঠাণ্ডা পানিতে ৩ স্তরের পরিষ্কারকরণ, যা নিশ্চিত করে ১০০% হাইজিন।',
      icon: '💧',
    },
    {
      seconds: 36,
      time: '0:36',
      title: 'শেফ ক্রাফট ও ড্রেসিং',
      english: 'Chef Dressing Craft',
      desc: 'কোল্ড-প্রেসড এক্সট্রা ভার্জিন অলিভ অয়েল, ভেষজ হার্বস ও লেমন সিডার ড্রেসিং।',
      icon: '🥗',
    },
    {
      seconds: 52,
      time: '0:52',
      title: 'থার্মাল কোল্ড ডেলিভারি',
      english: 'Eco Thermal Delivery',
      desc: 'ইনসুলেটেড বাক্সে ক্রাঞ্চি স্বাদ অক্ষুণ্ণ রেখে সরাসরি আপনার টেবিলে পৌঁছানো।',
      icon: '🚚',
    },
  ];

  // Format time (seconds to mm:ss)
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = Math.floor(secs % 60);
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  // Autoplay on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay policy fallback: keep muted and ready
        setIsPlaying(false);
      });
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      setCurrentTime(cur);

      // Determine active chapter based on timestamp
      for (let i = chapters.length - 1; i >= 0; i--) {
        if (cur >= chapters[i].seconds) {
          setActiveChapter(i);
          break;
        }
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = clickX / rect.width;
    const targetTime = pct * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleChapterClick = (index: number) => {
    setActiveChapter(index);
    const targetSec = chapters[index].seconds;
    if (videoRef.current) {
      videoRef.current.currentTime = targetSec;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#FFFDF5] via-[#F4F9EE] to-[#FFFDF5] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#4F8F3A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#EAF4E3]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with TextScanner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4E3] text-[#4F8F3A] border border-[#4F8F3A]/20">
            <Radio className="w-3.5 h-3.5 text-[#4F8F3A] animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">
              লাইভ কিচেন প্রিপারেশন • FARM TO TABLE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251C] tracking-tight font-bengali">
            <TextScanner
              text="চোখে দেখুন আমাদের সতেজতার গল্প"
              className="text-[#17251C] inline-block font-extrabold font-bengali"
              inkColor="#17251C"
              accentColor="#4F8F3A"
              duration={3.0}
            />
          </h2>

          <p className="text-base sm:text-lg text-[#17251C]/75 font-bengali max-w-2xl mx-auto leading-relaxed">
            খামার থেকে আপনার বাউল পর্যন্ত—কীভাবে প্রতিদিন সতেজ উপকরণ ও শেফের নিপুণ দক্ষতায় প্রস্তুত হয় প্রতিটি স্বাস্থ্যকর সালাদ।
          </p>
        </div>

        {/* Video Showcase Card — LIVE PLAYING directly in page */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-[#183D2B] group">
            {/* Aspect Ratio Container */}
            <div
              onClick={() => togglePlay()}
              className="relative aspect-[16/9] w-full overflow-hidden cursor-pointer select-none bg-black"
            >
              {/* HTML5 Native Video Tag */}
              <video
                ref={videoRef}
                src={saladVideoSrc}
                poster={bengaliWomanImg}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                className="w-full h-full object-cover object-center"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35 pointer-events-none" />

              {/* Top Badges */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4F8F3A] animate-ping" />
                  <span>ভিডিও চালু রয়েছে • 4K কিচেন স্টোরি</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                </div>
              </div>

              {/* Center Play/Pause Overlay indicator when paused or hover */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="relative group/play">
                    <span className="absolute -inset-4 rounded-full bg-[#4F8F3A]/40 animate-ping pointer-events-none" />
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#4F8F3A] text-white flex items-center justify-center shadow-2xl border-2 border-white/40">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white ml-1.5" />
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Interactive Video Controls & Information Strip */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                {/* Clickable Progress Scrubber */}
                <div
                  onClick={handleSeek}
                  className="w-full bg-white/25 hover:bg-white/40 h-2 rounded-full overflow-hidden cursor-pointer relative mb-4 transition-all"
                >
                  <div
                    className="bg-[#4F8F3A] h-full rounded-full transition-all duration-150 relative"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  >
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
                  {/* Left Info */}
                  <div>
                    <span className="text-[11px] font-bold text-[#EAF4E3] uppercase tracking-wider block">
                      CURRENT CHAPTER: {chapters[activeChapter].english}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold font-bengali text-white mt-0.5">
                      {chapters[activeChapter].title}
                    </h3>
                  </div>

                  {/* Right Control Buttons */}
                  <div className="flex items-center gap-2">
                    {/* Play/Pause Button */}
                    <button
                      onClick={(e) => togglePlay(e)}
                      className="p-2.5 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-white" />
                      ) : (
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      )}
                    </button>

                    {/* Sound Mute/Unmute */}
                    <button
                      onClick={toggleMute}
                      className="p-2.5 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 px-3"
                      title={isMuted ? 'সাউন্ড চালু করুন (Unmute)' : 'সাউন্ড বন্ধ করুন (Mute)'}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-4 h-4 text-amber-300" />
                          <span className="text-[11px] font-bengali hidden sm:inline text-amber-300 font-bold">
                            সাউন্ড অন করুন
                          </span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4 text-[#4F8F3A]" />
                          <span className="text-[11px] font-bengali hidden sm:inline text-white">
                            সাউন্ড চলছে
                          </span>
                        </>
                      )}
                    </button>

                    {/* Fullscreen Button */}
                    <button
                      onClick={handleFullscreen}
                      className="p-2.5 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      title="ফুলস্ক্রিন"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    {/* Large Screen Modal Trigger */}
                    <Button
                      onClick={openModal}
                      size="sm"
                      className="rounded-full bg-white text-[#183D2B] hover:bg-[#EAF4E3] font-bold text-xs shadow-md gap-1.5 cursor-pointer ml-1"
                    >
                      <Film className="w-3.5 h-3.5 text-[#183D2B]" />
                      <span>সিনেমা মোড</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Interactive Video Story Chapters — Click to jump video timestamp */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {chapters.map((chap, idx) => {
            const isSelected = activeChapter === idx;
            return (
              <div
                key={idx}
                onClick={() => handleChapterClick(idx)}
                className={`group p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#4F8F3A] ring-2 ring-[#4F8F3A]/30 shadow-lg -translate-y-1.5'
                    : 'bg-white/80 border-[#EAF4E3] hover:border-[#4F8F3A]/50 hover:bg-white hover:-translate-y-1 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{chap.icon}</span>
                    <span
                      className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full transition-colors ${
                        isSelected
                          ? 'bg-[#4F8F3A] text-white shadow-xs'
                          : 'bg-[#EAF4E3] text-[#4F8F3A]'
                      }`}
                    >
                      {chap.time}
                    </span>
                  </div>

                  <h4
                    className={`text-sm font-bold font-bengali transition-colors ${
                      isSelected ? 'text-[#4F8F3A]' : 'text-[#183D2B] group-hover:text-[#4F8F3A]'
                    }`}
                  >
                    {chap.title}
                  </h4>
                  <span className="text-[10px] text-[#17251C]/50 font-semibold block uppercase tracking-wider">
                    {chap.english}
                  </span>

                  <p className="text-xs text-[#17251C]/70 font-bengali mt-2 leading-relaxed">
                    {chap.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EAF4E3]/60 flex items-center justify-between text-[11px] font-bold text-[#4F8F3A]">
                  <span>{isSelected ? 'এখন চলছে ▶' : 'প্লে করুন'}</span>
                  <Play className={`w-3 h-3 ${isSelected ? 'fill-[#4F8F3A]' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Cinema Mode Video Player Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-[#17251C] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {/* Modal Top Bar */}
            <div className="p-4 px-6 bg-black/60 border-b border-white/10 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4F8F3A] animate-pulse" />
                <span className="font-bold text-sm sm:text-base font-bengali">
                  ফ্রেশ সালাদ কিচেন লাইভ স্টোরি — {chapters[activeChapter].title}
                </span>
              </div>
              <button
                onClick={closeModal}
                className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Canvas / Player Area */}
            <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={modalVideoRef}
                src={saladVideoSrc}
                autoPlay
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
