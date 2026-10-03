const projects = [
  {
    category: "Residential",
    title: "Custom Driveway",
  },
  {
    category: "Outdoor Living",
    title: "Modern Patio",
  },
  {
    category: "Residential",
    title: "Poolside Pavers",
  },
  {
    category: "Hardscape",
    title: "Front Walkway",
  },
];

function Projects() {
  return (
    <section className="section projects" id="projetos">
      <div className="container">

        <span className="section-label">
          Our Projects
        </span>

        <h2 className="section-title">
          Work built around your property.
        </h2>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>

              <div className="project-image"></div>

              <div className="project-overlay">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;