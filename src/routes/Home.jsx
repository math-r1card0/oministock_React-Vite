import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import apiData from '../data/api-data.json';

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simular consumo de API local
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simular delay de API
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProdutos(apiData.produtos.slice(0, 3)); // Mostrar apenas 3 produtos
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getStatusBadge = (estoque, estoqueMinimo) => {
    if (estoque <= estoqueMinimo) {
      return <Badge bg="danger">Estoque Baixo</Badge>;
    } else if (estoque <= estoqueMinimo * 1.5) {
      return <Badge bg="warning">Atenção</Badge>;
    } else {
      return <Badge bg="success">Normal</Badge>;
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>OminiStock - Sistema de Gestão de Estoque Hospitalar</title>
        <meta name="description" content="Sistema automatizado de gestão de estoque em tempo real para farmácias hospitalares. Controle inteligente, segurança biométrica e análise preditiva." />
        <meta name="keywords" content="gestão estoque, farmácia hospitalar, automação, biometria, controle medicamentos" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="hero-gradient text-white py-5 mt-5">
          <Container className="py-5">
            <Row className="align-items-center min-vh-75">
              <Col lg={6} className="animate-fadeInUp">
                <h1 className="display-4 fw-bold mb-4">
                  Revolucione o Controle de Estoque Hospitalar
                </h1>
                <p className="fs-5 mb-4 opacity-90">
                  Sistema automatizado em tempo real para farmácias hospitalares. 
                  Segurança biométrica, sensores de precisão e análise preditiva 
                  para eliminar erros e otimizar processos.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Button 
                    as={Link} 
                    to="/solucao" 
                    variant="light" 
                    size="lg"
                    className="fw-semibold"
                  >
                    Conhecer Solução
                  </Button>
                  <Button 
                    as={Link} 
                    to="/cadastrar" 
                    variant="outline-light" 
                    size="lg"
                  >
                    Começar Agora
                  </Button>
                </div>
              </Col>
              <Col lg={6} className="text-center">
                <div className="bg-white rounded-3 p-4 shadow-lg">
                  <span style={{ fontSize: '8rem' }} aria-hidden="true">🏥</span>
                  <h3 className="text-dark mt-3">Gestão Inteligente</h3>
                  <p className="text-muted">Controle automatizado com IA</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-5 bg-light">
          <Container>
            <Row className="mb-5">
              <Col lg={8} className="mx-auto text-center">
                <h2 className="display-5 fw-bold text-dark mb-3">
                  Por Que Escolher o OminiStock?
                </h2>
                <p className="fs-5 text-muted">
                  Nossa solução elimina processos manuais e oferece controle total 
                  do seu inventário farmacêutico.
                </p>
              </Col>
            </Row>
            
            <Row className="g-4">
              <Col lg={4} md={6}>
                <Card className="h-100 border-0 shadow-sm hover:shadow-lg transition-shadow">
                  <Card.Body className="text-center p-4">
                    <div className="mb-3">
                      <span style={{ fontSize: '3rem' }} aria-hidden="true">⚡</span>
                    </div>
                    <h5 className="fw-bold mb-3">Tempo Real</h5>
                    <p className="text-muted">
                      Sensores de peso atualizam automaticamente o estoque 
                      a cada movimentação, eliminando contagens manuais.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col lg={4} md={6}>
                <Card className="h-100 border-0 shadow-sm hover:shadow-lg transition-shadow">
                  <Card.Body className="text-center p-4">
                    <div className="mb-3">
                      <span style={{ fontSize: '3rem' }} aria-hidden="true">🔒</span>
                    </div>
                    <h5 className="fw-bold mb-3">Segurança Biométrica</h5>
                    <p className="text-muted">
                      Acesso controlado por biometria para medicamentos 
                      controlados, com rastreabilidade completa.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col lg={4} md={6}>
                <Card className="h-100 border-0 shadow-sm hover:shadow-lg transition-shadow">
                  <Card.Body className="text-center p-4">
                    <div className="mb-3">
                      <span style={{ fontSize: '3rem' }} aria-hidden="true">📊</span>
                    </div>
                    <h5 className="fw-bold mb-3">Análise Preditiva</h5>
                    <p className="text-muted">
                      IA analisa padrões de consumo e gera insights para 
                      otimização de compras e redução de desperdício.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Live Data Section */}
        <section className="py-5">
          <Container>
            <Row className="mb-5">
              <Col lg={8} className="mx-auto text-center">
                <h2 className="display-5 fw-bold text-dark mb-3">
                  Dados em Tempo Real
                </h2>
                <p className="fs-5 text-muted">
                  Acompanhe o status atual do estoque diretamente do nosso sistema.
                </p>
              </Col>
            </Row>
            
            {loading ? (              <Row>
                <Col className="text-center">
                  <div className="spinner-border text-primary" aria-hidden="true"></div>
                  <p className="mt-3 text-muted">Carregando dados do sistema...</p>
                </Col>
              </Row>
            ) : (
              <Row className="g-4">
                {produtos.map((produto) => (
                  <Col lg={4} md={6} key={produto.id}>
                    <Card className="h-100 border-0 shadow-sm">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <h6 className="fw-bold mb-0">{produto.nome}</h6>
                          {getStatusBadge(produto.estoque, produto.estoqueMinimo)}
                        </div>
                        <p className="text-muted small mb-2">
                          Categoria: {produto.categoria}
                        </p>
                        <div className="row g-2 text-sm">
                          <div className="col-6">
                            <strong>Estoque:</strong> {produto.estoque}
                          </div>
                          <div className="col-6">
                            <strong>Mínimo:</strong> {produto.estoqueMinimo}
                          </div>
                          <div className="col-6">
                            <strong>Preço:</strong> R$ {produto.preco.toFixed(2)}
                          </div>
                          <div className="col-6">
                            <strong>Local:</strong> {produto.localizacao}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
            
            <Row className="mt-4">
              <Col className="text-center">
                <Button 
                  as={Link} 
                  to="/login" 
                  variant="primary" 
                  size="lg"
                >
                  Acessar Sistema Completo
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-5 bg-primary text-white">
          <Container>
            <Row className="text-center">
              <Col lg={8} className="mx-auto">
                <h2 className="display-5 fw-bold mb-3">
                  Pronto para Revolucionar seu Estoque?
                </h2>
                <p className="fs-5 mb-4 opacity-90">
                  Junte-se aos hospitais que já confiam no OminiStock para 
                  automatizar e otimizar sua gestão farmacêutica.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Button 
                    as={Link} 
                    to="/cadastrar" 
                    variant="light" 
                    size="lg"
                    className="fw-semibold"
                  >
                    Solicitar Demonstração
                  </Button>
                  <Button 
                    as={Link} 
                    to="/sobre" 
                    variant="outline-light" 
                    size="lg"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </HelmetProvider>
  );
};

export default Home;
