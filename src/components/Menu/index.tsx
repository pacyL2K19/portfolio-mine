import React, { useState } from "react";
import { theme } from "../../core/theme";
import { Nav, Navbar } from "react-bootstrap";

interface Props {
  navs: string[];
}
const Menu: React.FC<Props> = (props: Props) => {
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 65) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  document.addEventListener("scroll", handleScroll);

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="md"
        style={{
          transition: "1s ease",
          backgroundColor: navBackground
            ? theme.colors?.navBgcol
            : "transparent",
        }}
        variant="dark"
      >
        <Navbar.Brand href="#home">Pacifique Linjanja</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          {props.navs.map((item) => (
            <Nav.Link
              key={item}
              style={{ color: theme.colors?.menuLinks }}
              href={"#" + item.toLowerCase()}
            >
              {item}
            </Nav.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;
