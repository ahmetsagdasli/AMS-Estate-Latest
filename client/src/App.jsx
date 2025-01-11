import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn'; // Corrected from "SingIn"
import Header from './components/Header';

const App = () => {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-up" element={<SignUp />} /> {/* Fixed */}
        <Route path="/sign-in" element={<SignIn />} /> {/* Fixed */}
      </Routes>
    </Router>
  );
};

export default App;
