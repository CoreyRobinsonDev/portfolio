import styled from "@emotion/styled";
import Project from "./Project";

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: var(--secondary-color);
  z-index: 1;

  @media only screen and (max-width: 800px) {
    padding: 1rem 0;
  }
`
const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: #444655;
  border-bottom: 1px solid;
  margin-bottom: 1rem;
`
const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  `
const Projects = () => {
  return <Wrapper id='projects'>
    <Title>Projects</Title>
    <ProjectWrapper>
      <Project
        img={'photos/Screenshot (14).png'}
        name={'Chess Openings'}
        description={"This web app helps users understand a given chess opening when played."}
        tools={['React', 'Redux', 'CSS']}
        linkToGithub={'https://github.com/CoreyRobinsonDev/chess-openings'}
        linkToSite={'https://chess-openings-crd.netlify.app/'}
     />
      <Project
        img={'photos/Screenshot (13).png'}
        name={'Mars Gallery'}
        description={"A simple web app for searching photos taken on Mars using NASA's Mars Rover Photos api."}
        tools={['React', 'TypeScript', 'Emotion']}
        linkToGithub={'https://github.com/CoreyRobinsonDev/mars-gallery'}
        linkToSite={'https://mars-gallery.netlify.app/'}
      />
      <Project
        img={'photos/Screenshot (15).png'}
        name={'Reddit Minimal'}
        description={"A minimalistic take on the popular social media site Reddit, utilizing their api."}
        tools={['React', 'Redux', 'jQuery','CSS']}
        linkToGithub={'https://github.com/CoreyRobinsonDev/reddit-client'}
        linkToSite={'https://redditminimal-crd.netlify.app/'}
      />
      <Project
        img={'photos/Screenshot (18).png'}
        name={'Portfolio Site'}
        description={"A simple portfolio site."}
        tools={['React', 'Emotion']}
        linkToGithub={'https://github.com/CoreyRobinsonDev/portfolio'}
        linkToSite={'https://corey-robinson.dev/'}
     />
    </ProjectWrapper>
    
  </Wrapper>
}
export default Projects;