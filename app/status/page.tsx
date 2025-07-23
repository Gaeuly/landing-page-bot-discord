'use client';

import { motion } from 'framer-motion';
import { Activity, Server, Zap, Clock } from 'lucide-react';
import { StatsCounter } from '@/components/stats-counter';

const shardData = [
  { id: 1, status: 'Online', ping: 45, guilds: 324 },
  { id: 2, status: 'Online', ping: 52, guilds: 287 },
  { id: 3, status: 'Online', ping: 38, guilds: 298 },
  { id: 4, status: 'Online', ping: 41, guilds: 315 },
  { id: 5, status: 'Online', ping: 47, guilds: 276 }
];

export default function Status() {
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
            <span className="text-gradient">System Status</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time status and performance metrics for Moonveil bot
          </p>
        </motion.div>

        {/* Overall Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="moonveil-card p-8 mb-12 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <h2 className="text-2xl font-bold text-green-400">All Systems Operational</h2>
          </div>
          <p className="text-gray-300">All services are running normally with optimal performance</p>
        </motion.div>

        {/* Key Metrics */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Live Statistics
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="moonveil-card p-6 text-center">
              <Activity className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <StatsCounter end={99.9} label="Uptime" suffix="%" />
            </div>
            <div className="moonveil-card p-6 text-center">
              <Zap className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <StatsCounter end={45} label="Avg Ping" suffix="ms" />
            </div>
            <div className="moonveil-card p-6 text-center">
              <Server className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <StatsCounter end={1500} label="Servers" suffix="+" />
            </div>
            <div className="moonveil-card p-6 text-center">
              <Clock className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <StatsCounter end={30} label="Days Online" />
            </div>
          </div>
        </section>

        {/* Shard Status */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Shard Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shardData.map((shard, index) => (
              <motion.div
                key={shard.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="moonveil-card p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Shard {shard.id}</h3>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-green-400 text-sm">{shard.status}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Ping:</span>
                    <span className="text-purple-400 font-medium">{shard.ping}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Guilds:</span>
                    <span className="text-purple-400 font-medium">{shard.guilds}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Status History */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 moonveil-card p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-6">Recent Updates</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-400/10 border border-green-400/20 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-green-400 font-medium">System Update</span>
              </div>
              <span className="text-gray-400 text-sm">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-400/10 border border-blue-400/20 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span className="text-blue-400 font-medium">Performance Optimization</span>
              </div>
              <span className="text-gray-400 text-sm">1 day ago</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-purple-400/10 border border-purple-400/20 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                <span className="text-purple-400 font-medium">New Features Added</span>
              </div>
              <span className="text-gray-400 text-sm">3 days ago</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}