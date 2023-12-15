import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './screens/Signin/Signin';
import Signup from './screens/Signup/Signup';
import Forgot from './screens/Forgot/Forgot';
import Works from './screens/Home/Home';
import Profile from './screens/Profile/Profile';
import Search from './screens/Search/Search';
import Message from './screens/Message/Message';
import PhotoHome from './screens/PhotoHome/Photo';
import Work from './screens/Work/Work';
import Sell from './screens/Sell/Sell';


function App() {

  const Customer = () => {
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Works" element={<Works />} />
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
          <Works />
          <Search /> */}
          {/* <Profile/> */}
          {/* <Message /> */}
          {/* <PhotoHome /> */}
          {/* <Work /> */}
          <Sell />
      </Router>
        {/* <Router>
          <Customer />
        </Router> */}
    </div>

   
  );
}

export default App;
