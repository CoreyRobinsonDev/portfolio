import { Global, css } from '@emotion/react';

import './App.css';
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const App = () => {
  return <>
    <Global styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
      html {  
        box-sizing: border-box;   
        font-size: 100%;
        font-family: 'Nanum Gothic', sans-serif;
        user-select: none;
      }
      *, *:before, *:after {  
        box-sizing: inherit; 
        text-decoration: none;
        margin: 0;  
        padding: 0;
      }
      :root {
        --primary-color: #11367A;
        --secondary-color: #EBEEFF;
        --complimentary-color: #AC4752;
        --text-color: white;
      }
      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        margin: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }
    `} />
    <Header />
    <main>
      <Projects />
      <Skills />
      <Contact />
    </main>  
  </>
}
export default App;
