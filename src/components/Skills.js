import styled from "@emotion/styled";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--primary-color);
  
`
const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: white;
  border-bottom: 1px solid;
  margin-bottom: 1rem;
  margin: 1rem;
`
const Image = styled.img`
  width: 100px;
  height: 100%;
  margin: 2rem;
`
const TechName = styled.span`
  opacity: 0;
  position: relative;
  right: 5rem;
  bottom: 5rem;
  font-size: 2rem;
  font-weight: bold;
  background: var(--primary-color);
  color: white;
  border-radius: 10px;
  padding: .2rem .5rem;
  z-index: 1;

  &:hover {
    opacity: 1;
  }

  @media only screen and (max-width: 768px){
    display: none;
  }
`

const Skills = () => {
  return <Wrapper id='skills'>
    <Title>Skills</Title>
    <div>
      <Image src='https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png' alt='HTML icon' />
      <TechName>HTML</TechName>
      <Image src='https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png' alt='CSS icon' />
      <TechName>CSS</TechName>
      <Image src='https://cdn.iconscout.com/icon/free/png-256/javascript-3628858-3029998.png' alt='JavaScript icon' />
      <TechName>JavaScript</TechName>
      <Image src='https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png' alt='React icon.' />
      <TechName>React</TechName>
      <Image src='https://cdn.iconscout.com/icon/free/png-256/redux-283024.png' alt='Redux icon' />
      <TechName>Redux</TechName>
      <Image src='https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png' alt='TypeScript icon' />
      <TechName>TypeScript</TechName>
      <Image src='https://ijs.gallerycdn.vsassets.io/extensions/ijs/emotionsnippets/1.1.2/1583301108884/Microsoft.VisualStudio.Services.Icons.Default' alt='Emotion icon' />
      <TechName>Emotion</TechName>
      <Image src='https://cdn.iconscout.com/icon/free/png-256/git-225996.png' alt='Git icon' />
      <TechName>Git</TechName>
      <Image src='https://cdn.iconscout.com/icon/free/png-256/jquery-8-1175153.png' alt='jQuery icon' />
      <TechName>jQuery</TechName>
      <Image src='https://cdn.iconscout.com/icon/free/png-256/jest-3628860-3030000.png' alt='Jest icon' />
      <TechName>Jest</TechName>
    </div>  
  </Wrapper>
}
export default Skills;