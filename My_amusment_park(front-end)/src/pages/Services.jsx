import services from '../services.json'
import ServicesCard from '../components/ServicesCard';
function Services() {
  return <div>
<h1>Services List</h1>
      <div>
        {services.map((service)=>(
          <ServicesCard service={service} key={service.id}/>
        ))}
      </div>
  </div>
}

export default Services;
