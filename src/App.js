import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import Signin from './screens/Signin/Signin';
import Signup from './screens/Signup/Signup';
import Forgot from './screens/Forgot/Forgot';

function App() {
  return (
    <div className="App">
      <Router>
          <Home/>
          {/* <Signin/> */}
          <Signup/>
          {/* <Forgot/> */}
      </Router>
    </div>
  );
}

export default App;
