import React from 'react';
import { ShoppingCart, Phone, MapPin, Gamepad2, Star, Search, Menu } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-purple-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Bi Games
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Buscar jogos e consoles..."
                  className="pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 w-64"
                />
              </div>
              <button className="text-purple-400 hover:text-purple-300 transition-colors">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
            
            <button className="md:hidden text-purple-400">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Bi Games
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A maior loja de games da região! Consoles, jogos, acessórios e assistência técnica especializada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25">
              Ver Catálogo
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all">
              Assistência Técnica
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Contact Info */}
      <section className="bg-black/40 backdrop-blur-md py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone className="h-6 w-6 text-purple-400" />
              <span className="text-lg">(11) 97598-7779</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="h-6 w-6 text-purple-400" />
              <span className="text-lg">Av. Italo Adami, 396B - Itaquaquecetuba</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Produtos em Destaque
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all hover:transform hover:scale-105">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 h-48 rounded-xl mb-4 flex items-center justify-center">
                  <Gamepad2 className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Console Premium</h3>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-400">(4.8)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-400">R$ 2.499</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Categorias
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'PlayStation', color: 'from-blue-600 to-blue-800' },
              { name: 'Xbox', color: 'from-green-600 to-green-800' },
              { name: 'Nintendo', color: 'from-red-600 to-red-800' },
              { name: 'Acessórios', color: 'from-purple-600 to-purple-800' }
            ].map((category) => (
              <div key={category.name} className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-center hover:scale-105 transition-all cursor-pointer shadow-lg`}>
                <Gamepad2 className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md py-12 px-4 border-t border-purple-500/30">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Gamepad2 className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bi Games
            </span>
          </div>
          <p className="text-gray-400 mb-4">© 2024 Bi Games. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-6">
            <span className="text-purple-400">Venda</span>
            <span className="text-purple-400">•</span>
            <span className="text-purple-400">Troca</span>
            <span className="text-purple-400">•</span>
            <span className="text-purple-400">Assistência Técnica</span>
          </div>
        </div>
      </footer>
    </div>
  );
}