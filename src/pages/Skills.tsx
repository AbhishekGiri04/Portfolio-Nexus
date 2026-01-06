import { motion } from 'framer-motion';
import { Award, Code, Database, Cloud, Brain, Palette, Server, ExternalLink } from 'lucide-react';

const skillCategories = {
  languages: {
    title: 'Programming Languages',
    icon: <Code className="w-6 h-6" />,
    gradient: 'from-blue-500 to-cyan-600',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'C', level: 95 },
      { name: 'C++', level: 85 },
      { name: 'Java', level: 70 },
    ]
  },
  frontend: {
    title: 'Frontend Development',
    icon: <Palette className="w-6 h-6" />,
    gradient: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Tailwind CSS', level: 80 },
    ]
  },
  backend: {
    title: 'Backend Development',
    icon: <Server className="w-6 h-6" />,
    gradient: 'from-purple-500 to-indigo-600',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'Flask', level: 80 },
      { name: 'FastAPI', level: 75 },
    ]
  },
  database: {
    title: 'Database Management',
    icon: <Database className="w-6 h-6" />,
    gradient: 'from-orange-500 to-red-600',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'Oracle', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Firebase Firestore', level: 80 },
      { name: 'SQLite', level: 75 },
    ]
  },
  cloud: {
    title: 'Cloud Platforms',
    icon: <Cloud className="w-6 h-6" />,
    gradient: 'from-sky-500 to-blue-600',
    skills: [
      { name: 'Vercel', level: 90 },
      { name: 'Render', level: 90 },
      { name: 'Netlify', level: 90 },
      { name: 'AWS', level: 75 },
      { name: 'Google Cloud Platform', level: 70 },
    ]
  },
  machineLearning: {
    title: 'Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'NumPy', level: 90 },
      { name: 'Pandas', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'NLTK', level: 85 },
      { name: 'OpenCV', level: 70 },
    ]
  }
};

const certificates = [
  {
    name: "Google Analytics Certification",
    issuer: "Google Digital Academy (Skillshop)",
    date: "2025",
    credentialUrl: "https://skillshop.credential.net/e671b972-c6d9-4407-8838-57b97a517754",
    image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4289BFE7A535DFA3E9A04C67A51B4D5227491E506D35344FF72B79807963F073",
    image: "https://www.oracle.com/a/ocom/img/social-og-oracle-logo-default-1200x1200.png"
  },
  {
    name: "JavaScript",
    issuer: "GeeksforGeeks",
    date: "2025",
    credentialUrl: "https://media.geeksforgeeks.org/courses/certificates/db4718f9c9ee6c54b07d5692ece37fb2.pdf",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20231228172727/gfg-image.jpg"
  },
  {
    name: "iOS Development for Beginners",
    issuer: "GeeksforGeeks",
    date: "2025",
    credentialUrl: "https://media.geeksforgeeks.org/courses/certificates/98cec0f8a7268783b0c96e8eb23d5486.pdf",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20231228172727/gfg-image.jpg"
  },
  {
    name: "MongoDB Developer's Toolkit",
    issuer: "GeeksforGeeks",
    date: "2025",
    credentialUrl: "https://media.geeksforgeeks.org/courses/certificates/f425b7abe83485b63959e0fe70d1bfd0.pdf",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20231228172727/gfg-image.jpg"
  },
  {
    name: "AWS - Solutions Architecture Job Simulation",
    issuer: "Forage",
    date: "2025",
    credentialUrl: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_F7YPS5zFmC6NbCpdW_1753384960078_completion_certificate.pdf",
    image: "https://cdn-assets.theforage.com/images/forage-schema-logo.png"
  },
  {
    name: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Forage",
    date: "2025",
    credentialUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_F7YPS5zFmC6NbCpdW_1753385998660_completion_certificate.pdf",
    image: "https://cdn-assets.theforage.com/images/forage-schema-logo.png"
  },
  {
    name: "Modernize Infrastructure and Applications with Google Cloud",
    issuer: "Simplilearn",
    date: "2025",
    credentialUrl: "https://simpli-web.app.link/e/qxXZJDRpcYb",
    image: "https://media.licdn.com/dms/image/sync/v2/D5627AQEi0joeysKmkg/articleshare-shrink_800/articleshare-shrink_800/0/1756387353166?e=2147483647&v=beta&t=dvDAt2kVn2BV4I36BDXKPCQ2PeW5ci_eMHKN0YcWAYQ"
  },
  {
    name: "Data Mining",
    issuer: "NPTEL",
    date: "2025",
    credentialUrl: "https://drive.google.com/file/d/12JMEcpC7Oc7PgIDUFAIxdJJzt37s_Dua/view?usp=sharing",
    image: "https://www.sngcet.ac.in/public/img/images/nptel32.jpg"
  },
  {
    name: "AWS Certifications",
    issuer: "AWS",
    date: "2025",
    credentialUrl: "https://drive.google.com/drive/folders/1Kni53s3Xp0lNZ8F9jcJLIq1gu_VaH2wX?usp=share_link",
    image: "https://www.paubox.com/hubfs/What%20is%20AWS.jpg"
  }
];

function SkillBar({ name, level, gradient }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 font-medium">{name}</span>
        <span className="text-sm font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`bg-gradient-to-r ${gradient} h-3 rounded-full shadow-sm`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

function Skills() {
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
                      <Code className="w-9 h-9 text-white" />
                    </motion.div>
                  </div>
                  
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-3xl animate-ping opacity-20"></div>
                </motion.div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-3 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-emerald-300 rounded-full animate-ping opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-300 rounded-full animate-bounce opacity-40"></div>
                <div className="absolute top-1/2 -right-1 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-50"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Skills & Expertise</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technical proficiency across multiple domains, backed by hands-on experience and industry certifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {Object.entries(skillCategories).map(([key, category], index) => (
              <motion.div 
                key={key} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="flex items-center mb-8">
                  <motion.div 
                    className="relative mr-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-3xl flex items-center justify-center shadow-xl relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full" style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                          backgroundSize: '8px 8px'
                        }}></div>
                      </div>
                      
                      {/* Animated Icon */}
                      <motion.div
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                        className="relative z-10 text-white"
                      >
                        {category.icon}
                      </motion.div>
                      
                      {/* Pulse Ring */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-3xl animate-ping opacity-30`}></div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-3xl opacity-20 blur-lg animate-pulse`}></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-bounce opacity-60"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-40"></div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <SkillBar key={idx} name={skill.name} level={skill.level} gradient={category.gradient} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-8 h-8 text-emerald-600" />
              <h2 className="text-4xl font-bold text-gray-900">Professional Certifications</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-recognized certifications validating expertise across various technology domains.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-2">Issued by {cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-6">Issued: {cert.date}</p>
                  <div className="flex gap-4">
                    <motion.a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify Credential
                    </motion.a>
                    <motion.button
                      onClick={() => {
                        if (cert.name === "AWS Certifications") {
                          window.open(cert.credentialUrl, '_blank');
                        } else {
                          window.open(`/Certificates/Certificate${index + 1}.png`, '_blank');
                        }
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open Certificate
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
