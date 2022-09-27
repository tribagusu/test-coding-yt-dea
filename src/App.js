import "./App.css"
import React from "react"
import Select from "react-select"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/berry")
      .then((res) => setData(res.data.results))
      .catch((err) => err.message)
  }, [])

  const options = data.map((data) => data.name)

  return (
    <div className="App">
      <h1>POKEMON WORLD</h1>
      <Select options={options} />
    </div>
  )
}

export default App
