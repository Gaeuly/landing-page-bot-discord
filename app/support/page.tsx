'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Book, Mail, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const faqData = [
  {
    question: "How do I invite Moonveil to my server?",
    answer: "Click the 'Invite Bot' button and select your server. Make sure you have 'Manage Server' permissions to add bots."
  },
  {
    question: "Is Moonveil free to use?",
    answer: "Yes! Moonveil offers all core features for free. Premium features are available for supporters."
  },
  {
    question: "How do I set up music channels?",
    answer: "Use the /setup music command to configure music channels and permissions for your server."
  },
  {
    question: "Can I customize commands?",
    answer: "Absolutely! Use /custom command to create your own commands with variables and conditions."
  },
  {
    question: "What should I do if the bot is offline?",
    answer: "Check our status page first. If the issue persists, join our support server for assistance."
  }
];

const supportFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  category: z.string().min(1, 'Please select a category')
});

type SupportFormData = z.infer<typeof supportFormSchema>;

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<SupportFormData>({
    resolver: zodResolver(supportFormSchema)
  });

  const onSubmit = async (data: SupportFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    reset();
  };

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
            <span className="text-gradient">Support Center</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get help with Moonveil and find answers to common questions
          </p>
        </motion.div>

        {/* Quick Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="moonveil-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <MessageCircle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Join Discord</h3>
            <p className="text-gray-400 text-sm mb-4">Get instant help from our community</p>
            <button className="gloss-button text-white hover:text-purple-200">Join Server</button>
          </div>
          <div className="moonveil-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <Book className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Documentation</h3>
            <p className="text-gray-400 text-sm mb-4">Comprehensive guides and tutorials</p>
            <button className="gloss-button text-white hover:text-purple-200">View Docs</button>
          </div>
          <div className="moonveil-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email Support</h3>
            <p className="text-gray-400 text-sm mb-4">Direct contact with our team</p>
            <button className="gloss-button text-white hover:text-purple-200">Send Email</button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <HelpCircle className="h-8 w-8 text-purple-400 mr-3" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="moonveil-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-400/5 transition-colors"
                  >
                    <span className="font-semibold text-white">{faq.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-purple-400 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            {isSubmitted ? (
              <div className="moonveil-card p-8 text-center">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="moonveil-card p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    {...register('name')}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    {...register('category')}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
                  >
                    <option value="">Select a category</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="support">Technical Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    {...register('subject')}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Brief description of your issue"
                  />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    placeholder="Provide detailed information about your request..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gloss-button text-white hover:text-purple-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}