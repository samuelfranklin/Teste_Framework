import React from 'react'

import {
  duplicateIcon,
  compareIcon,
  shareIcon,
  filterIcon
} from '../../assets/images/icons';

import './style.css';

interface AppMenuBarProps {
  title: string
}

// const buttons = [
//   {icon: 'duplicateIcon', to: '', type: 'circular-button'},
//   {icon: 'compareIcon', to: '', type: 'circular-button'},
//   {icon: 'shareIcon', to: '', type: 'circular-button'},
//   {icon: 'filterIcon', to: '', type: 'circular-button'}
// ]

const AppMenuBar: React.FC<AppMenuBarProps> = ({title, children}) => {
  return (
    <div className="menu-bar">
      <div className="title">
        <p className="breadcrumbs">{'Tela1 > Tela2 >'}</p>
        <h1>{title}</h1>
      </div>

      <div className="new-sublet-button">
        <a href="">Novo sub frete</a>
      </div>

      <div>
        <form id="search-sublet">
          <div className="input-block">
            <input type="text" />
          </div>
        </form>
      </div>

      <div className="button-group">
        <a href="">
          <img src={duplicateIcon} alt="Duplicar"/>
        </a>

        <a href="">
          <img src={compareIcon} alt="Contatos"/>
        </a>

        <a href="">
          <img src={shareIcon} alt="Gráfico"/>
        </a>

        <a href="">
          <img src={filterIcon} alt="Novo Documento"/>
        </a>
      </div>
    </div>
  )
}

export default AppMenuBar;