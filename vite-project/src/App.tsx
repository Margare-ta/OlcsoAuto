import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [autok, setAutok] = useState([])

  useEffect(() => {
            async function load() {
                const response = await fetch('/olcsoAutok.json')
                const autok = await response.json();
                setAutok(autok.autok);
            }
            load()
        }, [])

  return (
    <>
      <h2>Autok listája</h2>
            <ul>
                {
                    autok.map((autok) => <li>
                        {autok.id} {autok.brand} - {autok.price}
                    </li>)
                }
            </ul>
    </>
  )
}

export default App
