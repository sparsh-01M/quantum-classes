import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-900 to-secondary-900 text-white pt-32 pb-20 overflow-hidden">
      {/* Mathematical equations background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-4xl font-mono">E = mc²</div>
        <div className="absolute top-20 right-20 text-3xl font-mono">∇ × B = μ₀J + μ₀ε₀∂E/∂t</div>
        <div className="absolute bottom-20 left-1/4 text-5xl font-mono">F = G(m₁m₂/r²)</div>
        <div className="absolute top-1/3 right-1/3 text-4xl font-mono">∫f(x)dx</div>
        <div className="absolute bottom-10 right-10 text-3xl font-mono">eiπ + 1 = 0</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Unlock Your Potential with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                Quantum Classes
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl opacity-90 mb-8"
            >
              Elevate your understanding of mathematics, science, and computer science with our expert-led courses designed for academic excellence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a 
                href="/courses" 
                className="px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-md inline-flex items-center justify-center transition-colors duration-300"
              >
                Get Started
                <ChevronRight size={18} className="ml-2" />
              </a>
              <a 
                href="/about" 
                className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md inline-flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
              >
                Learn More
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students at Quantum Classes" 
                className="w-full h-auto"
              />
              
              {/* Animated floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 bg-accent-500 rounded-full w-20 h-20 flex items-center justify-center text-white font-bold"
              >
                Physics
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -left-5 bg-primary-500 rounded-full w-24 h-24 flex items-center justify-center text-white font-bold"
              >
                Math
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-secondary-500 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold"
              >
                CS
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;