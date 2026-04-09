import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative bg-[#060612]">
      <div className="aurora-bg absolute inset-0 z-10" />
      <style>{`
        .aurora-bg::before,
        .aurora-bg::after,
        .aurora-bg span {
          content: '';
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          animation: aurora-move 12s ease-in-out infinite alternate;
        }
        .aurora-bg::before {
          width: 60vw; height: 60vw;
          background: radial-gradient(circle, #3b82f6, #6366f1);
          top: -20%; left: -10%;
          animation-duration: 14s;
        }
        .aurora-bg::after {
          width: 50vw; height: 50vw;
          background: radial-gradient(circle, #06b6d4, #3b82f6);
          bottom: -20%; right: -10%;
          animation-duration: 10s;
          animation-delay: -4s;
        }
        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.25;
          animation: aurora-move 16s ease-in-out infinite alternate;
          width: 45vw; height: 45vw;
          background: radial-gradient(circle, #8b5cf6, #ec4899);
          top: 30%; left: 35%;
          animation-delay: -7s;
        }
        @keyframes aurora-move {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(5vw, -4vh) scale(1.08); }
          66%  { transform: translate(-4vw, 5vh) scale(0.95); }
          100% { transform: translate(3vw, 2vh) scale(1.05); }
        }
      `}</style>
      <div className="aurora-blob" />
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}