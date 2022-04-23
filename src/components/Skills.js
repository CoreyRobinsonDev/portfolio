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
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 30rem;

  @media only screen and (max-width: 800px) {
    padding: 5rem;
  }
`
const Image = styled.img`
  width: 100px;
  height: 100%;
  margin: 2rem;
`

const Skills = () => {
  return <Wrapper id='skills'>
    <Title>Skills</Title>
    <ImageContainer>
      <Image src='https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png' title='HTML' alt='HTML icon' />
      
      <Image src='https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png' title='CSS' alt='CSS icon' />
      
      <Image src='https://cdn.iconscout.com/icon/free/png-256/javascript-3628858-3029998.png' title='JavaScript' alt='JavaScript icon' />
      
      <Image src='https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png' title='React' alt='React icon.' />
      
      <Image src='https://cdn.iconscout.com/icon/free/png-256/redux-283024.png' title='Redux' alt='Redux icon' />
     
      <Image src='https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png' title='TypeScript' alt='TypeScript icon' />
      
      <Image src='https://ijs.gallerycdn.vsassets.io/extensions/ijs/emotionsnippets/1.1.2/1583301108884/Microsoft.VisualStudio.Services.Icons.Default' title='Emotion' alt='Emotion icon' />
     
      <Image src='https://cdn.iconscout.com/icon/free/png-256/git-225996.png' title='Git' alt='Git icon' />
     
      <Image src='https://cdn.iconscout.com/icon/free/png-256/jquery-8-1175153.png' title='jQuery' alt='jQuery icon' />
      
      <Image src='https://cdn.iconscout.com/icon/free/png-256/jest-3628860-3030000.png' title='Jest' alt='Jest icon' />
      
    </ImageContainer>  
  </Wrapper>
}
export default Skills;