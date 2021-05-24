import { Fragment } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Modals } from '..';

const CardItems = (props) => {
  const { id, title, author, category, date, image, body, btnClassRead, btnClassEdit, btnClassModal } = props;
  const history = useHistory();
  return (
    <Fragment>
      <Col className="mb-4">
        <Card className="mr-0 ml-0">
          <Row className="no-gutters h-100">
            <Col className="col-md-4 ml-3 d-flex align-items-center justify-content-center">
              <Card.Img variant="top" src={image} height={170} />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title className="mb-1">{title}</Card.Title>
                <h6 className="text-muted font-italic mb-3">Author : {author} <br /> Category : {category} </h6>
                <Card.Text>{body} ...</Card.Text>
                <Button variant="info" onClick={() => history.push(`/detail-post/${id}`)} className={btnClassRead}>Read More</Button>
                <Button variant="info" className={btnClassEdit} onClick={() => history.push(`/my-post/edit-post/${id}`)}>Edit</Button>
                <Modals buttonHandleText="Delete" variant="danger" buttonModal={btnClassModal} modalTitle="Delete Post" modalBody="Are you sure want to delete this post ?" id={id} />
              </Card.Body>
            </Col>
          </Row>
          <Card.Footer>
            <small className="text-muted">Published : {date}</small>
          </Card.Footer>
        </Card>
      </Col>
    </ Fragment >
  )
}

export default CardItems;