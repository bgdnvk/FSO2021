import React from 'react'

const CountryName = ({country}) => {
    return(
        <div>
            <h1>
                {country.name}
            </h1>
            <p>
                capital: {country.capital}
            </p>
            <p>
                population: {country.population}
            </p>
        </div>
    )
}
export default CountryName