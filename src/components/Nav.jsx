import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  return (
    <Navbar 
      expand="lg" 
      className="navbar-custom shadow-sm"
      expanded={expanded}
      fixed="top"
      variant="light"
      bg="white"
    >
      <Container fluid className="px-4">        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold text-primary fs-3"
          onClick={handleClose}
        >
          <span className="me-2">📦</span>OminiStock
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={handleToggle}
          aria-label="Alternar navegação"
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`fw-semibold ${isActive('/') ? 'active text-primary' : 'text-dark'}`}
              onClick={handleClose}
            >
              Início
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/solucao" 
              className={`fw-semibold ${isActive('/solucao') ? 'active text-primary' : 'text-dark'}`}
              onClick={handleClose}
            >
              Solução
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/sobre" 
              className={`fw-semibold ${isActive('/sobre') ? 'active text-primary' : 'text-dark'}`}
              onClick={handleClose}
            >
              Sobre Nós
            </Nav.Link>
          </Nav>
          
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/login" 
              className="me-2"
              onClick={handleClose}
            >
              <Button 
                variant="outline-primary" 
                size="sm"
                aria-label="Fazer login"
              >
                Login
              </Button>
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/cadastrar" 
              onClick={handleClose}
            >
              <Button 
                variant="primary" 
                size="sm"
                aria-label="Cadastrar nova conta"
              >
                Cadastrar
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
