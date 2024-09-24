import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  function handleSubmit(values, actions) {
    if (values.username === '' || values.email === '' || values.password === '')
      return;
    dispatch(register(values));
    actions.resetForm();
  }
  return (
    <>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Name <Field type="text" name="username"></Field>
          </label>
          <label>
            Email <Field type="email" name="email"></Field>
          </label>

          <label>
            Password <Field type="password" name="password"></Field>
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
