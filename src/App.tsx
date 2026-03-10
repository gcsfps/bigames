import React, { useState } from 'react';
import { ShoppingCart, Phone, MapPin, Gamepad2, Star, Search, Menu, X } from 'lucide-react';
import HomePage from './pages/HomePage';
import HomePageClean from './pages/HomePageClean';
import HomePageDark from './pages/HomePageDark';
import HomePageNovaEra from './pages/HomePageNovaEra';

export default function App() {
  const [design, setDesign] = useState<'gamer' | 'clean' | 'dark' | 'novaera'>('novaera');
  const [menuOpen, setMenuOpen] = useState(false);

  const designs = [
    { id: 'gamer', name: 'Moderno Gamer', desc: 'Roxo neon, estilo 3D, tipografia futurista' },
    { id: 'clean', name: 'Minimalista Clean', desc: 'Design limpo, cores suaves, espaçamento generoso' },
    { id: 'dark', name: 'Dark Tech', desc: 'Tema escuro com elementos neon, glassmorphism' },
    { id: 'novaera', name: 'Nova Era Style', desc: 'Header preto + menu branco, inspirado na Loja Nova Era' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Design Selector */}
      <div className="fixed top-0 left-0 right-0 bg-gray-800 border-b border-gray-700 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Bi Games - Pré-visualização</h2>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-2"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              {designs.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDesign(d.id as any)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    design === d.id 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              {designs.map((d) => (
                <button
                  key={d.id}
                  onClick={() => {
                    setDesign(d.id as any);
                    setMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    design === d.id 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <div className="font-medium">{d.name}</div>
                  <div className="text-sm opacity-75">{d.desc}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="pt-20">
        {design === 'gamer' && <HomePage />}
        {design === 'clean' && <HomePageClean />}
        {design === 'dark' && <HomePageDark />}
        {design === 'novaera' && <HomePageNovaEra />}
      </div>
    </div>
  );
}