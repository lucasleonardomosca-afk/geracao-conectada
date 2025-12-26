/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Course } from '../types';

interface ProductCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ course, onClick }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-300 cursor-pointer h-full" onClick={() => onClick(course)}>
      <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
        <img 
          src={course.imageUrl} 
          alt={course.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
             e.currentTarget.src = 'https://via.placeholder.com/800x600/10B981/ffffff?text=Curso+Geracao+Conectada';
             e.currentTarget.onerror = null; // Prevent infinite loop
          }}
        />
        <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${
                course.level === 'Iniciante' ? 'bg-green-100 text-green-800' : 
                course.level === 'Intermediário' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
            }`}>
                {course.level}
            </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">{course.name}</h3>
        <p className="text-sm font-medium text-green-700 mb-4 uppercase tracking-wide">{course.tagline}</p>
        <p className="text-slate-600 mb-6 flex-1">{course.description}</p>
        
        <button className="w-full bg-slate-100 text-slate-800 font-bold py-4 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors text-lg">
            VER AULAS GRATUITAS
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
