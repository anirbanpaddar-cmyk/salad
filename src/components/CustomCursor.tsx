import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for fluid trailing cursor effect
  const cursorX = useSpring(-100, { stiffness: 450, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 450, damping: 28 });

  const dotX = useSpring(-100, { stiffness: 1200, damping: 40 });
  const dotY = useSpring(-100, { stiffness: 1200, damping: 40 });

  useEffect(() => {
    // Only show custom cursor on fine pointer devices (desktop/laptops with mouse)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Check if hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactiveEl = target.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer');
      setIsHovered(!!interactiveEl);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, cursorX, cursorY, dotX, dotY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Outer ambient aura ring with smooth spring damping */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.75 : isHovered ? 1.7 : 1,
          borderColor: isHovered ? '#183D2B' : '#4F8F3A',
          backgroundColor: isHovered ? 'rgba(79, 143, 58, 0.15)' : 'rgba(79, 143, 58, 0.05)',
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="fixed w-9 h-9 rounded-full border-2 border-[#4F8F3A] pointer-events-none backdrop-blur-[0.5px]"
      />

      {/* Center sharp leaf-green pointer dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 1.5 : isHovered ? 0.4 : 1,
          backgroundColor: isHovered ? '#183D2B' : '#4F8F3A',
        }}
        transition={{ duration: 0.12 }}
        className="fixed w-2 h-2 rounded-full pointer-events-none shadow-sm"
      />
    </div>
  );
};
