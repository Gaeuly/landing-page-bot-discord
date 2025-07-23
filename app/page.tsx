'use client';

import { motion } from 'framer-motion';
import { Bot, Music, Shield, Zap, Users, Download, Heart, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Hero3D } from '@/components/hero-3d';
import { FeatureCard } from '@/components/feature-card';
import { StatsCounter } from '@/components/stats-counter';

const features = [
  {
    icon: Music,
    title: "Advanced Music System",
    description: "High-quality music streaming from Spotify, YouTube, SoundCloud with queue management and 24/7 playback."
  },
  {
    icon: Shield,
    title: "Smart Moderation",
    description: "AI-powered auto-moderation with customizable filters, warning systems, and comprehensive logging."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with <50ms response times and 99.9% uptime across all shards."
  },
  {
    icon: Users,
    title: "Community Tools",
    description: "Advanced role management, custom commands, reaction roles, and member verification systems."
  }
];

const musicServices = [
  { name: "Spotify", icon: "🎵" },
  { name: "YouTube", icon: "📺" },
  { name: "SoundCloud", icon: "🎧" },
  { name: "TikTok", icon: "🎤" },
  { name: "Apple Music", icon: "🍎" },
  { name: "Twitch", icon: "🎮" }
];

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Hero3D />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Moonveil</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            The ultimate all-in-one Discord bot with premium music, advanced moderation, and cutting-edge features
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/invite" className="gloss-button text-white hover:text-purple-200 flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Invite Moonveil</span>
            </Link>
            <Link href="/features" className="px-8 py-4 border border-purple-400/30 rounded-xl text-purple-400 hover:bg-purple-400/10 transition-all duration-300 flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>View Features</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="h-8 w-8 text-purple-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter end={1500} label="Servers" suffix="+" />
            <StatsCounter end={250000} label="Users" suffix="+" />
            <StatsCounter end={99} label="Uptime" suffix="%" />
            <StatsCounter end={150} label="Commands" suffix="+" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Powerful Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to enhance your Discord server experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Music Everywhere</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stream from all your favorite platforms with crystal clear quality
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8"
          >
            {musicServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="moonveil-card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <div className="text-gray-300 font-medium">{service.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="moonveil-card p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Server?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of Discord servers already using Moonveil
            </p>
            <Link
              href="/invite"
              className="gloss-button text-white hover:text-purple-200 inline-flex items-center space-x-2 text-lg"
            >
              <Bot className="h-6 w-6" />
              <span>Add to Discord</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}