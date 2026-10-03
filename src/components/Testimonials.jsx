const testimonials = [
  {
    text: "The entire project was handled professionally from start to finish. The finished pavers completely changed the look of our property.",
    author: "Residential Client",
  },
  {
    text: "Great attention to detail and a very clean installation. The outdoor space looks completely different.",
    author: "Homeowner",
  },
  {
    text: "Professional communication, quality workmanship and a beautiful finished project.",
    author: "Local Property Owner",
  },
];

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">

        <span className="section-label">
          Client Experiences
        </span>

        <h2 className="section-title">
          What our clients say.
        </h2>

        <div className="testimonials-grid">

          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.author}
            >

              <div className="testimonial-stars">
                ★★★★★
              </div>

              <blockquote>
                “{testimonial.text}”
              </blockquote>

              <p className="testimonial-author">
                {testimonial.author}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;