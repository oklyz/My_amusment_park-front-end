import services from '../services.json';
import ServicesCard from '../components/ServicesCard';


const Services = () => {
  return (
    <div className='background-container'>
      <div className="services-page">
        <h1 className="services-title">Park Services</h1>
        <div className="services-grid">
          {services.map((service) => (
            <ServicesCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;