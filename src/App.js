import "./App.css"
import React from "react"
import Select from "react-select"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([])
  const [select, setSelected] = useState("")

  const getData = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/berry")
    const json = await res.json()
    const result = json.results.map((data) => {
      return {
        value: data.name,
        label: data.name,
      }
    })
    setData(result.sort((a, b) => a.label.localeCompare(b.label)))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <h1>POKEMON WORLD</h1>
      <Select options={data} onChange={(e) => setSelected(e.value)} />
      <h1>{select}</h1>
    </div>
  )
}

export default App
