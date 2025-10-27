import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations/variants';

const Analysis = () => {
  const [reviewText, setReviewText] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeSentiment = () => {
    setIsAnalyzing(true);
    
    // Simulate analysis (in production, this would call your Python API)
    setTimeout(() => {
      // Simple keyword-based mock prediction
      const positiveWords = ['love', 'great', 'excellent', 'amazing', 'perfect', 'good', 'best', 'awesome'];
      const negativeWords = ['bad', 'terrible', 'horrible', 'worst', 'poor', 'hate', 'awful'];
      
      const lowerText = reviewText.toLowerCase();
      const positiveCount = positiveWords.filter(word => lowerText.includes(word)).length;
      const negativeCount = negativeWords.filter(word => lowerText.includes(word)).length;
      
      const isPositive = positiveCount > negativeCount;
      const confidence = Math.min(95, 60 + (Math.abs(positiveCount - negativeCount) * 10));
      
      setPrediction({
        sentiment: isPositive ? 'Positive' : 'Negative',
        confidence: confidence,
        color: isPositive ? 'text-green-600' : 'text-red-600',
        bgColor: isPositive ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'
      });
      setIsAnalyzing(false);
    }, 1500);
  };

  const sampleReviews = [
    "Love this product! Works perfectly and exceeded my expectations.",
    "Terrible quality. Stopped working after just one week.",
    "Amazing device! Best purchase I've made this year.",
    "Very disappointed. Not worth the price at all."
  ];

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
          Live Sentiment Analysis
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Enter a review to get real-time sentiment prediction
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <motion.div variants={fadeInUp}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Enter Review Text
            </h3>
            
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Type or paste a product review here..."
              className="w-full h-40 px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {reviewText.length} characters
              </span>
              
              <button
                onClick={analyzeSentiment}
                disabled={!reviewText.trim() || isAnalyzing}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  !reviewText.trim() || isAnalyzing
                    ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl active:scale-95'
                }`}
              >
                {isAnalyzing ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  'Analyze Sentiment'
                )}
              </button>
            </div>

            {/* Sample Reviews */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Try a sample review:
              </p>
              <div className="space-y-2">
                {sampleReviews.map((sample, index) => (
                  <button
                    key={index}
                    onClick={() => setReviewText(sample)}
                    className="w-full text-left px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-150 text-gray-700 dark:text-gray-300"
                  >
                    "{sample}"
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div variants={fadeInUp}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Prediction Results
            </h3>
            
            {!prediction ? (
              <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <div className="text-center">
                  <svg className="mx-auto h-16 w-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="font-medium">No prediction yet</p>
                  <p className="text-sm mt-1">Enter a review and click "Analyze Sentiment"</p>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                {/* Sentiment Badge */}
                <div className={`p-6 rounded-xl ${prediction.bgColor}`}>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Predicted Sentiment</p>
                  <p className={`text-4xl font-bold ${prediction.color}`}>
                    {prediction.sentiment}
                  </p>
                </div>

                {/* Confidence Score */}
                <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Confidence Score</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {prediction.confidence}%
                    </p>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${prediction.confidence}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    />
                  </div>
                </div>

                {/* Model Info */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Model:</span> LinearSVC with TF-IDF
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    <span className="font-semibold">Accuracy:</span> 95.43%
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    <span className="font-semibold">Training Data:</span> 3,063 Amazon Alexa reviews
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* How It Works */}
      <motion.div variants={fadeInUp} className="mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Text Preprocessing</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Reviews are cleaned, tokenized, and lemmatized to extract meaningful features.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Feature Extraction</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  TF-IDF vectorization converts text into numerical features for the model.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Prediction</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  LinearSVC classifier predicts sentiment with confidence score.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Analysis;
