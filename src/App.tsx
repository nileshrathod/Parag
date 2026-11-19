import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from './components/Layout';
import {ScrollToTop} from './components/ScrollToTop';
import {ThemeProvider} from './hooks/useTheme';
import {AboutPage} from './pages/AboutPage';
import {ContactPage} from './pages/ContactPage';
import {HomePage} from './pages/HomePage';
import {InsightsPage} from './pages/InsightsPage';
import {NotFoundPage} from './pages/NotFoundPage';
import {PrivacyPolicyPage} from './pages/PrivacyPolicyPage';
import {ServicesPage} from './pages/ServicesPage';
import {SolutionsPage} from './pages/SolutionsPage';
import {TermsOfUsePage} from './pages/TermsOfUsePage';

function getRouterBasename(): string {
  const baseUrl = import.meta.env.BASE_URL || '/';
  if (baseUrl === '/') {
    return '/';
  }
  return baseUrl.replace(/\/+$/, '');
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={getRouterBasename()}>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
