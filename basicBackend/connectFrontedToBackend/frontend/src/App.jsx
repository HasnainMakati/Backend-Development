import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>Fronted Connect to Backend  </h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((jokes, index) => (
          <div key={jokes.id}>
            <h3>{index}. {jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
