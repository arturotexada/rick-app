import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const SearchBox = ({setRickMortyType}) => {

    const [searchingID, setSearchingID] = useState("type a location id") 

    const searchType = () => {
        console.log(searchingID)
        axios.get(`https://rickandmortyapi.com/api/location/${searchingID}`)
            //.then(respuesta => console.log(respuesta.data));
            .then(respuesta => setRickMortyType(respuesta.data));
    }

    return (
        <div>
            <input 
                type="Enter a location number" 
                onChange={e => setSearchingID(e.target.value)} 
                value={searchingID} 
            />
            <button onClick={searchType}>
                Search? Click here!
            </button>
        </div>
    );
};

export default SearchBox;