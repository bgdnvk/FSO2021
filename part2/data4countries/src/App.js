import React, {useState, useEffect} from 'react'
import axios from 'axios'

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
      {
        countries ? countries[0].name: "loading"
      }
    </div>
  );
}

export default App;
