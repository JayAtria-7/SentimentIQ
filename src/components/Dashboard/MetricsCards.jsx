import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Users,
  Star,
  Activity,
  CheckCircle,
} from 'lucide-react';
import { cardVariants, staggerContainer, counterAnimation } from '../../animations/variants';

const MetricsCards = () => {
  const [counts, setCounts] = useState({
    total: 0,
    accuracy: 0,
    positive: 0,
    negative: 0,
  });

  // Animated counter effect
  useEffect(() => {
    const targets = {
      total: 3063,
      accuracy: 95.43,
      positive: 2826,
      negative: 237,
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        total: Math.floor(targets.total * progress),
        accuracy: (targets.accuracy * progress).toFixed(2),
        positive: Math.floor(targets.positive * progress),
        negative: Math.floor(targets.negative * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const metrics = [
    {
      title: 'Total Reviews',
      value: counts.total.toLocaleString(),
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      change: '+12%',
      trending: 'up',
    },
    {
      title: 'Model Accuracy',
      value: `${counts.accuracy}%`,
      icon: CheckCircle,
      gradient: 'from-emerald-500 to-teal-500',
      change: '+2.3%',
      trending: 'up',
    },
    {
      title: 'Positive Reviews',
      value: counts.positive.toLocaleString(),
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500',
      percentage: ((counts.positive / counts.total) * 100).toFixed(1),
      trending: 'up',
    },
    {
      title: 'Negative Reviews',
      value: counts.negative.toLocaleString(),
      icon: TrendingDown,
      gradient: 'from-red-500 to-pink-500',
      percentage: ((counts.negative / counts.total) * 100).toFixed(1),
      trending: 'down',
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          className="relative group"
        >
          {/* Glass morphism card */}
          <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
            {/* Gradient overlay */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${metric.gradient} opacity-10 rounded-full blur-2xl`}></div>
            
            {/* Icon */}
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${metric.gradient} mb-4`}>
              <metric.icon className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                {metric.title}
              </p>
              <motion.h3
                variants={counterAnimation}
                className="text-3xl font-bold text-slate-800 dark:text-white mb-2"
              >
                {metric.value}
              </motion.h3>

              {/* Change indicator */}
              <div className="flex items-center gap-2">
                {metric.change && (
                  <span
                    className={`text-sm font-semibold ${
                      metric.trending === 'up'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {metric.change}
                  </span>
                )}
                {metric.percentage && (
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {metric.percentage}% of total
                  </span>
                )}
              </div>
            </div>

            {/* Animated progress bar */}
            {metric.percentage && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
              >
                <motion.div
                  className={`h-full bg-gradient-to-r ${metric.gradient}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.percentage}%` }}
                  transition={{ delay: index * 0.1 + 0.7, duration: 1 }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MetricsCards;
