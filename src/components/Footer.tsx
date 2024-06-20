import "../index.css"; // Import the shared CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Blogr</h3>
        </div>
        <div>
          <h4>Product</h4>

          <ul>
            <li><a href="#about">Overview</a></li>
            <li><a href="#about">Pricing</a></li>
            <li><a href="#about">Marketplace</a></li>
            <li><a href="#about">Features</a></li>
            <li><a href="#about">Integrations</a></li>
          </ul>

        </div>
        <div>
          <h4>Company</h4>
          
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#about">Team</a></li>
            <li><a href="#about">Blog</a></li>
            <li><a href="#about">Careers</a></li>
          </ul>

        </div>
        <div>
          <h4>Connect</h4>

          <ul>
            <li><a href="#about">Contact</a></li>
            <li><a href="#about">Newsletter</a></li>
            <li><a href="#about">LinkedIn</a></li>
          </ul>

        </div>
      </div>
    </footer>
  );
};

export default Footer;