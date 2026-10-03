function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    alert(
      "Thank you! Your estimate request has been submitted."
    );
  }

  return (
    <section className="section contact" id="contato">
      <div className="container">

        <div className="contact-grid">

          <div>

            <span className="section-label">
              Contact Us
            </span>

            <h2 className="section-title">
              Let's discuss your project.
            </h2>

            <p className="section-text">
              Tell us what you have in mind and our team can help
              you take the next step.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <span>Phone</span>
                <strong>Call for an estimate</strong>
              </div>

              <div className="contact-item">
                <span>Service Area</span>
                <strong>United States</strong>
              </div>

              <div className="contact-item">
                <span>Hours</span>
                <strong>Monday - Saturday</strong>
              </div>

            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">
                Service
              </label>

              <select id="service" required defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>

                <option value="driveway">
                  Driveway
                </option>

                <option value="patio">
                  Patio
                </option>

                <option value="walkway">
                  Walkway
                </option>

                <option value="pool-deck">
                  Pool Deck
                </option>

                <option value="outdoor-living">
                  Outdoor Living
                </option>

                <option value="repair">
                  Paver Repair
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Project Details
              </label>

              <textarea
                id="message"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Request Free Estimate
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;