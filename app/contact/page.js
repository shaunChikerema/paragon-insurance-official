"use client";

import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle, Menu, X, Navigation, Building2, Car } from 'lucide-react';
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
    window.open(`https://wa.me/26775257556?text=${whatsappMessage}`, '_blank');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/26775257556"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="group-hover:animate-pulse" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">1</span>
      </a>

      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-[#1A4D6D] via-[#00A3E0] to-[#00B8D4] text-white py-2.5 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm gap-2">
          <div className="flex flex-wrap gap-4 md:gap-6">
            <a href="https://wa.me/26775257556" className="flex items-center gap-2 hover:text-cyan-100 transition-all hover:scale-105">
              <MessageCircle size={16} />
              <span className="font-semibold">WhatsApp: +267 75 257 556</span>
            </a>
            <a href="tel:+26736237000" className="flex items-center gap-2 hover:text-cyan-100 transition-all hover:scale-105">
              <Phone size={16} />
              <span className="font-semibold">Call: +267 36 23 700</span>
            </a>
          </div>
          <div className="flex gap-3">
            <a href="/#contact" className="bg-white text-[#00A3E0] hover:bg-cyan-50 px-5 py-2 rounded-lg font-bold transition-all shadow-md hover:shadow-lg hover:scale-105">
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
              src="/images/paragon-logo-clean.webp"
              alt="Paragon Insurance Brokers - You are in safe hands"
              className="h-16 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-[#1A4D6D] font-semibold items-center">
            <Link href="/" className="hover:text-[#00A3E0] transition-all hover:scale-105 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/about" className="hover:text-[#00A3E0] transition-all hover:scale-105 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/#providers" className="hover:text-[#00A3E0] transition-all hover:scale-105 relative group">
              Providers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/contact" className="text-[#00A3E0] transition-all hover:scale-105 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A3E0] transition-all"></span>
            </Link>
            <a href="/#contact" className="bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg hover:scale-105">
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
              <Link href="/" className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-all">
                Home
              </Link>
              <Link href="/about" className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-all">
                About
              </Link>
              <Link href="/#providers" className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-all">
                Providers
              </Link>
              <Link href="/contact" className="text-left text-[#00A3E0] bg-slate-50 font-semibold py-2 px-4 rounded-lg transition-all">
                Contact
              </Link>
              <a href="/#contact" className="bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white py-3 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                Get Quote
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-4">
              <MessageCircle size={18} />
              We're Here to Help
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1A4D6D] mb-4">
              Contact Us
            </h1>
            <p className="text-2xl text-[#00A3E0] font-bold mb-4">
              You are in safe hands
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Get in touch with our team for personalized insurance guidance and quotes from Botswana's leading providers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <a href="tel:+26736237000" className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 group">
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Phone</h3>
              <p className="text-cyan-50 mb-1">Call us directly</p>
              <p className="text-xl font-bold">+267 36 23 700</p>
            </a>

            <a href="https://wa.me/26775257556" className="bg-gradient-to-br from-[#25D366] to-[#20BA5A] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 group">
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
              <p className="text-green-50 mb-1">Quick response guaranteed</p>
              <p className="text-xl font-bold">+267 75 257 556</p>
            </a>

            <a href="mailto:info@paragoninsurance.bw" className="bg-gradient-to-br from-[#1A4D6D] to-[#0f3041] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 group">
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <p className="text-slate-300 mb-1">Send us a message</p>
              <p className="text-lg font-bold break-all">info@paragoninsurance.bw</p>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content - Form and Info */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-[#1A4D6D] mb-2">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you as soon as possible</p>
              
              {formSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-green-600">We'll get back to you shortly via WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors"
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
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors"
                      rows="5"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Office Information */}
            <div className="space-y-6">
              {/* Business Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#00A3E0]">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A4D6D] mb-4">Business Hours</h3>
                    <div className="space-y-2 text-slate-700">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Monday - Friday:</span>
                        <span>8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Saturday:</span>
                        <span>9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Sunday:</span>
                        <span className="text-slate-500">Closed</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-sm text-slate-600">
                        <strong className="text-[#00A3E0]">Quick Response:</strong> Messages received during business hours are typically answered within 1 hour
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#00B8D4]">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#00B8D4] to-[#00A3E0] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A4D6D] mb-3">Our Office</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      <strong>Plot 50371, Fairgrounds Office Park</strong><br />
                      Gaborone, Botswana
                    </p>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-sm text-slate-600 font-semibold mb-2 flex items-center gap-2">
                        <Navigation size={16} className="text-[#00A3E0]" />
                        Landmark: Next to Game City Gaborone
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 mt-1" />
                    <span>Fast response during business hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 mt-1" />
                    <span>Personalized insurance guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 mt-1" />
                    <span>Quotes from multiple providers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 mt-1" />
                    <span>No obligation or hidden fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#1A4D6D] mb-4">
              How to <span className="text-[#00A3E0]">Find Us</span>
            </h2>
            <p className="text-lg text-slate-600">We're conveniently located next to Game City Gaborone</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Simple Driving Directions */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] w-12 h-12 rounded-xl flex items-center justify-center">
                  <Car className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A4D6D]">Driving Directions</h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-[#00A3E0] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A4D6D] mb-1">Head to Game City Gaborone</h4>
                    <p className="text-slate-600 text-sm">Navigate to the Fairgrounds area</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#00A3E0] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A4D6D] mb-1">Skip the First Left Turn</h4>
                    <p className="text-slate-600 text-sm">Pass Finance Park entrance, continue straight</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#00A3E0] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A4D6D] mb-1">Turn at the Second Left</h4>
                    <p className="text-slate-600 text-sm">Enter Fairgrounds Office Park</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A4D6D] mb-1">First Building on Your Left</h4>
                    <p className="text-slate-600 text-sm">Plot 50371 - Look for Paragon Insurance Brokers signage</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white border-2 border-[#00A3E0] p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Building2 size={20} className="text-[#00A3E0] mt-1 flex-shrink-0" />
                  <p className="text-sm text-slate-600">
                    <strong className="text-[#1A4D6D]">Can't find us?</strong> Call or WhatsApp us and we'll guide you in!
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
              <div className="bg-gradient-to-r from-[#1A4D6D] to-[#00A3E0] text-white p-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <MapPin size={24} />
                  Find Us Here
                </h3>
              </div>
              <div className="relative" style={{ height: '450px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.4951234567!2d25.9086!3d-24.6577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebba1e3f1234567%3A0x1234567890abcdef!2sFairgrounds%20Office%20Park!5e0!3m2!1sen!2sbw!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Paragon Insurance Brokers - Fairgrounds Office Park, Gaborone"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-4 bg-slate-50">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Fairgrounds+Office+Park+Plot+50371+Gaborone+Botswana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105"
                >
                  <Navigation size={20} />
                  Get Directions on Google Maps
                </a>
              </div>
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
                  src="/images/paragon-logo-clean.webp"
                  alt="Paragon Insurance Brokers"
                  className="h-20 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-slate-300 mb-3 leading-relaxed italic">
                You are in safe hands
              </p>
              <p className="text-slate-400 text-sm">
                Licensed by NBFIRA
              </p>
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
                  <span>Plot 50371, Fairgrounds Office Park<br/>Gaborone, Botswana</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} className="text-[#00B8D4]" />
                  <a href="tel:+26736237000" className="hover:text-[#00B8D4] transition">+267 36 23 700</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle size={18} className="text-[#00B8D4]" />
                  <a href="https://wa.me/26775257556" className="hover:text-[#00B8D4] transition">+267 75 257 556</a>
                </li>
                <li className="pt-2 text-sm border-t border-[#00A3E0]/20">
                  <div className="flex items-start gap-2">
                    <Clock size={18} className="text-[#00B8D4] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#00B8D4]">Business Hours:</strong><br/>
                      Mon-Fri: 8:00 AM - 5:00 PM<br/>
                      Sat: 9:00 AM - 1:00 PM
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