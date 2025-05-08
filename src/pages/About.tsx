import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Target, GraduationCap, Heart, Users, Zap, Clock } from 'lucide-react';

const About = () => {
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Mr Sparsh Singhal',
      role: 'Founder & Teacher',
      image: 'https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Ph.D. in Theoretical Physics from MIT with over 15 years of teaching experience. Passionate about making complex concepts accessible to students.',
    },
    {
      name: 'Dhruv Singhal',
      role: 'Commerce Teacher',
      image: 'https://images.pexels.com/photos/8249759/pexels-photo-8249759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Former Princeton mathematics professor with research focus on algebraic topology. Published author of multiple textbooks on advanced mathematics.',
    },
  ];

  const coreValues = [
    {
      icon: <Target size={32} className="text-primary-500" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in teaching and learning, constantly refining our methods.',
    },
    {
      icon: <Heart size={32} className="text-red-500" />,
      title: 'Passion',
      description: 'Our educators bring genuine enthusiasm to every class, inspiring a love for the subjects.',
    },
    {
      icon: <Users size={32} className="text-secondary-500" />,
      title: 'Community',
      description: 'We foster a supportive learning environment where every student can thrive and grow.',
    },
    {
      icon: <Zap size={32} className="text-yellow-500" />,
      title: 'Innovation',
      description: 'We constantly incorporate cutting-edge teaching methods and technologies.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-800 to-secondary-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Quantum Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Discover our story, our mission, and the dedicated team behind our commitment to educational excellence.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Quantum Classes was founded in 2015 by Dr. Alexandra Chen, a passionate educator with a vision to transform how mathematics and sciences are taught. Frustrated by traditional rote learning methods, she sought to create an educational environment where students could truly understand concepts, not just memorize formulas.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Starting with just a small classroom and a handful of students, Quantum Classes quickly gained recognition for its innovative teaching approach, combining theoretical foundations with practical applications and interactive learning experiences.
              </p>
              <p className="text-lg text-gray-600">
                Today, Quantum Classes has grown into a premier educational institution with multiple locations, serving thousands of students each year. Our commitment to excellence and student success remains at the heart of everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/8617692/pexels-photo-8617692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Quantum Classes campus" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-xl font-bold text-gray-900 mb-1">Est. 2024</p>
                <p className="text-gray-600">Pioneering education excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section 
        ref={missionRef}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Our Mission & Vision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Guided by clear principles and aspirations for the future of education
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-primary-500"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To empower students through exceptional education in mathematics, science, and computer science, fostering deep understanding, critical thinking, and a lifelong love of learning.
              </p>
              <p className="text-lg text-gray-600 mt-4">
                We are committed to making complex concepts accessible to all learners through innovative teaching methods that connect theory with real-world applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-secondary-500"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary-100 text-secondary-600 mb-6">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be recognized globally as a leader in STEM education, setting new standards for teaching excellence and student achievement in mathematics, science, and computer science.
              </p>
              <p className="text-lg text-gray-600 mt-4">
                We envision a world where all students have access to transformative educational experiences that prepare them for success in higher education and future careers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section 
        ref={valuesRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              The principles that guide our approach to education and shape our institutional culture
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section 
        ref={teamRef}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Meet Our Faculty
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Our team of expert educators combines academic excellence with a passion for teaching
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white bg-opacity-10 mb-4">
                <Users size={24} />
              </div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-80">Students Educated</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white bg-opacity-10 mb-4">
                <Award size={24} />
              </div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-80">College Acceptance Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white bg-opacity-10 mb-4">
                <BookOpen size={24} />
              </div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-lg opacity-80">Specialized Courses</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white bg-opacity-10 mb-4">
                <Clock size={24} />
              </div>
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-lg opacity-80">Years of Excellence</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg p-8 md:p-12 shadow-xl text-white text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Join the Quantum Classes Community
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8 opacity-90"
            >
              Experience education that transforms the way you think about mathematics, science, and computer science.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="/contact" 
                className="px-8 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300 inline-block"
              >
                Contact Us Today
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;