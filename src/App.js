
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContinentDetail from './pages/ContinentDetail';
import CountryDetailPage from './pages/countryDetailPage';
import DestinationDetail from './pages/DestinationDetail';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/continent/:continentId' element={<ContinentDetail />}></Route>
        <Route path='/continent/:continentId/country/:countryId' element={<CountryDetailPage />}></Route>
        <Route path='/continent/:continentId/country/:countryId/destination/:destinationId' element={<DestinationDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
