import React from 'react';
import { ShoppingCart, Phone, MapPin, Gamepad2, Star, Search, Menu } from 'lucide-react';

export default function HomePageClean() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Gamepad2 className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-light text-gray-900">
                Bi Games
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Buscar produtos..."
                  className="pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-300 w-64"
                />
              </div>
              <button className="text-gray-600 hover:text-red-500 transition-colors">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
            
            <button className="md:hidden text-gray-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
            Sua loja de games
            <span className="block text-red-500 font-normal">em Itaquaquecetuba</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Consoles, jogos e acessórios com os melhores preços. Compre online e retire na loja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
              Ver Produtos
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Assistência Técnica
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-16">
            <div className="flex items-center space-x-4 text-gray-700">
              <Phone className="h-5 w-5 text-red-500" />
              <span className="text-base">(11) 97598-7779</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <MapPin className="h-5 w-5 text-red-500" />
              <span className="text-base">Av. Italo Adami, 396B - Itaquaquecetuba</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-center mb-16 text-gray-900">
            Produtos em Destaque
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="bg-gray-100 h-48 rounded-lg mb-6 flex items-center justify-center">
                  <Gamepad2 className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Console Premium</h3>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">(4.8)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light text-gray-900">R$ 2.499</span>
                  <button className="px-6 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-center mb-16 text-gray-900">
            Categorias
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'PlayStation', color: 'bg-blue-50 text-blue-700 border-blue-200' },
              { name: 'Xbox', color: 'bg-green-50 text-green-700 border-green-200' },
              { name: 'Nintendo', color: 'bg-red-50 text-red-700 border-red-200' },
              { name: 'Acessórios', color: 'bg-gray-50 text-gray-700 border-gray-200' }
            ].map((category) => (
              <div key={category.name} className={`${category.color} rounded-xl p-8 text-center hover:shadow-md transition-shadow cursor-pointer border`}>
                <Gamepad2 className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-lg font-medium">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Gamepad2 className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-light text-gray-900">
              Bi Games
            </span>
          </div>
          <p className="text-gray-600 mb-8">© 2024 Bi Games. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>Venda</span>
            <span>•</span>
            <span>Troca</span>
            <span>•</span>
            <span>Assistência Técnica</span>
          </div>
        </div>
      </footer>
    </div>
  );
}