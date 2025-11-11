import { motion } from "framer-motion";
import { Handshake, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Week5() {
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
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Handshake className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Week 5: The Coin Game – Teamwork & Strategy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The session featured a group activity called the 'Coin Game,' where participants worked in teams to move a coin step by step along a line without crossing limits.
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
              The challenge required collaboration, strategic planning, and effective communication. Through this exercise, we strengthened our teamwork, problem-solving, and leadership skills while learning the value of cooperation and collective effort.
            </p>
            <p>
              The activity emphasized the importance of clear communication, role distribution, and coordinated action in achieving team objectives under structured constraints.
            </p>
          </div>
        </motion.div>

        {/* Learning Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Learning Outcomes</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Enhanced Teamwork</h3>
                <p className="text-gray-700">Developed stronger collaboration skills and understanding of team dynamics.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Strategic Planning</h3>
                <p className="text-gray-700">Learned to develop and execute coordinated strategies under constraints.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Effective Communication</h3>
                <p className="text-gray-700">Improved ability to communicate clearly and coordinate actions within a team.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Problem-Solving Skills</h3>
                <p className="text-gray-700">Enhanced analytical thinking and creative solution development in group settings.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Leadership Development</h3>
                <p className="text-gray-700">Gained experience in guiding team efforts and taking initiative in collaborative environments.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Week5;