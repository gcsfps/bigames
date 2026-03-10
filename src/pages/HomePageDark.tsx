import React from 'react';
import { ShoppingCart, Phone, MapPin, Gamepad2, Star, Search, Menu } from 'lucide-react';

export default function HomePageDark() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Bi Games
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Buscar no universo dos games..."
                  className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 w-64"
                />
              </div>
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
            
            <button className="md:hidden text-gray-400">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bi Games
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
            Navegue pelo futuro dos games. Tecnologia, performance e estilo em um só lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-white font-bold hover:from-cyan-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Explorar Catálogo
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-bold hover:bg-gray-800 hover:border-cyan-400 transition-all">
              Suporte Tech
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-900/50 backdrop-blur-md py-8 border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone className="h-6 w-6 text-cyan-400" />
              <span className="text-lg font-mono">(11) 97598-7779</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="h-6 w-6 text-cyan-400" />
              <span className="text-lg">Av. Italo Adami, 396B - Itaquaquecetuba</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Hardware de Elite
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 shadow-2xl">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-48 rounded-xl mb-4 flex items-center justify-center border border-gray-700">
                  <Gamepad2 className="h-16 w-16 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Console Quantum</h3>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-cyan-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-400 text-sm">(4.9)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-cyan-400">R$ 2.499</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg text-white font-bold hover:from-cyan-700 hover:to-purple-700 transition-all">
                    Hackear
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-gray-900/30 border-y border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Sistemas
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'PlayStation', color: 'from-blue-900 to-blue-700 border-blue-600' },
              { name: 'Xbox', color: 'from-green-900 to-green-700 border-green-600' },
              { name: 'Nintendo', color: 'from-red-900 to-red-700 border-red-600' },
              { name: 'Periféricos', color: 'from-purple-900 to-purple-700 border-purple-600' }
            ].map((category) => (
              <div key={category.name} className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-center hover:scale-105 transition-all cursor-pointer border hover:shadow-lg hover:shadow-cyan-500/20`}>
                <Gamepad2 className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-black text-white">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md py-16 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Gamepad2 className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Bi Games
            </span>
          </div>
          <p className="text-gray-400 mb-8 font-mono">© 2024 Bi Games. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-6 text-cyan-400 font-bold">
            <span>Venda</span>
            <span>•</span>
            <span>Troca</span>
            <span>•</span>
            <span>Modding</span>
          </div>
        </div>
      </footer>
    </div>
  );
}