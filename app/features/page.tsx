'use client';

import { motion } from 'framer-motion';
import { Music, Shield, Zap, Users, Settings, Database, MessageSquare, Activity } from 'lucide-react';
import { FeatureCard } from '@/components/feature-card';

const featureCategories = [
  {
    title: "Music & Entertainment",
    features: [
      {
        icon: Music,
        title: "High-Quality Audio",
        description: "Stream music in up to 320kbps quality from multiple platforms with advanced audio processing."
      },
      {
        icon: Activity,
        title: "Live Activities",
        description: "Interactive games, polls, and activities to keep your community engaged and entertained."
      }
    ]
  },
  {
    title: "Moderation & Security",
    features: [
      {
        icon: Shield,
        title: "Auto Moderation",
        description: "Intelligent spam detection, profanity filters, and automatic rule enforcement with customizable settings."
      },
      {
        icon: Database,
        title: "Advanced Logging",
        description: "Comprehensive audit logs with message tracking, user actions, and detailed server analytics."
      }
    ]
  },
  {
    title: "Utility & Management",
    features: [
      {
        icon: Users,
        title: "Role Management",
        description: "Advanced role assignment, reaction roles, and automated member verification systems."
      },
      {
        icon: Settings,
        title: "Custom Commands",
        description: "Create and manage custom commands with variables, conditions, and advanced scripting support."
      }
    ]
  },
  {
    title: "Communication",
    features: [
      {
        icon: MessageSquare,
        title: "Chat Enhancements",
        description: "Auto-translation, message scheduling, and advanced formatting options for better communication."
      },
      {
        icon: Zap,
        title: "Real-time Notifications",
        description: "Instant alerts for server events, member activities, and custom triggers with smart filtering."
      }
    ]
  }
];

export default function Features() {
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
            <span className="text-gradient">Powerful Features</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover all the ways Moonveil can enhance your Discord server with cutting-edge features and premium functionality
          </p>
        </motion.div>

        <div className="space-y-16">
          {featureCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.features.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    {...feature}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="moonveil-card p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Why Choose Moonveil?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">&lt;50ms</div>
                <div className="text-gray-400">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">150+</div>
                <div className="text-gray-400">Commands Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}