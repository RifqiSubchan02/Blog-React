import { Fragment } from 'react';
import { Col } from 'react-bootstrap';
import { FormCreatePost } from '../../components'
import './createpost.scss';

const CreatePost = () => {
  return (
    <Fragment>
      <Col className="col-sm-8 col-lg-6 mx-auto mt-5">
        <h1 className="mb-4">Create Post</h1>
        <FormCreatePost />
      </Col>
    </Fragment>
  )
}

export default CreatePost;