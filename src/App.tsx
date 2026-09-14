import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Work from './pages/Work';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import SignalLoopPage from './pages/SignalLoopPage';
import AuditPage from './pages/AuditPage';
import BlueprintPage from './pages/BlueprintPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          
          {/* Direct service redirect for Performance Marketing */}
          <Route path="/performance-marketing" element={<Navigate to="/services/performance-marketing" replace />} />
          
          {/* Separate pages for sections */}
          <Route path="/signal-loop" element={<SignalLoopPage />} />
          <Route path="/audit" element={<AuditPage />} />
          <Route path="/blueprint" element={<BlueprintPage />} />
          
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
