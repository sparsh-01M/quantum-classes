import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book, Atom, Code, Calculator, Users, Clock, Award, CheckCircle } from 'lucide-react';

const Courses = () => {
  // Main course categories
  const categories = [
    {
      id: 'mathematics',
      title: 'Mathematics',
      description: 'Master mathematical concepts from algebra to calculus with our structured curriculum.',
      icon: <Calculator size={40} className="text-primary-500" />,
      color: 'bg-primary-50 border-primary-200',
      borderHover: 'group-hover:border-primary-500',
      iconColor: 'text-primary-500',
    },
    {
      id: 'science',
      title: 'Science',
      description: 'Explore the natural world through physics, chemistry, and more with hands-on experiments.',
      icon: <Atom size={40} className="text-secondary-500" />,
      color: 'bg-secondary-50 border-secondary-200',
      borderHover: 'group-hover:border-secondary-500',
      iconColor: 'text-secondary-500',
    },
    {
      id: 'computer',
      title: 'Computer Science',
      description: 'Build programming skills and computational thinking for the digital age.',
      icon: <Code size={40} className="text-accent-500" />,
      color: 'bg-accent-50 border-accent-200',
      borderHover: 'group-hover:border-accent-500',
      iconColor: 'text-accent-500',
    },
  ];

  // Specific courses for each category
  const courses = {
    mathematics: [
      {
        title: 'Algebra Fundamentals',
        level: 'Theory + Practical',
        description: 'Build a strong foundation in algebraic concepts, equations, and problem-solving techniques.',
        features: [
          'Linear and quadratic equations',
          'Polynomials and factoring',
          'Systems of equations',
          'Weekly problem-solving sessions',
        ],
      },
      {
        title: 'Calculus I',
        level: 'Theory + Practical',
        description: 'Understand limits, derivatives, and integrals with applications to real-world problems.',
        features: [
          'Limits and continuity',
          'Differentiation techniques',
          'Integration methods',
          'Applications in physics and engineering',
        ],
      },
      {
        title: 'Advanced Statistics',
        level: 'Theory + Practical',
        description: 'Master statistical methods for data analysis and inference, including hypothesis testing.',
        features: [
          'Probability distributions',
          'Hypothesis testing',
          'Regression analysis',
          'Statistical computing with R',
        ],
      },
    ],
    science: [
      {
        title: 'Physics Mechanics',
        level: 'Theory + Practical',
        description: 'Explore the fundamental laws of motion, energy, and forces in classical mechanics.',
        features: [
          'Newton\'s laws of motion',
          'Energy and momentum conservation',
          'Rotational dynamics',
          'Hands-on laboratory experiments',
        ],
      },
      {
        title: 'Quantum Physics',
        level: 'Theory + Practical',
        description: 'Delve into the fascinating world of quantum mechanics and its applications.',
        features: [
          'Wave-particle duality',
          'Schrödinger equation',
          'Quantum states and measurements',
          'Applications in modern technology',
        ],
      },
      {
        title: 'Chemistry Essentials',
        level: 'Theory + Practical',
        description: 'Learn the basics of chemical reactions, atomic structure, and chemical bonding.',
        features: [
          'Atomic structure and periodicity',
          'Chemical bonding',
          'Stoichiometry',
          'Laboratory safety and techniques',
        ],
      },
    ],
    computer: [
      {
        title: 'Introduction to Programming',
        level: 'Theory + Practical',
        description: 'Learn the fundamentals of programming using Python, a versatile and beginner-friendly language.',
        features: [
          'Basic syntax and data types',
          'Control structures and functions',
          'Data structures',
          'Simple algorithms and problem-solving',
        ],
      },
      {
        title: 'Data Structures & Algorithms',
        level: 'Theory + Practical',
        description: 'Master essential data structures and algorithms for efficient problem-solving.',
        features: [
          'Arrays, linked lists, trees, and graphs',
          'Sorting and searching algorithms',
          'Algorithm analysis',
          'Competitive programming challenges',
        ],
      },
      {
        title: 'Web Development',
        level: 'Theory + Practical',
        description: 'Build responsive websites using modern web technologies like HTML, CSS, and JavaScript.',
        features: [
          'HTML5 and CSS3 fundamentals',
          'JavaScript programming',
          'Responsive design principles',
          'Final project: Personal portfolio website',
        ],
      },
    ],
  };

  // Benefits section
  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Small Class Sizes',
      description: 'Maximum of 12 students per class for personalized attention and interactive learning.',
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: 'Expert Instructors',
      description: 'Learn from experienced educators with advanced degrees and industry experience.',
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: 'Flexible Scheduling',
      description: 'Choose from weekday evening or weekend classes to fit your busy schedule.',
    },
    {
      icon: <Book className="w-7 h-7" />,
      title: 'Comprehensive Materials',
      description: 'Access to digital resources, practice problems, and supplementary materials.',
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
            Our Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Discover our comprehensive range of courses designed to build strong foundations and foster deep understanding in mathematics, science, and computer science.
          </motion.p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Subject Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer courses across three main disciplines, each designed to develop critical thinking and practical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group ${category.color} border-2 rounded-lg p-8 transition-all duration-300 hover:shadow-lg ${category.borderHover}`}
              >
                <div className="mb-6">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <a 
                  href={`#${category.id}`} 
                  className={`inline-flex items-center font-medium ${category.iconColor} hover:underline`}
                >
                  View Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Quantum Classes Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets our learning experience apart and helps our students achieve excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Listings */}
      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-4 flex items-center"
              >
                <span className={`mr-3 ${category.iconColor}`}>{category.icon}</span>
                {category.title} Courses
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600"
              >
                {category.description}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {courses[category.id as keyof typeof courses].map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`p-6 border-b ${category.color}`}>
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {course.level}
                      </span>
                    </div>
                    <p className="mt-4 text-gray-600">{course.description}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What You'll Learn</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle size={20} className={`mr-2 mt-0.5 flex-shrink-0 ${category.iconColor}`} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Enrollment CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Elevate Your Knowledge?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
          >
            Contact us to learn more about our courses and start your journey towards academic excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Contact an Advisor
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;