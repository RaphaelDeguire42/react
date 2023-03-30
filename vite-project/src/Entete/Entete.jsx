import './Entete.css'
import { useState } from 'react';
export default function Entete(){

   let [courriel, setCourriel] = useState('');
   let [connecter, setConnecter] = useState(false);

   function verifierCourriel(){
      console.log(courriel)
      if(courriel && !connecter){
         setConnecter(true)
      } else if(courriel && connecter){
         setConnecter(false)
      }
   }

   return(
      <header className="entete">
         <h1>Entête</h1>
         <span className="spacer"></span>
         <nav>
            Courriel: <input value={courriel} onChange={(e)=>{ setCourriel(e.target.value) }} type="text" className="inputText" ></input>
            <button onClick={(e)=>{ verifierCourriel() }}>{(connecter? 'Se déconnecter': 'Se connecter')}</button>
            <a href="">Accueil</a>
            <a href="">Liste</a>
         </nav>
      </header>
   );
}

