import styled from "@emotion/styled";
import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  width: 50rem;
  height: 33rem;
  margin: 2rem;
  padding: 1.5rem;
  background: white;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);

  @media only screen and (max-width: 800px) {
    width: 90vw;
    margin: 2rem 0;
    width: 100vw;    
  }
`
const Gif = styled.embed`
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
  flex-wrap: wrap;
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
const ProjectBackground = styled.div`
  position: relative;
  top: 36rem;
  left: 1rem;
  z-index: -1;
  pointer-events: none;
  background: var(--complimentary-color);
  width: 50rem;
  height: 33rem;
  margin-top: -33rem;
  margin-right: -5rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);
  @media only screen and (max-width: 800px) {
   display: none;   
  }
`

const Project = ({ gif, name, description, tools, linkToGithub, linkToSite }) => {
  return <div>
    <ProjectBackground/>
    <Wrapper href={linkToSite} target='_blank'>
      <Gif src={gif} />
      <Title>{name}</Title>
      <p>{description}</p>
      <Footer>
        {tools.map(tool => <List className={tool}>{tool}</List>)}
        <Link href={linkToGithub} target='_blank'><AiFillGithub></AiFillGithub>Code</Link>
        <Link href={linkToSite} target='_blank'><FaExternalLinkAlt></FaExternalLinkAlt>Visit</Link>
      </Footer>
    </Wrapper>
  </div>
}
export default Project;