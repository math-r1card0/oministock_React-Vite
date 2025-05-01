import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Soft UI Pro</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container11">
          <div className="home-card">
            <h1 className="home-text10 HeadingOne">Salve Tempo</h1>
            <h1 className="home-text11 HeadingOne">Reduzindo Processos</h1>
            <span className="home-text12">
              Uma automação que permite controle em tempo real do seu estoque.
              Trazendo segurança evitando extravio, eficiência com dados
              constantes, e um fácil acesso a todas informações obtidas por
              nosso sistema
            </span>
            <div className="home-container12">
              <div className="home-container13">
                <Link to="/contato" className="home-navlink1">
                  <PrimaryPinkButton
                    button="Contato"
                    className="home-component11"
                  ></PrimaryPinkButton>
                </Link>
              </div>
              <Link to="/embreve" className="home-navlink2">
                <OutlineGrayButton
                  button="EM BREVE"
                  className="home-component12"
                ></OutlineGrayButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img alt="image" src="/curved6-1500h.jpg" className="home-image10" />
      <section className="home-features">
        <FeatureCard
          text="Chega de pedir relatórios urgentes: nosso sistema entrega análises completas em segundos, adaptadas a cada cargo. Dados limpos, tendências destacadas, anomalias apontadas e decisões sem atrasos."
          title="Components"
          newProp="Relatórios Inteligentes"
          imageSrc="/cube1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Obtenha insights precisos sobre padrões de consumo e desempenho, permitindo decisões estratégicas que aumentam a eficiência, reduzem custos e refinam métodos de reposição."
          title="Less Code"
          newProp="Análises Orientadas por Dados"
          imageSrc="/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Acesso direto às informações-chave do seu cargo, sem navegação complexa. Cada login exibe uma interface exclusiva, projetada para sua função, com dados prioritários e zero distrações."
          title="Fully Responsive"
          newProp="Interfaces Personalizadas"
          imageSrc="/credit%20card1.svg"
        ></FeatureCard>
      </section>
      <section className="home-container14">
        <div className="home-container15">
          <h1 className="home-text13 HeadingOne"> Seus Dados, Suas regras </h1>
          <span className="home-text14">
            Vá além do nosso dashboard! Seja qual for o sistema adotado pela sua
            empresa, o OminiStock se adapta. Oferecemos integração ágil com
            ERPs, planilhas ou softwares customizados
          </span>
        </div>
        <div className="home-container16">
          <div className="home-container17">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
              className="home-image11"
            />
            <span className="home-text15 Small">
              <span className="home-text16">
                &quot;Adotei o OminiStock e recuperei horas de trabalho
                perdidas. Controle preciso do estoque com segurança na
                automação. Eficiência que transforma números em
                resultados.&quot;
              </span>
              <br></br>
              <span className="home-text18">-Ana B.</span>
            </span>
            <div className="home-container18">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                className="home-image12"
              />
            </div>
          </div>
          <div className="home-container19">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
              className="home-image13"
            />
            <div className="home-container20">
              <h3 className="home-text19">Como Tudo Funciona?</h3>
              <p>
                <br></br>
                <span>
                  1. Cada compartimento do seu estoque é equipado com sensores
                  de peso de alta precisão. Basta armazenar os itens sobre eles.
                </span>
                <br></br>
                <br></br>
                <span>
                  2. Nossos sensores operam de forma contínua, assim cada item
                  acrescentado ou retirado, é notado.
                </span>
                <br></br>
                <br></br>
                <span>
                  3.Essas movimentações são enviadas em tempo real via fios até
                  o nosso micro-controlador, que torna os dados legíveis. Onde o
                  computador conectado a ele via cabo, coloca os dados em rede
                  no servidor.
                </span>
                <br></br>
                <br></br>
                <span>
                  4. Por final, todas as informações coletadas são centralizadas
                  em um dashboard online, que permite aos gestores acompanhar o
                  inventário de onde quer que seja, com dados atualizados.
                </span>
                <br></br>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-container21">
          <div className="home-container22">
            <div className="home-container23">
              <div className="home-container24">
                <h2 className="home-text34 HeadingOne">Trabalhe Conosco</h2>
                <p className="home-text35 Lead">
                  Contribua para um futuro melhor com automação.
                </p>
                <p className="home-text36">
                  <span>
                    Estamos construindo o futuro do controle de estoque e
                    queremos mentes brilhantes ao nosso lado. Se você é
                    apaixonado por tecnologia, inovação e soluções que
                    transformam negócios,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text38">
                    queremos você no nosso time.
                  </span>
                </p>
                <p className="home-text39">Matheus Ricardo</p>
                <p className="home-text40 Small">
                  Arquiteto do Sistema e Inventor do OminiStock
                </p>
                <div className="home-container25">
                  <div className="home-container26">
                    <img
                      alt="image"
                      src="/bluesuit-200h.jpg"
                      className="home-image14"
                    />
                    <div className="home-container27"></div>
                    <img
                      alt="image"
                      src="/azumaimg-200h.jpeg"
                      className="home-image15"
                    />
                    <div className="home-container28"></div>
                    <img
                      alt="image"
                      src="/daviimg-200h.jpeg"
                      className="home-image16"
                    />
                    <div className="home-container29"></div>
                    <img
                      alt="image"
                      src="/filipimg-200h.jpeg"
                      className="home-image17"
                    />
                    <div className="home-container30"></div>
                    <img
                      alt="image"
                      src="/santosimg-200h.jpeg"
                      className="home-image18"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container31">
              <div className="home-container32">
                <div className="home-container33">
                  <img
                    alt="image"
                    src="/logo-asana.svg"
                    className="home-image19"
                  />
                </div>
                <div className="home-container34">
                  <img
                    alt="image"
                    src="/logo-slack.svg"
                    className="home-image20"
                  />
                </div>
                <div className="home-container35">
                  <img
                    alt="image"
                    src="/logo-google-drive.svg"
                    className="home-image21"
                  />
                </div>
              </div>
              <div className="home-container36">
                <div className="home-container37">
                  <img
                    alt="image"
                    src="/logo-shopify.svg"
                    className="home-image22"
                  />
                </div>
                <div className="home-container38">
                  <img
                    alt="image"
                    src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg"
                    className="home-image23"
                  />
                </div>
                <div className="home-container39">
                  <img
                    alt="image"
                    src="/logo-invision.svg"
                    className="home-image24"
                  />
                </div>
              </div>
              <div className="home-container40">
                <div className="home-container41">
                  <img
                    alt="image"
                    src="/logo-attlasian.svg"
                    className="home-image25"
                  />
                </div>
                <div className="home-container42">
                  <img
                    alt="image"
                    src="/logo-weave.svg"
                    className="home-image26"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img alt="image" src="/bottom.svg" className="home-bottom-wave-image" />
        <img alt="image" src="/waves-white.svg" className="home-image27" />
        <img alt="image" src="/top.svg" className="home-top-wave-image" />
      </section>
      <section className="home-contaier">
        <div className="home-container43">
          <div className="home-container44">
            <svg viewBox="0 0 1024 1024" className="home-icon1">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text41 HeadingTwo">Redefinimos a Excelência</h2>
          <h3 className="home-text42 HeadingTwo">
            <span className="home-text43">Em Controle de Estoque</span>
            <br></br>
          </h3>
          <span className="home-text45">
            O OminiStock vai além de números: transforma dados de estoque em
            insights práticos.
          </span>
        </div>
        <div className="home-container45">
          <div className="home-container46">
            <div className="home-container47"></div>
            <div className="home-container48">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon3">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text46">Agende um Simulação</h1>
              <Link to="/contato" className="home-navlink3">
                <OutlineBlackButton
                  button="contato"
                  className="home-component16"
                ></OutlineBlackButton>
              </Link>
            </div>
          </div>
          <div className="home-container49">
            <ListItem
              heading={
                <Fragment>
                  <span className="home-text47">
                    {' '}
                    Desenvolvido para Decisões Importantes 
                  </span>
                </Fragment>
              }
              newProp="1. Desenvolvido para Decisões Importantes\xA0"
              description="Com dados constantes, e dashboards únicos para cada cargo, poupamos horas de trabalho repetitivo. Assim sua equipe pode direcionar esforços para decisões estratégicas e inovação."
            ></ListItem>
            <ListItem
              title="2. Performance Analyze"
              heading={
                <Fragment>
                  <span className="home-text48">Escalável à Toda Demanda</span>
                </Fragment>
              }
              description="À medida que sua empresa cresce, o OminiStock acompanha. Nossa solução escalável e flexível adapta-se a diferentes setores e volumes de estoque sem complicações."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              heading={
                <Fragment>
                  <span className="home-text49">
                    Segurança e Confiabilidade
                  </span>
                </Fragment>
              }
              description="Projetado com protocolos robustos de segurança, o OminiStock protege seus dados e processos em cada etapa. Além da autenticação biométrica, nossa criptografia  garante acesso restrito ao estoque."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="home-container50">
          <div className="home-container51">
            <ListItem
              title="1. Always in Sync"
              heading={
                <Fragment>
                  <span className="home-text50">Manutenções Preventivas</span>
                </Fragment>
              }
              description="Inspeções agendadas para identificar riscos ocultos. Substituímos componentes, calibramos sensores e garantimos que o sistema opere com eficiência."
            ></ListItem>
            <ListItem
              title="2. Work With Any Team"
              heading={
                <Fragment>
                  <span className="home-text51">Atualizações de Software</span>
                </Fragment>
              }
              description="Novas funcionalidades, patches de segurança e otimizações entregues regularmente. Cada atualização é testada em ambientes reais garantindo compatibilidade sem interromper sua operação."
            ></ListItem>
            <ListItem
              title="3. A Productivity Platform"
              heading={
                <Fragment>
                  <span className="home-text52">Suporte 24/7</span>
                </Fragment>
              }
              description="Além de resolver emergências, monitoramos proativamente seu sistema para identificar riscos antes que se tornem problemas. Sua operação nunca para, e você nunca fica no escuro."
            ></ListItem>
          </div>
          <div className="home-container52">
            <div className="home-container53"></div>
            <div className="home-container54">
              <svg viewBox="0 0 1152 1024" className="home-icon5">
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1 className="home-text53 HeadingOne">Fale Conosco</h1>
              <span className="home-text54">Respondemos em 24hrs</span>
              <Link to="/contato" className="home-navlink4">
                <OutlineBlackButton
                  button="contato"
                  className="home-component23"
                ></OutlineBlackButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
