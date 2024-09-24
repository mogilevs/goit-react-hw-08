import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();
  function handleSubmit(values, actions) {
    if (values.email === '' || values.password === '') return;
    dispatch(login(values));
    actions.resetForm();
  }
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label>
            Email <Field type="email" name="email"></Field>
          </label>

          <label>
            Password <Field type="password" name="password"></Field>
          </label>

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
}
