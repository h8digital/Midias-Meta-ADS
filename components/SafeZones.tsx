import React, { useState } from 'react';
import { Smartphone, Eye } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const SafeZones: React.FC = () => {
  const [showGuides, setShowGuides] = useState(true);

  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <SectionHeader 
        icon={<Smartphone className="w-6 h-6" />}
        title="Zonas de Segurança"
        subtitle="Para Stories & Reels (9:16)"
        color="text-purple-600"
      />

      <div className="flex flex-col items-center">
        <p className="text-sm text-center text-gray-600 mb-4 px-4">
          Imagine a tela dividida. Evite colocar conteúdo importante nas áreas vermelhas.
        </p>

        <button 
          onClick={() => setShowGuides(!showGuides)}
          className="mb-6 flex items-center gap-2 text-xs font-medium bg-gray-100 px-3 py-1.5 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
        >
          <Eye size={14} />
          {showGuides ? 'Ocultar Guias' : 'Mostrar Guias'}
        </button>

        {/* Phone Mockup */}
        <div className="relative w-64 h-[450px] bg-gray-900 rounded-[2rem] border-4 border-gray-800 shadow-xl overflow-hidden">
            {/* Screen Content */}
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 relative">
                
                {/* Mock UI Elements */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-0 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-white/30"></div>
                    <div className="w-20 h-3 rounded bg-white/30"></div>
                </div>
                <div className="absolute bottom-6 left-4 right-4 z-0 opacity-50">
                    <div className="w-3/4 h-3 rounded bg-white/30 mb-2"></div>
                    <div className="w-1/2 h-3 rounded bg-white/30 mb-4"></div>
                    <div className="w-full h-10 rounded-lg bg-white/30"></div>
                </div>

                 {/* Safe Zone Overlays */}
                 {showGuides && (
                   <>
                    {/* Top Danger Zone (14% approx 250px native) */}
                    <div className="absolute top-0 left-0 right-0 h-[14%] bg-red-500/40 border-b border-red-400/50 flex items-center justify-center z-10 backdrop-blur-[1px]">
                        <span className="text-[10px] text-white font-bold bg-red-600/80 px-2 py-0.5 rounded shadow-sm">PERIGO (Topo)</span>
                    </div>

                    {/* Middle Safe Zone */}
                    <div className="absolute top-[14%] bottom-[20%] left-0 right-[35px] left-[35px] border-x border-green-400/30 bg-green-400/10 z-10 flex flex-col items-center justify-center text-center">
                        <span className="text-xs text-white font-bold bg-green-600/80 px-2 py-1 rounded shadow-sm">ZONA SEGURA</span>
                        <span className="text-[10px] text-white/90 mt-1 max-w-[80%]">Sua mensagem vital aqui</span>
                    </div>

                    {/* Side Margins */}
                     <div className="absolute top-[14%] bottom-[20%] left-0 w-[35px] bg-red-500/20 border-r border-red-400/30 z-10"></div>
                     <div className="absolute top-[14%] bottom-[20%] right-0 w-[35px] bg-red-500/20 border-l border-red-400/30 z-10"></div>


                    {/* Bottom Danger Zone (20% approx 420px native) */}
                    <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-red-500/40 border-t border-red-400/50 flex items-center justify-center z-10 backdrop-blur-[1px]">
                        <span className="text-[10px] text-white font-bold bg-red-600/80 px-2 py-0.5 rounded shadow-sm">PERIGO (Base)</span>
                    </div>
                   </>
                 )}
            </div>
            
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 w-full">
            <div className="bg-red-50 p-3 rounded-lg text-xs">
                <strong className="block text-red-600 mb-1">🔴 Topo (14%)</strong>
                Evite logos. Área do perfil e sinal.
            </div>
            <div className="bg-red-50 p-3 rounded-lg text-xs">
                 <strong className="block text-red-600 mb-1">🔴 Base (20%)</strong>
                 Área da legenda e botão CTA.
            </div>
             <div className="bg-green-50 p-3 rounded-lg text-xs col-span-2">
                 <strong className="block text-green-600 mb-1">✅ Meio & Margens</strong>
                 Centralize a mensagem. Deixe 35px de respiro nas laterais.
            </div>
        </div>
      </div>
    </section>
  );
};