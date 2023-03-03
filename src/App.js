// import logo from './logo.svg';
import './App.css';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './Components/Home';
import HookForm from './Components/HookForm';


function App() {
  return (
    <div >
      
      {/* <Router>
        <Routes>
          <Route exact path='/' element={<SignUp/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router> */}
      <HookForm/>
      
    </div>
  );
}

export default App;
