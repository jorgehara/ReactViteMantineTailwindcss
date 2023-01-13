import Modal from "./Modal.jsx";
import { useModal } from "./../../Hooks/useModal.js";
import React from "react";
import { Button } from "@mantine/core";
import { Contact } from "../Contact/Contact.jsx";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  return (
    <>
      <Button
        onClick={openModal1}
        radius="xl"
        size="lg"
        variant="gradient"
        gradient={{ from: "indigo", to: "blue" }}
      >
        Contact Me
      </Button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        {/* <h3>Modal 1</h3> */}
        {/* <p>Hola ese es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" /> */}
        <Contact />
      </Modal>
    </>
  );
};

export default Modals;
