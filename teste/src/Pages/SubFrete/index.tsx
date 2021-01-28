import React from 'react'

import {
  solIcon, 
  calcIcon,  
  contactIcon, 
  chartIcon,
  newDocumentIcon
} from '../../assets/images/icons'

import './style.css'

interface SubFreteProps {
  props?: object
}

const SubFrete: React.FC<SubFreteProps> = () => {
return (
  <div id="sub-frete" className="container">
    <header className="app-header">
      <div className="logo-container">
        <img src={solIcon} alt="Sol"/>
      </div>
      
      <div className="buttons-container">
        <a href="">
          <img src={calcIcon} alt="Calculadora"/>
        </a>
        <a href="">
          <img src={contactIcon} alt="Contatos"/>
        </a>
        <a href="">
          <img src={chartIcon} alt="Gráfico"/>
        </a>
        <a href="">
          <img src={newDocumentIcon} alt="Novo Documento"/>
        </a>
      </div>

    </header>
    <div className="bread-crumbs"></div>
    <div className="menu-bar">
      {/*
        title,
        botao,
        pesquisa,
        botao redondo
        botao redondo
        botao redondo
        botao redondo
      */}
    </div>
    <main className="table-container">
      {/* table */}
    </main>
    <footer>
      {/* exibindo, results per page, page next-page last-page */}
    </footer>
  </div>
)

}

export default SubFrete;