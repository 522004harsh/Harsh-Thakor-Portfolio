'use client';

import { motion, type Variants } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';

const skillGroups = [
  {
    title: 'Business Analysis',
    skills: ['Requirement Gathering', 'Process Analysis', 'Workflow Optimization', 'Documentation', 'Strategic Planning', 'Stakeholder Communication'],
  },
  {
    title: 'Data Analytics & Tools',
    skills: ['Excel', 'Power BI', 'Power Apps', 'MS SQL', 'Data Reporting', 'Dashboard Development', 'Workflow Automation'],
  },
  {
    title: 'Programming & Technologies',
    skills: ['Python', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'Django', 'Node.js'],
  },
  {
    title: 'Core Concepts',
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
];

const services = [
  {
    number: '01',
    title: 'Business Analysis & Strategy',
    description: 'Analyzing business workflows, identifying optimization opportunities, and driving strategic process improvements.',
  },
  {
    number: '02',
    title: 'Data Analytics & Dashboards',
    description: 'Transforming raw data into actionable insights through interactive dashboards, reporting, and workflow automation.',
  },
  {
    number: '03',
    title: 'Full-Stack Web Development',
    description: 'Building responsive, data-driven web applications and platforms focusing on robust architecture and usability.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const About = () => {
  const handleDownload = () => {
    window.open('Harsh_Thakor_Resume.pdf', '_blank');
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="relative mb-24 text-center py-8">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-9xl font-black text-foreground/[0.03] uppercase tracking-widest whitespace-nowrap"
            >
              ABOUT ME
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 flex items-center justify-center gap-4"
          >
            <div className="w-8 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-primary"></div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-foreground">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-8 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-primary"></div>
          </motion.div>
        </div>

        {/* Content Centered */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="space-y-8 flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Curious Mind, <br />
              <span className="text-muted-foreground">Strategic Thinker.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light text-left md:text-center">
              Aspiring Business Analyst and Computer Science Engineering graduate with a specialization in AI/ML. Practical experience in business process analysis, requirement gathering, Python automation, web development, and business intelligence tools. Skilled in workflow optimization, documentation, dashboarding, and building data-driven solutions through internships and projects. Hands-on exposure to Excel, Power BI, Power Apps, and MS SQL for reporting, workflow automation, and decision support. Smart India Hackathon 2024 Finalist with strong analytical thinking, stakeholder understanding, and problem-solving capabilities.
            </p>

            {/* Quick Details */}
            <div className="flex flex-row justify-center items-center sm:items-start gap-8 sm:gap-24 py-8 border-y border-border/50 my-8 w-full max-w-3xl flex-wrap">
              
              {/* Education */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex items-center gap-2 text-primary font-medium tracking-wide uppercase text-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </div>
                <p className="text-foreground font-semibold">B.Tech CSE, GSFC University</p>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex items-center gap-2 text-primary font-medium tracking-wide uppercase text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Location</span>
                </div>
                <p className="text-foreground font-semibold">Bharuch, Gujarat, India</p>
              </div>

            </div>

            <button 
              onClick={handleDownload}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 font-medium mx-auto"
            >
              View Resume
            </button>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(0,191,166,0.15)]">
              <span className="text-primary font-mono text-sm opacity-80">{"//"}</span> 
              <span className="text-sm md:text-base font-bold uppercase tracking-widest text-foreground/80">
                Technical Skills
              </span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {skillGroups.map((group, idx) => (
              <motion.div key={idx} variants={itemVariants} className="p-8 rounded-3xl bg-primary/5 border border-primary/10 backdrop-blur-sm hover:bg-primary/10 transition-all duration-500">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-80" />
                  {group.title}
                </h3>
                <p className="text-foreground/90 leading-relaxed text-sm font-light">
                  {group.skills.join(', ')}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(0,191,166,0.15)]">
              <span className="text-primary font-mono text-sm opacity-80">{"//"}</span> 
              <span className="text-sm md:text-base font-bold uppercase tracking-widest text-foreground/80">
                What I Do
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="p-8 rounded-3xl bg-primary/5 border border-primary/10 backdrop-blur-sm hover:bg-primary/10 transition-all duration-500"
              >
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-80" />
                  {service.title}
                </h4>
                <p className="text-foreground/90 leading-relaxed font-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
