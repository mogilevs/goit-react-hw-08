import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";
import { addContact, fetchContacts } from "../redux/contacts/operations";
import { selectModalIsOpen } from "../redux/modal/selectors";
import EditModal from "../components/EditModal/EditModal";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const modalIsOpen = useSelector(selectModalIsOpen);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm
        btnName="Add contact"
        sendContact={addContact}
        contact={{ name: "", number: "" }}
      />
      <SearchBox />
      {loading && !error && <p>Loading contacts...</p>}
      {error && <p>Error! Try again later</p>}
      <ContactList />
      {modalIsOpen && <EditModal />}
    </>
  );
}
