import { useState, useEffect } from 'react'
import axios from "axios"

type Client = {
  name: string;
  email: string;
}

function App() {
  const [clients, setClients] = useState<Client[]>([])

  useEffect(()=>{
    axios.get('http://localhost:5000/clients').then(response => {
      setClients(response.data);
      console.log(response.data)
    })
  }, [])


  return (
    <ul>
      {clients.map(repo => {
        return (
          <li key={repo.name}>
            <strong>{repo.name}</strong>
            <p>{repo.email}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App
