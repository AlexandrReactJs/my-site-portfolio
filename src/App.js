import './App.css';
import Header from './components/Header/Header';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from "react-router-dom";
import Aboutme from './components/Aboutme/Aboutme';
import PortfolioContainer from './components/Portfolio/PortfolioContainer';


const App = () => {
  return (
    <div className="App">
      <ParticleBackground />
      <Header />
      <div className='container'>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<PortfolioContainer/>} />
            <Route path='/aboutme' element={<Aboutme />} />
          </Routes>


        </div>
      </div>
    </div>
  );
}

export default App;
