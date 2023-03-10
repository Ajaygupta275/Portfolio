import Logo from '../../assets/logo.jpg';
import data from './data'
import { IoMdColorPalette } from 'react-icons/io';
import './navbar.css'
const NavBar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <a href="index.html" className='nav_logo'>
          <img src={Logo} alt="Logo "/>
        </a>
        <ul className='nav_menu'>
         {
          data.map(item=> <li key={item.id}><a href={item.link}>{item.title}</a></li>)
         }
        </ul>
        <button id='theme_icon'><IoMdColorPalette/></button>
      </div>
    </nav>
    
  )
}

export default NavBar
