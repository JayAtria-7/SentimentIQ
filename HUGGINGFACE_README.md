---
title: Sentiment Analysis Dashboard
emoji: 📊
colorFrom: blue
colorTo: purple
sdk: docker
pinned: false
license: mit
---

# 📊 Amazon Alexa Sentiment Analysis Dashboard

![Accuracy](https://img.shields.io/badge/Accuracy-95.43%25-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![ML Model](https://img.shields.io/badge/Model-LinearSVC-orange)
![License](https://img.shields.io/badge/License-MIT-green)

A professional web dashboard for analyzing Amazon Alexa product reviews using Machine Learning. Built with React, Tailwind CSS, and powered by a LinearSVC model trained on 3,000+ real customer reviews.

## ✨ Features

- 📊 **Real-time Sentiment Analysis** - Analyze customer reviews instantly
- 🎨 **Modern UI/UX** - Beautiful interface with dark mode support
- 📈 **Interactive Visualizations** - Charts, metrics, and word clouds
- 🚀 **High Accuracy** - 95.43% accuracy on test data
- 🎯 **Live Predictions** - Test with sample reviews or your own text
- 📱 **Responsive Design** - Works perfectly on all devices

## 🎯 Model Performance

- **Accuracy:** 95.43%
- **F1 Score (Positive):** 0.98
- **F1 Score (Negative):** 0.61
- **Training Data:** 3,063 Amazon Alexa reviews
- **Algorithm:** LinearSVC with TF-IDF vectorization

## 🚀 Try It Out

Click the **"App"** tab above to try the live demo!

### Sample Reviews to Test:

**Positive:**
```
Love my new Echo! Works perfectly and sounds amazing. The voice recognition is spot on and Alexa understands me every time. Best purchase this year!
```

**Negative:**
```
Terrible product. Stopped working after 2 days. Customer service was unhelpful and I'm very disappointed with this purchase.
```

**Neutral:**
```
It's okay, nothing special but gets the job done. Setup was straightforward and it works as expected.
```

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - Modern UI library
- **Tailwind CSS 3.3** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Material-UI 5.14** - Component library
- **Recharts** - Data visualization
- **Zustand** - State management

### Machine Learning
- **scikit-learn** - LinearSVC classifier
- **NLTK** - Text preprocessing
- **TF-IDF** - Feature extraction
- **Pandas & NumPy** - Data processing

## 📊 Dashboard Sections

1. **Overview** - Key metrics and performance indicators
2. **Live Analysis** - Real-time sentiment prediction
3. **Visualizations** - Interactive charts and graphs
4. **Model Info** - Details about the ML model
5. **About** - Project information and credits

## 🎨 Screenshots

### Dark Mode
The dashboard features a beautiful dark mode for comfortable viewing:
- Smooth theme transitions
- Preserved theme preference
- Eye-friendly color scheme

### Interactive Charts
- Sentiment distribution pie chart
- Rating distribution bar chart
- Word frequency visualizations
- Confidence score meters

## 📖 How It Works

1. **Input:** User enters a product review text
2. **Preprocessing:** Text is cleaned and tokenized
3. **Vectorization:** TF-IDF converts text to numerical features
4. **Prediction:** LinearSVC model classifies sentiment
5. **Output:** Sentiment label with confidence score

## 🔬 Model Training

The model was trained on:
- **Dataset:** Amazon Alexa product reviews
- **Size:** 3,063 reviews (after cleaning)
- **Split:** 75% training, 25% testing
- **Preprocessing:** Lowercase, stopword removal, lemmatization
- **Features:** TF-IDF with 5000 max features

## 👤 Author

**Jay Prakash Kumar**

- 🌐 GitHub: [@JayAtria-7](https://github.com/JayAtria-7)
- 💼 LinkedIn: [Jay Prakash Kumar](https://www.linkedin.com/in/jay-prakash-kumar-1b534a260)
- 💻 LeetCode: [@JayAtria_7](https://leetcode.com/u/JayAtria_7/)
- 📧 Email: jay.prakash7.kr@gmail.com

## 📄 License

MIT License - feel free to use for your projects!

## 🙏 Acknowledgments

- Amazon Alexa Review Dataset
- React Community
- Tailwind CSS Team
- Hugging Face for hosting

## 🤝 Contributing

Contributions welcome! Visit the [GitHub repository](https://github.com/JayAtria-7/sentiment-analysis-dashboard) to contribute.

## 📧 Feedback

Have questions or suggestions? Open an issue on GitHub or contact me via email!

---

**⭐ If you like this project, please give it a star!**

**Built with ❤️ for Amazon Alexa Review Sentiment Analysis**

*Last Updated: October 27, 2025*
