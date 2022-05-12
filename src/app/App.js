import React, { useState, useEffect } from 'react';
import {useTransition} from 'react-spring';
import { AiOutlineRight } from 'react-icons/ai';

import './App.css';
import Contact from '../components/contact/Contact';
import About from '../components/about/About';
import Portfolio from '../components/portfolio/Portfolio';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';

const App = () => {
  const [path, setPath] = useState(['/portfolio']);
  const [command, setCommand] = useState('');
  const [component, setComponent] = useState(<Portfolio style={{}} changeComponent={()=>{}}></Portfolio>);
  const [isVisible, setIsVisible] = useState(false);
  const [list, setList] = useState(['']);
  const placeholderCommands = ['cd about', 'cd projects', 'ls', 'cd skills', 'cd contact'];

  const transition = useTransition(isVisible, {
    from: {y: 600, opacity: 1},
    enter: item => async (next) => {
      await next({ y: 500, opacity: 1, delay: 300})
      await next({ y: 300, opacity: 1, delay: 500})
      await next({ y: 0, opacity: 1, delay: 800})
    },
  });

  
  const handleCommand = (e) => {
    e.preventDefault();
    let commandValue = command.slice(3, command.length); 
    if (commandValue[0] === '/') commandValue = commandValue.slice(1);
    //define the path
    switch (commandValue) {
      case '..':
        setPath(path.slice(0, path.length - 1));
        break;
      case '../..':
        setPath(path.slice(0, path.length - 2));
        break; 
      case 'about':
        setPath(['/portfolio', '/about']);
        break;
      case 'skills':
        setPath(['/portfolio', '/skills']);
        break;
      case 'contact':
        setPath(['/portfolio', '/contact']);
        break;
      case 'portfolio':
        setPath(['/portfolio']);
        break;
      case 'projects':
        setPath(['/portfolio', '/projects']);
        break;
      case 'chess-openings':
        if (path[path.length-1] === '/projects') setPath(['/portfolio', '/projects', '/chess-openings']);
        break;
      case 'mars-gallery':
        if (path[path.length-1] === '/projects') setPath(['/portfolio', '/projects', '/mars-gallery']);
        break;
      case 'reddit-minimal':
        if (path[path.length-1] === '/projects') setPath(['/portfolio', '/projects', '/reddit-minimal']);
        break;
      case 'portfolio-site':
          if (path[path.length-1] === '/projects') setPath(['/portfolio', '/projects', '/portfolio-site']);
          break;
      case 'projects/chess-openings':
        setPath(['/portfolio', '/projects', '/chess-openings']);
        break;
      case 'projects/mars-gallery':
        setPath(['/portfolio', '/projects', '/mars-gallery']);
        break;
      case 'projects/reddit-minimal':
        setPath(['/portfolio', '/projects', '/reddit-minimal']);
        break;
      case 'projects/portfolio-site':
        setPath(['/portfolio', '/projects', '/portfolio-site']);
        break;
      default:
        if (command.slice(0, 2) === 'ls') {
          setList(['/projects', '/skills', '/about', '/contact'])
        } else if (command.slice(0, 5) === 'clear') {
          setList(['']);
          setComponent('');
        } else {
          setList(['']);
          setComponent(<div style={{}} changeComponent={() => {}}>{`cd: no such file: ${commandValue}`}</div>); 
        }
    }
    setCommand('');
  }
  //updates the component
  useEffect(() => {
  const changeComponent = ( newPath, value=null) => {
    if (!newPath) {
      setPath(['/portfolio']);
    } else {
      setPath([...path, ...newPath]);
    }
    if (value) setComponent(value);
   
  }
    switch (path[path.length -1]) {
      case '/about':
        setIsVisible(false);
        setComponent(<About style={{}} changeComponent={changeComponent}></About>);
        break;
      case '/portfolio':
        setIsVisible(false);
        setComponent(<Portfolio style={{}} changeComponent={changeComponent}></Portfolio>);
        break;
      case '/skills':
        setIsVisible(false);
        setComponent(<Skills style={{}} changeComponent={changeComponent}></Skills>);
        break;
      case '/contact':
        setIsVisible(false);
        setComponent(<Contact style={{}} changeComponent={changeComponent}></Contact>);
        break;
      case '/projects':
        setIsVisible(false);
        setComponent(<Projects index={0} style={{}} changeComponent={changeComponent}></Projects>);
        break;
      case '/chess-openings':
        setIsVisible(false);
        setComponent(<Projects index={0}  style={{}} changeComponent={changeComponent}></Projects>);
        break;
      case '/mars-gallery':
        setIsVisible(false);
        setComponent(<Projects index={1}  style={{}} changeComponent={changeComponent}></Projects>);
        break;
      case '/reddit-minimal':
        setIsVisible(false);
        setComponent(<Projects index={2}  style={{}} changeComponent={changeComponent}></Projects>);
        break;
      case '/portfolio-site':
        setIsVisible(false);
        setComponent(<Projects index={3}  style={{}} changeComponent={changeComponent}></Projects>);
        break;
      default:
        setComponent('');
    }
  }, [path])

  useEffect(() => {
    setIsVisible(true);
  }, [component])

  return <main>
    <span className='cmd-line-container'>
      <span className='path'>{path}<AiOutlineRight></AiOutlineRight></span>
      <form onSubmit={handleCommand}>
        <input className='cmd-line' type='text' placeholder={placeholderCommands[Math.floor(Math.random() * placeholderCommands.length)]} value={command} onChange={(e) => setCommand(e.target.value)} />
        <button type='submit'></button>
      </form>
      
    </span>
    <ul className='directories'>

    {list.map((item, key) => <li key={key}>{item}</li>)}
    </ul>
    {
      transition((style, item) => {
        if (item) {
          if (!component) return <></>;
          const newComponent = React.cloneElement(component, {
            style: style
          });
          return newComponent;
        } else {
          return '';
        }
      })
    }
  </main>
}
export default App;
