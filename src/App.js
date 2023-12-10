import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './screens/Signin/Signin';
import Signup from './screens/Signup/Signup';
import Forgot from './screens/Forgot/Forgot';
import MainHome from './screens/Home/Home';
import Profile from './screens/Profile/Profile';
import Search from './screens/Search/Search';

function App() {

  const Homes = () => {
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Works" element={<MainHome />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  }
  return (
    <div className="App">
      <Router>
          <Home/>
          {/* <Signin/>
          <Signup/>
          <Forgot/>
          <MainHome />
          <Search /> */}
          <Profile/>
      </Router>
        {/* <Router>
          <Homes />
        </Router> */}
    </div>

   
  );
}

export default App;
