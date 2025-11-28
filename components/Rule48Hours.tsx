import React from 'react';
import { Clock, Bot, AlertTriangle, Rocket } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const Rule48Hours: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <SectionHeader 
        icon={<Clock className="w-6 h-6" />}
        title="Regra de Ouro: 48h"
        subtitle="O sucesso começa 2 dias antes."
        color="text-amber-500"
      />
      
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
        <p className="text-amber-900 font-medium text-sm">
          ⚠️ <strong>O MANDAMENTO:</strong> Todo material deve estar na plataforma 48h antes do lançamento.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
            <Bot size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">O Robô Analisa</h3>
            <p className="text-sm text-gray-600 leading-snug">O Facebook revisa cada pixel. Pode levar minutos ou até 24h.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-red-100 p-2 rounded-lg text-red-600 mt-1">
            <AlertTriangle size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Margem de Erro</h3>
            <p className="text-sm text-gray-600 leading-snug">Se reprovar, temos tempo de corrigir sem atrasar o lançamento.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-green-100 p-2 rounded-lg text-green-600 mt-1">
            <Rocket size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Decolagem Imediata</h3>
            <p className="text-sm text-gray-600 leading-snug">O anúncio entra "agendado" e roda com força total na hora certa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};