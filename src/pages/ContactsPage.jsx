import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import {
  selectDelModalIsOpen,
  selectModalIsOpen,
} from "../redux/modal/selectors";
import EditModal from "../components/EditModal/EditModal";
import DelModal from "../components/DelModal/DelModal";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const modalIsOpen = useSelector(selectModalIsOpen);
  const delModalIsOpen = useSelector(selectDelModalIsOpen);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      {loading && !error && <p>Loading contacts...</p>}
      {error && <p>Error! Try again later</p>}
      <ContactList />
      {modalIsOpen && <EditModal />}
      {delModalIsOpen && <DelModal />}
    </>
  );
}
