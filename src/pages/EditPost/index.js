import { Fragment, useEffect, useState } from 'react'
import { Form, Button, Col, Row, Image } from 'react-bootstrap';
import Axios from 'axios';
import { withRouter } from 'react-router';

const EditPost = (props) => {
  const [dataCategories, setDataCategories] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const id = props.match.params.id;

  useEffect(() => {
    Axios.get(`https://blog-api-deploy.herokuapp.com/v1/article/get-id/${id}`)
      .then(post => {
        setTitle(post.data.data.title);
        setBody(post.data.data.body);
        setCurrentImage(post.data.data.imageUrl);
      })
      .catch(error => console.log(error))

    Axios.get('https://blog-api-deploy.herokuapp.com/v1/category')
      .then(result => {
        setDataCategories(result.data.data);
      })
      .catch(error => console.log(error));
  }, [id])

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  const a = document.getElementById('exampleForm.ControlSelect1');
  const b = document.getElementById('exampleForm.ControlSelect2');
  const onSubmit = () => {
    const data = new FormData();
    data.append('title', title);
    data.append('image', image);
    data.append('body', body);
    data.append('categoryId', category || a.value);
    data.append('status', status || b.value);

    Axios.put(`https://blog-api-deploy.herokuapp.com/v1/article/my-posts/update/${id}`, data, {
      headers: {
        'Authorization': localStorage.getItem('access_token'),
        'content-type': 'multipart/form-data'
      }
    })
      .then(result => {
        alert('Article Edited');
        console.log(result);
      })
      .catch(error => {
        alert('Edit Article Failed');
        console.log(error);
      });
  }

  return (
    <Fragment>
      <Col className="col-sm-8 col-lg-6 mx-auto mt-5">
        <h1 className="mb-4">Edit Post</h1>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Title</Form.Label>
            <Form.Control type="name" placeholder="Title Blog" value={title} onChange={e => setTitle(e.target.value)} />
          </Form.Group>

          <Row>
            {(image && <Image src={URL.createObjectURL(image)} rounded></Image>) || <Image src={currentImage} rounded></Image>}
          </Row>

          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="File Image" onChange={e => onImageUpload(e)} />
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

          <Button variant="primary" className="mt-md-4 mb-md-3" onClick={onSubmit} block>Edit Post</Button>
          <Button variant="danger" type="reset" href='/my-post' block>Cancel</Button>
        </Form>
      </Col>
    </Fragment>
  )
}

export default withRouter(EditPost);