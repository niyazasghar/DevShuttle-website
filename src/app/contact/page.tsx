"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, Terminal, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56 overflow-hidden">
      <section className="container-wide mb-32 lg:mb-56 relative z-10">
        <div className="max-w-4xl">
          <span className="eyebrow">Get in touch</span>
          <h1 className="text-hero text-white mb-10 leading-[0.95]">
            Let's build <br />
            your technical <br />
            <span className="text-brand-gray-700">future together.</span>
          </h1>
          <p className="text-xl md:text-3xl text-brand-gray-400 font-light leading-relaxed text-balance">
            Whether you're starting from scratch or scaling an existing product, our engineering team is ready to help you navigate your technical challenge.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="bg-background-light py-32 lg:py-56 border-t border-brand-gray-200 relative z-10">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32">
           
           {/* Form Column */}
           <div className="lg:col-span-7">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-3xl"
              >
                 <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-gray-900 mb-6">
                      Tell us about your project.
                    </h2>
                    <p className="text-lg text-brand-gray-500 font-light leading-relaxed">
                       Please fill out the form below and we'll get back to you within 24 hours to schedule a deep-dive call into your requirements.
                    </p>
                 </motion.div>

                 <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                    <motion.div variants={itemVariants} className="flex flex-col gap-3 group">
                       <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-400 transition-colors group-hover:text-accent">Full Name</label>
                       <input 
                         type="text" 
                         placeholder="John Doe" 
                         className="bg-transparent border-b border-brand-gray-200 py-4 text-brand-gray-900 text-lg focus:outline-none focus:border-accent transition-colors"
                       />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="flex flex-col gap-3 group">
                       <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-400 transition-colors group-hover:text-accent">Email Address</label>
                       <input 
                         type="email" 
                         placeholder="john@example.com" 
                         className="bg-transparent border-b border-brand-gray-200 py-4 text-brand-gray-900 text-lg focus:outline-none focus:border-accent transition-colors"
                       />
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col gap-3 group sm:col-span-2">
                       <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-400 transition-colors group-hover:text-accent">Estimated Project Budget</label>
                       <input 
                         type="text" 
                         placeholder="$10k - $20k" 
                         className="bg-transparent border-b border-brand-gray-200 py-4 text-brand-gray-900 text-lg focus:outline-none focus:border-accent transition-colors"
                       />
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col gap-3 group sm:col-span-2">
                       <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-400 transition-colors group-hover:text-accent">Project Details</label>
                       <textarea 
                         placeholder="Describe your vision, tech stack requirements, and goals." 
                         rows={4}
                         className="bg-transparent border-b border-brand-gray-200 py-4 text-brand-gray-900 text-lg focus:outline-none focus:border-accent transition-colors resize-none"
                       />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="sm:col-span-2 pt-10">
                       <button className="btn-premium w-full py-6 text-lg group !text-white bg-brand-gray-900 hover:bg-accent transition-all duration-500">
                          <span>Send Inquiry</span>
                          <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                       </button>
                    </motion.div>
                 </form>
              </motion.div>
           </div>
           
           {/* Sidebar Info Column */}
           <div className="lg:col-span-5 flex flex-col gap-24 lg:pt-16">
              <div className="flex flex-col gap-12">
                 <h3 className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-gray-400">Direct Contact</h3>
                 <div className="flex flex-col gap-8">
                    <a href="mailto:hello@devshuttle.com" className="group flex items-center gap-6 text-2xl lg:text-3xl font-display font-medium text-brand-gray-900">
                       <div className="w-12 h-12 flex items-center justify-center border border-brand-gray-200 rounded-full group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                          <Mail className="w-5 h-5 group-hover:text-white" />
                       </div>
                       <span className="hover-line">hello@devshuttle.com</span>
                    </a>
                    
                    <a href="tel:+1234567890" className="group flex items-center gap-6 text-2xl lg:text-3xl font-display font-medium text-brand-gray-900">
                       <div className="w-12 h-12 flex items-center justify-center border border-brand-gray-200 rounded-full group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                          <Phone className="w-5 h-5 group-hover:text-white" />
                       </div>
                       <span className="hover-line">+91 (India) Head Office</span>
                    </a>
                 </div>
              </div>

              <div className="flex flex-col gap-12">
                 <h3 className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-gray-400">Social Connect</h3>
                 <div className="flex flex-wrap gap-4">
                    {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                      <a 
                        key={i} 
                        href="#" 
                        className="w-14 h-14 flex items-center justify-center border border-brand-gray-200 rounded-full hover:bg-accent hover:border-accent text-brand-gray-500 hover:text-white transition-all duration-500 hover:scale-110"
                      >
                         <Icon className="w-6 h-6" />
                      </a>
                    ))}
                 </div>
              </div>
              
              <div className="p-10 bg-brand-gray-100 rounded-sm border border-brand-gray-100 mt-auto">
                 <div className="w-10 h-10 flex items-center justify-center bg-accent/20 border border-accent/20 rounded-lg mb-6">
                    <Terminal className="w-5 h-5 text-accent" />
                 </div>
                 <h4 className="text-xl font-bold text-brand-gray-900 mb-4 uppercase tracking-tighter">Engineering Led</h4>
                 <p className="text-brand-gray-500 text-sm font-light leading-relaxed">
                    Directed by senior software architects with computer science backgrounds. We handle the mission-critical technical layer of your brand.
                 </p>
              </div>
           </div>

        </div>
      </section>

      {/* Map or Placeholder Grid Section */}
      <section className="bg-background-dark py-32 lg:py-48 flex justify-center items-center text-center">
         <div className="container-wide">
            <span className="eyebrow !mb-10 text-brand-gray-700">Studio Location</span>
            <div className="flex items-center justify-center gap-6 text-2xl md:text-4xl font-display font-extrabold text-white opacity-40 hover:opacity-100 transition-opacity duration-1000">
               <MapPin className="w-10 h-10 text-accent/60" />
               <span>REMOTE WORLDWIDE · HEADQUARTERS IN INDIA</span>
            </div>
         </div>
      </section>
    </div>
  );
}
