import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import SinglePlayer from './pages/SinglePlayer';

function App() {
 return(
   <>
      <nav>
         <ul>
            <li><Link to="/pages">SinglePlayer</Link></li>
         </ul>
      </nav>
      <Routes>
         <Route path="/" element={<SinglePlayer />} />
      </Routes>
   </>
 );
};

export default App;
