import { motion } from "framer-motion";
import { Target, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Week6() {
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
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Target className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Week 6: Situation-Reaction – Ethical Space Mission Dilemma
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This session featured a group activity called 'Situation-Reaction,' where we tackled an ethical crisis aboard a damaged spacecraft heading to Jupiter.
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
              With oxygen running out, groups had to debate which crew member should sacrifice themselves to save others. The activity sharpened our analytical thinking, ethical decision-making, teamwork, and problem-solving under pressure.
            </p>
            <p>
              This exercise reminded us of the emotional and moral weight behind real-life decisions, emphasizing the importance of ethical reasoning and collaborative problem-solving in crisis situations.
            </p>
          </div>
        </motion.div>

        {/* Learning Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 border border-teal-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Learning Outcomes</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Analytical Thinking</h3>
                <p className="text-gray-700">Strengthened ability to analyze complex situations and evaluate multiple perspectives.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ethical Decision-Making</h3>
                <p className="text-gray-700">Developed framework for making morally sound decisions in challenging circumstances.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pressure Management</h3>
                <p className="text-gray-700">Enhanced ability to maintain clarity and make rational decisions under intense pressure.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Collaborative Problem-Solving</h3>
                <p className="text-gray-700">Improved skills in working with others to address complex moral and practical challenges.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Emotional Intelligence</h3>
                <p className="text-gray-700">Gained deeper understanding of the emotional and moral dimensions of leadership decisions.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Week6;