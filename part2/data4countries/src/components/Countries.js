import React from 'react'
import CoutnryInformation from './country/CountryInformation'

const Countries = ({countries, query}) => {

    if(!countries){
        return(
            <div>
                <h3>loading data..</h3>
            </div>
        )
    }

    
    //get countries from the query
    const searchCountries = (q) => {
        const countryArr = []
        for(let country of countries){
            if(country.name.toLowerCase().includes(q.toLowerCase())){
                countryArr.push(country)
            }
        }
        return countryArr
    }
    const queryCountries = searchCountries(query)
    console.log(queryCountries);

    //show countries
    const displayCountries = (countries) => {
        return countries.length === 1 ? oneCountry(countries)
        : countries.length <= 10 ? tenOrLess(countries)
        : tooMany()
    }

    const tooMany = () => {
        console.log("triggered toomany");
        return ( <div>Too many results...</div>)
    }


    const oneCountry = (countries) => {
        return <CoutnryInformation
        country={countries[0]}
        ></CoutnryInformation>
    }
    const tenOrLess = (countries) => {
        return(
            <div>
                {countries.map( country => {
                    console.log(country)
                    return (
                        <div key={country.alpha2Code}>
                            {country.name}
                        </div>
                    )
                }) }
            </div>
        )
    }

    return displayCountries(queryCountries)
}
export default Countries