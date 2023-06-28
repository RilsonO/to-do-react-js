import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Home } from './pages/Home';
import { ToDoContextProvider } from './contexts/ToDoContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToDoContextProvider>
        <Home />
      </ToDoContextProvider>
    </ThemeProvider>
  );
}
