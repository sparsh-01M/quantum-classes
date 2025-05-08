import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, BookOpen, Code, Calculator, Zap, Award, Users, Clock } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import CoursePreview from '../components/CoursePreview';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: '1000+', label: 'Students Enrolled', icon: <Users size={24} /> },
    { value: '95%', label: 'Success Rate', icon: <Award size={24} /> },
    { value: '15+', label: 'Expert Instructors', icon: <Zap size={24} /> },
    { value: '24/7', label: 'Support Available', icon: <Clock size={24} /> },
  ];

  const courses = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      description: 'Master complex mathematical concepts with our comprehensive program.',
      icon: <Calculator className="text-primary-500" size={36} />,
      image: 'https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-primary-500 to-primary-700',
    },
    {
      id: 2,
      title: 'Physics Fundamentals',
      description: 'Explore the laws that govern our universe through engaging experiments and theory.',
      icon: <Zap className="text-secondary-500" size={36} />,
      image: 'https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-secondary-500 to-secondary-700',
    },
    {
      id: 3,
      title: 'Computer Science',
      description: 'Develop programming skills and understand computational concepts with hands-on projects.',
      icon: <Code className="text-accent-500" size={36} />,
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-accent-500 to-accent-700',
    },
  ];

  return (
    <div>
      <HeroSection />

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Featured Courses
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Discover our cutting-edge curriculum designed to foster deep understanding and practical skills.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CoursePreview 
                key={course.id}
                course={course}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a
              href="/courses"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              Explore all courses
              <ArrowRight size={16} className="ml-2" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Quantum Classes?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Quantum Classes, we blend cutting-edge teaching methodologies with deep subject expertise to create an optimal learning environment.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                      <BookOpen size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Expert Instructors</h3>
                    <p className="mt-2 text-gray-600">
                      Learn from industry professionals and academic experts with years of teaching experience.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-600 text-white">
                      <Calculator size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Comprehensive Curriculum</h3>
                    <p className="mt-2 text-gray-600">
                      Our courses cover both theoretical foundations and practical applications to ensure complete understanding.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent-600 text-white">
                      <Code size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Hands-on Learning</h3>
                    <p className="mt-2 text-gray-600">
                      Practice what you learn through experiments, projects, and interactive problem-solving sessions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-5 aspect-h-4 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Students learning at Quantum Classes" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-xl font-bold text-gray-900 mb-1">95% Success Rate</p>
                <p className="text-gray-600">Our students consistently achieve top results</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="py-16 bg-primary-800 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white bg-opacity-10 mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Unlock Your Potential?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
          >
            Join Quantum Classes today and start your journey towards academic excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="/courses" 
              className="px-8 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Explore Courses
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;