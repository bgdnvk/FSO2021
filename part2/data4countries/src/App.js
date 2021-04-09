import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'

function App() {
  const countriesUrl = 'https://restcountries.eu/rest/v2/all'

  const [countries, setCountries] = useState('')
  const [query, setQuery] = useState('')

  const effectHook = () => axios
        .get(countriesUrl).then((res) => setCountries(res.data))
  useEffect(effectHook, [])

  console.log(countries);
  console.log(countries[0]);
  return (
    <div>
      <Search
      query={query} setQuery={setQuery}
      ></Search>

      <Countries
      countries={countries} setCountries={setCountries}
      query={query}
      >
      </Countries>
    </div>
  );
}

export default App;
