import { useEffect, useState } from 'react';
import Card from './Card';
//import axios from axios;

function Countries() {
    //const countries = [0,1,2,3,4,5,6];
    const API_ENDPOINT = "https://restcountries.com/v3.1/all";
    const [countries, setCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setCountries(data);
          } catch (error) {
            console.error("Error fetching countries:", error);
          }
        };
    
        fetchCountries();
    }, []);
    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return <>
    <h1>Country Flags and Names</h1>
    <div className='Search'> 
    <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    
    <div className="countriesGrid">
        {filteredCountries.map((country) => (
          <div key={country.cca3} className="countryCard">
            <img
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              className="countryFlag"
            />
            <p className="countryName">{country.name.common}</p>
          </div>
        ))}
        {filteredCountries.length === 0 && (
          <p className="noResults">No countries found</p>
        )}
    </div>
    
 
    </>
}

export default Countries