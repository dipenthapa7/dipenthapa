import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, PROFILE_IMAGE } from '../data/portfolioData';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.04)_0%,transparent_50%)]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-40">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          
          {/* Left Side - Profile Image (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex justify-center lg:justify-start order-1"
          >
            <div className="relative">
              {/* Clean Image Container */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="relative w-64 h-80 sm:w-72 sm:h-[360px] lg:w-80 lg:h-[400px] rounded-2xl overflow-hidden bg-surface border border-white/[0.08]"
              >
                <img
                  src={PROFILE_IMAGE}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                  data-testid="hero-profile-image"
                />
              </motion.div>

              {/* Location Badge - Minimal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-4 px-4 py-2.5 bg-surface border border-white/[0.08] rounded-xl"
              >
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={14} className="text-cyan-400" />
                  <span className="text-slate-300">{PERSONAL_INFO.location}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-3 text-center lg:text-left order-2"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-sm font-medium text-emerald-400 tracking-wide">
                Open to opportunities
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <p className="text-slate-500 text-base mb-2 tracking-wide">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-bold text-slate-50 tracking-tight leading-tight mb-3">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg sm:text-xl text-cyan-400 font-medium">
                {PERSONAL_INFO.title} · BIT Student
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-slate-400 text-base sm:text-[17px] leading-relaxed max-w-md mx-auto lg:mx-0 mb-10"
            >
              A BIT student with a growing interest in Python, AI/ML, and practical 
              project-based learning. I enjoy building simple, useful projects while 
              exploring new technologies step by step.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-void font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                data-testid="hero-view-projects-btn"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.button>

              <motion.a
                href={PERSONAL_INFO.resumeUrl}
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 bg-transparent border border-white/[0.12] text-slate-200 font-semibold rounded-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                data-testid="hero-download-cv-btn"
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-2 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub', testId: 'hero-github-link' },
                { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn', testId: 'hero-linkedin-link' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-500 hover:text-cyan-400 hover:border-white/[0.12] transition-all duration-300"
                  data-testid={social.testId}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
              <motion.button
                onClick={scrollToContact}
                whileHover={{ y: -2 }}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-500 hover:text-cyan-400 hover:border-white/[0.12] transition-all duration-300"
                data-testid="hero-email-link"
                aria-label="Email"
              >
                <Mail size={18} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
