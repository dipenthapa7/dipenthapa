import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
    { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative py-12 overflow-hidden" data-testid="footer">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-heading font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-cyan-400">Dipen</span>
            <span className="text-slate-100"> Thapa</span>
          </motion.a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                whileHover={{ y: -2 }}
                data-testid={`footer-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                aria-label={link.label}
                data-testid={`footer-social-${link.label.toLowerCase()}`}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Copyright */}
          <div className="text-center text-sm text-slate-500">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} {PERSONAL_INFO.name}. Made with{' '}
              <Heart size={14} className="text-red-400" fill="currentColor" /> in {PERSONAL_INFO.location.split(',')[0]}
            </p>
            <p className="mt-2 text-slate-600">
              Built with React, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
