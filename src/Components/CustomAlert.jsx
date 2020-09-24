import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, } from 'reactstrap';

const CustomAlert = (props) => {

  const [modal, setModal] = useState(props.isOpen);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
          <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
          <br/><hr/><Button color="primary" onClick={toggle}>Fermer</Button>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default CustomAlert;