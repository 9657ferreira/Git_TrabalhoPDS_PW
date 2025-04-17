import React from 'react';

export default function PaginaLogin() {
  return (
    <div className="flex h-screen font-sans">
      {/* Lado Esquerdo (imagem) */}
      <div className="hidden md:block md:w-2/3">
        <img
          src="/resources/LoginImagem.jpg"
          alt="Predios"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Lado Direito (formulário) */}
      <div className="w-full md:w-1/3 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <img
              src="/resources/Logo.png"
              alt="Inforfast Logo"
              className="mx-auto w-40"
            />
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                Lembrar-me
              </label>
              <a href="#" className="text-cyan-600 hover:underline">
                Esqueceu-se da password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded transition"
            >
              Entrar
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Não estás registado?{' '}
            <a href="#" className="text-cyan-600 hover:underline">
              Regista-te agora
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
