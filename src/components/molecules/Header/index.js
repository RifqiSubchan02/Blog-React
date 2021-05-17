import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
  function logout() {
    localStorage.clear();
  }

  if (!localStorage.getItem('access_token')) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar-expand-lg">
        <Navbar.Brand href="/" className="ml-3">Menit{"{Dot}"}Com</Navbar.Brand>
        <Form inline className="ml-3 mr-3 d-none d-md-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-3" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ml-md-auto text-center mr-lg-3">
            {/* <Nav.Link href="#features">Technology</Nav.Link>
            <Nav.Link href="#pricing">Education</Nav.Link>
            <Nav.Link href="#sports" className="mr-lg-3" >Sports</Nav.Link> */}
            <Nav.Link href="/login" className="bg-primary text-white rounded">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  } else {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar-expand-lg">
        <Navbar.Brand href="/" className="ml-3">Menit{"{Dot}"}Com</Navbar.Brand>
        <Form inline className="ml-3 mr-3 d-none d-md-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-3" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ml-md-auto text-sm-center mr-lg-3" >
            {/* <Nav.Link href="#features">Technology</Nav.Link>
            <Nav.Link href="#pricing">Education</Nav.Link>
            <Nav.Link href="#sports" className="mr-lg-4">Sports</Nav.Link> */}
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/my-posts">My Posts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login" onClick={logout} >Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;