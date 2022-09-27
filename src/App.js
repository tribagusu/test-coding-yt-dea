import "./App.css"
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

  const users = (data) => {
    return data
  }

  return (
    <div className="App">
      <h1>POKEMON WORLD</h1>
      <input type="text" style={{ height: "30px" }} />
      {users(data)
        .sort()
        .map((item) => (
          <p>{item.name}</p>
        ))}
    </div>
  )
}

export default App
