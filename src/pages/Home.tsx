import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, GraduationCap, Code, Brain, Rocket, Award, MapPin, Calendar, FolderOpen, Trophy, Clock } from "lucide-react";

function Home() {
  const [submitted, setSubmitted] = useState(false);

  const personalInfo = {
    education: [
      {
        degree: "B.Tech in Computer Science (AI & ML)",
        institution: "Graphic Era Hill University, Dehradun",
        year: "Expected: July 2027",
        description: "Specializing in AI & ML with a focus on full-stack development.",
        icon: <Brain className="w-6 h-6 text-blue-600" />
      },
      {
        degree: "Class XII (CBSE)",
        institution: "Shri Ram Vidya Mandir, Haridwar",
        year: "2023",
        description: "Completed higher secondary education with a focus on science and mathematics.",
        icon: <Award className="w-6 h-6 text-green-600" />
      },
      {
        degree: "Class X (CBSE)",
        institution: "Shri Ram Vidya Mandir, Haridwar",
        year: "2021",
        description: "Completed secondary education with distinction.",
        icon: <Award className="w-6 h-6 text-purple-600" />
      },
    ],
  };

  const stats = [
    { 
      label: "Projects", 
      value: "30", 
      icon: <FolderOpen className="w-8 h-8" />, 
      gradient: "from-blue-500 to-cyan-600",
      bgPattern: "from-blue-50 to-cyan-50",
      description: "Completed Projects"
    },
    { 
      label: "Certifications", 
      value: "10", 
      icon: <Trophy className="w-8 h-8" />, 
      gradient: "from-emerald-500 to-teal-600",
      bgPattern: "from-emerald-50 to-teal-50",
      description: "Professional Certifications"
    },
    { 
      label: "Years Experience", 
      value: "2", 
      icon: <Clock className="w-8 h-8" />, 
      gradient: "from-purple-500 to-pink-600",
      bgPattern: "from-purple-50 to-pink-50",
      description: "Development Experience"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >

            
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
            >
              <span className="text-white">Abhishek </span>
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Giri
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-4">
                AI & ML Developer
              </h2>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span className="text-white/90 text-sm font-medium">Haridwar, Uttarakhand, India</span>
                </div>
              </div>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 max-w-5xl mx-auto leading-relaxed mb-12 font-light"
            >
              Pre-final year <span className="text-white font-medium">B.Tech CSE (AI & ML)</span> student at Graphic Era Hill University with <span className="text-emerald-400 font-medium">2+ years of experience</span> in Python, SQL, DBMS, web development, IoT, and cloud platforms. Skilled in building <span className="text-white font-medium">scalable full-stack applications</span> and intelligent AI/ML solutions using deep learning and automation. Results-driven problem solver passionate about creating <span className="text-emerald-400 font-medium">impactful, user-centric engineering solutions</span>.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-row gap-4 justify-center mb-16 flex-wrap"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="group px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-2xl font-semibold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>Explore My Work</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="px-10 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3"
                >
                  Let's Connect
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
            >
              {['Python', 'C++', 'Java', 'Javascript', 'SQL'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white/80 text-sm font-medium hover:bg-white/10 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
        

      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Milestones</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Key achievements and metrics that define my professional growth and technical expertise
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/journey"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                View Complete Journey →
              </Link>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative bg-gradient-to-br ${stat.bgPattern} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-full blur-xl`}></div>
                </div>
                
                <div className="relative text-center">
                  {/* Animated Icon Container */}
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${stat.gradient} text-white rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 relative`}>
                      {/* Icon Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                      
                      {/* Animated Icon */}
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
                        {stat.icon}
                      </motion.div>
                      
                      {/* Pulse Ring */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl animate-ping opacity-20`}></div>
                    </div>
                    
                    {/* Floating Particles */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full animate-bounce opacity-60"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-pulse opacity-40"></div>
                  </motion.div>
                  
                  {/* Animated Counter */}
                  <motion.h3 
                    className={`text-6xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.h3>
                  
                  {/* Label */}
                  <p className="text-gray-800 font-bold text-xl mb-2">{stat.label}</p>
                  <p className="text-gray-600 text-sm font-medium">{stat.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                    <motion.div
                      className={`h-1 bg-gradient-to-r ${stat.gradient} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AI & ML Engineering student passionate about leveraging cutting-edge technologies to transform complex ideas into intelligent, real-world solutions. Skilled in machine learning algorithms, data analysis, and full-stack development, delivering end-to-end solutions from concept to deployment. Driven by innovation and impact, creating scalable, user-centric applications that seamlessly bridge theory and practical implementation.
            </p>
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={`/images/Photo${num}.jpeg`} 
                  alt={`Photo ${num}`} 
                  className={`w-full h-80 object-cover ${num === 1 ? 'object-[center_20%] scale-125' : num === 3 ? 'object-[center_20%]' : 'object-top'} group-hover:scale-105 transition-transform duration-300`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {personalInfo.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                      {edu.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-500 text-sm">{edu.year}</span>
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/15 backdrop-blur-lg p-10 rounded-3xl border border-white/30 shadow-2xl"
          >
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">Get My Resume</h2>
              <p className="text-emerald-100 text-lg mb-8">Explore my professional journey, technical skills, and project portfolio in detail.</p>
            </div>

            {!submitted ? (
              <form
                action="https://formsubmit.co/abhishekgiri1978@gmail.com"
                method="POST"
                className="space-y-4 max-w-md mx-auto"
                onSubmit={() => setSubmitted(true)}
              >
                <input type="hidden" name="_subject" value="New Resume Download Request" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 bg-white/25 border border-white/40 rounded-xl text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/30 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 bg-white/25 border border-white/40 rounded-xl text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/30 transition-all"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                >
                  Request Resume <Download size={22} />
                </motion.button>
              </form>
            ) : (
              <div>
                <p className="text-green-300 font-semibold mb-6 text-lg">
                  ✅ Thank you! Your request has been submitted.
                </p>
                <motion.a
                  href="/AbhishekGiriResume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg"
                >
                  Download Resume <Download size={22} />
                </motion.a>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
