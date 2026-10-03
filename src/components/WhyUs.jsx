const reasons = [
  {
    number: "01",
    title: "Quality Materials",
    text: "We focus on durable materials selected to provide long-lasting performance.",
  },
  {
    number: "02",
    title: "Detailed Installation",
    text: "Every stage of installation receives careful attention to preparation, alignment and finishing.",
  },
  {
    number: "03",
    title: "Professional Service",
    text: "Clear communication and organized project execution from the initial consultation to completion.",
  },
  {
    number: "04",
    title: "Built for Your Property",
    text: "Each project is planned around the property's layout, function and visual character.",
  },
];

function WhyUs() {
  return (
    <section className="section why-us">
      <div className="container">

        <div className="why-grid">

          <div>

            <span className="section-label">
              Why All Stages
            </span>

            <h2 className="section-title">
              Details make the difference.
            </h2>

            <p className="section-text">
              Our approach combines practical installation knowledge
              with a strong focus on craftsmanship and the finished
              appearance of every project.
            </p>

          </div>

          <div className="why-list">

            {reasons.map((reason) => (
              <article className="why-item" key={reason.number}>

                <span className="why-number">
                  {reason.number}
                </span>

                <div>
                  <h3>{reason.title}</h3>

                  <p>{reason.text}</p>
                </div>

              </article>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyUs;