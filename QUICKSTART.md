# Quick Start Guide - Sentiment Analysis Dashboard

## 🎉 Welcome!

This guide will help you get the sentiment analysis dashboard up and running in just a few minutes.

## Prerequisites Check

Before starting, make sure you have:
- ✅ Node.js 16.x or higher → Check with: `node --version`
- ✅ npm 8.x or higher → Check with: `npm --version`

Don't have them? Download from: https://nodejs.org/

## Step-by-Step Installation

### 1. Navigate to Dashboard Directory

```bash
cd e:\project\capstone2\sentiment-dashboard
```

### 2. Install Dependencies

This will install all required packages (React, Tailwind, Framer Motion, etc.)

```bash
npm install
```

**Expected time:** 2-3 minutes

**Packages being installed:**
- React & React DOM (18.2.0)
- React Router (6.20.0)
- Tailwind CSS (3.4.0)
- Framer Motion (11.0.0)
- Material-UI (5.15.0)
- Recharts (2.10.0)
- Zustand (4.5.0)
- React Query (5.17.0)
- Axios (1.6.0)
- And more...

### 3. Start Development Server

```bash
npm start
```

**Expected time:** 30 seconds to compile

The app will automatically open at: **http://localhost:3000**

If the browser doesn't open automatically, manually navigate to the URL.

## What You'll See

Upon successful launch, you'll see:

1. **🌙 Dark/Light Theme Toggle** - Top right corner
2. **📊 Dashboard Metrics** - 4 animated cards showing:
   - Total Reviews (3,063)
   - Model Accuracy (95.43%)
   - Positive Reviews (92.3%)
   - Negative Reviews (7.7%)
3. **🎨 Glassmorphism Design** - Modern glass-like UI elements
4. **✨ Smooth Animations** - Framer Motion powered transitions

## Navigation Menu

The sidebar contains:
- 🏠 **Dashboard** - Main overview with metrics
- 🔍 **Analysis** - Live sentiment prediction
- 📈 **Statistics** - Detailed charts and graphs
- 📊 **Trends** - Time-series analysis
- 💾 **Data** - Review table and export
- 📄 **Reports** - Generate custom reports
- ⚙️ **Settings** - Configure preferences

## Testing the Features

### Test Dark Mode
1. Click the sun/moon icon in navbar
2. Watch smooth theme transition
3. All charts adapt to dark theme

### Test Metrics Animation
1. Refresh the page
2. Watch counters animate from 0 to target values
3. See progress bars fill smoothly

### Test Responsive Design
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Try different screen sizes
4. Notice sidebar collapse on mobile

## Common Issues & Solutions

### Issue: Port 3000 already in use

**Solution:**
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
set PORT=3001 && npm start
```

### Issue: Module not found errors

**Solution:**
```bash
# Clear node_modules and reinstall
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Issue: npm install fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force
npm install
```

### Issue: ESLint warnings

**Solution:**
These are just warnings and won't prevent the app from running. You can safely ignore them or fix them later.

## Development Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server (port 3000) |
| `npm build` | Create production build |
| `npm test` | Run test suite |
| `npm run lint` | Check code quality |
| `npm run format` | Format code with Prettier |

## Production Build

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

**Optimizations include:**
- Code minification
- Tree shaking
- Image optimization
- CSS purging (unused Tailwind classes removed)
- Bundle splitting

## File Structure Overview

```
sentiment-dashboard/
├── public/
│   ├── index.html          ← HTML template
│   └── manifest.json       ← PWA configuration
├── src/
│   ├── animations/         ← Framer Motion variants
│   ├── components/         ← React components
│   │   ├── Dashboard/      ← Dashboard widgets
│   │   └── Layout/         ← Navbar, Sidebar, Footer
│   ├── contexts/           ← React contexts (theme)
│   ├── styles/             ← CSS files
│   ├── App.js              ← Main app component
│   └── index.js            ← Entry point
├── package.json
└── tailwind.config.js
```

## Next Steps

### Recommended Order:

1. ✅ **Explore the Dashboard** - Check out the metrics and UI
2. 🎨 **Test Theme Switching** - Try dark and light modes
3. 📱 **Test Responsiveness** - View on different screen sizes
4. 🔍 **Navigate Pages** - Click through sidebar menu items
5. ⚙️ **Customize Settings** - Adjust preferences

### Future Enhancements:

- [ ] Connect to Python backend API
- [ ] Add real-time prediction interface
- [ ] Implement word cloud visualizations
- [ ] Add confusion matrix heatmap
- [ ] Enable CSV/PDF export
- [ ] Add voice input feature
- [ ] Implement batch file upload

## Performance Tips

### Development Mode:
- Hot module replacement is enabled
- Source maps for easier debugging
- React DevTools support

### Production Mode:
- Gzip compression recommended
- Serve from CDN for static assets
- Enable caching headers
- Use HTTPS in production

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + K` | Open search |
| `Ctrl + B` | Toggle sidebar |
| `Ctrl + /` | Toggle dark mode |
| `Esc` | Close modals |

## Resources

- **React Documentation:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion
- **Material-UI:** https://mui.com

## Getting Help

If you encounter issues:

1. Check the browser console (F12) for errors
2. Review the terminal output for build errors
3. Ensure all dependencies are installed correctly
4. Try clearing cache and reinstalling

## Success Checklist

Before you're done, verify:

- [ ] Dashboard loads without errors
- [ ] Theme toggle works smoothly
- [ ] Metrics animate on page load
- [ ] Sidebar navigation is functional
- [ ] Responsive on mobile view
- [ ] No console errors in DevTools

---

**🎉 Congratulations!**

Your sentiment analysis dashboard is now running. Enjoy exploring the modern UI and powerful features!

**Built with:** React • Tailwind CSS • Framer Motion • Material-UI

**Model Performance:** 95.43% Accuracy • 3,063 Reviews Analyzed

---

*Last Updated: October 27, 2025*
