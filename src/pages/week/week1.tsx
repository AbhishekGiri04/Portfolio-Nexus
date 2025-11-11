import { motion } from "framer-motion";
import { MessageSquare, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Week1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/softskills"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-emerald-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Professional Development
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Week 1: Introduction & Action-Reaction Activity
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The first week of our PESE class began with an introduction from the instructor, 
            followed by a detailed overview of the course. An introductory round was then conducted, 
            allowing each student to present themselves.
          </p>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Summary</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              During my turn, I initially faced difficulty expressing myself fluently and confidently. 
              My nervousness caused hesitation, but the instructor encouraged me to try again. 
              With repeated attempts, I gradually gained fluency and delivered my introduction with improved confidence.
            </p>
            <p>
              Subsequently, the class engaged in an interactive exercise titled{" "}
              <strong>"Action-Reaction: Critical Situation."</strong> 
              In this activity, various real-life professional and personal scenarios were presented, 
              requiring students to analyze situations critically and articulate their responses. 
              This exercise fostered decision-making, problem-solving, and ethical reasoning skills.
            </p>
          </div>
        </motion.div>

        {/* Learning Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Learning Outcomes</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Enhanced Communication Skills</h3>
                <p className="text-gray-700">Gained the ability to overcome initial nervousness while speaking in front of an audience.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Development of Self-Confidence</h3>
                <p className="text-gray-700">Understood the importance of persistence and practice in improving performance.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Critical Thinking</h3>
                <p className="text-gray-700">Learned to evaluate challenging situations logically and respond effectively.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ethical Decision-Making</h3>
                <p className="text-gray-700">Recognized the significance of responsible and ethical responses to real-world challenges.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Collaborative Learning</h3>
                <p className="text-gray-700">Benefited from active participation and diverse perspectives shared by peers.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Week1;