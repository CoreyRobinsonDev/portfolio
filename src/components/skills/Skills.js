import { animated } from 'react-spring';

import Portfolio from '../portfolio/Portfolio';
import './skills.css';

const Skills = ({style, changeComponent}) => {

  return <animated.section className='skills-container' style={style}>
    <div className='skills-info-wrapper'>
      <h2 className='skills-title'>Skills</h2>
      <div className='skills-categories'>
        <div className='frontend'>
          <h3>[ Front-End ]</h3>
          <ul>
            <li>>React</li>
            <li>>>>React-Router</li>
            <li>>>>React-Spring</li>
            <li>>Redux</li>
            <li>>>>Redux-Toolkit</li>
            <li>>JavaScript</li>
            <li>>>>TypeScript</li>
            <li>>jQuery</li>
            <li>>Jest</li>
            <li>>Emotion</li>
            <li>>Styled Components</li>
            <li>>HTML/CSS</li>
          </ul>
        </div>
        <div className='backend'>
          <h3>[ Back-End ]</h3>
          <ul>
            <li>>Nodejs</li>
            <li>>>>Expressjs</li>

          </ul>
        </div>
        <div className='other-skills'>
          <h3>[ Dev ]</h3>
          <ul>
            <li>>Git</li>
            <li>>CLI</li>
            <li>>TDD</li>
          </ul>
        </div>
      </div>
    <button className='back-btn' onClick={() => changeComponent('',<Portfolio style={{}} changeComponent={() => {}}></Portfolio>)}>Go Back</button>
    </div>

  </animated.section>
}
export default Skills;