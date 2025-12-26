/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface CheckoutProps {
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#F8FAFC] animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-lg font-bold text-slate-500 hover:text-slate-900 transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Voltar para Início
        </button>

        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-slate-100">
            <div className="text-center mb-12">
                <span className="text-green-700 font-bold uppercase tracking-widest text-sm mb-2 block">Área Corporativa</span>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Empresas Parceiras</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Sua empresa quer apoiar a inclusão digital da terceira idade? Junte-se a bancos, farmácias e operadoras que já fazem parte da nossa rede.
                </p>
            </div>

            <form className="max-w-xl mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-slate-700 font-bold mb-2">Nome da Empresa</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-green-500 outline-none transition-colors" placeholder="Ex: Banco S.A." />
                </div>

                <div>
                    <label className="block text-slate-700 font-bold mb-2">Segmento</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-green-500 outline-none transition-colors">
                        <option>Selecione...</option>
                        <option>Banco / Financeiro</option>
                        <option>Saúde / Farmácia</option>
                        <option>Tecnologia</option>
                        <option>Varejo</option>
                        <option>Outro</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-slate-700 font-bold mb-2">Nome do Responsável</label>
                        <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-green-500 outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-slate-700 font-bold mb-2">Telefone / WhatsApp</label>
                        <input type="tel" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-green-500 outline-none transition-colors" />
                    </div>
                </div>

                <div>
                    <label className="block text-slate-700 font-bold mb-2">Como querem apoiar?</label>
                    <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-green-500 outline-none transition-colors" placeholder="Desejamos patrocinar cursos, oferecer descontos..."></textarea>
                </div>

                <button className="w-full bg-slate-900 text-white font-bold text-xl py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                    ENVIAR PROPOSTA
                </button>

                <p className="text-center text-sm text-slate-500 mt-4">
                    Responderemos em até 2 dias úteis.
                </p>
            </form>

            <div className="mt-16 pt-12 border-t border-slate-100">
                <p className="text-center text-slate-400 font-bold uppercase tracking-widest mb-8 text-sm">Próximas fases do projeto</p>
                <div className="flex flex-wrap justify-center gap-4 text-slate-500 font-medium">
                    <span className="px-4 py-2 bg-slate-50 rounded-lg">🏠 Casa Inteligente (Em Breve)</span>
                    <span className="px-4 py-2 bg-slate-50 rounded-lg">📍 Atendimento Presencial em SP (2026)</span>
                    <span className="px-4 py-2 bg-slate-50 rounded-lg">🆘 SOS Tecnológico 24h</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
