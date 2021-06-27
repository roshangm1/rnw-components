const palette = {
  primary: '#283444',

  black: '#000000',
  grey: '#69696a',
  red: '#de4141',
  green: '#2faf4a',

  white: '#FFFFFF',
  translucentWhite: 'rgba(255,255,255,0.73)',

  disabledText: '#8a8a8a',
};

const theme = {
  colors: {
    mainBackground: palette.white,
    cardBackground: palette.translucentWhite,
    primary: palette.primary,
    subtitle: '#646464',
    shadow: palette.black,
    error: palette.red,
    transparent: 'transparent',
    secondary: palette.grey,
    active: palette.green,
    white: palette.white,
    title: palette.white,
    disabledBackground: 'rgba(255,255,255, 0.3)',
    disabledText: palette.grey,
    success: palette.green,
    logoGreen: '#8CB900',
  },
  spacing: {
    xs: 4,
    s: 8,
    sm: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },

  textVariants: {
    defaults: {
      fontFamily: 'Helvetica Neue',
    },
    title: {
      color: 'title',
      fontSize: 20,
      fontWeight: 'bold',
    },
    subtitle: {
      color: 'subtitle',
      fontSize: 16,
    },
    buttonLabel: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
    },
    disabledText: {
      color: 'disabledText',
    },
  },

  cardVariants: {
    elevated: {
      padding: {
        phone: 'm',
        tablet: 'xl',
      },
      shadowColor: 'shadow',
      shadowOpacity: 0.16,
      shadowOffset: {width: 0, height: 1},
      shadowRadius: 6,
      elevation: 6,
      backgroundColor: 'mainBackground',
      borderRadius: 8,
    },
  },
  buttonVariants: {
    defaults: {
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    primary: {
      backgroundColor: 'primary',
    },
    secondary: {
      backgroundColor: 'white',
    },
  },
};

export type Theme = typeof theme;
export default theme;
