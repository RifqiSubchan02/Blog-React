import { Fragment, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Axios from 'axios';

const Modals = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deletePost = () => {
    Axios.delete(`https://blog-api-deploy.herokuapp.com/v1/article/my-posts/delete/${props.id}`, {
      headers: {
        'Authorization': localStorage.getItem('access_token')
      }
    })
      .then(result => alert(result.data.message))
      .catch(error => alert(error))
  }

  return (
    <>
      <Fragment>
        <Button variant={props.variant} onClick={handleShow} className={props.buttonModal} >
          {props.buttonHandleText}
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.modalBody}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={deletePost}>Understood</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    </>
  );
}

export default Modals;