import { Form, Button } from 'react-bootstrap';

const FormRegister = (props) => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className={props.classLabel}>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label className={props.classLabel}>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className={props.classLabel}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group>
        <Form.File id="exampleFormControlFile1" label="File Image" className={props.classLabel} />
      </Form.Group>

      <Button variant="primary" type="submit" size={props.sizeButton} block>Sign Up</Button>
      <Button variant="danger" type="reset" size={props.sizeButton} block>Cancel</Button>
    </Form>
  )
}

export default FormRegister;