
function ContactPage() {
    return (
        <div className="contact-page">
            {/* Section: Map */}
            <section className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019649290676!2d-122.4013397846811!3d37.7927307797567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d2a3480d%3A0x6b8b7c86e22d52a7!2sScribd%20HQ!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            {/* Section: Contact Info */}
            <section className="contact-info">
                <h2>LET'S TALK</h2>
                <p><strong>Scribd HQ</strong></p>
                <p>460 Bryant Street, #100</p>
                <p>San Francisco, CA</p>
                <p>94107-2594</p>
                <p>USA</p>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </section>

            {/* Section: Help Options */}
            <section className="contact-help">
                <h2>HOW CAN WE HELP?</h2>
                <div className="help-options">
                    <div className="help-option">
                        <span>❓</span>
                        <p>I need help!</p>
                    </div>
                    <div className="help-option">
                        <span>💼</span>
                        <p>I've got a business opportunity!</p>
                    </div>
                    <div className="help-option">
                        <span>📚</span>
                        <p>I'm a publisher!</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
