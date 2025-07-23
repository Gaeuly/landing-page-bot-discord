'use client';

import { motion } from 'framer-motion';
import { Bot, Shield, Users, Settings, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

const permissions = [
  { icon: Users, name: 'Manage Roles', description: 'Create and assign roles to users' },
  { icon: Shield, name: 'Manage Messages', description: 'Delete and moderate messages' },
  { icon: Settings, name: 'Manage Channels', description: 'Create and modify channels' },
  { icon: Bot, name: 'Send Messages', description: 'Send messages and embeds' }
];

export default function Invite() {
  useEffect(() => {
    // Auto-redirect to Discord OAuth in a real implementation
    const timer = setTimeout(() => {
      // window.open('https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands', '_blank');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Invite Moonveil</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Add Moonveil to your Discord server and unlock premium features
          </p>
        </motion.div>

        {/* Invitation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="moonveil-card p-8 mb-12"
        >
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <Bot className="h-20 w-20 text-purple-400" />
              <div className="absolute inset-0 blur-lg bg-purple-400/30 rounded-full" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Invite Moonveil?</h2>
            <p className="text-gray-300 mb-8">
              Moonveil will be added to your server with the following permissions
            </p>
          </div>

          {/* Permissions List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {permissions.map((permission, index) => (
              <motion.div
                key={permission.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-4 p-4 bg-purple-400/5 rounded-lg border border-purple-400/20"
              >
                <permission.icon className="h-6 w-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">{permission.name}</h3>
                  <p className="text-gray-400 text-sm">{permission.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Invite Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <button
              onClick={() => {
                // In a real implementation, this would open Discord OAuth
                window.open('https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands', '_blank');
              }}
              className="gloss-button text-white hover:text-purple-200 text-lg px-12 py-4 inline-flex items-center space-x-3"
            >
              <ExternalLink className="h-6 w-6" />
              <span>Invite to Discord</span>
            </button>
            <p className="text-gray-400 text-sm mt-4">
              You'll be redirected to Discord to complete the invitation
            </p>
          </motion.div>
        </motion.div>

        {/* Setup Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="moonveil-card p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">After Adding Moonveil</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-white mb-1">Run Setup Command</h4>
                <p className="text-gray-400">Use <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">/setup</code> to configure Moonveil for your server</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-white mb-1">Configure Music</h4>
                <p className="text-gray-400">Set up music channels with <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">/setup music</code></p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-white mb-1">Explore Commands</h4>
                <p className="text-gray-400">Use <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">/help</code> to see all available commands</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}