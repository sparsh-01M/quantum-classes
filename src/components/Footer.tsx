import { NavLink } from 'react-router-dom';
import { Atom, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white z-10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Atom size={32} className="text-primary-400" />
              <span className="ml-2 text-2xl font-bold">Quantum Classes</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering minds through excellence in mathematics, science, and computer education.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/sparsh-singhal-61550121b/" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/_._sparsh/" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/sparsh_1303" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Courses</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Mathematics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Science
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Computer Science
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Madhav Palace, 1st floor, Sikandra, Agra.</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 8077534280</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">singhalsparsh133@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Quantum Classes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;