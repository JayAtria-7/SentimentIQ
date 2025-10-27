import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  MessageSquare,
  Settings,
  FileText,
  TrendingUp,
  Database,
} from 'lucide-react';
import { slideIn } from '../../animations/variants';

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: MessageSquare, label: 'Analysis', path: '/analysis' },
    { icon: BarChart3, label: 'Statistics', path: '/statistics' },
    { icon: TrendingUp, label: 'Trends', path: '/trends' },
    { icon: Database, label: 'Data', path: '/data' },
    { icon: FileText, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          variants={slideIn.left}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed left-0 top-16 bottom-0 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 shadow-lg z-40"
        >
          <div className="h-full overflow-y-auto py-6 px-3">
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 w-full"
                    >
                      <item.icon
                        className={`w-5 h-5 ${
                          isActive
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-slate-500 dark:text-slate-400 group-hover:text-blue-500'
                        }`}
                      />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
                        />
                      )}
                    </motion.div>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white"
            >
              <h3 className="font-semibold mb-2">Model Accuracy</h3>
              <div className="text-3xl font-bold">95.43%</div>
              <p className="text-sm text-blue-100 mt-1">Last updated today</p>
            </motion.div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
