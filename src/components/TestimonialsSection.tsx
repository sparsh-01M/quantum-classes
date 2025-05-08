import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Dhruv Bansal',
    role: "Physics, St Peter's College",
    image: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'The physics program at Quantum Classes revolutionized my understanding of complex concepts. Their unique teaching approach made difficult topics accessible and engaging.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Kashish Mittal',
    role: 'Computer Science Student',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Quantum Classes provided me with the foundation I needed to excel in my computer science degree. The instructors were knowledgeable and genuinely cared about my progress.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Mathematics Enthusiast',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'I struggled with advanced mathematics until I joined Quantum Classes. Their step-by-step approach and personalized attention helped me overcome my challenges.',
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our students who have transformed their understanding and achieved academic success.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                    {[...Array(5 - testimonials[current].rating)].map((_, i) => (
                      <Star key={i + testimonials[current].rating} size={20} className="text-gray-300" />
                    ))}
                  </div>
                  <blockquote className="text-xl italic text-gray-700 mb-4">
                    "{testimonials[current].quote}"
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold text-lg text-gray-900">{testimonials[current].name}</p>
                    <p className="text-gray-600">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 md:-translate-x-12">
            <button
              onClick={prev}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 md:translate-x-12">
            <button
              onClick={next}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? 'bg-primary-600' : 'bg-gray-300'
              } transition-colors duration-300`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;