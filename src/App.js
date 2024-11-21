import About from './components/About';
import Login from './components/Login';
import Menu from './components/Menu';
import Order from './components/Order';
import Reservations from './components/Reservations';
import { Routes,Route } from "react-router-dom";
import Home from './Home';

function App() {
  return (
  <>  <Routes>
        <Route path="/" element={<Home />}>  </Route>
        <Route path="/reservations" element={<Reservations />}> </Route>
        <Route path="/menu" element={<Menu />}> </Route>
        <Route path="/order" element={<Order />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
    </Routes>
   </>

  );
}

export default App;
