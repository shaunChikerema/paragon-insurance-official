"use client";

import React, { useState } from 'react';
import { Shield, Award, Users, TrendingUp, Heart, Target, CheckCircle, ArrowRight, MessageCircle, Phone, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We prioritize transparency and honesty in every interaction, building lasting relationships with our clients."
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your needs come first. We tailor our services to ensure you get the best coverage for your unique situation."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of professionalism and service quality in everything we do."
    },
    {
      icon: Users,
      title: "Community",
      description: "Deeply rooted in Botswana, we're committed to protecting and serving our local communities."
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Families Protected" },
    { number: "4", label: "Top Providers" },
    { number: "1hr", label: "Quote Response" }
  ];

  const team = [
    {
      name: "Thato Motsumi",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      bio: "15+ years in insurance industry, dedicated to helping families find the right protection."
    },
    {
      name: "Lesego Kgari",
      role: "Senior Insurance Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Expert in life insurance products with a passion for client education and empowerment."
    },
    {
      name: "Neo Segole",
      role: "Client Relations Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Ensuring every client receives personalized attention and exceptional service."
    }
  ];

  const smoothScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="relative group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                <div className="w-9 h-9 border-4 border-white rounded-full"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#00B8D4] rounded-full shadow-md"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] bg-clip-text text-transparent tracking-tight">
                Paragon
              </h1>
              <p className="text-xs text-[#1A4D6D] font-bold uppercase tracking-wider">Insurance Brokers</p>
            </div>
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
            <Link href="/#contact" className="hover:text-[#00A3E0] transition-all hover:scale-105 relative group">
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
              <Link href="/#contact" className="text-left text-[#1A4D6D] hover:text-[#00A3E0] font-semibold py-2 px-4 hover:bg-slate-50 rounded-lg transition-all">
                Contact
              </Link>
              <a href="/#contact" className="bg-gradient-to-r from-[#00A3E0] to-[#00B8D4] text-white py-3 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                Get Quote
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A4D6D] via-[#00A3E0] to-[#00B8D4] text-white py-16 md:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <Shield size={18} />
              Licensed by NBFIRA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
              About <span className="text-white drop-shadow-2xl">Paragon Insurance</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white font-bold drop-shadow-md">
              You are in safe hands
            </p>
            <p className="text-base md:text-lg text-white/95 leading-relaxed mb-6 drop-shadow-md">
              We're Botswana's trusted insurance broker, dedicated to helping families find the perfect life insurance coverage from the nation's top providers.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/#contact" className="bg-white text-[#00A3E0] hover:bg-cyan-50 px-6 py-3 rounded-xl font-bold text-base transition-all shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center gap-2 group">
                Get Your Free Quote
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <button 
                onClick={() => smoothScroll('our-story')}
                className="border-2 border-white hover:bg-white hover:text-[#00A3E0] px-6 py-3 rounded-xl font-bold text-base transition-all hover:scale-105 flex items-center gap-2"
              >
                Learn More
                <ChevronDown size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute -bottom-px left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L1440 120L1440 0C1440 0 1080 80 720 80C360 80 0 0 0 0L0 120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 border-2 border-[#00A3E0]/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-all duration-300">
                <div className="text-3xl md:text-5xl font-extrabold bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-bold text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-[#00A3E0]/20">
                OUR STORY
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A4D6D] mb-6 leading-tight">
                Protecting Families Since <span className="text-[#00A3E0]">2014</span>
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base md:text-lg">
                <p>
                  Paragon Insurance Brokers was founded with a simple mission: to make life insurance accessible, understandable, and affordable for every family in Botswana.
                </p>
                <p>
                  We recognized that choosing the right life insurance policy can be overwhelming. With multiple providers, varying coverage options, and complex terms, families needed a trusted advisor to guide them through the process.
                </p>
                <p>
                  Today, we're proud to partner with Botswana's leading insurance providers—Metropolitan Life, Botswana Life, Hollard Insurance, and Bonna Life—to offer comprehensive coverage options tailored to your unique needs.
                </p>
                <p className="font-bold text-[#1A4D6D] text-lg pt-2">
                  Our commitment remains unchanged: providing fast, professional, and personalized service to help you protect what matters most.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                  alt="Paragon Insurance Team"
                  className="w-full h-[400px] md:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A4D6D]/80 via-[#1A4D6D]/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] p-6 rounded-2xl shadow-2xl max-w-xs">
                <div className="text-white">
                  <Shield className="mb-3 text-white" size={32} />
                  <div className="text-2xl font-extrabold mb-2">Licensed & Trusted</div>
                  <p className="text-cyan-100 font-medium">Regulated by NBFIRA for your protection and peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-[#00A3E0]/20">
              OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A4D6D] mb-6 leading-tight">
              What <span className="text-[#00A3E0]">Drives Us</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Our core values guide every decision we make and every interaction we have with our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-b from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-slate-100 hover:border-[#00A3E0]/30 group">
                <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A4D6D] mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] text-white p-10 lg:p-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                  <Target size={40} />
                </div>
                <h3 className="text-4xl font-extrabold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed text-cyan-50">
                  To empower every family in Botswana with accessible, comprehensive life insurance solutions by providing expert guidance, transparent comparisons, and exceptional service that builds lasting financial security.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1A4D6D] to-[#0f3041] text-white p-10 lg:p-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                  <TrendingUp size={40} />
                </div>
                <h3 className="text-4xl font-extrabold mb-6">Our Vision</h3>
                <p className="text-lg leading-relaxed text-slate-200">
                  To be Botswana's most trusted and preferred insurance broker, recognized for transforming how families access and understand life insurance, ensuring every household has the protection they deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-[#00A3E0]/20">
              MEET OUR TEAM
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A4D6D] mb-6 leading-tight">
              Expert <span className="text-[#00A3E0]">Advisors</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Our experienced team is dedicated to helping you find the perfect insurance solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-slate-100 hover:border-[#00A3E0]/30 hover:scale-105">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A4D6D]/90 via-[#1A4D6D]/30 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#1A4D6D] mb-2">{member.name}</h3>
                    <p className="text-[#00A3E0] font-semibold mb-4 text-lg">{member.role}</p>
                    <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-[#00A3E0]/20">
              WHY PARAGON
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A4D6D] mb-6 leading-tight">
              Why Families <span className="text-[#00A3E0]">Trust Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Independent advice - we work for you, not the insurers",
              "Access to multiple top-rated providers in one place",
              "Fast 1-hour quote response during business hours",
              "No hidden fees - our service is completely free",
              "Licensed and regulated by NBFIRA",
              "Local expertise with deep market knowledge",
              "Personalized service tailored to your needs",
              "Ongoing support throughout your policy lifetime"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-slate-100 hover:border-[#00A3E0]/30 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                </div>
                <p className="text-slate-700 font-semibold text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A3E0] via-[#00B8D4] to-[#00A3E0] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-3 text-white font-bold drop-shadow-md">
            You are in safe hands
          </p>
          <p className="text-lg mb-8 text-white/95 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Let our expert team help you find the perfect life insurance coverage for your family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact"
              className="bg-white text-[#00A3E0] hover:bg-cyan-50 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-3xl hover:scale-110 inline-flex items-center justify-center gap-3 group"
            >
              Get Your Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <Link 
              href="/"
              className="border-2 border-white hover:bg-white hover:text-[#00A3E0] px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-110 inline-flex items-center justify-center"
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
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-7 h-7 border-3 border-white rounded-full"></div>
                </div>
                <div>
                  <span className="font-bold text-xl text-[#00A3E0]">Paragon</span>
                  <p className="text-xs text-[#00B8D4] font-semibold">Insurance Brokers</p>
                </div>
              </div>
              <p className="text-slate-300 mb-3 leading-relaxed font-semibold">
                You are in safe hands
              </p>
              <p className="text-slate-400 text-sm">
                Licensed by NBFIRA
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-[#00B8D4] text-lg">Our Partners</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-[#00B8D4] transition cursor-pointer">Metropolitan Life</li>
                <li className="hover:text-[#00B8D4] transition cursor-pointer">Botswana Life</li>
                <li className="hover:text-[#00B8D4] transition cursor-pointer">Hollard Insurance</li>
                <li className="hover:text-[#00B8D4] transition cursor-pointer">Bonna Life</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-[#00B8D4] text-lg">Quick Links</h4>
              <ul className="space-y-3 text-slate-300">
                <li><Link href="/about" className="hover:text-[#00B8D4] transition hover:translate-x-1 inline-block">About Us</Link></li>
                <li><Link href="/#providers" className="hover:text-[#00B8D4] transition hover:translate-x-1 inline-block">Providers</Link></li>
                <li><Link href="/#testimonials" className="hover:text-[#00B8D4] transition hover:translate-x-1 inline-block">Testimonials</Link></li>
                <li><Link href="/#contact" className="hover:text-[#00B8D4] transition hover:translate-x-1 inline-block">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-[#00B8D4] text-lg">Contact Us</h4>
              <ul className="space-y-3 text-slate-300">
                <li>Gaborone, Botswana</li>
                <li><a href="tel:+26736237000" className="hover:text-[#00B8D4] transition">+267 36 23 700</a></li>
                <li><a href="https://wa.me/26775257556" className="hover:text-[#00B8D4] transition">+267 75 257 556</a></li>
                <li><a href="mailto:info@paragoninsurance.bw" className="hover:text-[#00B8D4] transition">info@paragoninsurance.bw</a></li>
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