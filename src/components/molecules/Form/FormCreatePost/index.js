import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';

const FormCreatePost = (props) => {
  const [dataCategories, setDataCategories] = useState([]);

  Axios.get('https://blog-api-deploy.herokuapp.com/v1/category')
    .then(result => {
      setDataCategories(result.data.data);
    })
    .catch(error => console.log(error));

  const a = document.getElementById('exampleForm.ControlSelect1');
  const b = document.getElementById('exampleForm.ControlSelect2');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');

  const onSubmit = () => {
    const data = new FormData();
    data.append('title', title);
    data.append('image', image);
    data.append('body', body);
    data.append('categoryId', category || a.value);
    data.append('status', status || b.value);

    Axios.post('https://blog-api-deploy.herokuapp.com/v1/article/my-posts/create', data, {
      headers: {
        'Authorization': localStorage.getItem('access_token'),
        'content-type': 'multipart/form-data'
      }
    })
      .then(result => {
        alert('Article Created');
        console.log(result);
      })
      .catch(error => {
        alert('Create Article Failed');
        console.log(error);
      });
  }

  return (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label className={props.classLabel}>Title</Form.Label>
        <Form.Control type="name" placeholder="Title Blog" value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.File id="exampleFormControlFile1" label="File Image" onChange={e => setImage(e.target.files[0])} />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Body Blog" value={body} onChange={e => setBody(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Category</Form.Label>
        <Form.Control as="select" onClick={e => setCategory(e.target.value)}>
          {dataCategories.map(categories => {
            return <option key={categories.id} value={categories.id} >{categories.name}</option>
          })}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Status</Form.Label>
        <Form.Control as="select" onClick={e => setStatus(e.target.value)}>
          <option value={0}>Draft</option>
          <option value={1}>Publish</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" size={props.sizeButton} className="mt-md-4 mb-md-3" onClick={onSubmit} block>Create Post</Button>
      <Button variant="danger" type="reset" size={props.sizeButton} block>Cancel</Button>
    </Form>
  )
}

export default FormCreatePost;