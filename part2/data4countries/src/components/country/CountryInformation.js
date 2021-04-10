import React from 'react'
import CountryName from './CountryName'
import Languages from './Languages'
import Flag from './Flag'
const CoutnryInformation = ({country}) => {
    return(
        <div>
            <CountryName
            country={country}
            ></CountryName>
            <Languages
            country={country}
            ></Languages>
            <Flag
            country={country}
            ></Flag>
        </div>
    )
}
export default CoutnryInformation