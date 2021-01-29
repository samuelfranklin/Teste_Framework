import React from 'react'

import { AppHeader, AppMenuBar } from '../../components'
import {
calcIcon,  
contactIcon, 
chartIcon,
newDocumentIcon,
} from '../../assets/images/icons';

import './style.css'

interface SubFreteProps {
  props?: object
}

const SubFrete: React.FC<SubFreteProps> = () => {
return (
  <div id="sub-frete" className="container">
    <AppHeader>
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
    </AppHeader>

    <main>
      <div className="main-container">
        <AppMenuBar title="Sub Frete">

        </AppMenuBar>

        {/* <Table items={} /> */}
      </div>
      
    </main>
    <footer>
      {/* exibindo, results per page, page next-page last-page */}
    </footer>
  </div>
)

}

export default SubFrete;