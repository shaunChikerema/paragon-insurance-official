"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, MessageCircle, Clock, Users, CheckCircle, ArrowRight, Shield, ChevronLeft, ChevronRight, Menu, X, Star } from 'lucide-react';

export default function ParagonHomepage() {
  const [expandedProvider, setExpandedProvider] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    provider: '',
    message: ''
  });

  // Helper function to generate responsive image attributes
  const getResponsiveImage = (filename) => ({
    src: `/images/large/${filename}`,
    srcSet: `
      /images/small/${filename} 400w,
      /images/medium/${filename} 800w,
      /images/large/${filename} 1200w,
      /images/xlarge/${filename} 1920w
    `,
    sizes: "(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1536px) 1200px, 1920px"
  });

  const heroSlides = [
    {
      id: 1,
      image: "hero-slide-1.webp",
      title: "Compare Life Insurance from",
      titleAccent: "Botswana's Top Providers",
      subtitle: "Get personalized quotes from Metropolitan, Botswana Life, Hollard, and Bona Life",
      cta: "Request Free Quote",
      gradientOpacity: "from-slate-900/85 via-slate-900/50 to-transparent"
    },
    {
      id: 2,
      image: "hero-slide-2.webp",
      title: "Get Your Quote Within",
      titleAccent: "1 Hour",
      subtitle: "Fast, professional service from Botswana's most trusted insurance broker",
      cta: "Get Started Now",
      gradientOpacity: "from-slate-900/85 via-slate-900/50 to-transparent"
    },
    {
      id: 3,
      image: "hero-slide-3.webp",
      title: "Protect Your Family's",
      titleAccent: "Future Today",
      subtitle: "Trusted by families nationwide for expert insurance guidance and personalized service",
      cta: "Get Protected",
      gradientOpacity: "from-slate-900/85 via-slate-900/50 to-transparent"
    },
    {
      id: 4,
      image: "hero-slide-4.webp",
      title: "Free Quotes",
      titleAccent: "No Obligation",
      subtitle: "Compare options, make informed decisions, protect what matters most",
      cta: "Compare Now",
      gradientOpacity: "from-slate-900/85 via-slate-900/50 to-transparent"
    }
  ];

  const providers = [
    {
      id: 1,
      name: "Metropolitan Life",
      tagline: "Trusted life insurance since 1998",
      image: "provider-metropolitan.webp",
      description: "Part of Momentum Metropolitan Holdings, Metropolitan Life has been serving Botswana families since 1998. As the country's second-largest life insurer, they offer a comprehensive range of life insurance, health, savings, and funeral cover solutions.",
      benefits: [
        "Over 25 years of experience in Botswana",
        "Part of established Momentum Metropolitan Group",
        "Wide range of life and savings products",
        "Licensed and regulated by NBFIRA"
      ]
    },
    {
      id: 2,
      name: "Botswana Life",
      tagline: "Botswana's largest and oldest life insurer",
      image: "provider-botswana.webp",
      description: "Founded in 1975, Botswana Life Insurance is the country's oldest and only home-grown life insurance company. With over 75% market share and more than 300,000 policyholders, they are the most trusted name in Botswana life insurance.",
      benefits: [
        "Botswana's only indigenous life insurer since 1975",
        "Market leader with over 75% market share",
        "Over 300,000 satisfied policyholders",
        "Comprehensive life, retirement, and investment products"
      ]
    },
    {
      id: 3,
      name: "Hollard Life",
      tagline: "Innovative life insurance solutions",
      image: "provider-hollard.webp",
      description: "Established in 2005, Hollard Life Botswana is part of the international Hollard Group. They offer innovative life insurance solutions including their popular Lerako Life Cover with cashback benefits, funeral cover, and group life insurance.",
      benefits: [
        "Part of international Hollard Group",
        "Innovative products with flexible benefits",
        "Life, funeral, and group insurance options",
        "Modern digital service platforms"
      ]
    },
    {
      id: 4,
      name: "Bona Life",
      tagline: "Citizen-owned life insurance",
      image: "provider-bonna.webp",
      description: "Founded in 2013, Bona Life is Botswana's first indigenous broad-based citizen-owned life insurance company. Owned by BPOPF (Botswana Public Officers Pension Fund), they offer straightforward insurance solutions with competitive rates.",
      benefits: [
        "Botswana's first citizen-owned life insurer",
        "Backed by Botswana Public Officers Pension Fund",
        "Competitive rates and simple application process",
        "Focus on accessible insurance for all Batswana"
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "T. M.",
      role: "Business Owner, Gaborone",
      content: "Paragon helped me find the perfect life insurance policy for my family. The service was professional and they explained everything clearly. Very satisfied with the quick response!",
      rating: 5,
      initials: "TM"
    },
    {
      id: 2,
      name: "K. S.",
      role: "Teacher, Francistown",
      content: "I was confused about which provider to choose. Paragon compared all options for me and helped me make an informed decision. Highly recommend their services!",
      rating: 5,
      initials: "KS"
    },
    {
      id: 3,
      name: "M. K.",
      role: "Engineer, Maun",
      content: "Fast, reliable, and trustworthy. Paragon made getting life insurance simple. Their team is knowledgeable and always available to answer questions.",
      rating: 5,
      initials: "MK"
    }
  ];

  const smoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'd like a quote!%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AProvider: ${formData.provider || 'Any'}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/26775257556?text=${whatsappMessage}`, '_blank');
    setQuoteModalOpen(false);
    setFormData({ name: '', phone: '', email: '', provider: '', message: '' });
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Quote Request Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white p-6 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-2xl font-bold">Request Free Quote</h3>
              <button onClick={() => setQuoteModalOpen(false)} className="hover:scale-110 transition-transform">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleQuoteSubmit} className="p-6 space-y-4">
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
              <div>
                <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">Preferred Provider (Optional)</label>
                <select
                  value={formData.provider}
                  onChange={(e) => setFormData({...formData, provider: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors"
                >
                  <option value="">Any Provider</option>
                  <option value="Metropolitan Life">Metropolitan Life</option>
                  <option value="Botswana Life">Botswana Life</option>
                  <option value="Hollard Life">Hollard Life</option>
                  <option value="Bona Life">Bona Life</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A4D6D] mb-2">Additional Information</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-[#00A3E0] focus:outline-none transition-colors"
                  rows="3"
                  placeholder="Tell us about your coverage needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Submit Request
                <ArrowRight size={20} />
              </button>
              <p className="text-sm text-slate-600 text-center">We'll respond within 1 hour during business hours</p>
            </form>
          </div>
        </div>
      )}

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
      <div className="hidden md:block bg-gradient-to-r from-[#1A4D6D] via-[#00A3E0] to-[#00B8D4] text-white py-2.5 px-4 shadow-md">
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
            <button onClick={() => setQuoteModalOpen(true)} className="bg-white text-[#00A3E0] hover:bg-cyan-50 px-5 py-2 rounded-lg font-bold transition-all shadow-md hover:shadow-lg hover:scale-105">
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* Header - With Logo */}
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
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A3E0] transition-all"></span>
            </Link>
            <Link href="/about" className="hover:text-[#00A3E0] transition-all hover:scale-105 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
            </Link>
            <button onClick={() => smoothScroll('providers')} className="hover:text-[#00A3E0] transition-all hover:scale-105 relative group">
              Providers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
            </button>
            <Link href="/contact" className="hover:text-[#00A3E0] transition-all hover:scale-105 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A3E0] group-hover:w-full transition-all"></span>
            </Link>
            <button onClick={() => setQuoteModalOpen(true)} className="bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg hover:scale-105">
              Get Quote
            </button>
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
              <button onClick={() => smoothScroll('providers')} className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-all">
                Providers
              </button>
              <Link href="/contact" className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-all">
                Contact
              </Link>
              <button onClick={() => setQuoteModalOpen(true)} className="bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white py-3 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Carousel Section - FIXED LAYOUT */}
      <section id="home" className="relative text-white overflow-hidden">
        <div className="relative w-full h-[500px] md:h-[580px]">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="absolute inset-0 w-full h-full">
                <img 
                  {...getResponsiveImage(slide.image)}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradientOpacity}`}></div>
              </div>
              
              <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center py-8">
                <div className="max-w-3xl pb-24 md:pb-20">
                  <div className="hidden md:inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/30 shadow-lg">
                    <Shield size={18} className="text-white" />
                    <span className="text-white">Licensed by NBFIRA</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                    <span className="text-white">{slide.title}</span>{' '}
                    <span className="text-[#00E5FF] drop-shadow-[0_4px_12px_rgba(0,229,255,0.5)]">{slide.titleAccent}</span>
                  </h2>
                  
                  <div className="inline-block bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] px-6 py-3 rounded-xl mb-5 shadow-2xl border-2 border-white/30">
                    <p className="text-lg md:text-xl font-bold text-white">
                      ✓ You are in safe hands
                    </p>
                  </div>
                  
                  <p className="text-base md:text-lg mb-6 text-white leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {slide.subtitle}
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button onClick={() => setQuoteModalOpen(true)} className="bg-white text-[#00A3E0] hover:bg-cyan-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:scale-105 flex items-center gap-2 group">
                      {slide.cta}
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button onClick={() => smoothScroll('providers')} className="border-2 border-white hover:bg-white hover:text-[#00A3E0] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 backdrop-blur-sm bg-white/10 shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous/Next buttons - stacked vertically on right side */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
          <button onClick={prevSlide} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all hover:scale-110" aria-label="Previous slide">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all hover:scale-110" aria-label="Next slide">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel indicators - positioned at bottom with proper spacing */}
        <div className="absolute bottom-6 md:bottom-16 left-0 right-0 flex justify-center gap-4 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${index === currentSlide ? 'w-12 bg-white' : 'w-4 bg-white/50 hover:bg-white/70'} h-4 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-white/30`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Wave SVG separator */}
        <div className="absolute -bottom-px left-0 right-0 z-20 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 120L1440 120L1440 0C1440 0 1080 80 720 80C360 80 0 0 0 0L0 120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-4">
              WHY CHOOSE PARAGON
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A4D6D] mb-4">
              Your Trusted <span className="text-[#00A3E0]">Insurance Partner</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Licensed by NBFIRA and committed to helping you find the perfect coverage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#00A3E0] hover:scale-105 hover:border-t-8">
              <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-300">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1A4D6D] mb-3 text-center">Fast Response Time</h3>
              <p className="text-slate-600 text-center leading-relaxed">Get personalized quotes from multiple providers quickly. Fast, efficient, and hassle-free service during business hours.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#00B8D4] hover:scale-105 hover:border-t-8">
              <div className="bg-gradient-to-br from-[#00B8D4] to-[#00A3E0] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-300">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1A4D6D] mb-3 text-center">Trusted by Families</h3>
              <p className="text-slate-600 text-center leading-relaxed">Helping families across Botswana find the right coverage with expert guidance and comprehensive solutions.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#00A3E0] hover:scale-105 hover:border-t-8">
              <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-300">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1A4D6D] mb-3 text-center">Free & No Obligation</h3>
              <p className="text-slate-600 text-center leading-relaxed">Compare quotes with zero commitment. Expert guidance to help you make the best decision for your family.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curved Divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L1440 0L1440 120C1440 120 1080 40 720 40C360 40 0 120 0 120L0 0Z" fill="white"/>
        </svg>
      </div>

      {/* Providers Section */}
      <section id="providers" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-4">
              OUR PARTNERS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A4D6D] mb-4">
              Compare <span className="text-[#00A3E0]">Leading Insurers</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We work with Botswana's top insurance providers to find you the perfect coverage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {providers.map((provider) => (
              <div key={provider.id} className="group relative">
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-[#00A3E0]/30 bg-white">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      {...getResponsiveImage(provider.image)}
                      alt={provider.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">{provider.name}</h3>
                      <p className="text-[#00B8D4] font-semibold text-lg">{provider.tagline}</p>
                    </div>
                  </div>

                  <div className={`bg-gradient-to-b from-slate-50 to-white transition-all duration-500 ${expandedProvider === provider.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="p-6 pb-8">
                      <p className="text-slate-700 mb-6 leading-relaxed">{provider.description}</p>
                      <h4 className="font-bold text-[#1A4D6D] mb-4 flex items-center gap-2 text-lg">
                        <CheckCircle className="text-[#00B8D4]" size={22} />
                        Key Features:
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {provider.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-600">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-slate-100 border-l-4 border-[#00A3E0] p-4 rounded-lg mb-6">
                        <p className="text-sm text-slate-600 italic">
                          <strong>Note:</strong> Product details and benefits are subject to policy terms and conditions. Contact us for personalized quotes and complete product information.
                        </p>
                      </div>
                      <button className="w-full bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] hover:from-[#0090c7] hover:to-[#00a0ba] text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 group relative z-10" onClick={() => setQuoteModalOpen(true)}>
                        Get Quote from {provider.name}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => setExpandedProvider(expandedProvider === provider.id ? null : provider.id)}
                    className="w-full bg-gradient-to-r from-[#00B8D4] to-[#00A3E0] hover:from-[#00a0ba] hover:to-[#0090c7] text-white py-4 flex items-center justify-center gap-2 transition-all font-semibold shadow-md hover:shadow-lg"
                  >
                    <span>
                      {expandedProvider === provider.id ? 'Show Less' : 'Learn More'}
                    </span>
                    <ChevronDown 
                      className={`transition-transform duration-300 ${expandedProvider === provider.id ? 'rotate-180' : ''}`} 
                      size={20} 
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B8D4]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00A3E0]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-4">
              SIMPLE PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A4D6D] mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Get started in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative">
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#00A3E0] hover:scale-105">
                <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold text-[#1A4D6D] mb-4">Choose Provider</h3>
                <p className="text-slate-600 leading-relaxed">Browse our trusted partners and select the one that best fits your needs, or let us recommend options</p>
              </div>
              <div className="hidden md:block absolute top-14 -right-4 w-12 h-1 bg-gradient-to-r from-[#00B8D4] to-transparent"></div>
            </div>

            <div className="relative">
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#00B8D4] hover:scale-105">
                <div className="bg-gradient-to-br from-[#00B8D4] to-[#00A3E0] text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold text-[#1A4D6D] mb-4">Submit Details</h3>
                <p className="text-slate-600 leading-relaxed">Fill out a quick form with your basic information and coverage needs via our website or WhatsApp</p>
              </div>
              <div className="hidden md:block absolute top-14 -right-4 w-12 h-1 bg-gradient-to-r from-[#00B8D4] to-transparent"></div>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#00A3E0] hover:scale-105">
              <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-xl">
                3
              </div>
              <h3 className="text-2xl font-bold text-[#1A4D6D] mb-4">Get Your Quote</h3>
              <p className="text-slate-600 leading-relaxed">Receive personalized quotes and expert guidance via WhatsApp or phone during business hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00B8D4]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-4">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A4D6D] mb-4">
              What Our <span className="text-[#00A3E0]">Clients Say</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-3">
              Real feedback from families we've helped protect across Botswana
            </p>
            <p className="text-sm text-slate-500 italic">
              *Names abbreviated for privacy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A4D6D]">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#00A3E0] via-[#00B8D4] to-[#00A3E0] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Protect Your Family?</h2>
          <p className="text-2xl mb-3 text-cyan-100 font-bold">
            You are in safe hands
          </p>
          <p className="text-xl mb-10 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Get personalized quotes from Botswana's top insurers today. Fast, free, and no obligation.
          </p>
          <button onClick={() => setQuoteModalOpen(true)} className="bg-white text-[#00A3E0] hover:bg-cyan-50 px-12 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl hover:shadow-3xl hover:scale-110 flex items-center justify-center gap-3 mx-auto group">
            Request Your Free Quote
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer-contact" className="bg-gradient-to-b from-[#1A4D6D] to-[#0f3041] text-white py-16">
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
                <li><button onClick={() => smoothScroll('providers')} className="hover:text-[#00B8D4] transition hover:translate-x-1 inline-block">Providers</button></li>
                <li><button onClick={() => smoothScroll('testimonials')} className="hover:text-[#00B8D4] transition hover:translate-x-1 inline-block">Testimonials</button></li>
                <li><Link href="/contact" className="hover:text-[#00B8D4] transition hover:translate-x-1 inline-block">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-[#00B8D4] text-lg">Contact Us</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#00B8D4] mt-1">📍</span>
                  <span>Plot 50371, Fairgrounds Office Park<br/>Gaborone, Botswana</span>
                </li>
                <li><a href="tel:+26736237000" className="hover:text-[#00B8D4] transition">📞 +267 36 23 700</a></li>
                <li><a href="https://wa.me/26775257556" className="hover:text-[#00B8D4] transition">💬 +267 75 257 556</a></li>
                <li><a href="mailto:info@paragoninsurance.bw" className="hover:text-[#00B8D4] transition">✉️ info@paragoninsurance.bw</a></li>
                <li className="pt-2 text-sm border-t border-[#00A3E0]/20">
                  <strong className="text-[#00B8D4]">Business Hours:</strong><br/>
                  Mon-Fri: 8:00 AM - 5:00 PM<br/>
                  Sat: 9:00 AM - 1:00 PM
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