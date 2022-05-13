import { animated } from 'react-spring';
import Portfolio from '../portfolio/Portfolio';
import './about.css';

const About = ({style, changeComponent}) => {
  return <animated.section className='about-container' style={style}>
    <div className='about-info-wrapper'>
      <h2 className='about-title'>About</h2>
      <h1>Hi, I'm Corey Robinson</h1>
      <span className='title'>Front-End Engineer</span>
      <p>I'm a logical and results-driven developer dedicated to building and optimizing user-focused websites. Currently switching industries, I'm very interested and passionate about everything related to computers. I'm a lifelong learner who stays up to date on the latest technologies and is excited to try new things.</p>
    <button className='back-btn' onClick={() => changeComponent('',<Portfolio style={{}} changeComponent={() => {}}></Portfolio>)}>Go Back</button>
    </div>
  </animated.section>
}
export default About;

