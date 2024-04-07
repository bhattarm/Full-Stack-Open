
function CountryLine(props) {
    const countryName = props.country;

    function handleShowButton(countryToShow) {
        props.buttonClick(countryToShow);
    }

    return (
        <li>{countryName}&nbsp;<button onClick={() => handleShowButton(countryName)}>show</button></li>
    )
}

export default CountryLine;