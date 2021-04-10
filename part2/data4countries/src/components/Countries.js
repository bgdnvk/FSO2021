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

    const displayCountries = (countries) => {
        if(countries.length === 1){
            //return (<div>{countries[0].name}</div>)
            return <CoutnryInformation
            country={countries[0]}
            ></CoutnryInformation>
        }
        if(countries.length <= 10){
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
        else{
            return(
                <div>
                    Too many results..
                </div>
            )
        }
    }

    return displayCountries(queryCountries)
}
export default Countries