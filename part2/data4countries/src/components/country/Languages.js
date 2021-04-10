import React from 'react'
const Languages = (country) => {
    console.log("country is in langs", country);
    console.log("country is in langs", country.country.languages);

    return(
        <div>
            <b>languages</b>
            <ul>
            {country.country.languages.map( lang => {
                return (
                    <li key={lang.iso639_1}>
                        {lang.name}
                    </li>
                ) 
            })}
            </ul>

        </div>
    )
}
export default Languages