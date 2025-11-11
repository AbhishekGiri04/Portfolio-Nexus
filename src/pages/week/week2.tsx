import { motion } from "framer-motion";
import { Award, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Week2() {
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
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Week 2: Resume Writing & Best Practices
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This session focused on resume writing, where we learned the purpose, structure, and key sections of a professional resume.
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
              Sir explained the difference between generic and targeted resumes, shared formatting guidelines, and highlighted important Do's and Don'ts. The class concluded with a task to create our own generic resume, applying the principles discussed.
            </p>
            <p>
              We learned about the importance of professional formatting, industry keywords, and customization for each job role. The session provided comprehensive insights into creating effective resumes that stand out to recruiters.
            </p>
          </div>
        </motion.div>

        {/* Learning Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Learning Outcomes</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Resume Structure</h3>
                <p className="text-gray-700">Mastered the key sections and organization of professional resumes.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Targeted vs Generic Resumes</h3>
                <p className="text-gray-700">Understood the importance of customizing resumes for specific job roles.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Formatting Guidelines</h3>
                <p className="text-gray-700">Learned professional formatting standards and visual presentation techniques.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Best Practices</h3>
                <p className="text-gray-700">Acquired knowledge of Do's and Don'ts in professional resume writing.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Practical Application</h3>
                <p className="text-gray-700">Applied learned principles to create a personal generic resume.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Week2;