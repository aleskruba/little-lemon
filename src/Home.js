import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Specials from './components/Specials';

function Home() {
  return (
    <>
    <div className='header-div'>
      <Header/>
      <Nav/>
    </div>
      <Main/>
      <Specials/>
      <Footer/>
    </>
  )
}

export default Home