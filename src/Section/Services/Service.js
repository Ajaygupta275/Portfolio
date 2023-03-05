import data from './data'
import Card from '../../Component/Card'
import './service.css';

const Service = () => {
  return (
    <section id='service'>
    <h2>My Service</h2>
    <p>I gave you the best in all the service below</p>
    <div className='container services_container'>
      {
        data.map(item =>(
          <Card key={item.id} className='service light'>
            <div className='service_icon'>{item.icon}</div>
            <div className='service_details'>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))
      }
    </div>
</section>
  )
}

export default Service
