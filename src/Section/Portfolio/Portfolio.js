import IMG1 from '../../assets/portfolio 1.png'
import IMG2 from '../../assets/portfolio 2.png'
import IMG3 from '../../assets/portfolio 3.png'
import IMG4 from '../../assets/portfolio 4.png'
import './portfolio.css';
const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h2>Portfolio</h2>
    <h5 style={{textAlign:'center'}}>My Recent Work</h5>
    <div className='container portfolio_container'>
      <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={IMG1} alt='imgproject'/>
      </div>
        <h3>This is portfolio item title</h3>
        <a href="https://github.com/Ajaygupta275/Portfolio" className='btn primary' target='_blank'>Github</a>
        {/* Live demo link image */}
        {/* <a href='' className='btn' target='_blank'>Live Demo</a> */}
        {/*             */}
      </article>

      <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={IMG2} alt='imgproject'/>
      </div>
        <h3>This is portfolio item title</h3>
        <a href="https://github.com/Ajaygupta275/ClassClub" className='btn primary' target='_blank'>Github</a>
        {/* Live demo link image */}
        {/* <a href='' className='btn' target='_blank'>Live Demo</a> */}
        {/*             */}
       
      </article>

      <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={IMG3} alt='imgproject'/>
      </div>
        <h3>This is portfolio item title</h3>
        <a href="https://github.com/Ajaygupta275/Portfolio" className='btn primary' target='_blank'>Github</a>
        {/* Live demo link image */}
        {/* <a href='' className='btn' target='_blank'>Live Demo</a> */}
        {/*             */}
        {/* <a href="https://github.com/Ajaygupta275/ClassClub" className='btn'>Github</a> */}
        
      </article>

    </div>
    </section>
  )
}

export default Portfolio
