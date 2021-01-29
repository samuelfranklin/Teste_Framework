import React from 'react';

import { solIcon, exitIcon } from '../../assets/images/icons';

import './style.css';

const AppHeader: React.FC = ({children}) => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={solIcon} alt="Sol"/>
      </div>
      
      <div className="buttons-container">
        {children}
      </div>

      <div className="version-display">
        <p>4.21.0 PROD</p> 
        {/* essa informação deveria ser global*/}
      </div>
      <div className="profile-picture">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEZW82MFJ_Ilw/profile-displayphoto-shrink_200_200/0/1610400018379?e=1617235200&v=beta&t=UC3Imm8sxNVvCkI5Xu9PMrx9BaZb5Dhql3VUluq5Iac" alt="Profile picture"/>
      </div>

      <div className="exit-button">
        <a href="">
          <img src={exitIcon} alt="Sair" />
        </a>
      </div>

    </header>
  );
}

export default AppHeader;