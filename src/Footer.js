import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="stylee">
      <a href="mailto:info@everydayrain.com">info@everydayrain.com</a>
      <p>Три дня дождя &copy; 2019 — 2023</p>
      </div>
      <div className="socsety">
        <a href="https://vk.com/threedaysrain" target="_blank" rel="noopener noreferrer">
          <img src='./vk.webp' alt=" " />
        </a>
        <p>+7(925)336-11-67</p>
      </div>
    </footer>
  );
}

export default Footer;
