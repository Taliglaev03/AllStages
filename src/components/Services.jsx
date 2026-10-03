const services = [
  {
    number: "01",
    title: "Driveways",
    text: "Durable and visually refined paver driveways designed for everyday use and long-term performance.",
  },
  {
    number: "02",
    title: "Patios",
    text: "Custom outdoor patios that create comfortable and functional spaces for entertaining and relaxing.",
  },
  {
    number: "03",
    title: "Walkways",
    text: "Professional paver walkways that improve access, structure and curb appeal.",
  },
  {
    number: "04",
    title: "Pool Decks",
    text: "Elegant hardscape solutions designed to complement pool areas and outdoor living spaces.",
  },
  {
    number: "05",
    title: "Outdoor Living",
    text: "Complete outdoor environments designed around your property, lifestyle and vision.",
  },
  {
    number: "06",
    title: "Paver Repair",
    text: "Repair and restoration services to help maintain the appearance and performance of existing pavers.",
  },
];

function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="container">

        <span className="section-label">
          What We Do
        </span>

        <h2 className="section-title">
          Complete hardscape solutions.
        </h2>

        <p className="section-text">
          Professional paver installation services for residential
          and commercial properties.
        </p>

        <div className="services-grid">

          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;