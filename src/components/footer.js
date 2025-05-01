import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container1">
        <div className="footer-container2">
          <span className="footer-text1">OminiStock</span>
          <span>Copyright © 2025, todos direitos reservados</span>
        </div>
        <div className="footer-container3">
          <div className="footer-container4">
            <span className="footer-text3 Large">Pages</span>
            <Link to="/" className="footer-navlink1 Large">
              Home
            </Link>
            <Link to="/contato" className="footer-navlink2 Large">
              Contato
            </Link>
            <Link to="/embreve" className="footer-navlink3 Large">
              Em Breve
            </Link>
          </div>
        </div>
      </div>
      <img alt="image" src="/waves-white.svg" className="footer-image" />
    </footer>
  )
}

export default Footer
