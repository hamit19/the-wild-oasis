import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(!isModalOpen)}>
        Add new Cabin
      </Button>
      {isModalOpen && (
        <Modal onCloseModal={() => setIsModalOpen(!isModalOpen)}>
          <CreateCabinForm onCloseModal={() => setIsModalOpen(!isModalOpen)} />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
