import React from 'react';
import { motion } from 'framer-motion';
import MetricsCards from '../components/Dashboard/MetricsCards';
import { staggerContainer, fadeInUp } from '../animations/variants';

const Dashboard = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="p-6 md:p-8 lg:p-10"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          Sentiment IQ Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Amazon Alexa Review Analytics by Jay Prakash
        </p>
      </motion.div>

      {/* Metrics Cards */}
      <motion.div variants={fadeInUp}>
        <MetricsCards />
      </motion.div>

      {/* Placeholder for additional components */}
      <motion.div variants={fadeInUp} className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Sentiment Distribution Chart Placeholder */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Sentiment Distribution
          </h3>
          <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
            <div className="text-center">
              <svg className="mx-auto h-16 w-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="font-medium">Pie Chart Coming Soon</p>
              <p className="text-sm mt-1">92.3% Positive vs 7.7% Negative</p>
            </div>
          </div>
        </div>

        {/* Word Cloud Placeholder */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Word Cloud
          </h3>
          <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
            <div className="text-center">
              <svg className="mx-auto h-16 w-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <p className="font-medium">3D Word Cloud Coming Soon</p>
              <p className="text-sm mt-1">Interactive visualization of review keywords</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div variants={fadeInUp} className="mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Model Performance Summary
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Accuracy</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">95.43%</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Positive F1-Score</p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">0.98</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Negative F1-Score</p>
              <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">0.61</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
