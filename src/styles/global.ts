import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['purple-dark']};
  }
  
  body {
    background: ${({ theme }) => theme['gray-600']};
    color: ${({ theme }) => theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Inter, sans-serif;
  }
`;
