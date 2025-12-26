/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const FreeGuide: React.FC = () => {
  return (
    <section id="free-guide" className="py-20 bg-blue-50 border-t border-blue-100 no-print">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
           <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-blue-200 uppercase tracking-widest">
               100% GRATUITO
           </div>
           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
               Caderninho Digital do Vovô: Guia Fácil do Celular
           </h2>
           <p className="text-xl text-slate-700 mb-8">
               Baixe agora nosso material exclusivo com os primeiros passos no smartphone, dicas de segurança contra golpes e tutoriais simples para o dia a dia. Tudo em letras grandes!
           </p>
           <ul className="space-y-4 mb-8">
               <li className="flex items-center gap-3 text-lg font-medium text-slate-800">
                   <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                   Como aumentar a letra do celular
               </li>
               <li className="flex items-center gap-3 text-lg font-medium text-slate-800">
                   <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                   Lista de golpes mais comuns
               </li>
               <li className="flex items-center gap-3 text-lg font-medium text-slate-800">
                   <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                   Dicionário de palavras da internet
               </li>
           </ul>
        </div>
        
        <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-100 w-full">
            <h3 className="text-2xl font-bold text-center mb-6 text-slate-900">Receba no seu e-mail ou WhatsApp</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Material enviado com sucesso!'); }}>
                <div>
                    <label className="block text-slate-700 font-bold mb-2">Seu Nome Completo</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-blue-500 outline-none" placeholder="Digite seu nome aqui" />
                </div>
                <div>
                    <label className="block text-slate-700 font-bold mb-2">Seu E-mail ou Celular</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-blue-500 outline-none" placeholder="Ex: maria@email.com" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl py-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    BAIXAR GUIA GRÁTIS
                </button>
                <p className="text-center text-sm text-slate-500 mt-4">
                    Fique tranquilo, não enviamos spam. Seus dados estão seguros.
                </p>
            </form>
        </div>
      </div>
    </section>
  );
};

export default FreeGuide;
