import About from './components/About';
import Login from './components/Login';
import Menu from './components/Menu';
import Order from './components/Order';
import { Routes,Route } from "react-router-dom";
import Home from './Home';
import Header from './components/Header';
import Nav from './components/Nav';
import Confirmation from './components/Confirmation';


function App() {
  return (
<> 
<div className='header-div' data-testid="header-div">
      <Header/>
      <Nav/>
    </div>
 <Routes>
        <Route path="/" element={<Home />}>  </Route>
        <Route path="/menu" element={<Menu />}> </Route>
        <Route path="/order" element={<Order />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
   </>

  );
}

export default App;
