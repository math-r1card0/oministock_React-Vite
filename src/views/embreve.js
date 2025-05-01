import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import FooterGray from '../components/footer-gray'
import './embreve.css'

const Embreve = (props) => {
  return (
    <div className="embreve-container1">
      <Helmet>
        <title>embreve - Soft UI Pro</title>
        <meta property="og:title" content="embreve - Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="embreve-container2">
        <div className="embreve-main">
          <div className="embreve-container3">
            <h1 className="embreve-text1 HeadingOne">Grandes Atualizações</h1>
            <h1 className="embreve-text2">Em Desenvolvimento</h1>
            <p className="embreve-text3">
              <span>
                Prepare-se para a próxima evolução do OminiStock! Novas
                ferramentas estão a caminho para transformar ainda mais sua
                gestão de estoque. 
              </span>
              <br></br>
              <br></br>
              <br></br>
              <span>
                Quer ser o primeiro a testar? Deixe seu e-mail e te avisaremos!
              </span>
            </p>
            <div className="embreve-container4">
              <input
                type="text"
                placeholder="anab@gmail.com"
                className="embreve-textinput Small input"
              />
              <SecondaryButton button="ENVIAR"></SecondaryButton>
            </div>
          </div>
          <div className="embreve-grid">
            <img
              alt="image"
              src="/iphone-3-1000w.png"
              className="embreve-image10"
            />
            <img
              alt="image"
              src="/iphone-2-1000w.png"
              className="embreve-image11"
            />
            <img
              alt="image"
              src="/iphone-4-1000w.png"
              className="embreve-image12"
            />
            <img
              alt="image"
              src="/iphone-1-1000w.png"
              className="embreve-image13"
            />
            <img
              alt="image"
              src="/iphone-2-1000w.png"
              className="embreve-image14"
            />
            <img
              alt="image"
              src="/iphone-4-1000w.png"
              className="embreve-image15"
            />
            <img
              alt="image"
              src="/iphone-1-1000w.png"
              className="embreve-image16"
            />
            <img
              alt="image"
              src="/iphone-3-1000w.png"
              className="embreve-image17"
            />
            <img
              alt="image"
              src="/iphone-2-1000w.png"
              className="embreve-image18"
            />
            <img
              alt="image"
              src="/iphone-4-1000w.png"
              className="embreve-image19"
            />
            <img
              alt="image"
              src="/iphone-1-1000w.png"
              className="embreve-image20"
            />
            <img
              alt="image"
              src="/iphone-3-1000w.png"
              className="embreve-image21"
            />
            <img
              alt="image"
              src="/iphone-4-1000w.png"
              className="embreve-image22"
            />
            <img
              alt="image"
              src="/iphone-1-1000w.png"
              className="embreve-image23"
            />
            <img
              alt="image"
              src="/iphone-3-1000w.png"
              className="embreve-image24"
            />
            <img
              alt="image"
              src="/iphone-2-1000w.png"
              className="embreve-image25"
            />
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default Embreve
