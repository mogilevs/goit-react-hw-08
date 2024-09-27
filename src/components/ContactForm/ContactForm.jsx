import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { setModal } from "../../redux/modal/slice";
import { editContact } from "../../redux/contacts/operations";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be XXX-XX-XX")
    .required("Required"),
});

export default function ContactForm({ btnName, sendContact, contact }) {
  const contactName = contact.name ?? "";
  const contactNumber = contact.number ?? "";
  const initialValues = {
    name: contactName,
    number: contactNumber,
  };
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(sendContact(values));
    dispatch(editContact(values, contact.id));
    dispatch(setModal(false));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrap}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.inputWrap}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          {btnName}
        </button>
      </Form>
    </Formik>
  );
}
