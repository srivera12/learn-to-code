import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Form from './Form';
import NavBar from './NavBar';
import PageContent from './PageContent';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <NavBar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
