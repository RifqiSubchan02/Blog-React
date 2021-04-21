import { Form, Button } from 'react-bootstrap';

const FormCreateBlog = (props) => {
  return (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label className={props.classLabel}>Title</Form.Label>
        <Form.Control type="name" placeholder="Title Blog" />
      </Form.Group>

      <Form.Group>
        <Form.File id="exampleFormControlFile1" label="File Image" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Body Blog" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Status</Form.Label>
        <Form.Control as="select">
          <option>Draft</option>
          <option>Publish</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" size={props.sizeButton} className="mt-md-4 mb-md-3" block>Sign Up</Button>
      <Button variant="danger" type="reset" size={props.sizeButton} block>Cancel</Button>
    </Form>
  )
}

export default FormCreateBlog;