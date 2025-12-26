/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features'; // Used as "How It Works"
import Journal from './components/Journal'; // Used as "Playlists"
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout'; // Used as "Partners Form"
import FreeGuide from './components/FreeGuide'; // ✅ New Component
import PremiumService from './components/PremiumService'; // ✅ New Component
import { Course, ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [fontSizeLevel, setFontSizeLevel] = useState(0); // 0 = normal, 1 = large, 2 = extra large
  const [highContrast, setHighContrast] = useState(false);

  // Apply font size and contrast classes to body
  useEffect(() => {
    const root = document.documentElement;
    if (fontSizeLevel === 0) root.style.fontSize = '20px'; // Base size updated to 20px
    if (fontSizeLevel === 1) root.style.fontSize = '24px';
    if (fontSizeLevel === 2) root.style.fontSize = '28px';
    
    if (highContrast) {
        document.body.classList.add('text-high-contrast');
    } else {
        document.body.classList.remove('text-high-contrast');
    }
  }, [fontSizeLevel, highContrast]);

  const toggleFontSize = () => {
    setFontSizeLevel((prev) => (prev + 1) % 3);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === 'partners') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setView({ type: 'partners' });
        return;
    }

    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection(targetId), 0);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-green-200 selection:text-black ${highContrast ? 'bg-black text-yellow-300' : 'bg-tech-pattern text-[#1E293B]'}`}>
      <Navbar 
          onNavClick={handleNavClick} 
          onToggleFont={toggleFontSize}
          onToggleContrast={() => setHighContrast(!highContrast)}
          highContrast={highContrast}
          fontSizeLevel={fontSizeLevel}
      />
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero 
                onCtaClick={() => scrollToSection('courses')} 
                onSecondaryCtaClick={() => scrollToSection('free-guide')}
            />
            <FreeGuide /> {/* ✅ New Section */}
            <Features /> {/* "Como Funciona / Para Quem É" */}
            <PremiumService /> {/* ✅ New Section */}
            <ProductGrid onProductClick={(c) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'course', course: c });
            }} />
            <Journal /> {/* Spotify/Community */}
          </>
        )}

        {view.type === 'course' && (
          <ProductDetail 
            course={view.course} 
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('courses'), 50);
            }}
          />
        )}

        {view.type === 'partners' && (
            <Checkout 
                onBack={() => setView({ type: 'home' })}
            />
        )}
      </main>

      <Footer onLinkClick={handleNavClick} />
      
      <Assistant />
      
    </div>
  );
}

export default App;
