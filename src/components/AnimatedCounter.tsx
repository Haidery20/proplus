import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  progress?: number; // Progress percentage for circular border (0-100)
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
  progress = 100,
  size = 'md',
  color = 'blue'
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'w-16 h-16 text-lg',
    md: 'w-20 h-20 text-xl',
    lg: 'w-24 h-24 text-2xl'
  };

  const colorClasses = {
    blue: 'stroke-blue-500',
    green: 'stroke-green-500',
    purple: 'stroke-purple-500',
    orange: 'stroke-orange-500',
    red: 'stroke-red-500',
    indigo: 'stroke-indigo-500'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = end * easeOutQuart;

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  const formatNumber = (num: number) => {
    return num.toFixed(decimals);
  };

  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div ref={counterRef} className="flex flex-col items-center">
      <div className={`relative ${sizeClasses[size]} mb-2`}>
        {/* Background circle */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-200"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            className={`${colorClasses[color]} transition-all duration-1000 ease-out`}
            style={{
              strokeDasharray,
              strokeDashoffset: isVisible ? strokeDashoffset : circumference,
            }}
          />
        </svg>
        {/* Counter text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-bold text-gray-900 ${sizeClasses[size].split(' ')[2]}`}>
            {prefix}{formatNumber(count)}{suffix}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;