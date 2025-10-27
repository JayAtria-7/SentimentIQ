import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Heart, Code, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/JayAtria-7',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jay-prakash-kumar-1b534a260',
      label: 'LinkedIn'
    },
    {
      icon: Code,
      href: 'https://leetcode.com/u/JayAtria_7/',
      label: 'LeetCode'
    },
    {
      icon: Mail,
      href: 'mailto:jay.prakash7.kr@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>for Amazon Alexa Review Analysis</span>
            </div>
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              by Jay Prakash Kumar
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <link.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </motion.a>
            ))}
          </div>

          <div className="text-sm text-slate-600 dark:text-slate-400">
            © 2025 All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
