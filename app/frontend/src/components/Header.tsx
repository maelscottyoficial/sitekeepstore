import { useState } from "react";
import { Search, ShoppingCart, Menu, X, Facebook, Instagram } from "lucide-react";

const LOGO_URL = "https://mgx-backend-cdn.metadl.com/generate/images/1250664/2026-05-19/o25f63iaagqq/keepstore-logo.png";

const navLinks = [
  { label: "Página Inicial", href: "#" },
  { label: "Categorias", href: "#categorias" },
  { label: "Promoções", href: "#promocoes" },
  { label: "Mais Vendidos", href: "#mais-vendidos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={LOGO_URL} alt="Keep Store" className="h-10 w-10 rounded-lg" />
          <span className="text-xl font-bold text-white">
            Keep<span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Store</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <a href="https://www.facebook.com/keepstore1/" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/keepstoreoficial" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <button className="rounded-full p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
            <Search className="h-5 w-5" />
          </button>
          <button className="relative rounded-full p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-bold text-white">
              0
            </span>
          </button>
          <button
            className="rounded-full p-2 text-gray-400 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/5 bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}