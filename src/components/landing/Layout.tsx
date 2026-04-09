import { ReactNode } from 'react'
import { ParticlesBackground } from "./particles-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-10">
        <ParticlesBackground />
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}