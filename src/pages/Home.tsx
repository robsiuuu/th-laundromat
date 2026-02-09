import "./../styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <header className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to T&H Laundromat</h1>
          <p className="hero-subtitle">Family Owned & Operated Since 1995</p>
          <p className="hero-highlight">FREE Dry with Wash!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        {/* Pricing Section */}
        <section className="pricing-section">
          <h2 className="section-heading">Washer Prices</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="washer-size">Large</div>
              <div className="price">$5.50</div>
              <div className="details">22 Quarters</div>
            </div>
            
            <div className="pricing-card">
              <div className="washer-size">Medium</div>
              <div className="price">$4.50</div>
              <div className="details">18 Quarters</div>
            </div>
            
            <div className="pricing-card">
              <div className="washer-size">Small</div>
              <div className="price">$2.75</div>
              <div className="details">11 Quarters</div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <div className="info-grid">
          {/* Image Column */}
          <div className="image-column">
            <div className="image-container">
              <img 
                src="/thlaundromat.png" 
                alt="T&H Laundromat storefront"
                className="store-image"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="content-column">
            <div className="info-card">
              <h3 className="info-title">
                <span className="icon">📍</span> Location
              </h3>
              <p className="info-text">3107 Summit Ave, Greensboro, NC 27405</p>
              <p className="info-subtext">Free parking available</p>
            </div>

            <div className="info-card">
              <h3 className="info-title">
                <span className="icon">⏰</span> Hours
              </h3>
              <p className="info-text">Monday - Sunday: 7:00 AM - 8:00 PM</p>
              <p className="info-subtext">Last wash: 7:30 PM</p>
            </div>

            <div className="info-card highlight">
              <h3 className="info-title">
                <span className="icon">🎯</span> Why Choose Us?
              </h3>
              <p className="info-text"><strong>FREE Dry with Wash!</strong></p>
              <p className="info-subtext">
                Wash at T&H Laundromat and get FREE drying. 
                (Note: We do not accept clothes washed elsewhere for free drying.)
              </p>
            </div>

            <div className="info-card">
              <h3 className="info-title">
                <span className="icon">⭐</span> Amenities
              </h3>
              <ul className="amenities-list">
                <li><span className="check">✅</span> Free Wi-Fi</li>
                <li><span className="check">✅</span> Comfortable seating</li>
                <li><span className="check">✅</span> Vending machines</li>
                <li><span className="check">✅</span> Detergent for sale</li>
                <li><span className="check">✅</span> Clean machines</li>
                <li><span className="check">✅</span> Security cameras</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <section className="contact-cta">
          <h2 className="cta-title">Ready for Fresh Laundry?</h2>
          <p className="cta-text">Visit us today at 3107 Summit Ave</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span className="contact-text">(123) 456-7890</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span className="contact-text">test@example.com</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;