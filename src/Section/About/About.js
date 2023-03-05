import AboutImage from '../../assets/header-1.png'
import CV from '../../assets/cv.pdf' 
import {GrDownload} from 'react-icons/gr'
import Card from '../../Component/Card'
import data from './data'
import './about.css';
const About = () => {
  return (
   
      <section id='about'>
        <div className='container about_container'>
         <div className='about_left'>
          <div className='about_portrait'>
            <img src={AboutImage} alt='aboutimage'/>
          </div>
         </div>
         <div className="about_right">
          <h2>About Me</h2>
          <div className='about_cards'>
          {
            data.map(item =>(
              <Card key={item.id} className='about_card'>
              <span className='about_card-icon'>{item.icon} </span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
              </Card>
            ))
          }
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
            <a href={CV} download className='btn primary'>Download CV<GrDownload/></a>
          </div>
         </div>

        </div>
      </section>
    
  )
}

export default About

