import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
  // if (!localStorage.getItem('user')) {
  //   console.log('not')
  // } else {
  //   console.log('yes')
  // }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar-expand-lg">
      <Navbar.Brand href="/" className="ml-3">Menit.com</Navbar.Brand>
      <Form inline className="ml-3 mr-3">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-3" />
      <Navbar.Collapse id="responsive-navbar-nav" className="ml-sm-">
        <Nav className="ml-md-auto text-sm-right">
          <Nav.Link href="#features">Technology</Nav.Link>
          <Nav.Link href="#pricing">Education</Nav.Link>
          <Nav.Link href="#sports" className="mr-4">Sports</Nav.Link>
          <NavDropdown title="Account" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">My Posts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;