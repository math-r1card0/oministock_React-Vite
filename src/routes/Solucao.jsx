import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Tabs, Tab, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Solucao = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: '⚖️',
      title: 'Sensores de Precisão',
      description: 'Load cells de alta precisão detectam automaticamente variações de peso para atualização instantânea do estoque.'
    },
    {
      icon: '👆',
      title: 'Autenticação Biométrica',
      description: 'Scanners biométricos garantem acesso seguro a medicamentos controlados com rastreabilidade total.'
    },
    {
      icon: '💡',
      title: 'LED Localizador',
      description: 'Sistema de iluminação LED guia usuários diretamente ao compartimento correto, reduzindo tempo de busca.'
    },
    {
      icon: '🔔',
      title: 'Notificações Inteligentes',
      description: 'Alertas automáticos para estoque baixo, vencimento próximo e necessidade de reposição.'
    },
    {
      icon: '📊',
      title: 'Analytics Preditivo',
      description: 'IA analisa padrões de consumo para prever demandas e otimizar compras futuras.'
    },
    {
      icon: '🌐',
      title: 'Dashboard Web',
      description: 'Interface web responsiva para monitoramento em tempo real de qualquer dispositivo.'
    }
  ];

  const benefits = [
    {
      metric: '90%',
      description: 'Redução no tempo de inventário'
    },
    {
      metric: '99.9%',
      description: 'Precisão no controle de estoque'
    },
    {
      metric: '60%',
      description: 'Diminuição de desperdícios'
    },
    {
      metric: '24/7',
      description: 'Monitoramento contínuo'
    }
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Nossa Solução - OminiStock</title>
        <meta name="description" content="Conheça detalhes da solução OminiStock: sensores de precisão, biometria, IA e dashboard em tempo real para farmácias hospitalares." />
        <meta name="keywords" content="solução automação, gestão estoque hospitalar, sensores peso, biometria farmácia" />
      </Helmet>

      <main className="pt-5 mt-4">
        {/* Hero Section */}
        <section className="py-5 bg-primary text-white">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <h1 className="display-4 fw-bold mb-4">
                  Nossa Solução Completa
                </h1>
                <p className="fs-5 mb-4 opacity-90">
                  O OminiStock combina hardware inteligente e software avançado 
                  para criar o sistema de gestão de estoque mais preciso e seguro 
                  do mercado hospitalar.
                </p>
                <Button 
                  as={Link} 
                  to="/cadastrar" 
                  variant="light" 
                  size="lg"
                  className="fw-semibold"
                >
                  Solicitar Demonstração
                </Button>
              </Col>
              <Col lg={6} className="text-center">
                <div className="bg-white rounded-3 p-4 shadow-lg">
                  <span style={{ fontSize: '6rem' }} aria-hidden="true">🔬</span>
                  <h3 className="text-dark mt-3">Tecnologia Avançada</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Features Tabs */}
        <section className="py-5">
          <Container>
            <Row className="mb-5">
              <Col lg={8} className="mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3">Como Funciona</h2>
                <p className="fs-5 text-muted">
                  Explore os componentes principais da nossa solução integrada.
                </p>
              </Col>
            </Row>

            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="nav-justified mb-4"
              fill
            >
              <Tab eventKey="overview" title="Visão Geral">                <Row className="g-4">
                  {features.map((feature) => (
                    <Col lg={4} md={6} key={feature.title}>
                      <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="text-center p-4">
                          <div className="mb-3">
                            <span style={{ fontSize: '2.5rem' }} aria-hidden="true">
                              {feature.icon}
                            </span>
                          </div>
                          <h5 className="fw-bold mb-3">{feature.title}</h5>
                          <p className="text-muted">{feature.description}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab>

              <Tab eventKey="hardware" title="Hardware">
                <Row className="align-items-center">
                  <Col lg={6}>
                    <h3 className="fw-bold mb-4">Componentes Físicos</h3>
                    <div className="list-group list-group-flush">
                      <div className="list-group-item border-0 px-0">
                        <h6 className="fw-semibold">Sensores Load Cell</h6>
                        <p className="text-muted mb-0">
                          Sensores de peso de alta precisão (±0.1g) integrados 
                          em cada compartimento para detecção automática de movimentações.
                        </p>
                      </div>
                      <div className="list-group-item border-0 px-0">
                        <h6 className="fw-semibold">Scanner Biométrico</h6>
                        <p className="text-muted mb-0">
                          Leitor de impressão digital com certificação FBI PIV 
                          para acesso seguro a medicamentos controlados.
                        </p>
                      </div>
                      <div className="list-group-item border-0 px-0">
                        <h6 className="fw-semibold">Sistema LED</h6>
                        <p className="text-muted mb-0">
                          LEDs RGB individuais em cada gaveta para localização 
                          visual rápida dos medicamentos solicitados.
                        </p>
                      </div>
                      <div className="list-group-item border-0 px-0">
                        <h6 className="fw-semibold">Controlador Central</h6>
                        <p className="text-muted mb-0">
                          Microcontrolador ARM com conectividade Wi-Fi/Ethernet 
                          para comunicação em tempo real com o sistema.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} className="text-center">
                    <div className="bg-light rounded-3 p-5">
                      <span style={{ fontSize: '8rem' }} aria-hidden="true">⚙️</span>
                      <h4 className="mt-3">Hardware Integrado</h4>
                      <p className="text-muted">Componentes de última geração</p>
                    </div>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="software" title="Software">
                <Row className="align-items-center">
                  <Col lg={6} className="text-center">
                    <div className="bg-light rounded-3 p-5">
                      <span style={{ fontSize: '8rem' }} aria-hidden="true">💻</span>
                      <h4 className="mt-3">Plataforma Web</h4>
                      <p className="text-muted">Dashboard intuitivo e responsivo</p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <h3 className="fw-bold mb-4">Recursos do Software</h3>
                    <div className="list-group list-group-flush">
                      <div className="list-group-item border-0 px-0">
                        <h6 className="fw-semibold">Dashboard Tempo Real</h6>
                        <p className="text-muted mb-0">
                          Interface web responsiva com atualizações instantâneas 
                          do status de estoque e movimentações.
                        </p>
                      </div>
                      <div className="list-group-item border-0 px-0">
                        <h6 className="fw-semibold">Relatórios Avançados</h6>
                        <p className="text-muted mb-0">
                          Geração automática de relatórios de consumo, 
                          auditoria e previsão de demanda.
                        </p>
                      </div>
                      <div className="list-group-item border-0 px-0">
                        <h6 className="fw-semibold">Integração ERP</h6>
                        <p className="text-muted mb-0">
                          APIs RESTful para integração com sistemas hospitalares 
                          existentes (ERP, HIS, PEP).
                        </p>
                      </div>
                      <div className="list-group-item border-0 px-0">
                        <h6 className="fw-semibold">Machine Learning</h6>
                        <p className="text-muted mb-0">
                          Algoritmos de IA para análise preditiva e otimização 
                          automática de processos de reposição.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-5 bg-light">
          <Container>
            <Row className="mb-5">
              <Col lg={8} className="mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3">Resultados Comprovados</h2>
                <p className="fs-5 text-muted">
                  Nossos clientes obtêm resultados mensurável desde o primeiro mês.
                </p>
              </Col>
            </Row>            <Row className="g-4 mb-5">
              {benefits.map((benefit) => (
                <Col lg={3} md={6} key={benefit.metric} className="text-center">
                  <div className="bg-white rounded-3 p-4 shadow-sm h-100">
                    <h3 className="display-4 fw-bold text-primary mb-2">
                      {benefit.metric}
                    </h3>
                    <p className="text-muted mb-0">{benefit.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-5">
          <Container>
            <Row>
              <Col lg={8} className="mx-auto">
                <h2 className="display-5 fw-bold text-center mb-5">
                  Perguntas Frequentes
                </h2>
                
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Como o sistema detecta automaticamente as movimentações?
                    </Accordion.Header>
                    <Accordion.Body>
                      Utilizamos sensores load cell de alta precisão instalados em cada 
                      compartimento. Quando um medicamento é retirado ou adicionado, 
                      a variação de peso é detectada instantaneamente e processada 
                      pelo sistema, atualizando o estoque em tempo real.
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      A biometria é segura para ambiente hospitalar?
                    </Accordion.Header>
                    <Accordion.Body>
                      Sim, nossos scanners biométricos são certificados para uso médico, 
                      com superfície antimicrobiana e possibilidade de limpeza com 
                      álcool 70%. O sistema não armazena imagens, apenas templates 
                      criptografados das impressões digitais.
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      É possível integrar com nosso sistema atual?
                    </Accordion.Header>
                    <Accordion.Body>
                      Absolutely! O OminiStock oferece APIs RESTful padronizadas para 
                      integração com a maioria dos sistemas hospitalares (ERP, HIS, PEP). 
                      Nossa equipe técnica oferece suporte completo durante a integração.
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Qual o tempo de implementação?
                    </Accordion.Header>
                    <Accordion.Body>
                      O tempo varia conforme o tamanho da farmácia, mas tipicamente:
                      - Instalação física: 2-3 dias
                      - Configuração e testes: 1-2 dias  
                      - Treinamento da equipe: 1 dia
                      - Go-live: 5-7 dias úteis total
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
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
                  Pronto para Implementar?
                </h2>
                <p className="fs-5 mb-4 opacity-90">
                  Entre em contato conosco para uma demonstração personalizada 
                  e orçamento sem compromisso.
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
                    Conhecer a Empresa
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

export default Solucao;
