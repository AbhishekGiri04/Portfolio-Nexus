import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Target, Lightbulb, MessageSquare, Handshake, Zap, ArrowRight, Calendar, Award } from 'lucide-react';

const skillCategories = [
  { name: "Communication", icon: <MessageSquare className="w-5 h-5" />, color: "bg-blue-500" },
  { name: "Leadership", icon: <Users className="w-5 h-5" />, color: "bg-emerald-500" },
  { name: "Critical Thinking", icon: <Lightbulb className="w-5 h-5" />, color: "bg-purple-500" },
  { name: "Teamwork", icon: <Handshake className="w-5 h-5" />, color: "bg-orange-500" },
  { name: "Problem Solving", icon: <Target className="w-5 h-5" />, color: "bg-red-500" },
  { name: "Adaptability", icon: <Zap className="w-5 h-5" />, color: "bg-cyan-500" }
];

function SoftSkills() {
  const weekData = [
    {
      week: 1,
      title: "Professional Communication & Critical Decision Making",
      focus: "Communication & Ethics",
      description: "Developed foundational communication skills through structured self-introduction exercises and ethical decision-making scenarios. Enhanced confidence in professional presentations and strengthened analytical thinking through action-reaction case studies.",
      skills: ["Public Speaking", "Ethical Decision Making", "Active Participation", "Professional Confidence"],
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600",
      bgPattern: "from-blue-50 to-cyan-50"
    },
    {
      week: 2,
      title: "Strategic Resume Development & Professional Branding",
      focus: "Career Development",
      description: "Mastered professional resume writing techniques, including targeted content creation, industry-specific formatting, and strategic keyword optimization. Developed understanding of personal branding and professional presentation standards.",
      skills: ["Resume Writing", "Professional Branding", "Content Strategy", "Industry Standards"],
      icon: <Award className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-600",
      bgPattern: "from-emerald-50 to-teal-50"
    },
    {
      week: 3,
      title: "Perception Management & Collaborative Leadership",
      focus: "Leadership & Perception",
      description: "Enhanced professional resume formatting and explored perception psychology in workplace dynamics. Developed collaborative leadership skills through interactive law-making exercises, strengthening debate and consensus-building abilities.",
      skills: ["Perception Management", "Collaborative Leadership", "Debate Skills", "Consensus Building"],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-600",
      bgPattern: "from-purple-50 to-indigo-50"
    },
    {
      week: 4,
      title: "Creative Problem Solving & Emotional Intelligence",
      focus: "Creativity & EQ",
      description: "Developed rapid creative thinking and positive framing techniques through time-constrained storytelling exercises. Enhanced emotional intelligence and learned to maintain optimistic perspectives under pressure—key qualities for professional success.",
      skills: ["Creative Thinking", "Emotional Intelligence", "Positive Framing", "Quick Decision Making"],
      icon: <Lightbulb className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      bgPattern: "from-orange-50 to-red-50"
    },
    {
      week: 5,
      title: "Strategic Teamwork & Collaborative Problem Solving",
      focus: "Teamwork & Strategy",
      description: "Strengthened collaborative problem-solving through strategic team challenges. Developed effective communication protocols, strategic planning methodologies, and collective decision-making frameworks essential for high-performing teams.",
      skills: ["Strategic Planning", "Team Collaboration", "Collective Decision Making", "Communication Protocols"],
      icon: <Handshake className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600",
      bgPattern: "from-pink-50 to-rose-50"
    },
    {
      week: 6,
      title: "Ethical Leadership & Crisis Management",
      focus: "Ethics & Crisis Management",
      description: "Tackled complex ethical dilemmas in high-pressure scenarios, developing crisis management and ethical leadership capabilities. Enhanced analytical thinking and moral reasoning skills essential for senior-level decision making in professional environments.",
      skills: ["Ethical Leadership", "Crisis Management", "Moral Reasoning", "Pressure Management"],
      icon: <Target className="w-6 h-6" />,
      gradient: "from-teal-500 to-cyan-600",
      bgPattern: "from-teal-50 to-cyan-50"
    },
    {
      week: 7,
      title: "Creative Storytelling & Professional Communication",
      focus: "Creative Communication",
      description: "Enhanced creative writing skills through visual storytelling exercises and learned strategic communication techniques for making lasting impressions on recruiters. Developed professional resume building expertise and exam preparation strategies.",
      skills: ["Creative Writing", "Visual Storytelling", "Positive Communication", "Resume Building"],
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600",
      bgPattern: "from-purple-50 to-pink-50"
    },
  ];

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
                      <Users className="w-9 h-9 text-white" />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-3xl animate-ping opacity-20"></div>
                </motion.div>
                <div className="absolute -inset-3 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-emerald-300 rounded-full animate-ping opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-300 rounded-full animate-bounce opacity-40"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Professional Development</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive soft skills development program focused on building essential 
              <span className="text-emerald-600 font-semibold"> leadership, communication, and strategic thinking</span> capabilities 
              for professional excellence.
            </p>
          </motion.div>

          {/* Skills Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Core Competencies Developed</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skillCategories.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className={`${skill.color} p-1.5 rounded-lg text-white`}>
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-800">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Sessions */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {weekData.map((session, index) => (
              <motion.div
                key={session.week}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative bg-gradient-to-br ${session.bgPattern} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white overflow-hidden`}
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
                  <div className={`w-16 h-16 bg-gradient-to-br ${session.gradient} rounded-full blur-xl`}></div>
                </div>
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="relative"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className={`w-16 h-16 bg-gradient-to-br ${session.gradient} text-white rounded-2xl shadow-xl flex items-center justify-center relative`}>
                          <div className={`absolute inset-0 bg-gradient-to-br ${session.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                          <div className="relative z-10">
                            {session.icon}
                          </div>
                          <div className={`absolute inset-0 bg-gradient-to-br ${session.gradient} rounded-2xl animate-ping opacity-20`}></div>
                        </div>
                      </motion.div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-500">Week {session.week}</span>
                        </div>
                        <div className={`inline-block px-3 py-1 bg-gradient-to-r ${session.gradient} text-white text-xs font-semibold rounded-full`}>
                          {session.focus}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-bold bg-gradient-to-br ${session.gradient} bg-clip-text text-transparent mb-4`}>
                    {session.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {session.description}
                  </p>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {session.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white/80 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:bg-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <Link
                    to={`/softskills/week${session.week}`}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${session.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    View Session Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SoftSkills;