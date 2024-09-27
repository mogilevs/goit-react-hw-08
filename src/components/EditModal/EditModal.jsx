import Modal from "react-modal";
import ContactForm from "../ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { selectModalIsOpen } from "../../redux/modal/selectors";
import { editContact } from "../../redux/contacts/operations";
import { setModal } from "../../redux/modal/slice";
import { selectCurrentContact } from "../../redux/contacts/selectors";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function EditModal() {
  const modalIsOpen = useSelector(selectModalIsOpen);
  const contact = useSelector(selectCurrentContact);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(setModal(false));
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal}>Close</button>
        <h2>Edit contact</h2>

        <ContactForm
          btnName="Save"
          sendContact={editContact}
          contact={contact}
        />
      </Modal>
    </div>
  );
}
