import { useState } from 'react'
import './App.css'
import Entete from '../Entete/Entete'
import Liste from '../Liste/Liste'

export default function App() {

  let [sTitre, setTitre] = useState('Le titre de la page');

  setTimeout(()=>{
    setTitre('Liste');
  } ,2000)

  return (
    <>
      <Entete />
      <Liste titre={sTitre} />
      <div className="App">

      </div>
    </>
  )
}