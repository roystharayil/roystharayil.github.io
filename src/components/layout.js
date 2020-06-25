import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

function Layout(props) {
  return (
    <div className="site">
      <Helmet></Helmet>
      <header className="masthead">
          <Navbar expand="lg" fixed="top">
            <Navbar.Brand>Navarasam</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link>
                  <Link to="/" className="lk">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/services" className="lk">
                    Services
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/blog" className="lk">
                    Blog
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contact" className="lk">
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </header>

      <main class="main-content">{props.children}</main>
      <footer>

      </footer>
    </div>
  )
}

export default Layout
