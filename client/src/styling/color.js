import { createTheme } from '@material-ui/core/styles';

const ColorTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#03989e',
        },
        secondary: {
          main: '#e1bb92',
        },
        background: {
          default: '#eae9e8',
        },
        error: {
          main: '#ff8c82',
        },
        warning: {
          main: '#eabd78',
        },
        info: {
          main: '#427c7e',
        },
        success: {
          main: '#ade8af',
        },
      },
});

export default ColorTheme;