export default function Contact() {
  return (
    <div>
      <div className="impkt-inner-banner impkt-p-0-120">
        <div className="impkt-banner-content impkt-center impkt-up">
          <div className="container">
            <ul className="impkt-breadcrumbs impkt-center impkt-mb-60">
              <li>
                <a href="index.html">Homepage</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <h1 className="impkt-mb-60">Get in touch!</h1>
            <a
              href="#contact"
              className="impkt-link impkt-dark impkt-arrow-place impkt-down-arrow"
            >
              <span>Send message</span>
            </a>
          </div>
        </div>
      </div>
      <div className="impkt-map-frame impkt-up">
        <div className="impkt-map">
          <iframe
            width="600"
            height="450"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Konia%20Hills%2C%20Konia%2C%208300&zoom=17&maptype=roadmap"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <section id="contact">
        <div className="container impkt-p-120-90">
          <h3 className="impkt-center impkt-up impkt-mb-120">
            Let's <span className="impkt-thin">Talk</span>
          </h3>
          <form className="row align-items-center" id="contact-form">
            <div className="col-lg-6 impkt-up">
              <label htmlFor="name">
                <input id="name" type="text" placeholder="What's your name" />
              </label>
            </div>
            <div className="col-lg-6 impkt-up">
              <label htmlFor="email">
                <input id="email" type="email" placeholder="Your Email" />
              </label>
            </div>
            <div className="col-lg-12 impkt-up">
              <label htmlFor="message">
                <textarea
                  id="message"
                  placeholder="Tell us about our project"
                ></textarea>
              </label>
            </div>
            <div className="col-lg-12 impkt-up">
              <div id="error-message" style={{ color: 'red' }}></div>
              <div id="success-message" style={{ color: 'green' }}></div>
            </div>
            <div className="col-lg-8">
              <p className="impkt-up impkt-mb-30">
                <span className="impkt-accent">*</span> We promise not to
                disclose your personal information to third parties.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="impkt-adaptive-right impkt-up impkt-mb-30">
                <button
                  type="submit"
                  className="impkt-button impkt-arrow-place"
                >
                  <span>Send message</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
