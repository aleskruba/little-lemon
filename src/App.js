import About from './components/About';
import Login from './components/Login';
import Menu from './components/Menu';
import Order from './components/Order';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Header from './components/Header';
import Nav from './components/Nav';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <>
      <header className='header-div' data-testid="header-div">
        <Header />
      </header>
      <nav>
        <Nav />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
