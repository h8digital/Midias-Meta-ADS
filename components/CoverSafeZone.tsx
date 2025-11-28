import React, { useState } from 'react';
import { Image, LayoutGrid, Smartphone, Maximize, Crop } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const CoverSafeZone: React.FC = () => {
  const [viewMode, setViewMode] = useState<'full' | 'grid'>('full');

  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <SectionHeader 
        icon={<Image className="w-6 h-6" />}
        title="Capa (Thumbnail)"
        subtitle="Novo Padrão: Grid 4:5"
        color="text-pink-500"
      />

      <div className="flex flex-col items-center">
        <div className="bg-blue-50 p-4 rounded-xl mb-6 text-sm text-blue-800 leading-relaxed w-full">
          <p className="mb-2 font-semibold">⚠️ Atualização do Grid (Perfil)</p>
          <ul className="list-disc pl-4 space-y-1 text-blue-700/80">
            <li>No <strong>Reels/Feed</strong>, a capa aparece inteira (9:16).</li>
            <li>No <strong>Novo Grid</strong>, a capa é exibida em <strong>4:5</strong> (mais alta, não mais quadrada).</li>
          </ul>
        </div>

        {/* Interactive Viewer Controls */}
        <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
           <button 
             onClick={() => setViewMode('full')}
             className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${viewMode === 'full' ? 'bg-white shadow text-pink-600' : 'text-gray-500 hover:text-gray-700'}`}
           >
             <Smartphone size={14} /> Full (9:16)
           </button>
           <button 
             onClick={() => setViewMode('grid')}
             className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${viewMode === 'grid' ? 'bg-white shadow text-pink-600' : 'text-gray-500 hover:text-gray-700'}`}
           >
             <LayoutGrid size={14} /> Grid (4:5)
           </button>
        </div>

        {/* Visualizer */}
        <div className="relative mb-6">
            <div className={`relative transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] border-4 border-gray-900 bg-gray-800 shadow-2xl overflow-hidden mx-auto w-48
            ${viewMode === 'full' ? 'h-[340px] rounded-[1.5rem]' : 'h-[240px] rounded-lg'}
            `}>
            {/* The Image Content simulating a Cover */}
            {/* Full Height is ~340px. Grid height (4:5 of width 48/192px) is ~240px. */}
            <div className={`absolute left-0 w-full h-[340px] bg-gradient-to-bl from-pink-500 via-purple-600 to-indigo-900 flex flex-col items-center justify-center transition-all duration-500
                ${viewMode === 'full' ? 'top-0' : 'top-1/2 -translate-y-1/2'} 
            `}>
                
                {/* Decorative Background Elements */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-black/20 rounded-full blur-2xl"></div>

                {/* Safe Zone Indicator (Always visible in full mode to show guide) */}
                <div className={`absolute top-1/2 left-0 right-0 -translate-y-1/2 aspect-[4/5] border-2 border-dashed border-yellow-300/60 bg-yellow-400/5 pointer-events-none flex flex-col items-center justify-between py-2
                    ${viewMode === 'grid' ? 'opacity-0' : 'opacity-100'}
                `}>
                    <span className="bg-yellow-400/90 text-yellow-900 text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">NOVO CORTE 4:5</span>
                </div>

                {/* Content that MUST be in the center */}
                <div className="relative z-10 text-center px-4 flex flex-col items-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full mb-3 border border-white/40 flex items-center justify-center shadow-lg">
                        <Image className="text-white" size={24} />
                    </div>
                    <div className="bg-white/90 text-purple-900 font-extrabold text-sm px-3 py-1 rounded shadow-sm mb-1 uppercase tracking-wider transform -rotate-1">
                        HEADLINE
                    </div>
                    <div className="bg-white/90 text-purple-900 font-extrabold text-lg px-3 py-1 rounded shadow-sm uppercase tracking-wider transform rotate-1">
                        PRINCIPAL
                    </div>
                </div>

                {/* Warning Labels outside safe zone */}
                <div className={`absolute top-4 left-0 right-0 text-center flex flex-col items-center gap-1
                    ${viewMode === 'grid' ? 'opacity-0' : 'opacity-100 transition-opacity duration-200'}
                `}>
                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">Invisível no Perfil</span>
                </div>
                
                <div className={`absolute bottom-4 left-0 right-0 text-center flex flex-col items-center gap-1
                    ${viewMode === 'grid' ? 'opacity-0' : 'opacity-100 transition-opacity duration-200'}
                `}>
                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">Invisível no Perfil</span>
                </div>

            </div>
            </div>
        </div>

        {/* Technical Specs Specs */}
        <div className="grid grid-cols-2 gap-3 w-full">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-1 text-gray-400">
                    <Maximize size={14} />
                    <span className="text-[10px] font-bold uppercase">Dimensão Total</span>
                </div>
                <p className="text-gray-800 font-bold text-sm">1080 x 1920 px</p>
                <p className="text-gray-500 text-[10px]">Proporção 9:16</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                <div className="flex items-center gap-2 mb-1 text-yellow-600">
                    <Crop size={14} />
                    <span className="text-[10px] font-bold uppercase">Novo Grid</span>
                </div>
                <p className="text-gray-800 font-bold text-sm">1080 x 1350 px</p>
                <p className="text-gray-500 text-[10px]">Centralizado (4:5)</p>
            </div>
        </div>
      </div>
    </section>
  );
};