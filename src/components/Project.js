import styled from "@emotion/styled";
import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  width: 40rem;
  margin: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);

   &:hover {
    position: relative;
    bottom: 1rem;
  }
`
const Image = styled.img`
  border-radius: 10px;
  height: 22rem;
  object-fit: cover;
`
const Title = styled.h4`
  font-size: 2rem;
  border-bottom: 1px solid;
  margin-bottom: .5rem;
`
const Footer = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  padding-top: .5rem;
`
const Link = styled.a`
  display: flex;
  align-items: center;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  font-weight: bold;
  border-radius: 10px;
  padding: 5px 10px;

  &:hover {
    color: white;
    background: var(--primary-color);
  }
`
const List = styled.li`
  padding: 5px 10px;
  border-radius: 10px;
`

const Project = ({ img, name, description, tools, linkToGithub, linkToSite }) => {
  return <Wrapper href={linkToSite} target='_blank'>
    <Image src={img} alt='' />
    <Title>{name}</Title>
    <p>{description}</p>
    <Footer>
      {tools.map(tool => <List className={tool}>{tool}</List>)}
      <Link href={linkToGithub} target='_blank'><AiFillGithub></AiFillGithub>Code</Link>
      <Link href={linkToSite} target='_blank'><FaExternalLinkAlt></FaExternalLinkAlt>Visit</Link>
    </Footer>
  </Wrapper>
}
export default Project;