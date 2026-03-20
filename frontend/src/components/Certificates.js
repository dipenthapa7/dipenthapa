import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { CERTIFICATES_DATA } from '../data/portfolioData';

const CertificateCard = ({ certificate, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: '0 0 40px rgba(6, 182, 212, 0.1)',
        borderColor: 'rgba(6, 182, 212, 0.3)'
      }}
      className="group p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-white/5 transition-all duration-300"
      data-testid={`certificate-card-${certificate.id}`}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20 flex items-center justify-center mb-4">
        <Award className="w-6 h-6 text-cyan-400" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-heading font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
        {certificate.name}
      </h3>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Building2 size={14} className="text-violet-400" />
          <span>{certificate.issuer}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Calendar size={14} className="text-slate-500" />
          <span>{certificate.date}</span>
        </div>
      </div>

      {/* View Credential Button */}
      {certificate.credentialUrl && (
        <motion.a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 transition-all duration-300"
          data-testid={`certificate-link-${certificate.id}`}
        >
          <ExternalLink size={14} />
          View Credential
        </motion.a>
      )}
    </motion.article>
  );
};

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="certificates"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="certificates-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-surface/30 to-void" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(124,58,237,0.08)_0%,transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-violet-400 font-mono text-sm uppercase tracking-widest">
            Achievements
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-100">
            Certificates & <span className="text-violet-400">Credentials</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Professional certifications and courses completed to enhance my skills
            and knowledge in AI/ML and software development.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES_DATA.map((certificate, index) => (
            <CertificateCard 
              key={certificate.id} 
              certificate={certificate} 
              index={index} 
            />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            Continuously learning and adding new certifications to my portfolio.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
