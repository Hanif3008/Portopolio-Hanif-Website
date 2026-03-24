import { memo } from 'react';

const MainNavbar = memo(({ onProfileClick, onProjectsClick, onContactClick }) => {
    return (
      <nav className="portopolio-nav">
        <div className="nav-left">
          <div className="nav-logo">
            <img src="/images/logo-nobg.png" alt="" decoding="async" />
          </div>
        </div>
        <div className="nav-mid">
          <ul>
            <li onClick={onProfileClick}>Profile</li>
            <li onClick={onProjectsClick}>Projects</li>
            <li onClick={onContactClick}>Contacts</li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="nav-item">
            <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
          </div>
          <div className="nav-item">
            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
          </div>
          <div className="nav-item">
            <a href="#"><ion-icon name="logo-github"></ion-icon></a>
          </div>
        </div>
      </nav>
    );
});
  
  export default MainNavbar
  
