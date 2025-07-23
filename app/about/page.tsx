'use client';

import { motion } from 'framer-motion';
import { Bot, Users, Heart, Code, Star } from 'lucide-react';
import { StatsCounter } from '@/components/stats-counter';

const team = [
  { name: 'Alex Chen', role: 'Lead Developer', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Sarah Kim', role: 'UI/UX Designer', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Mike Johnson', role: 'Backend Engineer', avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Emma Davis', role: 'Community Manager', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150' }
];

const reviews = [
  {
    text: "Moonveil transformed our server! The music quality is incredible and moderation features are top-notch.",
    author: "GamerGuild",
    servers: "500+ members"
  },
  {
    text: "Best Discord bot we've ever used. The 24/7 uptime and fast responses make it perfect for our community.",
    author: "TechHub",
    servers: "2000+ members"
  },
  {
    text: "The custom commands and automation features saved us hours of manual work. Highly recommended!",
    author: "CreativeSpace",
    servers: "1200+ members"
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">About Moonveil</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built by passionate developers for the Discord community
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="moonveil-card p-8 mb-16"
        >
          <div className="text-center">
            <Bot className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Moonveil was created to provide Discord servers with the most advanced, reliable, and user-friendly bot experience possible. 
              We believe every community deserves access to premium features without the premium price tag.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Growing Every Day
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter end={1500} label="Active Servers" suffix="+" />
            <StatsCounter end={250000} label="Happy Users" suffix="+" />
            <StatsCounter end={150} label="Commands" suffix="+" />
            <StatsCounter end={99.9} label="Uptime" suffix="%" />
          </div>
        </section>

        {/* Team */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="moonveil-card p-6 text-center"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-purple-400/30"
                />
                <h3 className="font-semibold text-white">{member.name}</h3>
                <p className="text-purple-400 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Reviews */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">What Communities Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="moonveil-card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <div>
                  <div className="font-semibold text-purple-400">{review.author}</div>
                  <div className="text-sm text-gray-500">{review.servers}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Open Source */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="moonveil-card p-8 text-center"
        >
          <Code className="h-12 w-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Open Source & Transparent</h3>
          <p className="text-gray-300 mb-6">
            Moonveil is built with transparency in mind. Our code is open source and regularly audited for security and performance.
          </p>
          <a
            href="#"
            className="gloss-button text-white hover:text-purple-200 inline-flex items-center space-x-2"
          >
            <Heart className="h-5 w-5" />
            <span>View on GitHub</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}