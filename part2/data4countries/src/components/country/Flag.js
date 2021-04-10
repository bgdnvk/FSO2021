import React from 'react'
const Flag = ({country}) => {
    return(
        <div>
            <img 
            style={{width:500}}
            src={country.flag} alt={"flag"}
            ></img>
        </div>
    )
}
export default Flag