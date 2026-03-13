"use client";

import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle, Menu, X, Navigation } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `New Contact Form Submission:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/26771515175?text=${whatsappMessage}`, '_blank');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/26771515175"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="group-hover:animate-pulse" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">1</span>
      </a>

      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-[#1A4D6D] via-[#00A3E0] to-[#00B8D4] text-white py-2.5 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm gap-2">
          <div className="flex flex-wrap gap-4 md:gap-6">
            <a href="https://wa.me/26771515175" className="flex items-center gap-2 hover:text-cyan-100 transition-all">
              <MessageCircle size={16} />
              <span className="font-semibold">WhatsApp: +267 71 515 175</span>
            </a>
            <a href="tel:+2673111189" className="hidden sm:flex items-center gap-2 hover:text-cyan-100 transition-all">
              <Phone size={16} />
              <span className="font-semibold">Office: 311 1189</span>
            </a>
            <a href="mailto:info@paragoninsurancebrokers.co.bw" className="hidden md:flex items-center gap-2 hover:text-cyan-100 transition-all">
              <Mail size={16} />
              <span className="font-semibold">info@paragoninsurancebrokers.co.bw</span>
            </a>
          </div>
          <div>
            <a href="/#contact" className="bg-white text-[#00A3E0] hover:bg-cyan-50 px-5 py-2 rounded-lg font-bold transition-all shadow-md">
              Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-40 border-b border-[#00A3E0]/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img
              src="/images/logo/paragon-logo-clean.webp"
              alt="Paragon Insurance Brokers - You are in safe hands"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-[#1A4D6D] font-semibold items-center">
            <Link href="/" className="hover:text-[#00A3E0] transition-all relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/about" className="hover:text-[#00A3E0] transition-all relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/#providers" className="hover:text-[#00A3E0] transition-all relative group">
              Providers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/contact" className="text-[#00A3E0] relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A3E0]"></span>
            </Link>
            <a href="/#contact" className="bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg">
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1A4D6D] hover:text-[#00A3E0] transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#00A3E0]/20 shadow-lg">
            <nav className="flex flex-col p-4 space-y-3">
              <Link href="/" className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-all">Home</Link>
              <Link href="/about" className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-all">About</Link>
              <Link href="/#providers" className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-all">Providers</Link>
              <Link href="/contact" className="text-left text-[#00A3E0] bg-slate-50 font-semibold py-2 px-4 rounded-lg">Contact</Link>
              <a href="/#contact" className="bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white py-3 px-6 rounded-xl font-bold shadow-lg text-center">Get Quote</a>
            </nav>
          </div>
        )}
      </header>

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-4">
            <MessageCircle size={16} />
            We're Here to Help
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A4D6D] mb-2">Contact Us</h1>
          <p className="text-xl text-[#00A3E0] font-bold">You are in safe hands</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-10 bg-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="tel:+2673111189" className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 flex flex-col items-center text-center gap-3">
            <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center">
              <Phone size={28} />
            </div>
            <div>
              <p className="font-bold text-lg">Office</p>
              <p className="text-cyan-50 text-sm">Call us directly</p>
              <p className="font-bold mt-1">311 1189</p>
            </div>
          </a>

          <a href="https://wa.me/26771515175" className="bg-gradient-to-br from-[#25D366] to-[#20BA5A] text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 flex flex-col items-center text-center gap-3">
            <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center">
              <MessageCircle size={28} />
            </div>
            <div>
              <p className="font-bold text-lg">WhatsApp</p>
              <p className="text-green-50 text-sm">Quick response guaranteed</p>
              <p className="font-bold mt-1">+267 71 515 175</p>
            </div>
          </a>

          <a href="mailto:info@paragoninsurancebrokers.co.bw" className="bg-gradient-to-br from-[#1A4D6D] to-[#0f3041] text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 flex flex-col items-center text-center gap-3">
            <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center">
              <Mail size={28} />
            </div>
            <div>
              <p className="font-bold text-lg">Email</p>
              <p className="text-slate-300 text-sm">Send us a message</p>
              <p className="font-bold mt-1 text-sm break-all">info@paragoninsurancebrokers.co.bw</p>
            </div>
          </a>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-10 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-[#1A4D6D] mb-2">Send Us a Message</h2>
            <p className="text-slate-500 mb-6 text-sm">We'll get back to you as soon as possible</p>

            {formSubmitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h3>
                <p className="text-green-600">We'll get back to you shortly via WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors text-slate-900 bg-white placeholder:text-slate-400"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors text-slate-900 bg-white placeholder:text-slate-400"
                      placeholder="+267 XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors text-slate-900 bg-white placeholder:text-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">Subject *</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors text-slate-900 bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="Quote Request">Quote Request</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Policy Information">Policy Information</option>
                    <option value="Claim Support">Claim Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors text-slate-900 bg-white placeholder:text-slate-400"
                    rows="4"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
                <p className="text-xs text-slate-400 text-center">We respond within 1 hour during business hours</p>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 flex flex-col">
            <div className="bg-gradient-to-r from-[#1A4D6D] to-[#00A3E0] text-white p-4 flex items-center gap-3">
              <MapPin size={22} className="flex-shrink-0" />
              <div>
                <p className="font-bold">Plot 140 Unit 1, Kgale Terrace</p>
                <p className="text-sm text-white/80">Gaborone International Finance Park, Gaborone</p>
              </div>
            </div>
            <div className="flex-1" style={{ minHeight: '380px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.4!2d25.8919!3d-24.6553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebba5b8b8b8b8b9%3A0x1234567890abcdef!2sKgale+Terrace%2C+Gaborone+International+Finance+Park!5e0!3m2!1sen!2sbw!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Paragon Insurance Brokers - Kgale Terrace, Gaborone International Finance Park"
              ></iframe>
            </div>
            <div className="p-4 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock size={16} className="text-[#00A3E0] flex-shrink-0" />
                <span>Mon–Fri: 8AM–5PM</span>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Kgale+Terrace+Plot+140+Gaborone+International+Finance+Park+Gaborone+Botswana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white py-2 px-4 rounded-xl font-bold text-sm hover:shadow-lg transition-all whitespace-nowrap"
              >
                <Navigation size={16} />
                Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#1A4D6D] to-[#0f3041] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="mb-6">
                <img
                  src="/images/logo/paragon-logo.webp"
                  alt="Paragon Insurance Brokers"
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-slate-300 mb-3 leading-relaxed italic">You are in safe hands</p>
              <p className="text-slate-400 text-sm">Licensed by NBFIRA</p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-[#00B8D4] text-lg">Our Partners</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-[#00B8D4] transition">Metropolitan Life</li>
                <li className="hover:text-[#00B8D4] transition">Botswana Life</li>
                <li className="hover:text-[#00B8D4] transition">Hollard Life</li>
                <li className="hover:text-[#00B8D4] transition">Bona Life</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-[#00B8D4] text-lg">Quick Links</h4>
              <ul className="space-y-3 text-slate-300">
                <li><Link href="/about" className="hover:text-[#00B8D4] transition hover:translate-x-1 inline-block">About Us</Link></li>
                <li><Link href="/#providers" className="hover:text-[#00B8D4] transition hover:translate-x-1 inline-block">Providers</Link></li>
                <li><Link href="/#testimonials" className="hover:text-[#00B8D4] transition hover:translate-x-1 inline-block">Testimonials</Link></li>
                <li><Link href="/contact" className="hover:text-[#00B8D4] transition hover:translate-x-1 inline-block">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-[#00B8D4] text-lg">Contact Us</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-[#00B8D4] mt-1 flex-shrink-0" />
                  <span>Plot 140 Unit 1, Kgale Terrace<br />Gaborone International Finance Park<br />Gaborone, Botswana</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} className="text-[#00B8D4]" />
                  <a href="tel:+2673111189" className="hover:text-[#00B8D4] transition">311 1189 (Office)</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle size={18} className="text-[#00B8D4]" />
                  <a href="https://wa.me/26771515175" className="hover:text-[#00B8D4] transition">+267 71 515 175 (WhatsApp)</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-[#00B8D4]" />
                  <a href="mailto:info@paragoninsurancebrokers.co.bw" className="hover:text-[#00B8D4] transition break-all">info@paragoninsurancebrokers.co.bw</a>
                </li>
                <li className="pt-2 text-sm border-t border-[#00A3E0]/20">
                  <div className="flex items-start gap-2">
                    <Clock size={18} className="text-[#00B8D4] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#00B8D4]">Business Hours:</strong><br />
                      Mon–Fri: 8:00 AM – 5:00 PM
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