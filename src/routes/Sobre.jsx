import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Sobre = () => {
  const teamMembers = [
    {
      name: 'Davi Correa Paião',
      role: 'RM:560438',
      description: 'Desenvolvedor dos conteudos referente a meteria Edge Computing e IoT.',
      avatar: '🙋🏻‍♂️'
    },
     {
      name: 'Marcos Vinicius Gonçalves Santos',
      role: 'RM:560062',
      description: 'Desenvolvedor da comunição do sistema fisico com a nuvem.',
      avatar: '🧑🏻‍💻'
    },
     {
      name: 'Filip Arnhold Outa',
      role: 'RM:559294',
      description: 'Desenvolvedor dos conteudos em Python e Differentiated Problem Solving.',
      avatar: '👨🏻‍🦰'
    },
    {
      name: 'Matheus Ricardo Parreira da Silva',
      role: 'RM:560099',
      description: 'Desenvolvedor dos conteudos em Front-End e Web Developement.',
      avatar: '👨🏽'
    },
    {
      name: 'Marcos Eduardo Hideyoshi Azuma',
      role: 'RM:559883',
      description: 'Desenvolvedor dos conteudos em Storytelling e Software Design & TX.',
      avatar: '🥷🏻'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Precisão',
      description: 'Buscamos a excelência em cada detalhe do nosso sistema para garantir máxima confiabilidade.'
    },
    {
      icon: '🔒',
      title: 'Segurança',
      description: 'Priorizamos a segurança dos dados e medicamentos com as mais avançadas tecnologias.'
    },
    {
      icon: '🤝',
      title: 'Parceria',
      description: 'Trabalhamos lado a lado com nossos clientes para entender suas necessidades específicas.'
    },
    {
      icon: '🚀',
      title: 'Inovação',
      description: 'Constantemente desenvolvemos novas funcionalidades baseadas em feedback real.'
    }
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Sobre Nós - OminiStock</title>
        <meta name="description" content="Conheça a equipe e história da OminiStock. Empresa especializada em soluções de automação para farmácias hospitalares." />
        <meta name="keywords" content="sobre oministock, equipe, farmácia hospitalar, automação, tecnologia saúde" />
      </Helmet>

      <main className="pt-5 mt-4">
        {/* Hero Section */}
        <section className="py-5 bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <h1 className="display-4 fw-bold mb-4">
                  Sobre a OminiStock
                </h1>
                <p className="fs-5 text-muted mb-4">
                  Nascemos da necessidade real observada em farmácias hospitalares: 
                  automatizar processos manuais que consomem tempo precioso dos 
                  profissionais de saúde e podem levar a erros críticos.
                </p>
                <p className="fs-6 text-muted">
                  Nossa missão é revolucionar a gestão de estoque farmacêutico 
                  através da tecnologia, proporcionando mais segurança, eficiência 
                  e tempo para o que realmente importa: cuidar de pessoas.
                </p>
              </Col>
              <Col lg={6} className="text-center">
                <div className="bg-white rounded-3 p-5 shadow">
                  <span style={{ fontSize: '8rem' }} aria-hidden="true">🏥</span>
                  <h3 className="mt-3 text-primary">Nossa Missão</h3>
                  <p className="text-muted">Tecnologia a serviço da saúde</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* História */}
        <section className="py-5">
          <Container>
            <Row>
              <Col lg={8} className="mx-auto">
                <h2 className="display-5 fw-bold text-center mb-5">Nossa História</h2>
                
                <div className="timeline">
                  <div className="row mb-4">
                    <div className="col-md-2 text-center">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                           style={{ width: '60px', height: '60px' }}>
                        <strong>2023</strong>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <Card className="border-0 shadow-sm">
                        <Card.Body>
                          <h5 className="fw-bold">Identificação do Problema</h5>
                          <p className="text-muted mb-0">
                            Durante visitas a farmácias hospitalares, observamos que 
                            profissionais gastavam horas diariamente em contagens manuais 
                            e verificações de estoque, especialmente para medicamentos controlados.
                          </p>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-2 text-center">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                           style={{ width: '60px', height: '60px' }}>
                        <strong>2024</strong>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <Card className="border-0 shadow-sm">
                        <Card.Body>
                          <h5 className="fw-bold">Desenvolvimento do Protótipo</h5>
                          <p className="text-muted mb-0">
                            Iniciamos o desenvolvimento da primeira versão do sistema, 
                            combinando sensores de peso, biometria e software de gestão. 
                            Testes iniciais em laboratório mostraram 99.9% de precisão.
                          </p>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-2 text-center">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                           style={{ width: '60px', height: '60px' }}>
                        <strong>2025</strong>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <Card className="border-0 shadow-sm">
                        <Card.Body>
                          <h5 className="fw-bold">Lançamento Oficial</h5>
                          <p className="text-muted mb-0">
                            Após testes extensivos em ambiente real, lançamos o OminiStock 
                            com funcionalidades completas de IA, integração ERP e 
                            dashboard em tempo real. Primeiros clientes implementados com sucesso.
                          </p>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Valores */}
        <section className="py-5 bg-light">
          <Container>
            <Row className="mb-5">
              <Col lg={8} className="mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3">Nossos Valores</h2>
                <p className="fs-5 text-muted">
                  Os princípios que orientam cada decisão e desenvolvimento na OminiStock.
                </p>
              </Col>
            </Row>

            <Row className="g-4">
              {values.map((value) => (
                <Col lg={3} md={6} key={value.title}>
                  <Card className="h-100 border-0 shadow-sm text-center">
                    <Card.Body className="p-4">
                      <div className="mb-3">
                        <span style={{ fontSize: '3rem' }} aria-hidden="true">
                          {value.icon}
                        </span>
                      </div>
                      <h5 className="fw-bold mb-3">{value.title}</h5>
                      <p className="text-muted">{value.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Equipe */}
        <section className="py-5">
          <Container>
            <Row className="mb-5">
              <Col lg={8} className="mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3">Nossa Equipe</h2>
                <p className="fs-5 text-muted">
                  Profissionais experientes unidos pela paixão em resolver 
                  problemas reais do setor de saúde.
                </p>
              </Col>
            </Row>

            <Row className="g-4">
              {teamMembers.map((member) => (
                <Col lg={4} md={6} key={member.name}>
                  <Card className="h-100 border-0 shadow-sm text-center">
                    <Card.Body className="p-4">
                      <div className="mb-3">
                        <span style={{ fontSize: '4rem' }} aria-hidden="true">
                          {member.avatar}
                        </span>
                      </div>
                      <h5 className="fw-bold mb-1">{member.name}</h5>
                      <p className="text-primary fw-semibold mb-3">{member.role}</p>
                      <p className="text-muted">{member.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Estatísticas */}
        <section className="py-5 bg-primary text-white">
          <Container>
            <Row className="text-center">
              <Col lg={3} md={6} className="mb-4">
                <h3 className="display-4 fw-bold">2+</h3>
                <p className="fs-5">Anos de Desenvolvimento</p>
              </Col>
              <Col lg={3} md={6} className="mb-4">
                <h3 className="display-4 fw-bold">5+</h3>
                <p className="fs-5">Hospitais Atendidos</p>
              </Col>
              <Col lg={3} md={6} className="mb-4">
                <h3 className="display-4 fw-bold">15K+</h3>
                <p className="fs-5">Medicamentos Monitorados</p>
              </Col>
              <Col lg={3} md={6} className="mb-4">
                <h3 className="display-4 fw-bold">99.9%</h3>
                <p className="fs-5">Precisão do Sistema</p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Contato */}
        <section className="py-5">
          <Container>
            <Row>
              <Col lg={8} className="mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3">Entre em Contato</h2>
                <p className="fs-5 text-muted mb-4">
                  Tem dúvidas sobre nossa solução ou gostaria de agendar uma demonstração? 
                  Nossa equipe está pronta para ajudar.
                </p>

                <Row className="g-4 mt-4">
                  <Col md={4}>
                    <div className="text-center">
                      <span style={{ fontSize: '2rem' }} aria-hidden="true">📧</span>
                      <h6 className="fw-semibold mt-2">Email</h6>
                      <p className="text-muted">contato@oministock.com.br</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="text-center">
                      <span style={{ fontSize: '2rem' }} aria-hidden="true">📞</span>
                      <h6 className="fw-semibold mt-2">Telefone</h6>
                      <p className="text-muted">(11) 1234-5678</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="text-center">
                      <span style={{ fontSize: '2rem' }} aria-hidden="true">📍</span>
                      <h6 className="fw-semibold mt-2">Localização</h6>
                      <p className="text-muted">São Paulo, SP - Brasil</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </HelmetProvider>
  );
};

export default Sobre;
