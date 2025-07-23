'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const commandCategories = [
  'All',
  'Music',
  'Moderation',
  'Utility',
  'Fun',
  'Info'
];

const commands = [
  {
    name: '/play',
    description: 'Play music from various platforms',
    category: 'Music',
    usage: '/play [song/url]',
    example: '/play Never Gonna Give You Up'
  },
  {
    name: '/ban',
    description: 'Ban a user from the server',
    category: 'Moderation',
    usage: '/ban [user] [reason]',
    example: '/ban @user Breaking rules'
  },
  {
    name: '/poll',
    description: 'Create interactive polls',
    category: 'Utility',
    usage: '/poll [question] [options]',
    example: '/poll "Favorite color?" Red Blue Green'
  },
  {
    name: '/avatar',
    description: 'Display user avatar',
    category: 'Info',
    usage: '/avatar [user]',
    example: '/avatar @user'
  },
  {
    name: '/meme',
    description: 'Generate random memes',
    category: 'Fun',
    usage: '/meme [template]',
    example: '/meme drake'
  },
  {
    name: '/queue',
    description: 'View music queue',
    category: 'Music',
    usage: '/queue',
    example: '/queue'
  }
];

export default function Commands() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCommands = commands.filter(command => {
    const matchesCategory = selectedCategory === 'All' || command.category === selectedCategory;
    const matchesSearch = command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         command.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Commands</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore all available commands and learn how to use Moonveil's powerful features
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search commands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {commandCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-purple-500/20 hover:text-purple-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Commands Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCommands.map((command, index) => (
            <motion.div
              key={command.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="moonveil-card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-purple-400">{command.name}</h3>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                  {command.category}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-4">{command.description}</p>
              <div className="space-y-2">
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Usage:</span>
                  <code className="block text-sm bg-gray-900/50 p-2 rounded mt-1 text-purple-300">
                    {command.usage}
                  </code>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Example:</span>
                  <code className="block text-sm bg-gray-900/50 p-2 rounded mt-1 text-gray-300">
                    {command.example}
                  </code>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredCommands.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg">No commands found matching your criteria</div>
          </motion.div>
        )}
      </div>
    </div>
  );
}