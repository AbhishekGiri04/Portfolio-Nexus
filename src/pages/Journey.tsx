import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Code, Brain, Rocket, Award, Target, TrendingUp, Users, Globe } from "lucide-react";

function Journey() {
  const journeyMilestones = [
    {
      year: "2021",
      title: "Foundation Years",
      subtitle: "Academic Excellence",
      description: "Completed Class X with distinction, laying the groundwork for my technical journey. Developed strong analytical and problem-solving skills.",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      achievements: ["Academic Excellence", "Mathematics Proficiency", "Logical Thinking Development"]
    },
    {
      year: "2023",
      title: "Technical Awakening",
      subtitle: "Higher Secondary Completion",
      description: "Completed Class XII with focus on science and mathematics. Discovered passion for computer science and artificial intelligence.",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      achievements: ["Science & Math Focus", "Programming Introduction", "AI Interest Development"]
    },
    {
      year: "2023-Present",
      title: "Professional Development",
      subtitle: "B.Tech in AI & ML",
      description: "Currently pursuing specialized education in Artificial Intelligence and Machine Learning at Graphic Era Hill University, building expertise in cutting-edge technologies.",
      icon: <Code className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-600",
      achievements: ["AI/ML Specialization", "Full-Stack Development", "Project Portfolio Building"]
    },
    {
      year: "Future",
      title: "Innovation & Impact",
      subtitle: "Industry Leadership",
      description: "Aspiring to become a leading AI engineer, contributing to breakthrough technologies and creating solutions that positively impact society.",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      achievements: ["Industry Innovation", "Technical Leadership", "Global Impact"]
    }
  ];

  const professionalHighlights = [
    {
      title: "Technical Expertise",
      description: "Proficient in Python, C++, Java, React.js, and Node.js with hands-on experience in AI/ML frameworks",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Project Portfolio",
      description: "25+ completed projects showcasing full-stack development and AI implementation capabilities",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-emerald-500 to-cyan-600"
    },
    {
      title: "Continuous Learning",
      description: "10 professional certifications and ongoing skill development in emerging technologies",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-orange-500 to-pink-600"
    },
    {
      title: "Collaborative Spirit",
      description: "Strong communication skills and experience working in team environments",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">My Professional </span>
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From academic excellence to professional expertise - a continuous evolution in 
              <span className="text-emerald-400 font-medium"> technology and innovation</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Online Professional Description */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Professional Profile</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-3xl shadow-xl border border-blue-100"
          >
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6 font-medium text-gray-800">
                <strong>Abhishek Giri</strong> - AI & Machine Learning Engineer | Full-Stack Developer | Innovation Enthusiast
              </p>
              
              <p className="mb-6">
                A passionate and dedicated <strong>AI & Machine Learning Engineering student</strong> at Graphic Era Hill University, 
                Dehradun, with a strong foundation in computer science and a keen interest in developing innovative technological solutions. 
                Currently pursuing B.Tech in Computer Science with specialization in AI & ML (Expected: July 2027).
              </p>

              <p className="mb-6">
                With <strong>2+ years of development experience</strong>, I have successfully completed <strong>25 comprehensive projects</strong>
                spanning full-stack web development, artificial intelligence, and machine learning applications. My technical expertise 
                includes proficiency in <strong>Python, C++, Java, React.js, and Node.js</strong>, complemented by hands-on experience 
                with modern AI/ML frameworks and cloud technologies.
              </p>

              <p className="mb-6">
                I hold <strong>10 professional certifications</strong> in various technology domains and maintain a strong commitment to 
                continuous learning and skill development. My approach combines theoretical knowledge with practical implementation, 
                focusing on creating scalable, user-friendly solutions that address real-world challenges.
              </p>

              <p className="mb-6">
                <strong>Core Competencies:</strong> Artificial Intelligence, Machine Learning, Full-Stack Development, 
                Data Analysis, Algorithm Design, Project Management, and Team Collaboration.
              </p>

              <p className="text-lg font-medium text-blue-800">
                <strong>Mission:</strong> To leverage cutting-edge AI and ML technologies to create innovative solutions that 
                drive meaningful impact and contribute to the advancement of technology for societal benefit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Highlights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 bg-gradient-to-r ${highlight.gradient} rounded-2xl text-white shadow-lg`}>
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Timeline</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A chronological overview of my educational and professional milestones
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {milestone.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="text-blue-600 font-bold text-lg">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-lg font-semibold text-gray-700 mb-4">{milestone.subtitle}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{milestone.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                      {milestone.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Let's Build the Future Together</h2>
            <p className="text-xl mb-8 text-blue-100">
              Ready to collaborate on innovative projects and create impactful solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 inline-block"
                >
                  View My Projects
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 inline-block"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Journey;