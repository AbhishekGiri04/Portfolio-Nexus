import { motion } from "framer-motion";
import { PenTool, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Week7() {
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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
              <PenTool className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Week 7: Creative Storytelling & Professional Communication
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This session focused on creative writing skills and professional communication strategies to make a lasting impression on recruiters.
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
              During Week-07 of our PESE class, sir provided us with a detailed PDF containing multiple images. The task was to carefully observe the images and create a positive and impactful story based on them. This exercise was designed to enhance our creative thinking and help us learn how to present situations in a way that leaves a strong impression on recruiters.
            </p>
            <p>
              Sir emphasized that the way we frame and communicate our answers during interviews plays a crucial role in influencing recruiters' decisions. He explained that presenting ideas positively can create a lasting impact and improve our chances of selection.
            </p>
            <p>
              Towards the end of the class, sir also informed us about the upcoming mid-term exam and stressed the importance of revising the topics thoroughly. Additionally, he encouraged us to prepare a professional resume, as it is a key factor in job applications and reflects our skills, achievements, and professionalism.
            </p>
          </div>
        </motion.div>

        {/* Learning Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Learning Outcomes</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Creative Writing Skills</h3>
                <p className="text-gray-700">Learned how to convert visual inputs (images) into meaningful and inspiring stories.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Positive Communication</h3>
                <p className="text-gray-700">Understood the importance of presenting ideas with a positive approach to impress recruiters.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Interview Preparation</h3>
                <p className="text-gray-700">Gained awareness of how structured and impactful answers can improve selection chances in interviews.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Exam Readiness</h3>
                <p className="text-gray-700">Learned the importance of planning and revising in advance to perform well in mid-term exams.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resume Building</h3>
                <p className="text-gray-700">Understood how to create a professional resume that highlights strengths, achievements, and career goals effectively.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Week7;