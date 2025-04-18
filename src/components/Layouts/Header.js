import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../styles/HeaderStyle.css"
import { Link } from 'react-router';
import Logo from '../../assets/logo/logo.png'

function Header() {
return (
    <header>
<Navbar collapseOnSelect expand="lg">
    <Container>
        {/* <Navbar.Brand as={Link} to="/">
    <img src={Logo} alt='Logo' className="logo-img"/>
</Navbar.Brand> */}

    <Navbar.Brand href="#home">
        <Link to='/' className='logo'>
        <img src={Logo} alt='Logo' className='img-fluid'/>
        </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
        <Link className='nav-link' to='/'>Home</Link>
        <Link  className='nav-link' to='/about'>About</Link>
        <Link className='nav-link' to='/menu'>Our Menu</Link>
        <Link className='nav-link' to='/shop'>Shop</Link>
        <Link className='nav-link' to='/blog'>Blog</Link>
        <Link className='nav-link' to='/contact'>Contact</Link>
        <Link  className='nav-link' to='/'>
        <div className='cart'>
        <i className="bi bi-bag fs-5"></i>
        <span className='roundpoint'>2</span>
        </div>
        </Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
</header>
);
}

export default Header;
