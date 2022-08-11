import { ErrorMessage, Field } from "formik";
import React from "react";
import cx from 'classnames';
import styles from './InputInLabel.module.scss'

const InputInLabel = (props) => {
  const {name, ...anotherProps} = props;
  return (
    <>
      <Field name={name} {...anotherProps}>
        {({ field, form, meta }) => {
          const stylesInput = cx(styles.input, {[styles.invalid]: meta.error && meta.touched})
          return <input {...field} className={stylesInput} {...anotherProps} />;
        }}
      </Field>
      <ErrorMessage name={name} component="div"  className={styles.error}/>
    </>
  );
};

export default InputInLabel;
