import { animated } from 'react-spring';

import Portfolio from '../portfolio/Portfolio';
import './contact.css';

const Contact = ({style, changeComponent}) => {

  return <animated.section className='contact-container' style={style}>
    <div className='contact-info-wrapper'>
      <h2 className='contact-title'>Contact</h2>
      
      <a className='resume' href='../../../resume/resume.pdf' target='_blank'>{'=>>'}Resume</a>
      
      <form name='contact' method='POST' data-netlify='true' className='form'>
        <input type='hidden' name='form-name' value='contact' />
        <label>
          <input type='text' name='name' placeholder='Name' required />
        </label>
        <label>
          <input type='email' name='email' placeholder='Email' required />
        </label>
        <label>
          <textarea name='message' placeholder='Message...' required />
        </label>
        <label className='send-btn-container'>
          <button type='submit' className='send-btn'>Send</button>
        </label>
      </form>
      <button className='back-btn' onClick={() => changeComponent('',<Portfolio style={{}} changeComponent={() => {}}></Portfolio>)}>Go Back</button>
    </div>
  </animated.section>
}
export default Contact;