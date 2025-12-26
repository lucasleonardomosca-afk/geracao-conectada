/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface HeroProps {
    onCtaClick: () => void;
    onSecondaryCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onSecondaryCtaClick }) => {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden bg-transparent">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 animate-fade-in-up z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full font-bold text-sm mb-6 border border-emerald-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Sua idade é sua experiência. Sua tecnologia, nossa missão.
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-slate-900 tracking-tight font-serif">
            Digital sem Complicação.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-lime-600">Vida com Conexão.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-800 leading-relaxed mb-10 max-w-lg font-medium organic-texture">
            Acompanhamento passo a passo para idosos que querem usar WhatsApp, banco, aplicativos e serviços online com segurança e tranquilidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold py-5 px-10 rounded-xl shadow-[0_10px_20px_-5px_rgba(16,185,129,0.4)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Quero aprender do zero
            </button>
            <button 
              onClick={onSecondaryCtaClick}
              className="bg-white border-2 border-emerald-600 text-emerald-700 text-xl font-bold py-5 px-10 rounded-xl hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2"
            >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
               </svg>
               Ver material gratuito
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 relative">
            <div className="bg-yellow-100 absolute -top-4 -right-4 w-full h-full rounded-3xl z-0 opacity-60"></div>
            <img 
                src="https://images.unsplash.com/photo-1616059639535-6497f14b62d3?auto=format&fit=crop&q=80&w=1000" 
                alt="Idoso sorrindo com confiança e alegria usando um smartphone confortavelmente em sua poltrona" 
                className="relative z-10 w-full rounded-3xl shadow-2xl border-4 border-white object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500"
            />
            {/* Trust Badge */}
            <div className="absolute -bottom-8 -left-4 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-slate-100 organic-texture">
                <div className="flex -space-x-4 mb-3">
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100" alt="Aluna" />
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=100&h=100" alt="Aluno" />
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=100&h=100" alt="Aluno" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                           <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    </div>
                </div>
                <p className="font-bold text-slate-800">Aprenda no seu ritmo, sem pressa.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
