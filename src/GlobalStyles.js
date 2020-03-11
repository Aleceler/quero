import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Red Hat Text', sans-serif;
    }

    p, h2, h3, h4, h5, span {
        font-size: 14px;
    }

    body{
        -webkit-font-smoothing: antialiased;
    }

`;

export const theme = {
  colors: {
    primary: '#18ACC4',
    secondary: '#007A8D',
    primaryYellow: '#FDCB13',
    secondaryYellow: '#DE9E1F',
    verde: '#0FA866',
    text: '#1F2D30',
    background: '#FBFBFB',
    overlay: '31, 45, 48, 0.12',
  },
  fontSize: {
    extraSmall: '12px',
    small: '14px',
    medium: '16px',
    large: '20px',
    extraLarge: '24px',
  },
};
