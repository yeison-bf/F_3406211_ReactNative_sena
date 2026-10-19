import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Users } from '../users';

function App() {

  const [contador, setContador] = useState(0);

  const usuarios = {
    name: "Juan",
    apellidos: "Castro"
  }

  return (
    <>
      <div>
        <div>
          <h2>YEISON BARRIOS F</h2>
        </div>
        <div>
          <p>{contador}</p>
          <Users user={usuarios}/>
        </div>
        <div>
          <button onClick={() => setContador(contador+1)}>CONTAR</button>
          <button onClick={() => setContador(0)} >REINICIAR</button>
        </div>
      </div>

    </>
  )
}

export default App
