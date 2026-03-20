import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, BookOpen, Target, Users } from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="about-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-surface/50 to-void" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Get to know me
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-100">
            About <span className="text-cyan-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main Content */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
            <div className="p-6 md:p-8 rounded-2xl bg-surface/50 backdrop-blur-sm border border-white/5">
              <p className="text-lg text-slate-300 leading-relaxed">
                {ABOUT_DATA.description}
              </p>

              <div className="mt-8 space-y-4">
                {ABOUT_DATA.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span className="text-slate-400">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                className="p-5 rounded-xl bg-surface/50 backdrop-blur-sm border border-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-sm text-slate-500">Location</span>
                </div>
                <p className="text-slate-200 font-medium">{PERSONAL_INFO.location}</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                className="p-5 rounded-xl bg-surface/50 backdrop-blur-sm border border-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-violet-500/10">
                    <BookOpen className="w-5 h-5 text-violet-400" />
                  </div>
                  <span className="text-sm text-slate-500">Education</span>
                </div>
                <p className="text-slate-200 font-medium">Computer Science Student</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                className="p-5 rounded-xl bg-surface/50 backdrop-blur-sm border border-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Target className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-sm text-slate-500">Focus</span>
                </div>
                <p className="text-slate-200 font-medium">AI/ML & Data Science</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                className="p-5 rounded-xl bg-surface/50 backdrop-blur-sm border border-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <Users className="w-5 h-5 text-orange-400" />
                  </div>
                  <span className="text-sm text-slate-500">Status</span>
                </div>
                <p className="text-slate-200 font-medium">Open to Collaborate</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            {ABOUT_DATA.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(6, 182, 212, 0.15)' }}
                className="p-6 rounded-2xl bg-gradient-to-br from-surface to-surface-highlight border border-white/5 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}

            {/* Additional Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20"
            >
              <p className="text-sm text-slate-400 leading-relaxed">
                "Building the future through code, one commit at a time. Passionate about transforming ideas into intelligent solutions."
              </p>
              <p className="mt-4 text-cyan-400 font-medium">— {PERSONAL_INFO.name}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
