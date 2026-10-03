const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "We learn about your property, goals and project requirements.",
  },
  {
    number: "02",
    title: "Planning",
    text: "We develop the project details, materials and installation plan.",
  },
  {
    number: "03",
    title: "Installation",
    text: "Our team carefully prepares the site and installs the pavers.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    text: "We review the completed work and make sure the project meets expectations.",
  },
];

function Process() {
  return (
    <section className="section process" id="processo">
      <div className="container">

        <span className="section-label">
          Our Process
        </span>

        <h2 className="section-title">
          From concept to completion.
        </h2>

        <div className="process-grid">

          {steps.map((step) => (
            <article className="process-step" key={step.number}>

              <div className="process-number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;