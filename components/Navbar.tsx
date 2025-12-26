/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  onToggleFont: () => void;
  onToggleContrast: () => void;
  highContrast: boolean;
  fontSizeLevel: number;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, onToggleFont, onToggleContrast, highContrast, fontSizeLevel }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const getFontSizeLabel = () => {
      if (fontSizeLevel === 0) return 'A+';
      if (fontSizeLevel === 1) return 'A++';
      return 'A-';
  }

  // Define colors based on high contrast mode
  const bgColor = highContrast ? 'bg-black border-b-2 border-yellow-300' : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-green-50';
  const textColor = highContrast ? 'text-yellow-300' : 'text-slate-800';
  const buttonBorder = highContrast ? 'border-yellow-300' : 'border-slate-300';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 ${bgColor} ${textColor} organic-texture`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* ✅ NOVO LOGO: INFINITO TECNOLÓGICO */}
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, ''); 
            }}
            className="group flex items-center gap-4 perspective-logo"
            aria-label="Ir para o início"
          >
            {/* Logo Icon Container */}
            <div className="relative w-14 h-14 flex items-center justify-center rotate-3d hover-pulse transition-all duration-300">
                {/* 1. Anel Externo Giratório */}
                <div className={`absolute inset-0 rounded-full border-2 border-dashed animate-spin-slow ${highContrast ? 'border-yellow-300' : 'border-emerald-400'}`} style={{ opacity: 0.3 }}></div>
                
                {/* 2. Fundo Glow */}
                <div className={`absolute inset-2 rounded-full blur-md ${highContrast ? 'bg-yellow-900' : 'bg-emerald-100'} opacity-50`}></div>
                
                {/* 3. Ícone Infinito SVG */}
                <div className="relative z-10 w-10 h-10">
                     <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
                        <defs>
                            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#10B981" /> {/* Emerald */}
                                <stop offset="50%" stopColor="#06B6D4" /> {/* Cyan */}
                                <stop offset="100%" stopColor="#3B82F6" /> {/* Blue */}
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        
                        {/* Background Path (Static) */}
                        <path 
                            d="M30,30 C30,10 50,10 50,30 C50,50 70,50 70,30 C70,10 50,10 50,30 C50,50 30,50 30,30 Z" 
                            fill="none" 
                            stroke={highContrast ? "#333" : "#e2e8f0"} 
                            strokeWidth="6"
                            strokeLinecap="round"
                        />

                        {/* Animated Flow Path */}
                        <path 
                            d="M30,30 C30,10 50,10 50,30 C50,50 70,50 70,30 C70,10 50,10 50,30 C50,50 30,50 30,30 Z" 
                            fill="none" 
                            stroke={highContrast ? "#FFFF00" : "url(#techGradient)"} 
                            strokeWidth="3" 
                            strokeLinecap="round"
                            strokeDasharray="20 100"
                            filter={highContrast ? "" : "url(#glow)"}
                            className="animate-flow-particles"
                        />
                        
                        {/* Particles */}
                        <circle r="3" fill={highContrast ? "#FFFF00" : "#06B6D4"} className="animate-pulse">
                             <animateMotion dur="3s" repeatCount="indefinite" path="M30,30 C30,10 50,10 50,30 C50,50 70,50 70,30 C70,10 50,10 50,30 C50,50 30,50 30,30 Z" />
                        </circle>
                     </svg>
                </div>
            </div>
            
            {/* Texto do Logo */}
            <div className="flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-bold tracking-tight leading-none font-sans italic" style={{ textShadow: highContrast ? 'none' : '1px 1px 0px rgba(0,0,0,0.05)' }}>
                    {BRAND_NAME}
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                    <span className={`text-[0.7rem] uppercase tracking-[0.15em] font-bold ${highContrast ? 'text-yellow-200' : 'text-emerald-700'}`}>
                        TECNOLOGIA HUMANIZADA
                    </span>
                </div>
            </div>
          </a>
          
          {/* Center Links - Desktop */}
          <div className="hidden md:flex items-center gap-8 font-medium text-lg">
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-emerald-600 transition-colors relative group">
                Como Funciona
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#courses" onClick={(e) => handleLinkClick(e, 'courses')} className="hover:text-emerald-600 transition-colors relative group">
                Cursos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#community" onClick={(e) => handleLinkClick(e, 'community')} className="hover:text-emerald-600 transition-colors relative group">
                Comunidade
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
            </a>
          </div>

          {/* Right Actions: Accessibility */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-3">
                <button 
                    onClick={onToggleFont}
                    className={`w-12 h-12 rounded-full border ${buttonBorder} font-bold flex items-center justify-center hover:bg-gray-100 transition-colors ${highContrast ? 'hover:bg-yellow-900' : 'shadow-sm'}`}
                    aria-label="Aumentar Fonte"
                    title="Mudar tamanho da letra"
                >
                    {getFontSizeLabel()}
                </button>
                <button 
                    onClick={onToggleContrast}
                    className={`w-12 h-12 rounded-full border ${buttonBorder} font-bold flex items-center justify-center hover:scale-105 transition-transform ${highContrast ? 'bg-yellow-300 text-black' : 'bg-slate-800 text-white shadow-lg shadow-slate-300'}`}
                    aria-label="Alto Contraste"
                    title="Alto Contraste"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                </button>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`block md:hidden p-2 rounded-lg border-2 ${buttonBorder}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#F8FAFC] z-40 flex flex-col pt-32 px-6 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } ${highContrast ? 'bg-black' : ''}`}>
          <div className="flex flex-col space-y-8 text-2xl font-bold">
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="py-4 border-b border-gray-200">Como Funciona</a>
            <a href="#courses" onClick={(e) => handleLinkClick(e, 'courses')} className="py-4 border-b border-gray-200">Ver Cursos</a>
            <a href="#community" onClick={(e) => handleLinkClick(e, 'community')} className="py-4 border-b border-gray-200">Comunidade</a>
            <a href="#" onClick={(e) => handleLinkClick(e, 'partners')} className="py-4 border-b border-gray-200 text-green-700">Seja Parceiro</a>
            
            <div className="flex gap-4 pt-4">
                <button onClick={onToggleFont} className="flex-1 py-4 border-2 border-slate-800 rounded-xl text-center">
                    Aumentar Letra
                </button>
                <button onClick={onToggleContrast} className="flex-1 py-4 border-2 border-slate-800 rounded-xl text-center bg-slate-800 text-white">
                    Contraste
                </button>
            </div>
          </div>
      </div>
    </>
  );
};

export default Navbar;
