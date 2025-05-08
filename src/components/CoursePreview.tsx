import { motion } from 'framer-motion';

interface Course {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  color: string;
}

interface CoursePreviewProps {
  course: Course;
  index: number;
}

const CoursePreview: React.FC<CoursePreviewProps> = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      
      <div className="absolute top-6 left-6 bg-white p-3 rounded-full shadow-md">
        {course.icon}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="pt-4 border-t border-gray-100">
          <span className="text-sm font-semibold text-gray-900">Theory + Practical</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CoursePreview