import { useState } from 'react'
import './App.css'
import Entete from '../Entete/Entete'
import Liste from '../Liste/Liste'

function App() {

  let [sTitre, setTitre] = useState('Le titre de la page');

  let prop = {
    titre: 'Le titre de la page',
    nbMax: 5,
    tri: 'nom',
    ordre: 'ASC'
  }

  setTimeout(()=>{
    setTitre('Nouveau Titre');
  } ,2000)

  return (
    <>
      <Entete />
      <Liste titre={sTitre} />
      <div className="App">
        {sTitre}
      </div>
    </>
  )
}

export default App
