import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Nadir Labs",
  description: "Deep-tech space engineering focused on lunar industrial economy.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
        <style>{`
          a { cursor: none; text-decoration: none; color: rgba(255,255,255,0.6); transition: color 0.3s; }
          a:hover { color: #ffffff; }
          button { cursor: none !important; }
          input, textarea, select { cursor: none !important; }
        `}</style>
      </head>
      <body style={{ 
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", 
        margin: 0, 
        padding: 0, 
        background: "#0a0a0a", 
        color: "white",
        cursor: "none"
      }}>
        {/* Custom Moon Cursor */}
        <div className="cursor" style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, #f5f5dc 0%, #d4d4aa 50%, #a8a87a 100%)",
          boxShadow: "0 0 20px rgba(245, 245, 220, 0.5), 0 0 40px rgba(245, 245, 220, 0.2)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate3d(0,0,0)",
          opacity: 0,
          transition: "opacity 0.3s ease"
        }}>
          <div style={{
            position: "absolute",
            top: "25%",
            left: "30%",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "rgba(100,100,70,0.4)",
            boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.3)"
          }} />
          <div style={{
            position: "absolute",
            top: "55%",
            left: "60%",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "rgba(100,100,70,0.3)",
            boxShadow: "inset 1px 1px 1px rgba(0,0,0,0.3)"
          }} />
        </div>

        {/* Rocket Cursor */}
        <div className="cursor-rocket" style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate3d(0,0,0) rotate(-45deg)",
          opacity: 0,
          transition: "opacity 0.2s ease"
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L8 10H4L8 12L6 20L12 16L18 20L16 12L20 10H16L12 2Z" fill="#ffffff" stroke="#ffffff" strokeWidth="1"/>
            <circle cx="12" cy="14" r="3" fill="#ff6b35"/>
          </svg>
        </div>

        {/* Cursor glow trail */}
        <div className="cursor-glow" style={{
          position: "fixed",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,250,220,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate3d(0,0,0)",
          opacity: 0,
          transition: "opacity 0.3s ease"
        }} />

        <header style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          padding: '20px 40px', 
          borderBottom: '1px solid rgba(255,255,255,0.08)', 
          background: 'rgba(10,10,10,0.8)',
          backdropFilter: 'blur(10px)',
          zIndex: 100
        }}>
          <nav style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <Link href="/" style={{ 
              fontSize: '1.3rem', 
              fontWeight: '600',
              color: '#ffffff', 
              textDecoration: 'none',
              letterSpacing: '-0.5px',
              fontFamily: "'Playfair Display', serif"
            }}>Nadir Labs</Link>
            <div style={{ display: 'flex', gap: '35px' }}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/invest">Invest</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>
        <main style={{ paddingTop: '80px' }}>{children}</main>
        <footer style={{ 
          padding: '40px', 
          borderTop: '1px solid rgba(255,255,255,0.08)', 
          textAlign: 'center',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.85rem'
        }}>
          © 2026 Nadir Labs. All rights reserved.
        </footer>
        
        <script dangerouslySetInnerHTML={{__html: `
          document.addEventListener('DOMContentLoaded', function() {
            const cursor = document.querySelector('.cursor');
            const cursorGlow = document.querySelector('.cursor-glow');
            const cursorRocket = document.querySelector('.cursor-rocket');
            let isRocketMode = false;
            
            document.body.addEventListener('mouseenter', function() {
              if(cursor) cursor.style.opacity = '1';
              if(cursorGlow) cursorGlow.style.opacity = '1';
            });
            
            document.body.addEventListener('mouseleave', function() {
              if(cursor) cursor.style.opacity = '0';
              if(cursorGlow) cursorGlow.style.opacity = '0';
              if(cursorRocket) cursorRocket.style.opacity = '0';
            });
            
            document.addEventListener('mousemove', function(e) {
              if(cursor && !isRocketMode) {
                cursor.style.left = (e.clientX - 20) + 'px';
                cursor.style.top = (e.clientY - 20) + 'px';
              }
              if(cursorGlow && !isRocketMode) {
                cursorGlow.style.left = (e.clientX - 40) + 'px';
                cursorGlow.style.top = (e.clientY - 40) + 'px';
              }
              if(cursorRocket && isRocketMode) {
                cursorRocket.style.left = (e.clientX - 20) + 'px';
                cursorRocket.style.top = (e.clientY - 20) + 'px';
              }
            });
            
            // Rocket cursor on interactive elements
            const interactiveElements = document.querySelectorAll('a, button, input[type="submit"], .job-card, .value-card, .team-member');
            
            interactiveElements.forEach(function(el) {
              el.addEventListener('mouseenter', function() {
                isRocketMode = true;
                if(cursor) cursor.style.opacity = '0';
                if(cursorGlow) cursorGlow.style.opacity = '0';
                if(cursorRocket) cursorRocket.style.opacity = '1';
              });
              
              el.addEventListener('mouseleave', function() {
                isRocketMode = false;
                if(cursor) cursor.style.opacity = '1';
                if(cursorGlow) cursorGlow.style.opacity = '1';
                if(cursorRocket) cursorRocket.style.opacity = '0';
              });
            });
          });
        `}} />
      </body>
    </html>
  );
}
