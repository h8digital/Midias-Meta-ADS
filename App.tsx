import { Smartphone, Layout, Monitor, Instagram } from 'lucide-react';
import { Rule48Hours } from './components/Rule48Hours';
import { DimensionCard } from './components/DimensionCard';
import { SafeZones } from './components/SafeZones';
import { CoverSafeZone } from './components/CoverSafeZone';
import { Checklist } from './components/Checklist';
import { SectionHeader } from './components/SectionHeader';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-12">
      {/* Mobile-first layout constraint: Limit max width on desktop to simulate mobile app */}
      <main className="md:max-w-md md:mx-auto min-h-screen bg-[#f8f9fa] shadow-2xl relative">
        
        {/* Header Hero */}
        <header className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white p-8 pt-12 rounded-b-[2.5rem] shadow-lg mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full blur-xl -ml-10 -mb-5"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-white/20">
              <Instagram size={12} />
              <span>Meta Ads Playbook</span>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight mb-2">
              Dominando <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">
                Criativos
              </span>
            </h1>
            <p className="text-blue-100 text-sm opacity-90 leading-relaxed max-w-xs">
              Guia rápido para evitar reprovações e maximizar performance.
            </p>
          </div>
        </header>

        <div className="px-5 space-y-2">
          
          {/* Section 1: 48h Rule */}
          <Rule48Hours />

          {/* Section 2: Dimensions */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
            <SectionHeader 
              icon={<Layout className="w-6 h-6" />}
              title="Dimensões Mágicas"
              subtitle="Ocupe o máximo de tela possível."
              color="text-pink-600"
            />
            
            <div className="space-y-4">
               {/* 4:5 Vertical - The Favorite */}
              <DimensionCard 
                title="Vertical (O Favorito)"
                format="Feed Mobile"
                ratio="4:5"
                pixels="1080 x 1350 px"
                description="Ocupa mais tela que o quadrado. Use sempre que puder no feed."
                aspectClass="aspect-[4/5] w-12"
                icon={<Smartphone size={18} />}
                highlight={true}
                reason="Dominância de Tela! O 4:5 é mais alto (1350px) que o quadrado (1080px). No celular, ele empurra o post de baixo para fora da tela, mantendo a atenção do usuário exclusivamente no seu anúncio por mais tempo."
                proTip="Se o sistema pedir para cortar para 1:1, é porque você selecionou posicionamentos que só aceitam quadrado (ex: Marketplace). No Gerenciador de Anúncios, edite os posicionamentos e carregue o 4:5 especificamente para Feeds do Facebook e Instagram."
              />

              {/* 1:1 Square */}
              <DimensionCard 
                title="Quadrado (Clássico)"
                format="Carrosséis"
                ratio="1:1"
                pixels="1080 x 1080 px"
                description="O clássico. Perfeito para Carrosséis e Feeds em geral."
                aspectClass="aspect-square w-12"
                icon={<div className="w-4 h-4 border-2 border-current rounded-sm"/>}
              />

              {/* 9:16 Full Screen */}
              <DimensionCard 
                title="Tela Cheia (Imersivo)"
                format="Stories & Reels"
                ratio="9:16"
                pixels="1080 x 1920 px"
                description="Atenção total! Prenda a atenção nos primeiros 3 segundos."
                aspectClass="aspect-[9/16] w-8"
                icon={<Smartphone size={18} />}
              />

              {/* 1.91:1 Horizontal */}
              <DimensionCard 
                title="Horizontal (Extras)"
                format="Desktop & Search"
                ratio="1.91:1"
                pixels="1200 x 628 px"
                description="Essencial para cobrir Audience Network e resultados de pesquisa."
                aspectClass="aspect-[1.91/1] w-16"
                icon={<Monitor size={18} />}
              />
            </div>
          </section>

          {/* Section 3: Safe Zones */}
          <SafeZones />
          
          {/* Section 3.5: Cover Safe Zone */}
          <CoverSafeZone />

          {/* Section 4: Checklist */}
          <Checklist />

          {/* Footer */}
          <footer className="text-center py-8 text-gray-400 text-xs">
            <p className="mb-2">Playbook Visual • Meta Ads</p>
            <div className="flex justify-center items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>Mobile First Design</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            </div>
          </footer>

        </div>
      </main>
    </div>
  );
}