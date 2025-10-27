export const lightTheme = {
  background: '#FFFFFF',
  backgroundSecondary: '#F7F9FC',
  text: '#2C3E50',
  textSecondary: '#7F8C8D',
  border: '#E1E8ED',
  shadow: 'rgba(0, 0, 0, 0.1)',
  cardBackground: 'rgba(255, 255, 255, 0.95)',
  glassBackground: 'rgba(255, 255, 255, 0.1)',
  gradientStart: '#667EEA',
  gradientEnd: '#764BA2',
};

export const darkTheme = {
  background: '#1A1A2E',
  backgroundSecondary: '#16213E',
  text: '#EAEAEA',
  textSecondary: '#BDC3C7',
  border: '#34495E',
  shadow: 'rgba(0, 0, 0, 0.5)',
  cardBackground: 'rgba(30, 30, 46, 0.95)',
  glassBackground: 'rgba(0, 0, 0, 0.2)',
  gradientStart: '#4A00E0',
  gradientEnd: '#8E2DE2',
};

export const sentimentColors = {
  positive: {
    primary: '#27AE60',
    light: '#2ECC71',
    dark: '#229954',
    gradient: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
  },
  negative: {
    primary: '#E74C3C',
    light: '#EC7063',
    dark: '#C0392B',
    gradient: 'linear-gradient(135deg, #EC7063 0%, #E74C3C 100%)',
  },
  neutral: {
    primary: '#95A5A6',
    light: '#BDC3C7',
    dark: '#7F8C8D',
  },
};

export const animations = {
  transition: {
    default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: 'all 0.15s ease-in-out',
    slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  spring: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  },
};
