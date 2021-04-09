import React from 'react'

const Search = ({query, setQuery}) => {
    return(
        <div>
            <p>find countries</p>
            <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ></input>
        </div>
    )
}
export default Search