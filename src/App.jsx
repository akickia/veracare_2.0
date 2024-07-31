import { AnimatePresence } from 'framer-motion';
import Footer from './base/footer';
import Header from './base/header';
import './core/styles/style.scss';
import Landing from './pages/landing';
import Services from './pages/services';
import About from './pages/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/admin';
import Login from './pages/login';
import ErrorPage from './pages/errorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/behandlingar"
              element={<Services category={'behandlingar'} />}
            />
            <Route path="/yoga" element={<Services category={'yoga'} />} />
            <Route path="/event" element={<Services category={'event'} />} />
            <Route path="/om" element={<About />} />
            <Route path="/login" element={<Login />} exact />
            <Route path="/admin" element={<Admin />} exact />

            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
