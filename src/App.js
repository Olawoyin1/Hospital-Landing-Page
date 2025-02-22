import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ScrollToTop from './ScrollToTop';
import Home from './Pages/Home.jsx';
import SharedLayout from './Components/SharedLayout.jsx'
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import { HelmetProvider } from "react-helmet-async";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <HelmetProvider>
      <Routes>

        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />

          <Route path='appointment' element={<Contact />} />

          <Route path="*" element={<ErrorPage />} />

        </Route>
      </Routes>
      </HelmetProvider>
    </Router>
  );
}

export default App;
