import { useEffect, useState } from 'react'
import countryservice from './services/countryservice.js';
import CountryList from './components/CountryList.jsx';
import CountryDetailedInfo from './components/CountryDetailedInfo.jsx';

function App() {
  const [countries, setCountries] = useState(null);
  const [newCoutryName, setNewCountryName] = useState('');
  const [filteredCountries, setFilteredCountry] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);
  const [weather, setWeather] = useState(null);
  

  // Get the list of countries
  useEffect(() => {
    if (countries === null) {
      console.log("Getting all countries");
      countryservice.getAll().then(response => {
        let tempCountry = new Array();
        response.data.forEach(country => tempCountry.push(country.name.common));

        setCountries(tempCountry);
      });
    }
  
  }, [countries]);

  useEffect(() => {
    if(countryInfo !== null) {
      countryservice.getWeather(countryInfo.latlng[0], countryInfo.latlng[1]).then(response => {
        setWeather(response.data);
      });
    }
    else {
      setCountryInfo(null);
    }
  }, [countryInfo]);

  useEffect(() => {
    console.log(`country name changed ${countryName}`);

    if (countryName !== null) {
      countryservice.getInfo(countryName).then(response => {
        setCountryInfo(response.data);
      });

    }
    else {
      setCountryInfo(null);
    }
  }, [countryName]);

  const handleCountryChange = (event) => {
    setNewCountryName(event.target.value);
    setFilteredCountry(countries.filter(country => country.toLowerCase().includes(event.target.value.toLowerCase())));
    if (filteredCountries && (filteredCountries.length === 1)) {
      console.log(`Only one country found ${filteredCountries[0]}`);
      setCountryName(filteredCountries[0]);
    }
    else {
      setCountryName(null);
    }
  }

  const showDetailButtonClick = (country) => {
    setCountryName(country);
    setFilteredCountry([country]);
  }


  if (filteredCountries) {
    if (countryInfo !== null && weather !== null && filteredCountries.length === 1) {
      return (
        <div>
          <form>
            find countries: <input value={newCoutryName} onChange={handleCountryChange} />
          </form>
          <CountryDetailedInfo countryInfo={countryInfo} weather={weather}/>
        </div>
      )
    }
    else if (filteredCountries.length > 10) {
      return (
        <div>
        <form>
          find countries: <input value={newCoutryName} onChange={handleCountryChange} />
        </form>
        <p>too many matches, please specify filter</p>
      </div>
      )
    }
    else {
      return (
        <div>
          <form>
            find countries: <input value={newCoutryName} onChange={handleCountryChange} />
          </form>
          <CountryList country={filteredCountries} buttonClick={showDetailButtonClick}/>
        </div>
      )
    }
  } else {
    return (
      <div>
      <form>
        find countries: <input value={newCoutryName} onChange={handleCountryChange} />
      </form>
      <p>specify filters</p>
    </div>
    )
  }
}

export default App
