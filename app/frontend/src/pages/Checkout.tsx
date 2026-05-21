import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { ShoppingBag, CreditCard, QrCode, ArrowLeft, CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type PaymentMethod = "pix" | "cartao";

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
          <ShoppingBag className="w-20 h-20 text-gray-600 mb-6" />
          <h2 className="text-2xl font-bold text-white mb-3">Seu carrinho está vazio</h2>
          <p className="text-gray-400 mb-8 text-center">
            Adicione produtos ao carrinho antes de finalizar a compra.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar à Loja
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || !cpf.trim() || !email.trim() || !telefone.trim()) {
      toast.error("Preencha todos os dados pessoais obrigatórios.");
      return;
    }
    if (!cep.trim() || !rua.trim() || !numero.trim() || !bairro.trim() || !cidade.trim() || !estado.trim()) {
      toast.error("Preencha todos os campos de endereço.");
      return;
    }
    if (paymentMethod === "cartao") {
      if (!cardNumber.trim() || !cardName.trim() || !cardExpiry.trim() || !cardCvv.trim()) {
        toast.error("Preencha todos os dados do cartão.");
        return;
      }
    }

    setIsSubmitting(true);
    setTimeout(() => {
      clearCart();
      toast.success("Pedido realizado com sucesso!");
      navigate("/");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar à loja
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">Finalizar Pedido</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Data */}
            <section className="bg-[#1a1a2e] rounded-xl border border-white/10 p-6">
              <h2 className="text-xl font-semibold text-white mb-5">Dados Pessoais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">CPF *</label>
                  <input
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="000.000.000-00"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-1">Telefone *</label>
                  <input
                    type="tel"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
            </section>

            {/* Address */}
            <section className="bg-[#1a1a2e] rounded-xl border border-white/10 p-6">
              <h2 className="text-xl font-semibold text-white mb-5">Endereço de Entrega</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">CEP *</label>
                  <input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="00000-000"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Estado *</label>
                  <input
                    type="text"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="SP"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-1">Rua *</label>
                  <input
                    type="text"
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Nome da rua"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Número *</label>
                  <input
                    type="text"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="123"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Bairro *</label>
                  <input
                    type="text"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Bairro"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-1">Cidade *</label>
                  <input
                    type="text"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Cidade"
                  />
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="bg-[#1a1a2e] rounded-xl border border-white/10 p-6">
              <h2 className="text-xl font-semibold text-white mb-5">Forma de Pagamento</h2>
              <div className="flex gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("pix")}
                  className={`flex-1 flex items-center justify-center gap-3 px-4 py-4 rounded-xl border transition-all ${
                    paymentMethod === "pix"
                      ? "border-indigo-500 bg-indigo-500/10 text-white"
                      : "border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <QrCode className="w-5 h-5" />
                  <span className="font-medium">PIX</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cartao")}
                  className={`flex-1 flex items-center justify-center gap-3 px-4 py-4 rounded-xl border transition-all ${
                    paymentMethod === "cartao"
                      ? "border-indigo-500 bg-indigo-500/10 text-white"
                      : "border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="font-medium">Cartão de Crédito</span>
                </button>
              </div>

              {paymentMethod === "pix" && (
                <div className="bg-[#0a0a0f] rounded-xl border border-white/10 p-6 text-center">
                  <QrCode className="w-24 h-24 text-indigo-400 mx-auto mb-4" />
                  <p className="text-gray-300 text-sm mb-2">
                    Após confirmar o pedido, o código PIX será gerado.
                  </p>
                  <p className="text-gray-500 text-xs">
                    Chave PIX: keepstore@pagamentos.com.br
                  </p>
                </div>
              )}

              {paymentMethod === "cartao" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-1">Número do Cartão *</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-1">Nome no Cartão *</label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Nome como está no cartão"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Validade *</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="MM/AA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">CVV *</label>
                    <input
                      type="text"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="000"
                    />
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a1a2e] rounded-xl border border-white/10 p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-white mb-5">Resumo do Pedido</h2>
              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.quantity}x R$ {item.currentPrice.toFixed(2)}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-white whitespace-nowrap">
                      R$ {(item.currentPrice * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Subtotal</span>
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Frete</span>
                  <span className="text-green-400">Grátis</span>
                </div>
                <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processando...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Finalizar Pedido
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}