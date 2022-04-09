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
  
  &:focus {
    outline: none;
  }
`

const Contact = () => {
  return <Footer id="contact">
    <Title>Contact Me</Title>
    <Form name="contact" method='POST' data-netlify='true' onSubmit='submit'>
      <h3>Name:</h3>
      <Input type='text' name='name' />
      <h3>Email:</h3>
      <Input type='email' name='email' />
      <h3>Message:</h3>
      <Input />
    </Form>
  </Footer>
}
export default Contact;