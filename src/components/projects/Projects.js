import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

import './projects.css'
import Portfolio from '../portfolio/Portfolio';
import Project from './Project';

export const projectData = [
  {
    name: 'Stonks',
    gif: 'gifs/ezgif.com-gif-maker (5).gif',
    site: 'https://stonks-crd.netlify.app/',
    code: 'https://github.com/CoreyRobinsonDev/stonks',
    tools: ['React', 'TypeScript', 'NodeJS', 'PassportJS'],
    description: 'Simple brokerage site where stocks can be bought and sold.'
  },
  {
    name: 'Chess Openings',
    gif: 'gifs/ezgif.com-gif-maker (2).gif',
    site: 'https://chess-openings-crd.netlify.app/',
    code: 'https://github.com/CoreyRobinsonDev/chess-openings',
    tools: ['React', 'Redux', 'CSS', 'Lichess API'],
    description: 'This web app helps users understand a given chess opening by evaluating them and displaying top games in the position.'
  },
  {
    name: 'Mars Gallery',
    gif: 'gifs/ezgif.com-gif-maker.gif',
    site: 'https://mars-gallery.netlify.app/',
    code: 'https://github.com/CoreyRobinsonDev/mars-gallery',
    tools: ['React', 'TypeScript', 'Emotion', "NASA's API"],
    description: 'A simple web app for searching photos taken on Mars using NASA\'s Mars Rover Photos api.'
  },
  {
    name: 'Reddit Minimal',
    gif: 'gifs/ezgif.com-gif-maker (1).gif',
    site: 'https://redditminimal-crd.netlify.app/',
    code: 'https://github.com/CoreyRobinsonDev/reddit-client',
    tools: ['React', 'Redux', 'jQuery', 'CSS'],
    description: 'A minimalistic take on the popular social media site Reddit, utilizing their api. Codeacademy portfolio project.'
  }
]

const Projects = ({ index, style, changeComponent }) => {
  const [styles, animate] = useSpring(() => ({ opacity: 1, x: 0 }));
  const [component, setComponent] = useState(<Project style={styles} data={projectData} index={index} changeComponent={changeComponent} />);

  const handleClick = (num) => {
    setComponent(<Project style={styles} data={projectData} index={num} changeComponent={changeComponent} />)
    animate({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    })
  }

  return <animated.section style={style} className='projects-container'>
    <ul className='projects-list-container'>
      <span className='divider'>{'///////////////////'}</span>
      <li onClick={() => handleClick(0)}>] /stonks</li>
      <li onClick={() => handleClick(1)}>] /chess-openings</li>
      <li onClick={() => handleClick(2)}>] /mars-gallery</li>
      <li onClick={() => handleClick(3)}>] /reddit-minimal</li>
    </ul>
    <div className='projects-info-wrapper'>
      <h3 className='projects-title'>Projects</h3>
      
        {component}
      
      <button className='back-btn' onClick={() => changeComponent('', <Portfolio style={{}} changeComponent={() => { }}></Portfolio>)}>Go Back</button>
    </div>
  </animated.section>
}
export default Projects;