import './App.css';

import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import PokemonDetails from './pages/PokemonDetails/pokemonDetails';



function App() {
  return (
    <div className="App">



      <section className='contain'>

        <Routes>


            <Route path='/:name' element={<PokemonDetails/>}/>

        </Routes>

      </section>

      <Navbar/>
    
    </div>
  );
}

export default App;
