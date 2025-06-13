import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Estilos personalizados
import './styles/main.css';

// Componentes de layout
import Navigation from './components/Nav.jsx';
import Footer from './components/Footer.jsx';

// Rotas/Páginas
import Home from './routes/Home.jsx';
import Solucao from './routes/Solucao.jsx';
import Sobre from './routes/Sobre.jsx';
import Login from './routes/Login.jsx';
import Cadastrar from './routes/Cadastrar.jsx';
import ErrorPage from './routes/Error.jsx';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navigation />
          
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solucao" element={<Solucao />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastrar" element={<Cadastrar />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

// Render da aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
