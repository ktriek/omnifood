import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.scss';

function Header() {
    return (
        <header className="header">
            <Navbar expand="lg" className="bg-body">
                <Container fluid>
                    <Navbar.Brand href="#home"><img className="logo" alt="Omnifood logo" src='/img/omnifood-logo.png' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#how">How it works</Nav.Link>
                            <Nav.Link href="#meals">Meals</Nav.Link>
                            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <a className="btn btn-primary" href="#cta">Try for free</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <a href="#">
                <img className="logo" alt="Omnifood logo" src="img/omnifood-logo.png" />
            </a>

            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li><a className="main-nav-link" href="#how">How it works</a></li>
                    <li><a className="main-nav-link" href="#meals">Meals</a></li>
                    <li>
                        <a className="main-nav-link" href="#testimonials">Testimonials</a>
                    </li>
                    <li><a className="main-nav-link" href="#pricing">Pricing</a></li>
                    <li><a className="main-nav-link nav-cta" href="#cta">Try for free</a></li>
                </ul>
            </nav>

            <button className="btn-mobile-nav">
                <MenuOutline />
                <CloseOutline />
            </button> */}
        </header>

    )
}

export default Header;