import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Página Não Encontrada - OminiStock</title>
        <meta name="description" content="A página que você procura não foi encontrada." />
      </Helmet>
      
      <main className="d-flex align-items-center min-vh-100 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={6} md={8}>
              <div className="animate-fadeInUp">
                <div className="mb-4">
                  <span style={{ fontSize: '6rem' }} aria-hidden="true">🔍</span>
                </div>
                
                <h1 className="display-4 fw-bold text-primary mb-3">
                  404
                </h1>
                
                <h2 className="h3 text-dark mb-4">
                  Página Não Encontrada
                </h2>
                
                <p className="text-muted mb-5 fs-5">
                  Ops! A página que você está procurando não existe ou foi movida.
                  Verifique o endereço digitado ou navegue para uma página válida.
                </p>
                
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Button 
                    as={Link} 
                    to="/" 
                    variant="primary" 
                    size="lg"
                    className="px-4"
                  >
                    <span className="me-2">🏠</span>Voltar ao Início
                  </Button>
                  
                  <Button 
                    variant="outline-secondary" 
                    size="lg"
                    className="px-4"
                    onClick={handleGoBack}
                  >
                    <span className="me-2">↩️</span>Página Anterior
                  </Button>
                </div>
                
                <div className="mt-5 pt-4 border-top">
                  <h3 className="h5 text-dark mb-3">
                    Navegação Rápida
                  </h3>
                  
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <Link 
                      to="/solucao" 
                      className="text-decoration-none text-primary hover:text-primary-dark"
                    >
                      Nossa Solução
                    </Link>
                    <span className="text-muted">|</span>
                    <Link 
                      to="/sobre" 
                      className="text-decoration-none text-primary hover:text-primary-dark"
                    >
                      Sobre Nós
                    </Link>
                    <span className="text-muted">|</span>
                    <Link 
                      to="/login" 
                      className="text-decoration-none text-primary hover:text-primary-dark"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </HelmetProvider>
  );
};

export default ErrorPage;
