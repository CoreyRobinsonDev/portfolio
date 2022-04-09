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