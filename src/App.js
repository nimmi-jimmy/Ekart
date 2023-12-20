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
import EditProfile from './screens/EditProfile/EditProfile';
import Bookings from './screens/Bookings/Bookings';
import Feedback from './screens/Feedback/Feedback';
import Admin from './screens/Admin/Admin';


function App() {

  // const Customer = () => {
  //   <Routes>
  //     <Route path="/Home" element={<Home />} />
  //     <Route path="/Signin" element={<Signin />} />
  //     <Route path="/Signup" element={<Signup />} />
  //     <Route path="/Works" element={<Works />} />
  //     <Route path="/Search" element={<Search />} />
  //     <Route path="/Profile" element={<Profile />} />
  //   </Routes>
  // }
  return (
      <div className="App">
            <Router>
                <Routes>
                    <Route
                       path='/' element={<Search />}
                    />
                    <Route
                        path="/Signup"
                        element={<Signup/>}
                    />
                    <Route
                        path="/Signin"
                        element={<Signin/>}
                    />
                    <Route
                        path="/Home"
                        element={<Home />}
                    />
                    <Route
                        path="/Profile"
                        element={<Profile />}
                    />
                    <Route
                        path="/Works"
                        element={<Works />}
                    />
                    <Route
                        path="/Chat"
                        element={<Message />}
                    />
                    <Route
                        path="/PhotoHome"
                        element={<PhotoHome />}
                    />
                    <Route
                        path="/Work"
                        element={<Work />}
                    />
                    <Route
                        path="/Sell"
                        element={<Sell />}
                    />
                    <Route
                        path="/EditProfile"
                        element={<EditProfile />}
                    />
                    <Route
                        path="/Bookings"
                        element={<Bookings />}
                    />
                    <Route
                        path="/Feedback"
                        element={<Feedback />}
                    />
                    <Route
                        path="/Admin"
                        element={<Admin />}
                    />
                </Routes>
            </Router>
      </div>
  );
}

export default App;
