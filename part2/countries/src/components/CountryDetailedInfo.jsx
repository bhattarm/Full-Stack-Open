

function CountryDetailedInfo(props) {
    // call country detailed info
    const countryInfo = props.countryInfo;
    const weather = props.weather;
    let languages = [];
    for (const [_, value] of Object.entries(countryInfo.languages)) {
        languages.push(value);
    }
    console.log(languages);

    return (
        <div>
            <h1>{countryInfo.name.common}</h1>
            <p>Capital: {countryInfo.capital[0]}</p>
            <p>Area: {countryInfo.area}</p>
            <h4>Languages</h4>
            <ul>
                {languages.map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={countryInfo.flags.png} />
            <p>Temperature: {weather.current.temp}</p>
            <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} />
            <p>wind: {weather.current.wind}</p>
        </div>
    )
}

export default CountryDetailedInfo;