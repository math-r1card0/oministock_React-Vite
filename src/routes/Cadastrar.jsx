import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Cadastrar = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
    hospital: '',
    cargo: '',
    senha: '',
    confirmarSenha: '',
    termos: false,
    newsletter: true
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpar erro específico quando usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nomeCompleto.trim()) {
      newErrors.nomeCompleto = 'Nome completo é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }

    if (!formData.hospital.trim()) {
      newErrors.hospital = 'Nome do hospital é obrigatório';
    }

    if (!formData.cargo.trim()) {
      newErrors.cargo = 'Cargo é obrigatório';
    }

    if (!formData.senha) {
      newErrors.senha = 'Senha é obrigatória';
    } else if (formData.senha.length < 6) {
      newErrors.senha = 'Senha deve ter pelo menos 6 caracteres';
    }

    if (formData.senha !== formData.confirmarSenha) {
      newErrors.confirmarSenha = 'Senhas não coincidem';
    }

    if (!formData.termos) {
      newErrors.termos = 'Você deve aceitar os termos e condições';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      // Simular registro
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simular sucesso
      setSuccess(true);
      
      // Redirecionar após 3 segundos
      setTimeout(() => {
        navigate('/login', { 
          state: { message: 'Conta criada com sucesso! Faça login para continuar.' }
        });
      }, 3000);
      
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setErrors({ general: 'Erro no servidor. Tente novamente.' });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <HelmetProvider>
        <Helmet>
          <title>Cadastro Realizado - OminiStock</title>
        </Helmet>
        <main className="bg-light min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col lg={6} className="text-center">
                <Card className="border-0 shadow">
                  <Card.Body className="p-5">
                    <div className="mb-4">
                      <span style={{ fontSize: '4rem' }} aria-hidden="true">✅</span>
                    </div>
                    <h2 className="fw-bold text-success mb-3">Cadastro Realizado!</h2>
                    <p className="text-muted mb-4">
                      Sua conta foi criada com sucesso. Em breve você será redirecionado 
                      para a página de login.
                    </p>
                    <div className="spinner-border text-primary" aria-hidden="true"></div>
                    <p className="mt-3 text-muted">Redirecionando...</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </main>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Cadastrar - OminiStock</title>
        <meta name="description" content="Crie sua conta OminiStock e tenha acesso ao sistema de gestão de estoque hospitalar." />
      </Helmet>

      <main className="bg-light min-vh-100 py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              <Card className="shadow border-0">
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <h1 className="h3 fw-bold text-primary mb-2">
                      <span className="me-2">📦</span>OminiStock
                    </h1>
                    <p className="text-muted">
                      Crie sua conta e revolucione a gestão do seu estoque
                    </p>
                  </div>

                  {errors.general && (
                    <Alert variant="danger" className="mb-4">
                      {errors.general}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="nomeCompleto" className="fw-semibold">
                            Nome Completo *
                          </Form.Label>
                          <Form.Control
                            id="nomeCompleto"
                            type="text"
                            name="nomeCompleto"
                            value={formData.nomeCompleto}
                            onChange={handleChange}
                            placeholder="Seu nome completo"
                            disabled={loading}
                            isInvalid={!!errors.nomeCompleto}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.nomeCompleto}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="email" className="fw-semibold">
                            Email Profissional *
                          </Form.Label>
                          <Form.Control
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu.email@hospital.com"
                            disabled={loading}
                            isInvalid={!!errors.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="telefone" className="fw-semibold">
                            Telefone *
                          </Form.Label>
                          <Form.Control
                            id="telefone"
                            type="tel"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            placeholder="(11) 99999-9999"
                            disabled={loading}
                            isInvalid={!!errors.telefone}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.telefone}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="cargo" className="fw-semibold">
                            Cargo *
                          </Form.Label>
                          <Form.Select
                            id="cargo"
                            name="cargo"
                            value={formData.cargo}
                            onChange={handleChange}
                            disabled={loading}
                            isInvalid={!!errors.cargo}
                          >
                            <option value="">Selecione seu cargo</option>
                            <option value="farmaceutico">Farmacêutico</option>
                            <option value="tecnico-farmacia">Técnico em Farmácia</option>
                            <option value="enfermeiro">Enfermeiro</option>
                            <option value="medico">Médico</option>
                            <option value="gestor">Gestor/Diretor</option>
                            <option value="ti">Profissional de TI</option>
                            <option value="outro">Outro</option>
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors.cargo}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="hospital" className="fw-semibold">
                        Nome do Hospital/Instituição *
                      </Form.Label>
                      <Form.Control
                        id="hospital"
                        type="text"
                        name="hospital"
                        value={formData.hospital}
                        onChange={handleChange}
                        placeholder="Hospital ABC"
                        disabled={loading}
                        isInvalid={!!errors.hospital}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.hospital}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="senha" className="fw-semibold">
                            Senha *
                          </Form.Label>
                          <Form.Control
                            id="senha"
                            type="password"
                            name="senha"
                            value={formData.senha}
                            onChange={handleChange}
                            placeholder="Mínimo 6 caracteres"
                            disabled={loading}
                            isInvalid={!!errors.senha}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.senha}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="confirmarSenha" className="fw-semibold">
                            Confirmar Senha *
                          </Form.Label>
                          <Form.Control
                            id="confirmarSenha"
                            type="password"
                            name="confirmarSenha"
                            value={formData.confirmarSenha}
                            onChange={handleChange}
                            placeholder="Digite a senha novamente"
                            disabled={loading}
                            isInvalid={!!errors.confirmarSenha}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.confirmarSenha}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <div className="mb-4">
                      <Form.Check
                        type="checkbox"
                        id="termos"
                        name="termos"
                        checked={formData.termos}
                        onChange={handleChange}
                        disabled={loading}
                        isInvalid={!!errors.termos}
                        label={
                          <span>
                            Aceito os{' '}
                            <Button 
                              variant="link" 
                              className="p-0 text-decoration-none"
                              onClick={(e) => {
                                e.preventDefault();
                                alert('Termos e Condições em desenvolvimento');
                              }}
                            >
                              termos e condições
                            </Button>
                            {' '}e{' '}
                            <Button 
                              variant="link" 
                              className="p-0 text-decoration-none"
                              onClick={(e) => {
                                e.preventDefault();
                                alert('Política de Privacidade em desenvolvimento');
                              }}
                            >
                              política de privacidade
                            </Button>
                            {' '}*
                          </span>
                        }
                      />
                      {errors.termos && (
                        <div className="text-danger small mt-1">{errors.termos}</div>
                      )}
                    </div>

                    <Form.Check
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      disabled={loading}
                      label="Quero receber newsletters e atualizações sobre o produto"
                      className="mb-4"
                    />

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-100 fw-semibold"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>Criando conta...
                        </>
                      ) : (
                        'Criar Conta'
                      )}
                    </Button>
                  </Form>

                  <hr className="my-4" />

                  <div className="text-center">
                    <p className="text-muted">
                      Já tem uma conta?{' '}
                      <Link 
                        to="/login" 
                        className="text-primary text-decoration-none fw-semibold"
                      >
                        Faça login aqui
                      </Link>
                    </p>
                  </div>
                </Card.Body>
              </Card>

              <div className="text-center mt-4">
                <Link 
                  to="/" 
                  className="text-muted text-decoration-none"
                >
                  ← Voltar ao início
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </HelmetProvider>
  );
};

export default Cadastrar;
