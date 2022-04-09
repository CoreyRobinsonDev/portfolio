import styled from "@emotion/styled";

const Footer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222;
  width: 100%;
  padding: 1rem;
`
const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: white;
  border-bottom: 1px solid;
  margin-bottom: 1rem;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1.5rem;
  margin: 5rem;
`
const Input = styled.input`
  width: 30vw;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`
const Message = styled.textarea`
  width: 30vw;
  height: 6rem;
  
  &:focus {
    outline: none;
  }
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
`
const H3 = styled.h3`
  font-size: 1.3rem;
  font-weight: normal;
  `

const Contact = () => {
  return <Footer id="contact">
    <Title>Contact Me</Title>
    <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  </Footer>
}
export default Contact;