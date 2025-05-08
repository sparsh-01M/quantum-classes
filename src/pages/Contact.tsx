import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 5000);
  };

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Have questions about our courses or want to schedule a consultation?
            We're here to help you on your educational journey.
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="opacity-90 mb-8">
                  We'd love to hear from you. Fill out the form or reach out to us using the contact information below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                        <MapPin size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Our Location</h3>
                      <p className="mt-1 opacity-80">
                        Madhav Palace, 1st Floor,<br />
                        Sikandra, Agra
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                        <Mail size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Email Us</h3>
                      <p className="mt-1 opacity-80">
                        singhalsparsh133
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                        <Phone size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Call Us</h3>
                      <p className="mt-1 opacity-80">
                        +91 8077534280<br />
                        +91 9897201580
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Operating Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="text-gray-900 font-medium">3:00 PM - 8:00 PM</span>
                    <span className="text-gray-900 font-medium">6:00 AM - 9:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="text-gray-900 font-medium">6:00 AM - 9:00 AM</span>
                    <span className="text-gray-900 font-medium">4:00 PM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="text-gray-900 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-xl p-8"
            >
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-20 h-20 mb-6 rounded-full bg-accent-100 flex items-center justify-center">
                    <CheckCircle size={40} className="text-accent-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        >
                          <option value="">Select a subject</option>
                          <option value="Course Inquiry">Course Inquiry</option>
                          <option value="Admission">Admission</option>
                          <option value="Consultation">Consultation</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-md shadow-md flex items-center justify-center transition-colors duration-300"
                    >
                      <Send size={18} className="mr-2" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our state-of-the-art campus and experience the Quantum Classes difference in person.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl h-96 bg-white p-2">
            {/* Replace with an actual map component in a real application */}
            <div className="bg-gray-300 w-full h-full flex items-center justify-center">
              <p className="text-gray-700 text-lg">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get quick answers to common questions about our courses and admission process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What are the class timings?</h3>
                <p className="text-gray-600">
                  We offer flexible class timings, including weekday evenings and weekend sessions. Specific schedules are available upon inquiry and depend on the course you're interested in.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer online courses?</h3>
                <p className="text-gray-600">
                  Yes, we offer both in-person and online learning options. Our online courses provide the same quality education with interactive virtual classrooms and digital resources.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What age groups do you cater to?</h3>
                <p className="text-gray-600">
                  We offer programs for middle school, high school, and college students, as well as professional development courses for adults looking to enhance their skills.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">How much do courses cost?</h3>
                <p className="text-gray-600">
                  Course fees vary depending on the subject, level, and duration. We strive to make quality education accessible, and financial aid options are available for qualifying students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;