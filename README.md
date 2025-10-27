# Sentiment Analysis Dashboard

> Modern, responsive React-based dashboard for Amazon Alexa Review Sentiment Analysis with 95.43% accuracy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JayAtria-7/sentiment-analysis-dashboard)
[![Netlify Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JayAtria-7/sentiment-analysis-dashboard)
[![Hugging Face Spaces](https://img.shields.io/badge/🤗%20Deploy%20to-Hugging%20Face-yellow)](https://huggingface.co/new-space)

![React](https://img.shields.io/badge/React-18.2-blue) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-cyan) ![License](https://img.shields.io/badge/License-MIT-green)

## 🔗 Quick Deploy (Free)

**Choose your preferred platform:**
- **Vercel** (Best for React): Click the "Deploy with Vercel" button above
- **Netlify** (Easy drag-drop): Click the "Deploy to Netlify" button above  
- **Hugging Face Spaces** (Best for ML): Click the Hugging Face button above - perfect for ML projects with GPU support
- **GitHub Pages** (Simple): Run `npm run deploy` (see [DEPLOYMENT.md](DEPLOYMENT.md))

## 🎨 Features

### Design & Visual

- **Dual Theme System** - Seamless light/dark mode with smooth transitions
- **Glassmorphism Effects** - Modern glass-like cards and panels
- **Responsive Design** - Mobile-first approach (320px to 1440px)
- **Animated UI** - Framer Motion animations throughout

### Core Functionality

- **Real-time Sentiment Analysis** - Instant prediction with confidence scores
- **Interactive Visualizations** - D3.js & Recharts powered charts
  - 3D Word Clouds (positive/negative)
  - Sentiment Distribution Pie Chart
  - Review Length Histograms
  - Time-series Trend Analysis
- **Advanced Filtering** - Search, sort, and filter reviews
- **Batch Analysis** - Drag-and-drop file upload
- **Export Capabilities** - Download reports as CSV/PDF

### Modern Features

- **Progressive Web App (PWA)** - Offline support & installable
- **Voice Input** - Speech-to-text for review input
- **Keyboard Shortcuts** - Power user optimizations
- **Real-time Search** - Debounced instant search

## 📊 Dashboard Components

### 1. Metrics Cards
- Total Reviews: 3,063
- Model Accuracy: 95.43%
- Positive/Negative Split
- Animated counters & progress bars

### 2. Data Visualizations
- **Word Clouds**: Interactive, clickable word filtering
- **Charts**: Animated rendering with smooth transitions
- **Heatmaps**: Sentiment intensity visualization
- **Confusion Matrix**: Model performance tracking

### 3. Live Predictor
- Text input with character counter
- Real-time preprocessing visualization
- Confidence score display
- Sample review suggestions

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- Modern browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Navigate to the dashboard directory**
```bash
cd e:\project\capstone2\sentiment-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🎯 Project Structure

```
sentiment-dashboard/
├── public/
│   ├── index.html
│   └── manifest.json (PWA config)
├── src/
│   ├── animations/
│   │   └── variants.js          # Framer Motion variants
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── MetricsCards.jsx
│   │   │   ├── SentimentPieChart.jsx
│   │   │   └── WordCloudViz.jsx
│   │   ├── Analysis/
│   │   │   ├── LivePredictor.jsx
│   │   │   ├── ReviewTable.jsx
│   │   │   └── ConfusionMatrix.jsx
│   │   ├── Layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Footer.jsx
│   │   └── Shared/
│   │       ├── AnimatedButton.jsx
│   │       ├── LoadingSkeleton.jsx
│   │       └── ToastNotification.jsx
│   ├── contexts/
│   │   └── ThemeContext.js
│   ├── hooks/
│   │   ├── useSentimentAnalysis.js
│   │   └── useTheme.js
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── Analysis.jsx
│   ├── styles/
│   │   ├── theme.js
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── package.json
└── tailwind.config.js
```

## 🛠️ Technology Stack

### Core
- **React 18.2** - UI framework with Hooks
- **TypeScript 5.0** - Type safety
- **React Router 6** - Navigation

### Animations
- **Framer Motion 11.0** - Declarative animations & gestures
- **React Spring 9.7** - Physics-based animations
- **Anime.js 3.2** - Complex keyframe animations

### Data Visualization
- **Recharts 2.10** - Responsive charts
- **D3.js 7.8** - Custom visualizations
- **react-wordcloud** - Word cloud component

### UI Components
- **Material-UI 5.15** - Component library
- **Tailwind CSS 3.4** - Utility-first styling
- **Styled Components 6.1** - CSS-in-JS

### State & Data
- **Zustand 4.5** - Lightweight state management
- **React Query 5.17** - Server state & caching
- **Axios** - HTTP client

### Additional
- **react-toastify** - Toast notifications
- **react-dropzone** - File upload
- **react-intersection-observer** - Scroll animations

## 🎨 Theme Configuration

The dashboard supports dual themes with customizable colors:

```javascript
// Light Theme
background: '#FFFFFF'
primary: '#2C3E50'
accent: '#E74C3C'

// Dark Theme  
background: '#1A1A2E'
primary: '#667EEA'
accent: '#EC7063'
```

Toggle theme with the moon/sun icon in the navbar.

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## ⚡ Performance Optimizations

- **Code Splitting** - Dynamic imports for routes
- **Lazy Loading** - Images and charts loaded on demand
- **Debouncing** - Search input optimization
- **Memoization** - React.memo for expensive renders
- **Virtual Scrolling** - Large lists optimization

## 🔐 Accessibility Features

- WCAG 2.1 AA compliant
- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- Focus indicators
- Color contrast ratios > 4.5:1

## 📈 Model Integration

The dashboard displays results from the Python sentiment analysis model:

**Current Performance:**
- Accuracy: 95.43%
- Positive Class F1-Score: 0.98
- Negative Class F1-Score: 0.61
- Total Reviews Processed: 3,063

## 🔄 Data Flow

1. **Data Loading**: Load preprocessed data from Part 1
2. **Model Results**: Display predictions from Part 2
3. **Real-time Analysis**: Send new reviews to backend API
4. **Visualization Update**: Animate chart transitions

## 🎯 Key Features Implementation

### Animated Counters
```jsx
useEffect(() => {
  // Smooth counter animation from 0 to target
  animateValue(0, targetValue, 2000);
}, []);
```

### Glassmorphism Cards
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Framer Motion Variants
```jsx
const cardVariants = {
  hover: { scale: 1.02, y: -5 },
  tap: { scale: 0.98 }
};
```

## 🚧 Future Enhancements

- [ ] Real-time WebSocket updates
- [ ] Advanced filtering with AI suggestions
- [ ] Export custom reports
- [ ] Multi-language support
- [ ] A/B testing dashboard
- [ ] Sentiment trend predictions
- [ ] Custom alert rules

## 📝 Available Scripts

```bash
npm start          # Development server
npm build          # Production build
npm test           # Run tests
npm run lint       # ESLint check
npm run format     # Prettier formatting
```

## 🐛 Troubleshooting

**Build errors**: Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port already in use**: Change port in package.json
```json
"start": "PORT=3001 react-scripts start"
```

## 📄 License

MIT License - feel free to use for your projects!

## � Author

**Jay Prakash Kumar**

- 🌐 GitHub: [@JayAtria-7](https://github.com/JayAtria-7)
- 💼 LinkedIn: [Jay Prakash Kumar](https://www.linkedin.com/in/jay-prakash-kumar-1b534a260)
- 💻 LeetCode: [@JayAtria_7](https://leetcode.com/u/JayAtria_7/)
- 📧 Email: jay.prakash7.kr@gmail.com

## 🙏 Acknowledgments

- Amazon Alexa Review Dataset
- React Community
- Tailwind CSS Team
- Framer Motion Contributors

## 🤝 Contributing

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or feedback:
- Open an issue on GitHub
- Email: jay.prakash7.kr@gmail.com

---

**⭐ If you like this project, please give it a star on GitHub!**

**Built with ❤️ for Amazon Alexa Review Sentiment Analysis**

*Last Updated: October 27, 2025*
