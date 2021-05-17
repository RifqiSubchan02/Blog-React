import { Fragment, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
const Modals = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    </>
  );
}

export default Modals;