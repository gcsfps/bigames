import React, { useMemo, useState } from 'react';
import { ShoppingCart, Phone, MapPin, Gamepad2, Star, Search, Menu, ChevronDown, ChevronRight } from 'lucide-react';

type Item = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
};

const currency = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function HomePageNovaEra() {
  const [activeMenu, setActiveMenu] = useState<'playstation'|'xbox'|'nintendo'|'jogos'|'retro'|'informatica'|null>(null);
  const [selection, setSelection] = useState<{category: 'consoles'|'jogos'|'informatica'; brand?: 'playstation'|'xbox'|'nintendo'|'retro'; family?: string}>({category: 'consoles', brand: 'playstation', family: 'PS5'});

  const psFamilies = ['PS5','PS4','PS3','PS2','PS1','PS Vita'];
  const xboxFamilies = ['Series X|S','Xbox One','Xbox 360','Xbox Clássico'];
  const nintendoFamilies = ['Switch','Wii U','Wii','DS/3DS','GameCube'];

  const consoles: Record<string, Item[]> = useMemo(() => ({
    PS5: [
      { id: 'ps5-x', name: 'PlayStation 5 (Edição Padrão)', price: 3999.9, oldPrice: 4499.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=PlayStation%205%20console%20white%20and%20black%20studio%20lighting%20product%20shot&image_size=square' },
      { id: 'ps5-d', name: 'PlayStation 5 Edição Digital', price: 3699.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=PlayStation%205%20digital%20edition%20console%20sleek%20minimal%20product%20photo&image_size=square' },
    ],
    PS4: [
      { id: 'ps4-slim', name: 'PlayStation 4 Slim 1TB', price: 1999.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=PlayStation%204%20Slim%20black%20console%20on%20clean%20background%20product%20photo&image_size=square' },
      { id: 'ps4-pro', name: 'PlayStation 4 Pro', price: 2299.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=PlayStation%204%20Pro%20black%20console%20studio%20lighting&image_size=square' },
    ],
    'Series X|S': [
      { id: 'xsx', name: 'Xbox Series X 1TB', price: 3799.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Xbox%20Series%20X%20black%20tower%20console%20dramatic%20lighting%20product%20photo&image_size=square' },
      { id: 'xss', name: 'Xbox Series S 512GB', price: 2399.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Xbox%20Series%20S%20white%20console%20minimal%20studio%20photo&image_size=square' },
    ],
    'Xbox One': [
      { id: 'xo-s', name: 'Xbox One S 1TB', price: 1599.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Xbox%20One%20S%20white%20console%20with%20controller%20product%20photo&image_size=square' },
    ],
    Switch: [
      { id: 'sw-oled', name: 'Nintendo Switch OLED', price: 2699.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Nintendo%20Switch%20OLED%20console%20vivid%20screen%20product%20shot&image_size=square' },
      { id: 'sw-lite', name: 'Nintendo Switch Lite', price: 1399.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Nintendo%20Switch%20Lite%20handheld%20console%20colorful%20studio%20photo&image_size=square' },
    ],
    'Wii U': [
      { id: 'wiiu', name: 'Nintendo Wii U 32GB', price: 1199.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Nintendo%20Wii%20U%20console%20with%20gamepad%20on%20white%20background%20product%20photo&image_size=square' },
    ],
    'Wii': [
      { id: 'wii', name: 'Nintendo Wii', price: 899.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Nintendo%20Wii%20white%20console%20with%20remote%20clean%20product%20photo&image_size=square' },
    ],
    'DS/3DS': [
      { id: '3ds', name: 'Nintendo 3DS', price: 799.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Nintendo%203DS%20handheld%20open%20device%20studio%20lighting&image_size=square' },
    ],
    GameCube: [
      { id: 'gc', name: 'Nintendo GameCube', price: 999.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Nintendo%20GameCube%20purple%20console%20retro%20studio%20photo&image_size=square' },
    ],
    'Xbox 360': [
      { id: 'x360', name: 'Xbox 360', price: 699.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Xbox%20360%20black%20console%20with%20controller%20product%20photo&image_size=square' },
    ],
    'Xbox Clássico': [
      { id: 'xclassic', name: 'Xbox Clássico', price: 649.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Original%20Xbox%20console%20black%20retro%20studio%20photo&image_size=square' },
    ],
    PS3: [
      { id: 'ps3', name: 'PlayStation 3', price: 899.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=PlayStation%203%20console%20black%20product%20shot&image_size=square' },
    ],
    PS2: [
      { id: 'ps2', name: 'PlayStation 2', price: 499.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=PlayStation%202%20slim%20black%20console%20retro%20product%20photo&image_size=square' },
    ],
    'PS Vita': [
      { id: 'psvita', name: 'PS Vita', price: 799.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=PlayStation%20Vita%20handheld%20console%20on%20clean%20background%20product%20photo&image_size=square' },
    ],
  }), []);

  const jogos: Record<'playstation'|'xbox'|'nintendo', Item[]> = useMemo(() => ({
    playstation: [
      { id: 'ps5-game-1', name: 'Aventura Nórdica (PS5)', price: 299.9, oldPrice: 349.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=PS5%20game%20box%20art%20epic%20nordic%20adventure%20blue%20and%20silver%20high%20quality&image_size=square' },
      { id: 'ps5-game-2', name: 'Heróis Futuristas (PS5)', price: 279.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=PS5%20game%20box%20art%20futuristic%20superhero%20city%20neon%20purple%20and%20cyan&image_size=square' },
    ],
    xbox: [
      { id: 'xbox-game-1', name: 'Corrida Definitiva (Xbox)', price: 289.9, oldPrice: 329.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Xbox%20game%20box%20art%20realistic%20racing%20car%20green%20and%20black%20theme&image_size=square' },
      { id: 'xbox-game-2', name: 'Sci-Fi Espacial (Xbox)', price: 269.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Xbox%20game%20box%20art%20sci-fi%20space%20exploration%20dark%20blue%20and%20green&image_size=square' },
    ],
    nintendo: [
      { id: 'switch-game-1', name: 'Aventura de Mundo Aberto (Switch)', price: 299.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Nintendo%20Switch%20game%20box%20art%20colorful%20open%20world%20fantasy&image_size=square' },
      { id: 'switch-game-2', name: 'Corrida Divertida (Switch)', price: 249.9, image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Nintendo%20Switch%20game%20box%20art%20family%20kart%20racing%20vibrant%20colors&image_size=square' },
    ],
  }), []);

  const currentItems: Item[] = useMemo(() => {
    if (selection.category === 'consoles' && selection.family) {
      return consoles[selection.family] || [];
    }
    if (selection.category === 'jogos' && selection.brand) {
      return jogos[selection.brand] || [];
    }
    return [];
  }, [selection, consoles, jogos]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Black - Inspirado na Nova Era */}
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-3 text-sm border-b border-gray-800">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(11) 97598-7779</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Itaquaquecetuba</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-green-400">● Online</span>
              <span>Atendimento: Seg-Sex 9h-18h | Sáb 9h-14h</span>
            </div>
          </div>
          
          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <img src="/bi-logo.png" alt="Bi Games" className="h-12 w-auto hidden sm:block"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=logo%20for%20%22Bi%20Games%22%20with%20a%20retro%20plumber%20mascot%20wearing%20a%20red%20cap%2C%20cute%20cartoon%20style%2C%20clean%20vector%20mark%2C%20red%20and%20white%20palette%2C%20gaming%20badge%2C%20high%20contrast%2C%20flat%20design&image_size=square'; }} />
              <div className="flex items-center space-x-3 sm:hidden">
                <Gamepad2 className="h-10 w-10 text-red-500" />
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Bi Games</h1>
                  <p className="text-xs text-gray-400">Games & Informática</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Buscar produtos..."
                  className="pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 w-80"
                />
              </div>
              <button className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
            </div>
            
            <button className="md:hidden p-2 hover:bg-gray-800 rounded-lg">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation White - Area de compras */}
      <nav className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group" onMouseEnter={() => setActiveMenu('playstation')} onMouseLeave={() => setActiveMenu(null)}>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium">
                  <span>PlayStation</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeMenu === 'playstation' && (
                  <div className="absolute left-0 mt-3 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                    <div className="px-3 py-2 text-xs uppercase text-gray-500">Consoles</div>
                    {psFamilies.map(f => (
                      <button key={f} onClick={() => setSelection({category:'consoles', brand:'playstation', family:f})} className="w-full flex items-center justify-between px-3 py-2 text-left rounded hover:bg-gray-50">
                        <span>{f}</span>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </button>
                    ))}
                    <div className="px-3 pt-3 text-xs uppercase text-gray-500">Jogos</div>
                    <button onClick={() => setSelection({category:'jogos', brand:'playstation'})} className="w-full px-3 py-2 text-left rounded hover:bg-gray-50">Todos os Jogos PlayStation</button>
                  </div>
                )}
              </div>
              <div className="relative group" onMouseEnter={() => setActiveMenu('jogos')} onMouseLeave={() => setActiveMenu(null)}>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium">
                  <span>Jogos</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeMenu === 'jogos' && (
                  <div className="absolute left-0 mt-3 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                    <button onClick={() => setSelection({category:'jogos', brand:'playstation'})} className="w-full px-3 py-2 text-left rounded hover:bg-gray-50">PlayStation</button>
                    <button onClick={() => setSelection({category:'jogos', brand:'xbox'})} className="w-full px-3 py-2 text-left rounded hover:bg-gray-50">Xbox</button>
                    <button onClick={() => setSelection({category:'jogos', brand:'nintendo'})} className="w-full px-3 py-2 text-left rounded hover:bg-gray-50">Nintendo</button>
                  </div>
                )}
              </div>
              <div className="relative group" onMouseEnter={() => setActiveMenu('xbox')} onMouseLeave={() => setActiveMenu(null)}>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-medium">
                  <span>Xbox</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeMenu === 'xbox' && (
                  <div className="absolute left-0 mt-3 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                    <div className="px-3 py-2 text-xs uppercase text-gray-500">Consoles</div>
                    {xboxFamilies.map(f => (
                      <button key={f} onClick={() => setSelection({category:'consoles', brand:'xbox', family:f})} className="w-full flex items-center justify-between px-3 py-2 text-left rounded hover:bg-gray-50">
                        <span>{f}</span>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </button>
                    ))}
                    <div className="px-3 pt-3 text-xs uppercase text-gray-500">Jogos</div>
                    <button onClick={() => setSelection({category:'jogos', brand:'xbox'})} className="w-full px-3 py-2 text-left rounded hover:bg-gray-50">Todos os Jogos Xbox</button>
                  </div>
                )}
              </div>
              <div className="relative group" onMouseEnter={() => setActiveMenu('nintendo')} onMouseLeave={() => setActiveMenu(null)}>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
                  <span>Nintendo</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeMenu === 'nintendo' && (
                  <div className="absolute left-0 mt-3 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                    <div className="px-3 py-2 text-xs uppercase text-gray-500">Consoles</div>
                    {nintendoFamilies.map(f => (
                      <button key={f} onClick={() => setSelection({category:'consoles', brand:'nintendo', family:f})} className="w-full flex items-center justify-between px-3 py-2 text-left rounded hover:bg-gray-50">
                        <span>{f}</span>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </button>
                    ))}
                    <div className="px-3 pt-3 text-xs uppercase text-gray-500">Jogos</div>
                    <button onClick={() => setSelection({category:'jogos', brand:'nintendo'})} className="w-full px-3 py-2 text-left rounded hover:bg-gray-50">Todos os Jogos Nintendo</button>
                  </div>
                )}
              </div>
              <div className="relative group" onMouseEnter={() => setActiveMenu('retro')} onMouseLeave={() => setActiveMenu(null)}>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 font-medium">
                  <span>Retrô & Seminovos</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeMenu === 'retro' && (
                  <div className="absolute left-0 mt-3 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                    <button onClick={() => setSelection({category:'consoles', brand:'retro', family:'PS2'})} className="w-full px-3 py-2 text-left rounded hover:bg-gray-50">PlayStation 2</button>
                    <button onClick={() => setSelection({category:'consoles', brand:'retro', family:'Xbox 360'})} className="w-full px-3 py-2 text-left rounded hover:bg-gray-50">Xbox 360</button>
                    <button onClick={() => setSelection({category:'consoles', brand:'retro', family:'GameCube'})} className="w-full px-3 py-2 text-left rounded hover:bg-gray-50">GameCube</button>
                  </div>
                )}
              </div>
              <div className="relative group" onMouseEnter={() => setActiveMenu('informatica')} onMouseLeave={() => setActiveMenu(null)}>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 font-medium">
                  <span>Informática</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeMenu === 'informatica' && (
                  <div className="absolute left-0 mt-3 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                    <button onClick={() => setSelection({category:'informatica'})} className="w-full px-3 py-2 text-left rounded hover:bg-gray-50">Periféricos e Acessórios</button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Assistência Técnica
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Meus Pedidos
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel - Lançamentos */}
      <HeroCarousel />

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Categorias em Destaque
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* PlayStation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="bg-blue-600 h-32 flex items-center justify-center">
                <img 
                  src="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=PlayStation%20logo%20icon%20blue%20and%20white%20minimalist%20gaming%20symbol&image_size=square"
                  alt="PlayStation"
                  className="h-16 w-16"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">PlayStation</h3>
                <p className="text-gray-600 text-sm mb-3">Consoles, jogos e acessórios</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">Ver produtos</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Xbox */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="bg-green-600 h-32 flex items-center justify-center">
                <img 
                  src="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Xbox%20logo%20icon%20green%20and%20white%20minimalist%20gaming%20symbol&image_size=square"
                  alt="Xbox"
                  className="h-16 w-16"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Xbox</h3>
                <p className="text-gray-600 text-sm mb-3">Series X, Series S e mais</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold">Ver produtos</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Nintendo */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="bg-red-600 h-32 flex items-center justify-center">
                <img 
                  src="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Nintendo%20Switch%20logo%20red%20and%20white%20minimalist%20gaming%20symbol&image_size=square"
                  alt="Nintendo"
                  className="h-16 w-16"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Nintendo</h3>
                <p className="text-gray-600 text-sm mb-3">Switch, jogos clássicos</p>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-bold">Ver produtos</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Informática */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="bg-purple-600 h-32 flex items-center justify-center">
                <img 
                  src="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=gaming%20pc%20setup%20keyboard%20mouse%20headset%20purple%20neon%20minimalist&image_size=square"
                  alt="Informática"
                  className="h-16 w-16"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Informática</h3>
                <p className="text-gray-600 text-sm mb-3">Periféricos e acessórios</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-bold">Ver produtos</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Listing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selection.category === 'consoles' && selection.family ? `Consoles • ${selection.family}` : null}
              {selection.category === 'jogos' && selection.brand === 'playstation' ? 'Jogos • PlayStation' : null}
              {selection.category === 'jogos' && selection.brand === 'xbox' ? 'Jogos • Xbox' : null}
              {selection.category === 'jogos' && selection.brand === 'nintendo' ? 'Jogos • Nintendo' : null}
              {selection.category === 'informatica' ? 'Informática • Periféricos' : null}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentItems.map((p) => (
              <div key={p.id} className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{p.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(4.8)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      {p.oldPrice && <span className="text-sm text-gray-500 line-through mr-2">{currency(p.oldPrice)}</span>}
                      <span className="text-lg font-bold text-red-600">{currency(p.price)}</span>
                    </div>
                    <button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Assistência Técnica</h3>
              <p className="text-gray-300">Conserto de consoles, limpeza e manutenção preventiva</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Venda e Troca</h3>
              <p className="text-gray-300">Compra, venda e troca de jogos e consoles</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Retirada na Loja</h3>
              <p className="text-gray-300">Compre online e retire na nossa loja física</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Onde Estamos</h2>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-red-600 mx-auto mb-2" />
                  <p className="font-semibold">Av. Italo Adami, 396B</p>
                  <p className="text-gray-600">Itaquaquecetuba - SP</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span className="font-medium">(11) 97598-7779</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">W</span>
                  </div>
                  <span className="font-medium">WhatsApp</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Horário de Funcionamento</h2>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium">Segunda a Sexta</span>
                  <span className="text-gray-600">9h às 18h</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium">Sábado</span>
                  <span className="text-gray-600">9h às 14h</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Domingo</span>
                  <span className="text-red-600">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/bi-logo.png" alt="Bi Games" className="h-8 w-auto"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/bi-logo.svg'; }} />
                <span className="text-xl font-bold">Bi Games</span>
              </div>
              <p className="text-gray-400 text-sm">
                Sua loja de games e informática em Itaquaquecetuba. Consoles, jogos, acessórios e assistência técnica especializada.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Produtos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">PlayStation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Xbox</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nintendo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Informática</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Assistência Técnica</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Venda e Troca</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manutenção</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Upgrade</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Atendimento</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Troca</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Bi Games. Todos os direitos reservados. | CNPJ: XX.XXX.XXX/XXXX-XX
            </p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/5511975987779"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center z-50"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7"><path d="M19.11 17.35c-.26-.13-1.53-.76-1.77-.84-.24-.09-.41-.13-.58.13-.17.26-.67.84-.82 1.01-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.07-1.27-.77-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.38-.8-1.89-.21-.51-.42-.44-.58-.45h-.5c-.17 0-.45.06-.68.32-.24.26-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.81 2.76 4.39 3.87.61.26 1.08.41 1.45.52.61.19 1.17.16 1.61.1.49-.07 1.53-.63 1.75-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3z"/><path d="M16.04 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.5 3.74 1.46 5.36l-1.56 5.72 5.85-1.53c1.58.86 3.37 1.32 5.2 1.32h.01c5.89 0 10.67-4.78 10.67-10.67s-4.78-10.67-10.67-10.67zm0 19.56h-.01c-1.63 0-3.23-.44-4.62-1.27l-.33-.19-3.48.91.93-3.41-.2-.35c-.89-1.47-1.36-3.16-1.36-4.89 0-5.25 4.27-9.56 9.56-9.56s9.56 4.27 9.56 9.56-4.32 9.56-9.75 9.56z"/></svg>
      </a>
    </div>
  );
}

function HeroCarousel() {
  const slides = [
    {
      title: 'Futebol 26',
      subtitle: 'Líder em vendas — nova temporada em campo',
      cta: 'Ver futebol',
      bg: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=ultra%20wide%20cinematic%20banner%20for%20next-gen%20football%20video%20game%2026%20season%2C%20packed%20stadium%2C%20dramatic%20lights%2C%20intense%20action%2C%20blue%20and%20white%20palette&image_size=landscape_16_9'
    },
    {
      title: 'Mundo Aberto Samurai',
      subtitle: 'Exploração épica e combates cinematográficos',
      cta: 'Explorar ação',
      bg: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=cinematic%20open-world%20samurai%20video%20game%20banner%2C%20stormy%20sky%2C%20katana%2C%20japanese%20island%2C%20high%20contrast&image_size=landscape_16_9'
    },
    {
      title: 'Corrida Realista',
      subtitle: 'Velocidade máxima e gráficos de nova geração',
      cta: 'Ver corrida',
      bg: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=ultra%20wide%20banner%20for%20realistic%20racing%20sim%20video%20game%2C%20night%20city%20track%2C%20motion%20blur%2C%20neon%20lights&image_size=landscape_16_9'
    },
    {
      title: 'Heróis em Ação',
      subtitle: 'Aventura épica de mundo aberto',
      cta: 'Ver ação',
      bg: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=epic%20superhero%20open-world%20video%20game%20banner%2C%20sunset%20skyline%2C%20dynamic%20pose%2C%20red%20and%20blue%20tones&image_size=landscape_16_9'
    },
    {
      title: 'Kart Divertido',
      subtitle: 'Diversão para toda a família',
      cta: 'Ver família',
      bg: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=colorful%20family%20kart%20racing%20video%20game%20banner%2C%20bright%20tracks%2C%20vibrant%20colors%2C%20wide%20angle&image_size=landscape_16_9'
    }
  ];

  const [index, setIndex] = React.useState(0);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  React.useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  const s = slides[index];

  return (
    <section className="relative text-white">
      <img src={s.bg} alt={s.title} className="w-full h-[46vh] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">{s.title}</h2>
          <p className="text-base md:text-xl text-gray-200 mb-6">{s.subtitle}</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">{s.cta}</button>
        </div>
      </div>
      <button aria-label="Anterior" onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full">‹</button>
      <button aria-label="Próximo" onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full">›</button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <span key={i} className={`w-2.5 h-2.5 rounded-full ${i===index? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </section>
  );
}
