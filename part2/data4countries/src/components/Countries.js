import React from 'react'

const Countries = ({countries, setCountries, query}) => {

    if(!countries){
        return(
            <div>
                <h3>loading data..</h3>
            </div>
        )
    }
    const displayCountries = countries


    return(
        <div>
            {displayCountries[0].name}
        </div>
    )
}
export default Countries