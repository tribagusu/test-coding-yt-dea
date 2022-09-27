import "./App.css"
import React from "react"
import Select from "react-select"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/berry")
    const json = await res.json()
    const result = json.results.map((data) => {
      return {
        value: data.name,
        label: data.name,
      }
    })
    setData(result)
    console.log(result)
  }

  useEffect(() => {
    getData()
  }, [])

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]

  return (
    <div className="App">
      <h1>POKEMON WORLD</h1>
      <Select options={data} />
    </div>
  )
}

export default App
