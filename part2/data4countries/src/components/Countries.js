import React from 'react'

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
                countryArr.push(country.name)
            }
        }
        return countryArr
    }
    const queryCountries = searchCountries(query)
    console.log(queryCountries);

    const displayCountries = (c) => {
        
    }


    return(
        <div>

        </div>
    )
}
export default Countries