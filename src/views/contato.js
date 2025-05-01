import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import OutlineBlueButton from '../components/outline-blue-button'
import NextButton from '../components/next-button'
import BlogCard from '../components/blog-card'
import PrimaryBlueButton from '../components/primary-blue-button'
import Footer from '../components/footer'
import './contato.css'

const Contato = (props) => {
  return (
    <div className="contato-container10">
      <Helmet>
        <title>contato - Soft UI Pro</title>
        <meta property="og:title" content="contato - Soft UI Pro" />
      </Helmet>
      <HeaderFull></HeaderFull>
      <div className="contato-profile">
        <img alt="image" src="/bluesuit-200h.jpg" className="contato-image1" />
        <div className="contato-container11">
          <div className="contato-container12">
            <h4 className="contato-text10">Matheus Ricardo</h4>
            <a
              href="https://www.linkedin.com/in/math-r1card0"
              target="_blank"
              rel="noreferrer noopener"
              className="contato-link1"
            >
              <OutlineBlueButton
                button="Conecte comigo"
                className="contato-component2"
              ></OutlineBlueButton>
            </a>
          </div>
          <div className="contato-container13">
            <span className="contato-text11">
              <span className="contato-text12">0 </span>
              <span>Postagens</span>
            </span>
            <span className="contato-text14">
              <span className="contato-text15">+1.1k</span>
              <span> Seguidores</span>
            </span>
            <span>
              <span className="contato-text18">357 </span>
              <span>Seguindo</span>
            </span>
          </div>
          <span className="contato-text20">
            Idealizador do OminiStock e visionário por trás da arquitetura.
            Coordena a sinergia entre inovação e usabilidade, garantindo que a
            solução atenda a padrões corporativos sem sacrificar acessibilidade.
          </span>
          <a
            href="https://www.linkedin.com/in/math-r1card0"
            target="_blank"
            rel="noreferrer noopener"
            className="contato-link2"
          >
            <NextButton
              button="Mais sobre mim"
              className="contato-component3"
            ></NextButton>
          </a>
        </div>
      </div>
      <div className="contato-blog-posts">
        <h1 className="contato-text21 HeadingTwo">
          <span>F.A.Q.</span>
          <br></br>
        </h1>
        <div className="contato-container14">
          <BlogCard
            description="Usamos criptografia AES-256 e protocolos de compliance (como LGPD e GDPR). Além disso, você controla níveis de acesso por cargo, garantindo que apenas pessoas autorizadas visualizem dados críticos. Segurança não é um recurso: é nossa prioridade."
            newProp="O sistema é seguro o suficiente para dados sensíveis do meu estoque?"
            imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxzZWN1cmV8ZW58MHx8fHwxNzQ2MDQ5ODg4fDA&amp;ixlib=rb-4.0.3&amp;w=1400"
            rootClassName="blog-cardroot-class-name"
          ></BlogCard>
          <BlogCard
            imageSrc="https://images.unsplash.com/photo-1586527155314-1d25428324ff?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHB1emxlfGVufDB8fHx8MTc0NjA0OTYyMHww&amp;ixlib=rb-4.0.3&amp;w=1400"
            description="Atuamos como um hub central: conectamos o OminiStock a ERPs, CRMs ou ferramentas internas via API aberta ou integradores pré-configurados (como SAP, Salesforce). Não há necessidade de migrar sistemas — adaptamos nossa solução à sua infraestrutura."
            newProp="Como a integração com nossos sistemas atuais funciona?"
          ></BlogCard>
          <BlogCard
            title="MateLabs machine learning"
            imageSrc="https://images.unsplash.com/photo-1431499012454-31a9601150c9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgwfHx0aW1lfGVufDB8fHx8MTc0NjA0OTY1Nnww&amp;ixlib=rb-4.0.3&amp;w=1400"
            description="Em 72 horas, sua equipe estará operando o OminiStock. Fornecemos treinamento rápido (2h) e suporte técnico dedicado para garantir transição sem impactos na operação."
            newProp="Qual o tempo médio para implementação do sistema?"
          ></BlogCard>
          <BlogCard
            title="MateLabs machine learning"
            imageSrc="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMzfHxqb2J8ZW58MHx8fHwxNzQ2MDQ5NzIxfDA&amp;ixlib=rb-4.0.3&amp;w=1400"
            description="Projetamos o OminiStock para escalar junto com você: de 10 a 10.000 SKUs, de 1 a 100 filiais. A cobrança é modular, ou seja, você paga apenas pelo que usa, sem custos ocultos ou necessidade de migrar plataformas no futuro."
            newProp="Como o sistema se adapta a empresas em expansão?"
          ></BlogCard>
        </div>
      </div>
      <div className="contato-contact">
        <div className="contato-container15">
          <div className="contato-form1">
            <h2 className="contato-text24 HeadingOne">Contate Nossa Equipe!</h2>
            <span className="contato-text25">
              Use o formulário para detalhar sua necessidade ou explore as
              Perguntas Frequentes para soluções imediatas. Estamos aqui para
              transformar desafios em resultados!
            </span>
            <form className="contato-form2">
              <label className="contato-text26 Label">Nome</label>
              <input
                type="text"
                placeholder="Nome completo"
                className="contato-textinput1 Small input"
              />
              <label className="contato-text27 Label">Email</label>
              <input
                type="text"
                placeholder="anab@email.com"
                className="contato-textinput2 Small input"
              />
              <label className="contato-text28 Label">Mensagem</label>
              <textarea
                rows="8"
                placeholder="Eu gostaria de dizer que..."
                className="contato-textarea textarea Small"
              ></textarea>
            </form>
            <div className="contato-container16">
              <div className="contato-container17">
                <PrimaryBlueButton button="enviar mensagem"></PrimaryBlueButton>
              </div>
            </div>
          </div>
          <div className="contato-info">
            <div className="contato-container18">
              <h3>
                <span className="contato-text30">Dados de Contato</span>
                <br></br>
              </h3>
              <span className="contato-text32">
                Preencha por completo o formulário, ou use um dos meios abaixo.
                Nosso time responderá dentro de 24hrs.
              </span>
              <div className="contato-container19">
                <div className="contato-container20">
                  <svg viewBox="0 0 1024 1024" className="contato-icon10">
                    <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                  </svg>
                  <a href="tel:+40 772 100 200" className="contato-link3">
                    (13) 98108-2777
                  </a>
                </div>
                <div className="contato-container21">
                  <svg viewBox="0 0 1024 1024" className="contato-icon12">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <a
                    href="mailto:hello@creative-tim.com?subject="
                    className="contato-link4 Small"
                  >
                    rm560099@fiap.com.br
                  </a>
                </div>
                <div className="contato-container22">
                  <svg viewBox="0 0 1024 1024" className="contato-icon14">
                    <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                  </svg>
                  <span className="contato-text33 Small">
                    Av. Paulista, 1106 - SP - 01311-000
                  </span>
                </div>
              </div>
              <div className="contato-container23">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="contato-icon16"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="contato-icon18"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="contato-icon20"
                >
                  <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="contato-icon22"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
            <img alt="image" src="/wave-1.svg" className="contato-image2" />
            <div className="contato-container24"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contato
