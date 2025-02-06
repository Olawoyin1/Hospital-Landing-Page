import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ScrollToTop from './ScrollToTop';
import Home from './Pages/Home.jsx';
import SharedLayout from './Components/SharedLayout.jsx'
import About from './Pages/About.jsx';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path='about' element={<About />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
