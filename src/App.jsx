import { AnimatePresence } from 'framer-motion';
import Footer from './base/footer';
import Header from './base/header';
import './core/styles/style.scss';
import Landing from './pages/landing';
import Services from './pages/services';
import About from './pages/about';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './pages/admin';
import Login from './pages/login';
import ErrorPage from './pages/errorPage';

//TODO: Kolla alla länkar så de går rätt och fungerar

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
            <Route
              path="/samarbeten"
              element={<Services category={'samarbeten'} />}
            />
            <Route
              path="/workshop"
              element={<Services category={'workshop'} />}
            />
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
