import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import InsertBook from './Pages/InsertBook';
import UpdateBook from './Pages/UpdateBook';
import ViewBook from './Pages/ViewBook';
import Login from './Login';
import Registration from './Registration';


function App() {
  return (
    <div className="App">
    <Router>
     

      <Routes>
         <Route exact path="/" element={<Login />} />
        <Route exact path="/registration" element={<Registration />} /> 
         <Route exact path="/Home" element={<Home />} />
        <Route exact path="/InsertBook" element={<InsertBook />} />
        <Route exact path="/updatebook/:bookid" element={<UpdateBook />} />
        <Route exact path="/viewbook/:bookid" element={<ViewBook />} /> 
      </Routes>
    </Router>
  </div>
  );
}

export default App;