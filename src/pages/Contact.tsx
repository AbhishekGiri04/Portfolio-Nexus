import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessagesSquare, MapPin, Send, MessageCircle, Phone, ExternalLink, CheckCircle } from 'lucide-react';

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    description: "Drop me a line anytime",
    value: import.meta.env.VITE_CONTACT_EMAIL || "abhishekgiri1978@gmail.com",
    action: `mailto:${import.meta.env.VITE_CONTACT_EMAIL || "abhishekgiri1978@gmail.com"}`,
    gradient: "from-blue-500 to-cyan-600",
    bgPattern: "from-blue-50 to-cyan-50"
  },
  {
    icon: <MessagesSquare className="w-6 h-6" />,
    title: "Telegram",
    description: "Quick chat and updates",
    value: "@AbhishekGiri7",
    action: "https://t.me/AbhishekGiri7",
    gradient: "from-emerald-500 to-teal-600",
    bgPattern: "from-emerald-50 to-teal-50"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    description: "Based in beautiful India",
    value: "Haridwar, Uttarakhand",
    action: "#",
    gradient: "from-purple-500 to-pink-600",
    bgPattern: "from-purple-50 to-pink-50"
  }
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      form.append("_subject", `New message from ${formData.name}`);
      form.append("_captcha", "false");
      form.append("_template", "table");

      const response = await fetch(import.meta.env.VITE_FORMSUBMIT_URL || "https://formsubmit.co/abhishekgiri1978@gmail.com", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                  animate={{ 
                    rotate: [12, 8, 12],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    >
                      <MessageCircle className="w-9 h-9 text-white" />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-3xl animate-ping opacity-20"></div>
                </motion.div>
                <div className="absolute -inset-3 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-emerald-300 rounded-full animate-ping opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-300 rounded-full animate-bounce opacity-40"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Let's Connect</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on your next project? I'd love to hear from you. 
              <span className="text-emerald-600 font-semibold">Let's build something amazing together.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative bg-gradient-to-br ${method.bgPattern} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white overflow-hidden cursor-pointer`}
                onClick={() => method.action !== '#' && window.open(method.action, '_blank')}
              >
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-full blur-xl`}></div>
                </div>
                
                <div className="relative text-center">
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${method.gradient} text-white rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 relative`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                        className="relative z-10"
                      >
                        {method.icon}
                      </motion.div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} rounded-3xl animate-ping opacity-20`}></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full animate-bounce opacity-60"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-pulse opacity-40"></div>
                  </motion.div>
                  
                  <h3 className={`text-2xl font-bold bg-gradient-to-br ${method.gradient} bg-clip-text text-transparent mb-2`}>
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium mb-3">{method.description}</p>
                  <p className="text-gray-800 font-semibold">{method.value}</p>
                  
                  {method.action !== '#' && (
                    <div className="mt-4 flex items-center justify-center text-gray-500 group-hover:text-gray-700 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span className="text-sm">Click to connect</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send a Message</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a specific project in mind? Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
