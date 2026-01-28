"use client";

import React from 'react';
import { Shield, Award, Users, TrendingUp, Heart, Target, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/26775257556"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="group-hover:animate-pulse" />
      </a>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A4D6D] via-[#00A3E0] to-[#00B8D4] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield size={18} />
              Licensed by NBFIRA
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-[#00B8D4]">Paragon Insurance</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-cyan-100 font-semibold">
              You are in safe hands
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              We're Botswana's trusted insurance broker, dedicated to helping families find the perfect life insurance coverage from the nation's top providers.
            </p>
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
      <section className="py-16 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#00A3E0] mb-2">{stat.number}</div>
                <div className="text-slate-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-6">
                OUR STORY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A4D6D] mb-6">
                Protecting Families Since <span className="text-[#00A3E0]">2014</span>
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
                <p>
                  Paragon Insurance Brokers was founded with a simple mission: to make life insurance accessible, understandable, and affordable for every family in Botswana.
                </p>
                <p>
                  We recognized that choosing the right life insurance policy can be overwhelming. With multiple providers, varying coverage options, and complex terms, families needed a trusted advisor to guide them through the process.
                </p>
                <p>
                  Today, we're proud to partner with Botswana's leading insurance providers—Metropolitan Life, Botswana Life, Hollard Insurance, and Bonna Life—to offer comprehensive coverage options tailored to your unique needs.
                </p>
                <p className="font-semibold text-[#1A4D6D]">
                  Our commitment remains unchanged: providing fast, professional, and personalized service to help you protect what matters most.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                  alt="Paragon Insurance Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A4D6D]/70 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] p-8 rounded-2xl shadow-xl max-w-xs">
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">Licensed & Trusted</div>
                  <p className="text-cyan-100">Regulated by NBFIRA for your protection and peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-4">
              OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A4D6D] mb-4">
              What <span className="text-[#00A3E0]">Drives Us</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every interaction we have with our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-b from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-100">
                <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A4D6D] mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#00A3E0] to-[#00B8D4] text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-cyan-50">
                To empower every family in Botswana with accessible, comprehensive life insurance solutions by providing expert guidance, transparent comparisons, and exceptional service that builds lasting financial security.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1A4D6D] to-[#0f3041] text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-slate-200">
                To be Botswana's most trusted and preferred insurance broker, recognized for transforming how families access and understand life insurance, ensuring every household has the protection they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-4">
              MEET OUR TEAM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A4D6D] mb-4">
              Expert <span className="text-[#00A3E0]">Advisors</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our experienced team is dedicated to helping you find the perfect insurance solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:scale-105">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A4D6D] via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#1A4D6D] mb-1">{member.name}</h3>
                    <p className="text-[#00A3E0] font-semibold mb-4">{member.role}</p>
                    <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00A3E0]/10 text-[#00A3E0] px-4 py-2 rounded-full text-sm font-bold mb-4">
              WHY PARAGON
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A4D6D] mb-4">
              Why Families <span className="text-[#00A3E0]">Trust Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-[#00A3E0]" size={24} />
                </div>
                <p className="text-slate-700 font-medium text-lg">{benefit}</p>
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-2xl mb-3 text-cyan-100 font-bold">
            You are in safe hands
          </p>
          <p className="text-xl mb-10 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Let our expert team help you find the perfect life insurance coverage for your family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="bg-white text-[#00A3E0] hover:bg-cyan-50 px-12 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl hover:shadow-3xl hover:scale-110 inline-flex items-center justify-center gap-3 group"
            >
              Get Your Free Quote
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              href="/"
              className="border-2 border-white hover:bg-white hover:text-[#00A3E0] px-12 py-5 rounded-xl font-bold text-xl transition-all hover:scale-110 inline-flex items-center justify-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}