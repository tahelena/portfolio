import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const actionBar = (
    <div>
      <Button primary rounded onClick={handleClose}>
        Confirm
      </Button>
    </div>
  );
  const modalContent = <p>This is and modal description/text</p>;

  return (
    <div>
      <Button primary rounded onClick={handleClick}>
        Open modal
      </Button>
      {showModal && (
        <Modal onClose={handleClose} actionBar={actionBar}>
          {modalContent}
        </Modal>
      )}
    </div>
  );
};

export default ModalPage;
