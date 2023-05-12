const theme = {
  colors: {
    primary: {
      main: '#1E88E5',
      light: '#6AB7FF',
      transparent: 'rgba(30, 136, 229, 0.2)',
    },

    actions: {
      success: '#4CAF50',
      error: '#F44336',
      warning: '#FFC107',
    },

    modal: {
      overlay: '#00000099',
      background: '#303030',
    }
  },

  fonts: {
    family: {},

    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      "2xl": '1.5rem',
      "3xl": '1.875rem',
      "4xl": '2.25rem',
      "5xl": '3rem',
    },

    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    }
  }
} as const

export default theme