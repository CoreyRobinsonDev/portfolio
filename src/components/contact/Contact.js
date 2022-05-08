import { animated } from 'react-spring';

import Portfolio from '../portfolio/Portfolio';
import './contact.css';

const Contact = ({style, changeComponent}) => {

  return <animated.section className='contact-container' style={style}>
    <div className='contact-info-wrapper'>
      <h2 className='contact-title'>Contact</h2>
      
      <div className='email-number'>
        <span>coreyrob52@gmail.com</span>
        <span>443-455-5574</span>
      </div>
      
      <form name='contact' method='POST' data-netlify='true' className='form'>
        <input type='hidden' name='form-name' value='contact' />
        <label>
          <h3>Name</h3>
          <input type='text' name='name' />
        </label>
        <label>
          <h3>Email</h3>
          <input type='email' name='email' />
        </label>
        <label>
          <h3>Message</h3>
          <textarea name='message' />
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