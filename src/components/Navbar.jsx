import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/resources/logo.png';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" style={{ background: "#004589", height: "60px" }} variant="dark">
      <Container className='animate__animated animate__slideInDown'>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Navbar.Brand href="/home" style={{ fontSize: "25px" }}> <img src={logo} alt="logo" style={{ height: "40px", marginRight: "10px" }} />Australian Tactical Groups</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ backgroundColor: "#004589" }}>
          <Nav style={{ fontSize: "18px" }} className="ms-auto">
            <NavLink to="/home" exact className="nav-link" activeClassName="active-link">Home</NavLink>
            <NavLink to="/police" exact className="nav-link" activeClassName="active-link">Police</NavLink>
            <NavLink to="/adf" exact className="nav-link" activeClassName="active-link">ADF</NavLink>
            <NavLink to="/about" exact className="nav-link" activeClassName="active-link">About</NavLink>
          </Nav>
        </Navbar.Collapse>
        <style type="text/css">
          {`
            @media (max-width: 767px) {
              .navbar-collapse .nav-link {
                width: 100%;
              }
            }

            .active-link {
              color: yellow !important;
            }
          `}
        </style>
      </Container>
    </Navbar>
  );
}
