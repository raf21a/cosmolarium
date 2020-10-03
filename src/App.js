import React from 'react';
import logo from './logo.svg';
import './App.css';

/* 
<div className="caixaAspectal caixa1">
                <div className="sextil"></div>
            </div>
            <div className="caixaAspectal caixa2">
                <div className="quadratura"></div>
            </div>
            <div className="caixaAspectal caixa3">
                <div className="trigono"></div>
            </div>
            <div className="caixaAspectal caixa4">
                <div className="oposicao"></div>
            </div>

*/

function App() {
  return (

    <div className="esferas">

        

        <div className="casasMundanas">
          <div className="casaMundana casa0"></div>
          <div className="casaMundana casa1"></div>
          <div className="casaMundana casa2"></div>
          <div className="casaMundana casa3"></div>
          <div className="casaMundana casa4"></div>
          <div className="casaMundana casa5"></div>
          <div className="casaMundana casa6"></div>
          <div className="casaMundana casa7"></div>
          <div className="casaMundana casa8"></div>
          <div className="casaMundana casa9"></div>
          <div className="casaMundana casa10"></div>
          <div className="casaMundana casa11"></div>

          <div className="coberturaCasas"></div>
        </div>

        <div className="zodiaco">
          <div className="divisordeSigno signo11">
              <div className="simboloZodiacal"></div>
          </div>
          <div className="divisordeSigno signo10">
              <div className="simboloZodiacal"></div>
          </div>
          <div className="divisordeSigno signo9">
              <div className="simboloZodiacal"></div>
          </div>
          <div className="divisordeSigno signo8">
              <div className="simboloZodiacal"></div>
          </div>
          <div className="divisordeSigno signo7">
              <div className="simboloZodiacal"></div>
          </div>
          <div className="divisordeSigno signo6">
              <div className="simboloZodiacal"></div>
          </div>
          <div className="divisordeSigno signo5">
              <div className="simboloZodiacal"></div>
          </div>
          <div className="divisordeSigno signo4">
              <div className="simboloZodiacal"></div>
          </div>
          <div className="divisordeSigno signo3">
              <div className="simboloZodiacal"></div>
          </div>
          <div className="divisordeSigno signo2">
              <div className="simboloZodiacal"></div>
          </div>
          <div className="divisordeSigno signo1">
              <div className="simboloZodiacal"></div>
          </div>
          <div className="divisordeSigno signo0">
              <div className="simboloZodiacal"></div>
          </div>

          <div className="zodiacoCobertura">

              
              

              <div className="esferasPlanetarias">


              <div className="aspectos">
                  <div className="caixaAspectal caixa1">
                      <div className="quadratura"></div>
                  </div>
                  <div className="caixaAspectal caixa2">
                      <div className="quadratura"></div>
                  </div>
                  <div className="caixaAspectal caixa3">
                      <div className="quadratura"></div>
                  </div>
                  <div className="caixaAspectal caixa4">
                      <div className="trigono"></div>
                  </div>
                  <div className="caixaAspectal caixa6">
                      <div className="oposicao"></div>
                  </div>
              </div>


                <div className="esferaPlanetaria esferaLunar">
                  <div className="planetas lua"></div>
                </div>
                <div className="esferaPlanetaria esferaMercurial">
                  <div className="planetas mercurio"></div>
                </div>
                <div className="esferaPlanetaria esferaVenuziana">
                  <div className="planetas venus"></div> 
                </div>
                <div className="esferaPlanetaria esferaSolar">
                  <div className="planetas sol"></div>
                </div>
                <div className="esferaPlanetaria esferaMarcial">
                  <div className="planetas marte"></div>  
                </div>
                <div className="esferaPlanetaria esferaJupiteriana">
                  <div className="planetas jupiter"></div>
                </div>
                <div className="esferaPlanetaria esferaSaturnina">
                  <div className="planetas saturno"></div> 
                </div>

                <div className="esferaTerrestre">
                  <div className="planetas terra"></div> 
                </div>
              </div>

          </div>
        </div>

        

        
    </div>

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
