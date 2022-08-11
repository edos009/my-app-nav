import React from "react";
import { Form, Formik } from "formik";
import { sign_in_schema } from "../../../utils/schemas/index";
import InputInLabel from "../InputInLabel";
import styles from "./SignInForm.module.scss";

const initialValues = {
  login: "",
  password: "",
};

const SignInForm = (props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={sign_in_schema}
    >
      {() => {
        return (
          <Form className={styles.form_box}>
            <InputInLabel name="login" type="text" placeholder="Input login" />

            <InputInLabel
              name="password"
              type="password"
              placeholder="Input password"
            />
            <input type='submit'/>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
