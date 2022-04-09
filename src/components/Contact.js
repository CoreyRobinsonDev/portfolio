import styled from "@emotion/styled";
import {BsArrowUpShort} from 'react-icons/bs'
import {useState} from 'react';

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
const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30vw;
  height: 8rem;
  background: white;
  margin: 4rem 0;
  padding: 1rem;
  border-radius: 10px;
`
const H4 = styled.h4`
  color: var(--complimentary-color);
`
const SubmitButton = styled.a`
  display: flex;
  align-items: center;
  color: var(--primary-color);
  font-weight: bold; 
`
const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = () => {
    setIsSubmit(true);
  }
  return <Footer id="contact">
    <Title>Contact Me</Title>
    {
      isSubmit
        ? <SubmitWrapper>
          <H4>Thank You!</H4>
          <p>Your form submission has been recieved.</p>
          <SubmitButton href='#head'><BsArrowUpShort></BsArrowUpShort>Back to top </SubmitButton>
        </SubmitWrapper>
        : <>
        <Form name="contact" method='POST' data-netlify='true' onSubmit={handleSubmit}>
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
        </>
    }
  </Footer>
}
export default Contact;