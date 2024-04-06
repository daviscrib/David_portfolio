import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import javascriptLogo from './assets/javascript.svg'
import css3Logo from './assets/css3.svg'
import html5Logo from './assets/html5.svg'
import './App.css'
import '../index.js'
import NeumorphicButton from './components/NeumorphicButton.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <header className="App-header">
        {/* Vous pouvez ajuster le style de ce conteneur comme vous le souhaitez */}
        <h1>Bienvenue sur mon portfolio</h1>
        {/* Utilisation du bouton neumorphique */}
        <NeumorphicButton />
      </header>
    </div>

      <header className ="backgroundHeader">
        <img className ="photo" src="./assets/photodavid.jpg" alt="portrait David Lanzetti" title="David Lanzetti"></img>
      </header>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={html5Logo} className="logo" alt="Html5 logo" />
        </a>
        <a href="https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/CSS_basics" target="_blank">
          <img src={css3Logo} className="logo" alt="css-3 logo" />
        </a>
        <a href="https://www.w3schools.com/js/js_2023.asp" target="_blank">
          <img src={javascriptLogo} className="logo" alt="Javascript logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>David Lanzetti</h1>
      <div>
        <button className="neumorphic-button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h2>
          Student&nbsp;Full-stack Web&nbsp;Developer
        </h2>
        <nav>
          <button className="neumorphic-button">Jour/Nuit</button>        
        </nav>
      </div>
      <p className="read-the-docs">
      Découvrez mon portfolio mettant en avant quatre projets significatifs. De la conception d'un site e-commerce dynamique à la création d'une application de gestion des tâches, chaque projet reflète ma passion pour le développement web. Avec une approche centrée sur l'utilisateur et une attention minutieuse aux détails, ces réalisations démontrent ma polyvalence et mon engagement envers l'excellence technique.
      </p>
      <>
    
      </>
    </>
  )
}

export default App;
