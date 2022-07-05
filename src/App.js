import './App.css';
import Header from './components/Header/Header';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Portfolio from './components/Portfolio/Portfolio';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from "react-router-dom";
import Aboutme from './components/Aboutme/Aboutme';

const App = () => {
  return (
    <div className="App">
      <ParticleBackground />
      <Header />
      <div className='container'>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='/aboutme' element={<Aboutme />} />
          </Routes>


        </div>
      </div>
    </div>
  );
}

export default App;
