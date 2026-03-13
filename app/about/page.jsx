"use client";

import React, { useState, useEffect } from 'react';
import { Shield, MessageCircle, Phone, Mail, Menu, X, Clock, MapPin, ArrowRight } from 'lucide-react';
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

      {/* Quote Request Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white p-6 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-2xl font-bold">Request Free Quote</h3>
              <button onClick={() => setQuoteModalOpen(false)} className="hover:opacity-80 transition-opacity">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleQuoteSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">Full Name *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors text-slate-900 bg-white placeholder:text-slate-400" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">Phone Number *</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors text-slate-900 bg-white placeholder:text-slate-400" placeholder="+267 XX XXX XXX" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">Email Address *</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors text-slate-900 bg-white placeholder:text-slate-400" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">
                  Preferred Provider(s) <span className="font-normal text-slate-400 text-xs">Optional — select all that apply</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'all', label: 'All Providers', sub: 'Compare all 4' },
                    { id: 'Metropolitan Life', label: 'Metropolitan Life', sub: 'Since 1998' },
                    { id: 'Botswana Life', label: 'Botswana Life', sub: 'Market leader' },
                    { id: 'Hollard Life', label: 'Hollard Life', sub: 'Innovative cover' },
                    { id: 'Bona Life', label: 'Bona Life', sub: 'Citizen-owned' },
                  ].map((p) => {
                    const allProviders = ['Metropolitan Life', 'Botswana Life', 'Hollard Life', 'Bona Life'];
                    const selected = p.id === 'all'
                      ? (formData.providers || []).length === 4
                      : (formData.providers || []).includes(p.id);
                    return (
                      <button key={p.id} type="button"
                        onClick={() => {
                          if (p.id === 'all') {
                            setFormData(prev => ({ ...prev, providers: (prev.providers || []).length === 4 ? [] : [...allProviders] }));
                          } else {
                            setFormData(prev => {
                              const cur = prev.providers || [];
                              return { ...prev, providers: cur.includes(p.id) ? cur.filter(x => x !== p.id) : [...cur, p.id] };
                            });
                          }
                        }}
                        className={`p-3 rounded-xl border-2 text-left transition-all ${selected ? 'border-[#00A3E0] bg-[#00A3E0]/10' : 'border-slate-200 hover:border-[#00A3E0]/50 bg-white'} ${p.id === 'all' ? 'col-span-2' : ''}`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${selected ? 'border-[#00A3E0] bg-[#00A3E0]' : 'border-slate-300'}`}>
                            {selected && (
                              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[#1A4D6D] leading-tight">{p.label}</div>
                            <div className="text-xs text-slate-400">{p.sub}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">Additional Information</label>
                <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors text-slate-900 bg-white placeholder:text-slate-400" rows="3" placeholder="Tell us about your coverage needs..." />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Submit Request <ArrowRight size={20} />
              </button>
              <p className="text-sm text-slate-600 text-center">We'll respond within 1 hour during business hours</p>
            </form>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/26771515175" className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all duration-300" aria-label="Chat on WhatsApp">
        <MessageCircle size={28} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">1</span>
      </a>

      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-[#1A4D6D] via-[#00A3E0] to-[#00B8D4] text-white py-2.5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm gap-2">
          <div className="flex flex-wrap gap-4 md:gap-6">
            <a href="https://wa.me/26771515175" className="flex items-center gap-2 hover:text-cyan-100 transition-colors">
              <MessageCircle size={16} />
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

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40 border-b border-[#00A3E0]/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img src="/images/logo/paragon-logo-clean.webp" alt="Paragon Insurance Brokers" className="h-16 w-auto" />
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
              <img src="/images/logo/paragon-logo-clean.webp" alt="Paragon Insurance Brokers" className="w-full max-w-md" />
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
      <footer className="bg-gradient-to-b from-[#1A4D6D] to-[#0f3041] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="mb-6">
                <img src="/images/logo/paragon-logo.webp" alt="Paragon Insurance Brokers" className="h-20 w-auto" />
              </div>
              <p className="text-slate-300 mb-3 leading-relaxed italic">You are in safe hands</p>
              <p className="text-slate-400 text-sm">Licensed by NBFIRA</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[#00B8D4] text-lg">Our Partners</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-[#00B8D4] transition-colors">Metropolitan Life</li>
                <li className="hover:text-[#00B8D4] transition-colors">Botswana Life</li>
                <li className="hover:text-[#00B8D4] transition-colors">Hollard Life</li>
                <li className="hover:text-[#00B8D4] transition-colors">Bona Life</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[#00B8D4] text-lg">Quick Links</h4>
              <ul className="space-y-3 text-slate-300">
                <li><Link href="/about" className="hover:text-[#00B8D4] transition-colors inline-block">About Us</Link></li>
                <li><Link href="/#providers" className="hover:text-[#00B8D4] transition-colors inline-block">Providers</Link></li>
                <li><Link href="/contact" className="hover:text-[#00B8D4] transition-colors inline-block">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[#00B8D4] text-lg">Contact Us</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-[#00B8D4] mt-1 flex-shrink-0" />
                  <span>Plot 140 Unit 1, Kgale Terrace<br/>Gaborone International Finance Park<br/>Gaborone, Botswana</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} className="text-[#00B8D4]" />
                  <a href="tel:+2673111189" className="hover:text-[#00B8D4] transition-colors">311 1189 (Office)</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle size={18} className="text-[#00B8D4]" />
                  <a href="https://wa.me/26771515175" className="hover:text-[#00B8D4] transition-colors">+267 71 515 175 (WhatsApp)</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-[#00B8D4]" />
                  <a href="mailto:info@paragoninsurancebrokers.co.bw" className="hover:text-[#00B8D4] transition-colors break-all">info@paragoninsurancebrokers.co.bw</a>
                </li>
                <li className="pt-2 text-sm border-t border-[#00A3E0]/20">
                  <div className="flex items-start gap-2">
                    <Clock size={18} className="text-[#00B8D4] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#00B8D4]">Business Hours:</strong><br/>
                      Mon–Fri: 8:00 AM – 5:00 PM<br/>
                      Sat: 9:00 AM – 1:00 PM
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#00A3E0]/30 pt-8 text-center text-slate-400">
            <p>&copy; 2026 Paragon Insurance Brokers. Licensed by NBFIRA. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}