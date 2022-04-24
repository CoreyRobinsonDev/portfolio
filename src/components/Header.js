import styled from '@emotion/styled';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background: var(--primary-color);
  color: white;
  font-size: 2rem;

  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`
const List = styled.a`
  display: flex;
  color: white;
  padding: 10px;

  &:hover {
    position: relative;
    left: 1rem;
    color: var(--complimentary-color);  
  }
`
const LinkName = styled.div` 
  color: white;

  &:hover {
    color: var(--complimentary-color);  
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`
const Link2 = styled.a` 
  display: flex;
  color: white;
  padding: 10px;

  &:hover {
    position: relative;
    right: 1rem;
    color: var(--complimentary-color);
  }
`
const NameContainer = styled.div`
  z-index: 1;
`
const NameContainerBackground = styled.div`
  position: relative;
  left: 35vw;
  background: var(--complimentary-color);
  width: 40rem;
  height: 15rem;
  margin-left: -36vw;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`
const Hi = styled.span`
  color: var(--secondary-color);
`
const Title = styled.span`
  color: var(--primary-color);

  @media only screen and (max-width: 800px) {
    color: var(--complimentary-color);
  }
`
const LinksContainer = styled.ul`
  @media only screen and (max-width: 800px) {
    display: flex;
    padding-bottom: 5vh;
  }
  `
const NavContainer = styled.nav`
  @media only screen and (max-width: 800px) {
    display: flex;
    padding-top: 5vh;
    border-bottom: 1px solid var(--secondary-color);
  }
  `
const Header = () => {
  return <Head id='head'>
    <LinksContainer>
      <List href='https://github.com/CoreyRobinsonDev?tab=repositories' target='_blank'><AiFillGithub></AiFillGithub><LinkName>GitHub</LinkName></List>
      <List href='https://www.linkedin.com/in/corey-robinson-583787236/' target='_blank'><AiFillLinkedin></AiFillLinkedin><LinkName>Linkedin</LinkName></List>
    </LinksContainer>
    <NameContainerBackground/>
    <NameContainer>
      <Hi>Hi, I'm</Hi>
      <h1>Corey Robinson</h1>
      <Title>Frontend Engineer</Title>
    </NameContainer>
    <NavContainer>
      <Link2 href='#projects'>Projects</Link2>
      <Link2 href='#skills'>Skills</Link2>
      <Link2 href='#contact'>Contact</Link2>
    </NavContainer>
  </Head>
}
export default Header;