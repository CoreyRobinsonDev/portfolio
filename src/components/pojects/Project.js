import { animated } from 'react-spring';
import './projects.css';

const Project = ({ style, data, index, changeComponent }) => {
  
  if (index === -1) return <></>

  return <animated.article style={style} className='project-container'>

      <div className='projects-info'>
        <div className='list-item'>
          <h2 className='project-title'>[ {data[index].name} ]</h2>
          <a rel="noreferrer" href={data[index].site} target='_blank'>=>Site</a>
          <a rel="noreferrer" href={data[index].code} target='_blank'>=>Code</a>
          <ul className='tools'>
          {
            data[index].tools.map((tool, key) => <li key={key} className={tool} >{tool}</li>)
            }
          </ul>
        <p className='description'>{data[index].description}</p>
        </div>
          <embed src={data[index].gif} className='gif'></embed>
      </div>

  </animated.article>
}
export default Project;