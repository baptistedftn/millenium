import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CustomModal = (props) => {
  const {
    text,
    title
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const valid = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle} color="primary">Valider</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          {text}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={valid}>Oui</Button>{' '}
          <Button color="secondary" onClick={toggle}>Annuler</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CustomModal;
