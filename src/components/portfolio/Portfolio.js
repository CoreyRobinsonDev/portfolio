import { animated } from 'react-spring';

import Skills from '../skills/Skills';
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import './portfolio.css';

const Portfolio = ({style, changeComponent}) => {
  
  return <animated.section style={style} className='portfolio-container'>
    <div className='portfolio-info-wrapper'>
      <h3 className='portfolio-title'>Portfolio</h3>
      <h1>Corey Robinson</h1>
      
        <a  rel="noreferrer" href='https://github.com/CoreyRobinsonDev' target='_blank'>{'=>>'}GitHub</a>
      <a rel="noreferrer" href='https://www.linkedin.com/in/corey-robinson-583787236/' target='_blank'>{'=>>'}LinkedIn</a>
    
      <div className='nav-container'>
        <span className='divider'>{'///////////////////////'}</span>
        <div onClick={() => changeComponent(['/projects', '/chess-openings'],<Projects index={0} style={{}} changeComponent={()=>{}}></Projects> )} className='projects'>
          <h2>] Projects</h2>
        </div>
        <div onClick={() => changeComponent(['/skills'], <Skills style={{}} changeComponent={()=>{}}></Skills>)}className='skills'>
          <h2>] Skills</h2>
        </div>
        <div  onClick={() => changeComponent(['/about'], <About style={{}} changeComponent={()=>{}}></About>)}className='about'>
          <h2 >] About</h2>
        </div>
        <div className='contact'>
          <h2 onClick={() => changeComponent(['/contact'], <Contact style={{}} changeComponent={() => { }}></Contact>)}>] Contact</h2>
        </div>
        <span className='divider'>{'///////////////////////'}</span>
      </div>
    </div>
  </animated.section>
}
export default Portfolio;