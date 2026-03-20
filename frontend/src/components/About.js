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
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const infoCards = [
    { icon: MapPin, label: 'Location', value: PERSONAL_INFO.location, color: 'cyan' },
    { icon: BookOpen, label: 'Education', value: 'BIT Student', color: 'violet' },
    { icon: Target, label: 'Focus', value: 'AI/ML & Data Science', color: 'emerald' },
    { icon: Users, label: 'Status', value: 'Open to Collaborate', color: 'amber' },
  ];

  const colorMap = {
    cyan: { bg: 'bg-cyan-500/[0.08]', text: 'text-cyan-400' },
    violet: { bg: 'bg-violet-500/[0.08]', text: 'text-violet-400' },
    emerald: { bg: 'bg-emerald-500/[0.08]', text: 'text-emerald-400' },
    amber: { bg: 'bg-amber-500/[0.08]', text: 'text-amber-400' },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden"
      data-testid="about-section"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 bg-void" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-[0.2em]">
            Get to know me
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-slate-50">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            {/* Bio Card */}
            <div className="p-8 rounded-2xl bg-surface/40 border border-white/[0.06] mb-6">
              <p className="text-slate-300 text-base leading-[1.8] mb-8">
                {ABOUT_DATA.description}
              </p>

              <div className="space-y-3">
                {ABOUT_DATA.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span className="text-slate-400 text-sm">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  variants={itemVariants}
                  whileHover={{ y: -2, borderColor: 'rgba(255,255,255,0.12)' }}
                  className="p-5 rounded-xl bg-surface/30 border border-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${colorMap[card.color].bg}`}>
                      <card.icon className={`w-4 h-4 ${colorMap[card.color].text}`} />
                    </div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">{card.label}</span>
                  </div>
                  <p className="text-slate-200 font-medium text-sm pl-11">{card.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Sidebar */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-4">
            {ABOUT_DATA.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -2 }}
                className="p-6 rounded-2xl bg-surface/40 border border-white/[0.06] transition-all duration-300"
              >
                <div className="text-4xl font-heading font-bold text-cyan-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/[0.06] to-violet-500/[0.04] border border-cyan-500/[0.1]"
            >
              <p className="text-slate-400 text-sm leading-relaxed italic">
                "Building the future through code, one commit at a time."
              </p>
              <p className="mt-3 text-cyan-400 text-sm font-medium">— {PERSONAL_INFO.name}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
