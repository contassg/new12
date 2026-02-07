import { MessageCircle, FileText, Headphones, Mail } from 'lucide-react';

function App() {
  const whatsappNumber = '5511965157358';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const handleWhatsAppClick = (message?: string) => {
    const url = message
      ? `${whatsappLink}?text=${encodeURIComponent(message)}`
      : whatsappLink;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl shadow-lg flex items-center justify-center">
            <MessageCircle className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Central de Atendimento</h1>
        </header>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Soluções na palma da sua mão
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Estamos aqui para tornar o seu dia a dia mais fácil e estar acessível nos momentos que você mais precisa. Entre em contato conosco pelo WhatsApp.
            </p>
            <button
              onClick={() => handleWhatsAppClick('Olá! Gostaria de mais informações.')}
              className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Fale Conosco Agora
            </button>
          </div>
          <div className="hidden md:block">
            <div className="w-full h-96 bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl shadow-2xl flex items-center justify-center">
              <span className="text-5xl font-bold text-white drop-shadow-lg">SEM PARAR</span>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Como podemos ajudar?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => handleWhatsAppClick('Olá! Preciso da 2ª via do meu boleto.')}
              className="bg-pink-50 hover:bg-pink-100 border-2 border-pink-200 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center mb-4">
                <FileText className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">2ª Via de Boleto</h4>
              <p className="text-gray-600">
                Solicite a segunda via do seu boleto de forma rápida e prática.
              </p>
            </button>

            <button
              onClick={() => handleWhatsAppClick('Olá! Preciso de suporte técnico.')}
              className="bg-pink-50 hover:bg-pink-100 border-2 border-pink-200 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center mb-4">
                <Headphones className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Suporte Técnico</h4>
              <p className="text-gray-600">
                Estamos prontos para resolver suas questões técnicas.
              </p>
            </button>

            <button
              onClick={() => handleWhatsAppClick('Olá! Gostaria de tratar de outro assunto.')}
              className="bg-pink-50 hover:bg-pink-100 border-2 border-pink-200 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center mb-4">
                <Mail className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Outros Assuntos</h4>
              <p className="text-gray-600">
                Fale conosco sobre qualquer outro assunto do seu interesse.
              </p>
            </button>
          </div>
        </section>

        <section className="bg-slate-900 rounded-3xl p-12 mb-20">
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold text-white mb-3">Transparência</h4>
              <p className="text-gray-300">
                Clareza e honestidade em todas as nossas interações.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold text-white mb-3">Seriedade</h4>
              <p className="text-gray-300">
                Comprometimento com a qualidade dos nossos serviços.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold text-white mb-3">Ética</h4>
              <p className="text-gray-300">
                Respeito e integridade em todas as nossas ações.
              </p>
            </div>
          </div>
        </section>

        <footer className="bg-slate-900 rounded-2xl p-8 text-center">
          <p className="text-gray-400 mb-2">
            © 2024 Central de Atendimento. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            São Paulo, Brasil
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
