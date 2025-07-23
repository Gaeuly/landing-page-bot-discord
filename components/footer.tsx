import Link from 'next/link';
import { Bot, Github, Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-purple-400/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Bot className="h-6 w-6 text-purple-400" />
              <span className="text-lg font-bold text-gradient">Moonveil</span>
            </div>
            <p className="text-gray-400 text-sm">
              The ultimate all-in-one Discord bot with advanced music, moderation, and utility features.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-purple-400 mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</Link></li>
              <li><Link href="/commands" className="text-gray-400 hover:text-purple-400 transition-colors">Commands</Link></li>
              <li><Link href="/status" className="text-gray-400 hover:text-purple-400 transition-colors">Status</Link></li>
              <li><Link href="/docs" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-purple-400 mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/support" className="text-gray-400 hover:text-purple-400 transition-colors">Help Center</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Discord Server</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Status Page</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-purple-400 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-400/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Moonveil Bot. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Privacy</Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}