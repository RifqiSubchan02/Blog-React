import { Form, Button } from 'react-bootstrap';

const FormLogin = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="text-white">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="text-white">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" className="text-white" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" size="lg" block>Login</Button>
    </Form>
  )
}

export default FormLogin;