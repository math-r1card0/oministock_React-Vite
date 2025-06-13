import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    lembrarMe: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simular autenticação
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Validação simples para demonstração
      if (formData.email === 'admin@oministock.com' && formData.senha === '123456') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', formData.email);
        alert('Login realizado com sucesso! Redirecionando...');
        navigate('/');
      } else {
        setError('Email ou senha incorretos. Tente: admin@oministock.com / 123456');
      }    } catch (err) {
      console.error('Erro de autenticação:', err);
      setError('Erro no servidor. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Login - OminiStock</title>
        <meta name="description" content="Acesse sua conta OminiStock para gerenciar o estoque hospitalar." />
      </Helmet>

      <main className="bg-light min-vh-100 d-flex align-items-center py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={5} md={7} sm={9}>
              <Card className="shadow border-0">
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <h1 className="h3 fw-bold text-primary mb-2">
                      <span className="me-2">📦</span>OminiStock
                    </h1>
                    <p className="text-muted">
                      Acesse sua conta para gerenciar o estoque
                    </p>
                  </div>

                  {error && (
                    <Alert variant="danger" className="mb-4">
                      <small>{error}</small>
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="email" className="fw-semibold">
                        Email
                      </Form.Label>
                      <Form.Control
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu.email@hospital.com"
                        required
                        size="lg"
                        disabled={loading}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="senha" className="fw-semibold">
                        Senha
                      </Form.Label>
                      <Form.Control
                        id="senha"
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        placeholder="Digite sua senha"
                        required
                        size="lg"
                        disabled={loading}
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check
                        type="checkbox"
                        id="lembrarMe"
                        name="lembrarMe"
                        label="Lembrar de mim"
                        checked={formData.lembrarMe}
                        onChange={handleChange}
                        disabled={loading}
                      />
                      <Button 
                        variant="link" 
                        className="p-0 text-decoration-none"
                        onClick={() => alert('Entre em contato com o administrador')}
                      >
                        Esqueceu a senha?
                      </Button>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-100 fw-semibold"
                      disabled={loading}
                    >                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>Entrando...
                        </>
                      ) : (
                        'Entrar'
                      )}
                    </Button>
                  </Form>

                  <hr className="my-4" />

                  <div className="text-center">
                    <p className="text-muted mb-3">
                      Não tem uma conta?{' '}
                      <Link 
                        to="/cadastrar" 
                        className="text-primary text-decoration-none fw-semibold"
                      >
                        Cadastre-se aqui
                      </Link>
                    </p>

                    <div className="mt-4 p-3 bg-light rounded">
                      <small className="text-muted">
                        <strong>Demonstração:</strong><br />
                        Email: admin@oministock.com<br />
                        Senha: 123456
                      </small>
                    </div>
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

export default Login;
