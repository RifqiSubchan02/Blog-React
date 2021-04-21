import { Fragment } from 'react';
import { Col } from 'react-bootstrap';
import { FormCreateBlog } from '../../components'
import './createblog.scss';

const CreateBlog = () => {
  return (
    <Fragment>
      <Col className="col-sm-8 col-lg-6 mx-auto mt-5">
        <h1 className="mb-4">Create Blog</h1>
        <FormCreateBlog />
      </Col>
    </Fragment>
  )
}

export default CreateBlog;