import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import img1 from './images/banner.gif';
import CharacterList from './components/CharacterList';

function App() {
  
  const [ rickMortyType, setRickMortyType] = useState({})

  useEffect(() => {
    const randomID = Math.floor(Math.random() * 125) +1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomID}`)
      .then(respuesta => setRickMortyType(respuesta.data))
       //.then(respuesta => console.log(respuesta.data))
  }, []);
  //  console.log(setRickMortyType);
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <img src={img1} alt="" />
        <h1>Rick & Morty Website </h1>
        {/* <h1>Hallo Welt</h1>  */}
        <h2> .-.-.-.-.- </h2>
        <SearchBox setRickMortyType={setRickMortyType} />    
         <h2>{rickMortyType.name}</h2> 
         <h3><b>type: </b>{rickMortyType.type} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>dimension: </b>{rickMortyType.dimension} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>population: </b>{rickMortyType.residents?.length}</h3> 
         <h3>... ... ... ... ... ... ... ... ... ... ... </h3>  
         <CharacterList characters={rickMortyType.residents}/> 


      </header>
      <h1>
        to be continued...
      </h1>
    </div>
  );
  
}

export default App;
