import React from 'react';
import { MenuItems } from './MenuItem';
import { Button } from '../Button'
import './Header.css';

class Header extends React.Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItens">
        <h1 className="navbar-logo">
          Jornada BR<i className="fas fa-globe-americas"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <Button>
          <i className="fas fa-user-circle"></i>
        </Button>
      </nav>
    );
  }
}
export default Header;