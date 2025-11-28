import React, { useState } from 'react';
import { DimensionCardProps } from '../types';
import { ChevronDown, ChevronUp, Lightbulb, Info } from 'lucide-react';

export const DimensionCard: React.FC<DimensionCardProps> = ({ 
  title, format, ratio, pixels, description, aspectClass, icon, highlight, reason, proTip 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = reason || proTip;

  return (
    <div className={`relative overflow-hidden rounded-xl border ${highlight ? 'border-blue-400 bg-blue-50/50' : 'border-gray-200 bg-white'} transition-all duration-300`}>
      {highlight && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase z-10">
          Favorito
        </div>
      )}
      
      <div className="p-4" onClick={() => hasDetails && setIsExpanded(!isExpanded)}>
        <div className="flex items-start gap-4">
          {/* Visual Aspect Ratio Representation */}
          <div className="flex-shrink-0 w-20 flex flex-col items-center gap-2">
             <div className={`w-full bg-gray-200 rounded-md border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-400 ${aspectClass}`}>
               {icon}
             </div>
             <span className="text-[10px] font-mono text-gray-500 bg-gray-100 px-1 rounded">{ratio}</span>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-gray-900">{title}</h3>
              {hasDetails && (
                 <button className="text-gray-400 hover:text-blue-600 transition-colors">
                   {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                 </button>
              )}
            </div>
            <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">
              {format} • {pixels}
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {description}
            </p>
            
            {hasDetails && !isExpanded && (
              <p className="mt-2 text-[10px] font-bold text-blue-500 flex items-center gap-1 animate-pulse">
                <Info size={12} />
                Toque para entender o porquê
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Details Section */}
      {hasDetails && isExpanded && (
        <div className="bg-white/80 border-t border-gray-100 p-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {reason && (
            <div>
              <h4 className="flex items-center gap-1 text-xs font-bold text-gray-800 mb-1">
                <Info size={12} className="text-blue-500" />
                Por que é o favorito?
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed pl-4 border-l-2 border-blue-200 ml-1">
                {reason}
              </p>
            </div>
          )}
          
          {proTip && (
            <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
              <h4 className="flex items-center gap-1 text-xs font-bold text-amber-800 mb-1">
                <Lightbulb size={12} className="text-amber-600" />
                Problema do corte 1:1?
              </h4>
              <p className="text-xs text-amber-900/80 leading-relaxed">
                {proTip}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};