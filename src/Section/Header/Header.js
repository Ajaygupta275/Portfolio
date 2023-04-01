import HeaderImage from '../../assets/header.jpg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
        <div className='header_profile'>
          <img src={HeaderImage} alt="Header Portfolio "/>
        </div>
        <h3>Ajay Gupta</h3>
        <p>You are a click away from buliding your dream website or web Page.<br/>
        FullStack Developer</p>
      <div className='header_cta'>
        <a href="#contact" className='btn primary'>Lets talk</a>
        <a href="#portfolio" className='btn light'>My Work</a>
      </div>
      <div className='header_socials'>
       {
        data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
       }
      </div>
      </div>
    </header>
  )
}

export default Header

