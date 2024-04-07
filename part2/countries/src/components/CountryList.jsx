import CountryLine from "./CountryLine";


function CountryList(props) {
    const filteredCountry = props.country;

    return (
        <ul>
            {filteredCountry.map(country => <CountryLine key={country} country={country} buttonClick={props.buttonClick} /> )}
        </ul>
    )

}

export default CountryList;