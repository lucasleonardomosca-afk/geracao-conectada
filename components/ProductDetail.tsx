/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Course } from '../types';
import PrintButton from './PrintButton';

interface ProductDetailProps {
  course: Course;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ course, onBack }) => {
  return (
    <div className="pt-32 min-h-screen bg-[#F8FAFC] animate-fade-in-up pb-20">
      <PrintButton />
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="no-print flex items-center gap-2 text-lg font-bold text-slate-500 hover:text-slate-900 transition-colors mb-8 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 w-fit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Voltar para Cursos
        </button>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto bg-slate-200">
                     <img 
                        src={course.imageUrl} 
                        alt={course.name} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex gap-2 mb-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold border border-green-200">{course.level}</span>
                        <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-bold border border-slate-200">Duração: {course.duration}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{course.name}</h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        {course.description}
                    </p>
                    <button className="no-print bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 px-8 rounded-xl shadow-md transition-colors w-full md:w-auto">
                        COMEÇAR ESTE CURSO
                    </button>
                </div>
            </div>

            <div className="p-8 md:p-12 border-t border-slate-100 bg-slate-50">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">O que você vai aprender:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.modules.map((mod, idx) => (
                        <li key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold flex-shrink-0 border border-green-200">
                                {idx + 1}
                            </div>
                            <span className="text-lg text-slate-800 font-medium">{mod}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
