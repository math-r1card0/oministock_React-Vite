# OminiStock - Sistema de Gestão de Estoque Hospitalar

Sistema automatizado de gestão de estoque em tempo real para farmácias hospitalares com tecnologia de sensores, biometria e inteligência artificial.

## ⚙️ Funcionalidades

- **Gestão em Tempo Real**: Sensores de peso detectam automaticamente movimentações de estoque
- **Segurança Biométrica**: Controle de acesso por impressão digital para medicamentos controlados
- **Dashboard Responsivo**: Interface web moderna com Bootstrap e TailwindCSS
- **Análise Preditiva**: IA para previsão de demanda e otimização de compras
- **API Local**: Consumo de dados simulados via JSON local
- **Navegação Intuitiva**: React Router para SPA fluida

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18 + Vite
- **Estilização**: Bootstrap 5 + TailwindCSS + SASS
- **Roteamento**: React Router v6
- **SEO**: React Helmet Async
- **Linting**: ESLint
- **Build Tool**: Vite

## 📋 Requisitos do Sistema

- Node.js >= 18.x
- npm ou yarn
- Navegador moderno (Chrome, Firefox, Safari, Edge)

## 🔧 Instalação e Configuração

### 1. Instale as dependências

```bash
npm install
```

### 2. Execute o projeto em desenvolvimento

```bash
npm run dev
```

### 3. Acesse a aplicação

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   ├── Nav.jsx         # Navegação principal
│   └── Footer.jsx      # Rodapé
├── routes/             # Páginas/Rotas da aplicação
│   ├── Home.jsx        # Página inicial
│   ├── Solucao.jsx     # Detalhes da solução
│   ├── Sobre.jsx       # Sobre a empresa
│   ├── Login.jsx       # Autenticação
│   ├── Cadastrar.jsx   # Registro de usuários
│   └── Error.jsx       # Página 404
├── data/               # Dados simulados (API local)
│   └── api-data.json   # Dados de produtos, funcionários, etc.
├── styles/             # Estilos personalizados
│   └── main.css        # CSS principal com TailwindCSS
└── main.jsx            # Ponto de entrada da aplicação
```

## 🎨 Design e UX

- **Design Responsivo**: Mobile-first approach
- **Acessibilidade**: Seguindo padrões WCAG
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Performance**: Bundle otimizado com Vite

## 🔐 Demonstração

### Credenciais de Teste

- **Email**: admin@oministock.com
- **Senha**: 123456

## 📊 Funcionalidades Implementadas

### ✅ Requisitos Atendidos

1. **Estrutura de Componentes**

   - [x] `components/Nav.jsx` - Navegação responsiva
   - [x] `components/Footer.jsx` - Rodapé completo

2. **Rotas Implementadas**

   - [x] `routes/Home.jsx` - Página inicial com dados da API
   - [x] `routes/Solucao.jsx` - Detalhes técnicos da solução
   - [x] `routes/Sobre.jsx` - Informações da empresa
   - [x] `routes/Login.jsx` - Sistema de autenticação
   - [x] `routes/Cadastrar.jsx` - Formulário de registro
   - [x] `routes/Error.jsx` - Página de erro 404

3. **Tecnologias Integradas**

   - [x] TailwindCSS configurado
   - [x] Bootstrap React Components
   - [x] SASS para estilos customizados
   - [x] API JSON local consumida
   - [x] React Router v6 configurado

4. **Boas Práticas**
   - [x] Código limpo e modular
   - [x] Componentes acessíveis
   - [x] HTML5 semântico
   - [x] Responsividade mobile-first
   - [x] SEO otimizado

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 🎯 Contexto do Projeto

O OminiStock foi desenvolvido como uma solução real para um problema identificado em farmácias hospitalares.

### Solução Proposta

1. **Sensores de Precisão**: Load cells detectam automaticamente variações de peso
2. **Biometria**: Scanners de impressão digital para medicamentos controlados
3. **Localização LED**: Sistema de iluminação guia usuários ao compartimento correto
4. **Dashboard Web**: Monitoramento em tempo real de qualquer dispositivo
5. **IA Preditiva**: Análise de padrões para otimização de compras

## 👥 Equipe

| Nome | RM |
|------|----|
| Davi Correa Paião |	560438 |
| Filip Arnhold Outa | 559294 |
| Marcos Eduardo Hideyoshi Azuma | 559883 |
| Marcos Vinicius Gonçalves Santos | 560062 |
| Matheus Ricardo Parreira da Silva | 560099 |

_Desenvolvido com ❤️ para revolucionar a gestão de estoque hospitalar_
