import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light mt-5">
      <Container fluid className="px-4 py-5">
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <h5 className="fw-bold text-primary mb-3">
              <span className="me-2">📦</span>OminiStock
            </h5>
            <p className="text-muted">
              Sistema automatizado de gestão de estoque em tempo real para 
              farmácias hospitalares. Segurança, eficiência e controle total 
              do seu inventário farmacêutico.
            </p>            <div className="d-flex gap-3">
              <button 
                type="button"
                className="btn btn-link text-muted p-0 border-0 hover:text-primary"
                aria-label="Facebook"
                onClick={() => window.open('https://facebook.com', '_blank')}
              >
                📘
              </button>
              <button 
                type="button"
                className="btn btn-link text-muted p-0 border-0 hover:text-primary"
                aria-label="LinkedIn"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                💼
              </button>
              <button 
                type="button"
                className="btn btn-link text-muted p-0 border-0 hover:text-primary"
                aria-label="Instagram"
                onClick={() => window.open('https://instagram.com', '_blank')}
              >
                📷
              </button>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-semibold mb-3">Navegação</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link 
                  to="/" 
                  className="text-muted text-decoration-none hover:text-primary"
                >
                  Início
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/solucao" 
                  className="text-muted text-decoration-none hover:text-primary"
                >
                  Solução
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/sobre" 
                  className="text-muted text-decoration-none hover:text-primary"
                >
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-semibold mb-3">Conta</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link 
                  to="/login" 
                  className="text-muted text-decoration-none hover:text-primary"
                >
                  Login
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/cadastrar" 
                  className="text-muted text-decoration-none hover:text-primary"
                >
                  Cadastrar
                </Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <h6 className="fw-semibold mb-3">Contato</h6>
            <address className="text-muted mb-0">
              <p className="mb-2">
                <strong>Email:</strong> contato@oministock.com.br
              </p>
              <p className="mb-2">
                <strong>Telefone:</strong> (11) 1234-5678
              </p>
              <p className="mb-2">
                <strong>Endereço:</strong> São Paulo, SP, Brasil
              </p>
            </address>
          </Col>
        </Row>
        
        <hr className="my-4 border-secondary" />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="text-muted mb-0">
              © {currentYear} OminiStock. Todos os direitos reservados.
            </p>
          </Col>
          <Col md={6} className="text-md-end">            <div className="d-flex flex-wrap justify-content-md-end gap-3">
              <button 
                type="button"
                className="btn btn-link text-muted p-0 border-0 text-decoration-none hover:text-primary"
                onClick={() => alert('Política de Privacidade em desenvolvimento')}
              >
                Política de Privacidade
              </button>
              <button 
                type="button"
                className="btn btn-link text-muted p-0 border-0 text-decoration-none hover:text-primary"
                onClick={() => alert('Termos de Uso em desenvolvimento')}
              >
                Termos de Uso
              </button>
              <button 
                type="button"
                className="btn btn-link text-muted p-0 border-0 text-decoration-none hover:text-primary"
                onClick={() => alert('Entre em contato: contato@oministock.com.br')}
              >
                Suporte
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
