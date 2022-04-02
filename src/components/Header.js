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
`
const Link1 = styled.a`
  display: flex;
  color: white;
  padding: 10px;

  &:hover {
    position: relative;
    left: 1rem;
    color: var(--complimentary-color);  
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
  
`
const Hi = styled.span`
  color: var(--complimentary-color);
`
const Title = styled.span`
  color: #757687;
`
const Header = () => {
  return <Head>
    <ul>
      <li><Link1 href='' target='_blank'><AiFillGithub></AiFillGithub>Github</Link1></li>
      <li><Link1 href='' target='_blank'><AiFillLinkedin></AiFillLinkedin>Linkedin</Link1></li>
    </ul>
    <NameContainer>
      <Hi>Hi, I'm</Hi>
      <h1>Corey Robinson</h1>
      <Title>Frontend Engineer</Title>
    </NameContainer>
    <nav>
      <Link2 href='#projects'>Projects</Link2>
      <Link2 href='#skills'>Skills</Link2>
      <Link2 href='#contact'>Contact</Link2>
    </nav>
  </Head>
}
export default Header;