"use client";

import React, { useState, useEffect } from 'react';
import { Shield, Phone, Mail, Menu, X, Clock, MapPin, ArrowRight } from 'lucide-react';

const WhatsAppIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
import Link from 'next/link';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    providers: [],
    message: ''
  });

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const providerList = formData.providers?.length ? formData.providers.join(', ') : 'Any / All Providers';
    const whatsappMessage = `New Quote Request:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AProviders: ${providerList}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/26771515175?text=${whatsappMessage}`, '_blank');
    setQuoteModalOpen(false);
    setFormData({ name: '', phone: '', email: '', providers: [], message: '' });
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
      .scroll-animate { opacity: 0; }
      .scroll-animate.animate-in { opacity: 1; }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-in');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

    return () => {
      document.head.removeChild(style);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* Quote Request Modal (unchanged) */}
      {quoteModalOpen && (
        // ... (same modal code as before) ...
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white p-6 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-2xl font-bold">Request Free Quote</h3>
              <button onClick={() => setQuoteModalOpen(false)} className="hover:opacity-80 transition-opacity">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleQuoteSubmit} className="p-6 space-y-4">
              {/* ... form fields ... */}
            </form>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/26771515175" className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all duration-300" aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">1</span>
      </a>

      {/* Top Contact Bar (unchanged) */}
      <div className="bg-gradient-to-r from-[#1A4D6D] via-[#00A3E0] to-[#00B8D4] text-white py-2.5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm gap-2">
          <div className="flex flex-wrap gap-4 md:gap-6">
            <a href="https://wa.me/26771515175" className="flex items-center gap-2 hover:text-cyan-100 transition-colors">
              <WhatsAppIcon size={16} />
              <span className="font-semibold">WhatsApp: +267 71 515 175</span>
            </a>
            <a href="tel:+2673111189" className="hidden sm:flex items-center gap-2 hover:text-cyan-100 transition-colors">
              <Phone size={16} />
              <span className="font-semibold">Office: 311 1189</span>
            </a>
            <a href="mailto:info@paragoninsurancebrokers.co.bw" className="hidden md:flex items-center gap-2 hover:text-cyan-100 transition-colors">
              <Mail size={16} />
              <span className="font-semibold">info@paragoninsurancebrokers.co.bw</span>
            </a>
          </div>
          <button onClick={() => setQuoteModalOpen(true)} className="bg-white text-[#00A3E0] hover:bg-cyan-50 px-5 py-2 rounded-lg font-bold transition-colors shadow-sm">
            Get Quote
          </button>
        </div>
      </div>

      {/* Header (unchanged) */}
      <header className="bg-white shadow-md sticky top-0 z-40 border-b border-[#00A3E0]/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img src="/images/logo/paragon-logo-transparent.png" alt="Paragon Insurance Brokers" className="h-16 w-auto" />
          </Link>
          <nav className="hidden md:flex gap-8 text-[#1A4D6D] font-semibold items-center">
            <Link href="/" className="hover:text-[#00A3E0] transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/about" className="text-[#00A3E0] relative">
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A3E0]"></span>
            </Link>
            <Link href="/#providers" className="hover:text-[#00A3E0] transition-colors relative group">
              Providers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/contact" className="hover:text-[#00A3E0] transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
            </Link>
            <button onClick={() => setQuoteModalOpen(true)} className="bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-sm hover:shadow-md">
              Get Quote
            </button>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#1A4D6D] hover:text-[#00A3E0] transition-colors">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#00A3E0]/20 shadow-md">
            <nav className="flex flex-col p-4 space-y-3">
              <Link href="/" className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-colors">Home</Link>
              <Link href="/about" className="text-left text-[#00A3E0] bg-slate-50 font-semibold py-2 px-4 rounded-lg">About</Link>
              <Link href="/#providers" className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-colors">Providers</Link>
              <Link href="/contact" className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-colors">Contact</Link>
              <button onClick={() => setQuoteModalOpen(true)} className="bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white py-3 px-6 rounded-xl font-bold shadow-md">Get Quote</button>
            </nav>
          </div>
        )}
      </header>

      {/* ===================== PAGE HEADER ===================== */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl scroll-animate animate-fade-in-up" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            <div className="inline-flex items-center gap-2 bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Shield size={16} />
              Licensed by NBFIRA
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1A4D6D] mb-4 leading-tight">
              About Paragon
            </h1>
            <p className="text-2xl text-[#00A3E0] font-bold mb-4">You are in safe hands</p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We're an independent insurance broker based in Gaborone. We help Batswana compare life insurance from the country's top providers — honestly, for free, with no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== OUR STORY ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate animate-fade-in-up" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
              <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-6">
                OUR STORY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A4D6D] mb-6 leading-tight">
                We work for <span className="text-[#00A3E0]">you, not the insurers</span>
              </h2>
              <div className="space-y-5 text-slate-700 leading-relaxed text-lg">
                <p>
                  Paragon was founded on a simple frustration: buying life insurance in Botswana was harder than it needed to be. Too many options, too little clarity, and salespeople with the wrong incentives.
                </p>
                <p>
                  As a licensed independent broker, we sit on your side of the table. We compare Metropolitan Life, Botswana Life, Hollard Life, and Bona Life side by side — and recommend what actually fits your situation, not what pays us more.
                </p>
                <p className="font-bold text-[#1A4D6D]">
                  No hidden fees. No pressure. Just straightforward advice from people who know the Botswana market well.
                </p>
              </div>
            </div>
            <div className="scroll-animate animate-fade-in-up relative bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-md p-12 flex items-center justify-center border border-slate-200" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <img src="/images/logo/paragon-logo-transparent.png" alt="Paragon Insurance Brokers" className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="py-20 bg-gradient-to-br from-[#00A3E0] via-[#00B8D4] to-[#00A3E0] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-3 font-bold">You are in safe hands</p>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Get a free, no-obligation quote from Botswana's top life insurers. We'll come back to you within the hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setQuoteModalOpen(true)} className="bg-white text-[#00A3E0] hover:bg-cyan-50 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 group">
              Get Your Free Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link href="/" className="border-2 border-white hover:bg-white hover:text-[#00A3E0] px-10 py-4 rounded-xl font-bold text-lg transition-all text-center">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-white border-t border-[#00A3E0]/20 shadow-md py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="mb-6">
                <img src="/images/logo/paragon-logo-transparent.png" alt="Paragon Insurance Brokers" className="h-32 w-auto" />
              </div>
              <p className="text-slate-500 mb-3 leading-relaxed italic">You are in safe hands</p>
              <p className="text-slate-400 text-sm">Licensed by NBFIRA</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[#1A4D6D] text-lg">Our Partners</h4>
              <ul className="space-y-3 text-slate-500">
                <li className="hover:text-[#00A3E0] transition-colors">Metropolitan Life</li>
                <li className="hover:text-[#00A3E0] transition-colors">Botswana Life</li>
                <li className="hover:text-[#00A3E0] transition-colors">Hollard Life</li>
                <li className="hover:text-[#00A3E0] transition-colors">Bona Life</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[#1A4D6D] text-lg">Quick Links</h4>
              <ul className="space-y-3 text-slate-500">
                <li><Link href="/about" className="hover:text-[#00A3E0] transition-colors inline-block">About Us</Link></li>
                <li><Link href="/#providers" className="hover:text-[#00A3E0] transition-colors inline-block">Providers</Link></li>
                <li><Link href="/contact" className="hover:text-[#00A3E0] transition-colors inline-block">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[#1A4D6D] text-lg">Contact Us</h4>
              <ul className="space-y-3 text-slate-500">
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-[#00A3E0] mt-1 flex-shrink-0" />
                  <span>Plot 140 Unit 1, Kgale Terrace<br/>Gaborone International Finance Park<br/>Gaborone, Botswana</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} className="text-[#00A3E0]" />
                  <a href="tel:+2673111189" className="hover:text-[#00A3E0] transition-colors">311 1189 (Office)</a>
                </li>
                <li className="flex items-center gap-2">
                  <WhatsAppIcon size={18} className="text-[#00A3E0]" />
                  <a href="https://wa.me/26771515175" className="hover:text-[#00A3E0] transition-colors">+267 71 515 175 (WhatsApp)</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-[#00A3E0]" />
                  <a href="mailto:info@paragoninsurancebrokers.co.bw" className="hover:text-[#00A3E0] transition-colors break-all">info@paragoninsurancebrokers.co.bw</a>
                </li>
                <li className="pt-2 text-sm border-t border-[#00A3E0]/20">
                  <div className="flex items-start gap-2">
                    <Clock size={18} className="text-[#00A3E0] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#1A4D6D]">Business Hours:</strong><br/>
                      Mon–Fri: 8:00 AM – 5:00 PM
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#00A3E0]/20 pt-8 text-center text-slate-400">
            <p>&copy; 2026 Paragon Insurance Brokers. Licensed by NBFIRA. All rights reserved.</p>
            <p className="mt-3 text-base font-medium">
              Made with{' '}
              <a
                href="https://bitroot-dev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#00A3E0] hover:text-[#0082b3] transition-colors group"
              >
                <span className="text-red-500 group-hover:scale-110 transition-transform inline-block">❤️</span>
                <span className="font-semibold">by BITROOT</span>
              </a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}