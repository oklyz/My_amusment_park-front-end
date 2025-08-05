const ServicesCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="card-image-container">
        <img 
          src={service.image} 
          alt={service.name} 
          className="service-image"
        />
      </div>
      <div className="card-content">
        <h2 className="service-name">{service.name}</h2>
        <p className="service-description">{service.description}</p>
        <div className="service-meta">
          <span className="meta-label">Hours:</span>
          <span className="meta-value">{service.availability}</span>
        </div>
        <div className="service-meta">
          <span className="meta-label">Price Range:</span>
          <span className="meta-value">{service.cost}</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;