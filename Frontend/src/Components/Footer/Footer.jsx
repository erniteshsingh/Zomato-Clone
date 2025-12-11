import "./Footer.css";

const Footer = () => {
  return (
    <footer className="pro-footer">
     
      <div className="footer-top">
        <div className="footer-col">
          <h2 className="footer-logo">FoodHub</h2>
          <p>Delivering happiness, one meal at a time.</p>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Help</h3>
          <ul>
            <li>Customer Support</li>
            <li>Refund Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Get in Touch</h3>
          <p>Email: support@foodhub.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Mumbai, India</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 FoodHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
