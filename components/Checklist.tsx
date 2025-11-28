import React, { useState } from 'react';
import { CheckSquare, Square, ClipboardCheck } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { ChecklistItem } from '../types';

const INITIAL_ITEMS: ChecklistItem[] = [
  { id: 1, text: "Menos é Mais (Texto)", detail: "Evite 'textão' na imagem. Deixe o detalhe para a legenda." },
  { id: 2, text: "Vídeo sem Som", detail: "80% veem sem áudio. Legendas são obrigatórias!" },
  { id: 3, text: "Alta Resolução", detail: "Use PNG para artes e MP4 (H.264) para vídeos." },
  { id: 4, text: "A Capa Importa", detail: "Escolha uma thumbnail atraente para vídeos no feed." }
];

export const Checklist: React.FC = () => {
  // Load initial state, could be enhanced with localStorage
  const [items, setItems] = useState<{item: ChecklistItem, checked: boolean}[]>(
    INITIAL_ITEMS.map(i => ({ item: i, checked: false }))
  );
  
  const allChecked = items.every(i => i.checked);

  const toggleItem = (id: number) => {
    setItems(prev => prev.map(p => 
      p.item.id === id ? { ...p, checked: !p.checked } : p
    ));
  };

  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <SectionHeader 
        icon={<ClipboardCheck className="w-6 h-6" />}
        title="Checklist Final"
        subtitle="Antes de clicar em 'Publicar'"
        color="text-emerald-600"
      />

      <div className="space-y-3">
        {items.map(({ item, checked }) => (
          <div 
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`cursor-pointer flex items-start gap-3 p-3 rounded-xl transition-all border ${
              checked 
                ? 'bg-emerald-50 border-emerald-200' 
                : 'bg-gray-50 border-transparent hover:bg-gray-100'
            }`}
          >
            <div className={`mt-0.5 transition-colors ${checked ? 'text-emerald-500' : 'text-gray-400'}`}>
              {checked ? <CheckSquare size={20} /> : <Square size={20} />}
            </div>
            <div>
              <h4 className={`text-sm font-bold transition-all ${checked ? 'text-emerald-800 line-through decoration-emerald-500/50' : 'text-gray-800'}`}>
                {item.text}
              </h4>
              <p className={`text-xs mt-0.5 leading-relaxed ${checked ? 'text-emerald-600/70' : 'text-gray-500'}`}>
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {allChecked && (
        <div className="mt-6 text-center animate-bounce">
          <span className="inline-block bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            ✨ Tudo pronto para decolar! ✨
          </span>
        </div>
      )}
    </section>
  );
};