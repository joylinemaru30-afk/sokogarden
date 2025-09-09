import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Home from './components/Home';
import Addproduct from './components/Addproduct';
import Signin from './components/Signin';
import Notfound from './components/Notfound';
import'bootstrap/dist/css/bootstrap.min.css'
import Signupcomponent from './components/Signupcomponent';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>Sokogarden Buy &Sell Online</h1>

      </header>

      <Routes>
     < Route path="/"element={<Home/>} />
      <Route path="/addproduct"element={<Addproduct/>}/>
      <Route path="/signin"element={<Signin/>}/>
      <Route path="/signup"element={<Signupcomponent/>}/>
      
      <Route path="*"element={<Notfound/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
