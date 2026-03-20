import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Globe, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

const iconMap = {
  Code: Code,
  Brain: Brain,
  Globe: Globe,
  Wrench: Wrench,
};

const SkillBar = ({ name, level, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs text-cyan-400 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-surface-highlight rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ category, index }) => {
  const Icon = iconMap[category.icon] || Code;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: '0 0 40px rgba(6, 182, 212, 0.1)',
        borderColor: 'rgba(6, 182, 212, 0.3)'
      }}
      className="p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-white/5 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20">
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-slate-100">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={0.2 + skillIndex * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Tech stack for marquee
  const techStack = [
    "Python", "Java", "JavaScript", "C++", "TensorFlow", "PyTorch", 
    "React", "Node.js", "Git", "Linux", "SQL", "MongoDB",
    "Pandas", "NumPy", "Scikit-learn", "Docker"
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="skills-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-surface/30 to-void" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.05)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Technical Expertise
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-100">
            Skills & <span className="text-violet-400">Technologies</span>
          </h2>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-12 overflow-hidden"
        >
          <div className="flex animate-marquee space-x-4">
            {[...techStack, ...techStack].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-surface/50 border border-white/10 text-sm text-slate-400 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.categories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500">
            Always learning and exploring new technologies to stay ahead in the field.
          </p>
        </motion.div>
      </div>

      {/* Custom CSS for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
