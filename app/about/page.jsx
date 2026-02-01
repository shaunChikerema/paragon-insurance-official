"use client";

import React, { useState } from 'react';
import { Shield, Award, Users, Heart, Target, CheckCircle, ArrowRight, MessageCircle, Phone, Menu, X, TrendingUp, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <Link href="/about" className="text-[#00A3E0] transition-all hover:scale-105 relative group">
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A3E0] transition-all"></span>
            </Link>
            <Link href="/#providers" className="hover:text-[#00A3E0] transition-all hover:scale-105 relative group">
              Providers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/contact" className="hover:text-[#00A3E0] transition-all hover:scale-105 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
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
              <Link href="/about" className="text-left text-[#00A3E0] bg-slate-50 font-semibold py-2 px-4 rounded-lg transition-all">
                About
              </Link>
              <Link href="/#providers" className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-all">
                Providers
              </Link>
              <Link href="/contact" className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-all">
                Contact
              </Link>
              <a href="/#contact" className="bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white py-3 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                Get Quote
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Simple Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Shield size={18} />
              Licensed by NBFIRA
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1A4D6D] mb-4">
              About Paragon
            </h1>
            <p className="text-2xl text-[#00A3E0] font-bold mb-4">
              You are in safe hands
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Your trusted partner in finding the right life insurance coverage from Botswana's leading providers.
            </p>
          </div>
        </div>
      </section>



      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-4">
                OUR STORY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A4D6D] mb-6">
                Committed to <span className="text-[#00A3E0]">Your Protection</span>
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Paragon Insurance Brokers exists to simplify one of life's most important decisions—protecting your family's future with the right life insurance coverage.
                </p>
                <p>
                  We understand that navigating insurance options can be overwhelming. That's why we partner with Botswana's most trusted insurers to bring you comprehensive choices, expert guidance, and personalized service.
                </p>
                <p>
                  Our team works exclusively for you—not the insurance companies. This independence allows us to provide unbiased recommendations tailored to your family's unique needs and budget.
                </p>
                <p className="font-bold text-[#1A4D6D] pt-2">
                  Whether you're securing your first policy or reviewing existing coverage, we're here to help you make informed decisions with confidence.
                </p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-xl p-12 flex items-center justify-center border border-slate-200">
              <img 
                src="/images/paragon-logo-clean.webp"
                alt="Paragon Insurance Brokers"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] text-white p-12 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <Target size={48} className="mb-6" />
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed text-cyan-50">
                  To empower Botswana families with accessible life insurance solutions through expert guidance, transparent comparisons, and exceptional service that delivers lasting peace of mind.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1A4D6D] to-[#0f3041] text-white p-12 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <TrendingUp size={48} className="mb-6" />
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed text-slate-200">
                  To be the most trusted insurance broker in Botswana, known for helping every family secure the protection they need with confidence and clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-4">
              OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A4D6D] mb-4">
              What <span className="text-[#00A3E0]">Guides Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-t-4 border-[#00A3E0]">
              <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1A4D6D] mb-3">Trust & Integrity</h3>
              <p className="text-slate-600 leading-relaxed">We prioritize transparency and honesty in every interaction, building lasting relationships with our clients.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-t-4 border-[#00A3E0]">
              <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1A4D6D] mb-3">Client-Focused</h3>
              <p className="text-slate-600 leading-relaxed">Your needs come first. We tailor our services to ensure you get the best coverage for your unique situation.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-t-4 border-[#00A3E0]">
              <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1A4D6D] mb-3">Excellence</h3>
              <p className="text-slate-600 leading-relaxed">We maintain the highest standards of professionalism and service quality in everything we do.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-t-4 border-[#00A3E0]">
              <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1A4D6D] mb-3">Community</h3>
              <p className="text-slate-600 leading-relaxed">Deeply rooted in Botswana, we're committed to protecting and serving our local communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-4">
              WHY PARAGON
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A4D6D] mb-4">
              The Paragon <span className="text-[#00A3E0]">Difference</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="text-[#00A3E0]" size={24} />
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">Independent advice—we work for you, not the insurers</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="text-[#00A3E0]" size={24} />
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">Access to all major Botswana providers in one place</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="text-[#00A3E0]" size={24} />
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">Fast quote response during business hours</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="text-[#00A3E0]" size={24} />
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">No hidden fees—our consultations are free</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="text-[#00A3E0]" size={24} />
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">Licensed and regulated by NBFIRA</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="text-[#00A3E0]" size={24} />
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">Local expertise with deep market knowledge</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="text-[#00A3E0]" size={24} />
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">Personalized service tailored to your needs</p>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="text-[#00A3E0]" size={24} />
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">Ongoing support throughout your policy lifetime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A3E0] via-[#00B8D4] to-[#00A3E0] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-3 font-bold">
            You are in safe hands
          </p>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Let our team help you find the right life insurance coverage for your family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact"
              className="bg-white text-[#00A3E0] hover:bg-cyan-50 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Get Your Free Quote
              <ArrowRight size={20} />
            </a>
            <Link 
              href="/"
              className="border-2 border-white hover:bg-white hover:text-[#00A3E0] px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
            >
              Back to Home
            </Link>
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