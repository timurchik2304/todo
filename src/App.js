import './App.css';
import { Route,Routes } from 'react-router-dom';
import Character from './pages/character/character';
import DetailedInfo from './pages/detailed/detailedInfo';
function App() {

  return (
    <div className="App">
      <Routes>
       <Route  path='/' element={<Character/>} />
       <Route path='/detail' element={<DetailedInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
