import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import RootLayout from './components/layout/RootLayout.tsx';
import AppRoutes from './routes.tsx';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <RootLayout>
          <AppRoutes />
        </RootLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
