import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{background: 'radial-gradient(ellipse at 20% 50%, #0f1a2e 0%, #080d1a 40%, #000000 100%)'}}>
      <div className="absolute inset-0 z-10" style={{background: 'radial-gradient(ellipse at 80% 20%, rgba(30,58,138,0.15) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(15,30,80,0.2) 0%, transparent 50%)'}} />
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}