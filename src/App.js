import './App.css';

import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import PokemonDetails from './pages/PokemonDetails/pokemonDetails';
import Searchbar from './components/searchbar/searchbar';
import Error404 from './pages/404/404';
import Index from './pages/Index/index';



function App() {
  return (




    <div className="App">

      <div className='contenido_principal'>

        <Searchbar></Searchbar>

        <section className='contain'>

          <Routes>

          <Route path='/' element={<Index />} />
            <Route path='/:name' element={<PokemonDetails />} />
            <Route path="*" element={<Error404/>} />

          </Routes>

        </section>

      </div>

      <Navbar />

    </div>
  );
}

export default App;
