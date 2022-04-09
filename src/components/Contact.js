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
const Button = styled.button`
  background: var(--primary-color);
`

const Contact = () => {
  return <Footer id="contact">
    <Title>Contact Me</Title>
    <Form name="contact" method='POST' data-netlify='true' >
      <input type='hidden' name='form-name' value='contact'></input>
      <Label>
        <H3>Name</H3>
        <Input type='text' name='name' />
      </Label>
      
      <Label>
        <H3>Email</H3>
      <Input type='email' name='email' />
      </Label>
      <Label>
        <H3>Message</H3>
        <Message name='message' />
      </Label>
      <Button type='submit'>Send</Button>
    </Form> 
  </Footer>
}
export default Contact;