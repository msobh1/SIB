import React, { Component } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";
import logo from "../images/logo.jpg";
import "./Navbarstyles.css"; 

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0 && !this.state.scrolled) {
      this.setState({ scrolled: true });
    } else if (scrollPosition === 0 && this.state.scrolled) {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    const navbarClasses = `NavbarItems ${scrolled ? "scrolled" : ""}`;

    return (
      <nav className={navbarClasses}>
        <Link className="NavbarLogo" to="/user">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <ul className="nav-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
