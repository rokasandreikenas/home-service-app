import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { ROUTES } from "@/router/consts";
import Button from "@/components/common/Button";
import { UserContext } from "@/context/UserContext";
import {
  loginInitialValues,
  loginValidationSchema,
} from "@/components/user/consts";
import { LoginRequest } from "@/components/user/types";
import FormikField from "@/components/common/FormikInput";
import styles from "./Form.module.scss";
import { useLoginUser } from "./hooks";
import { ErrorResponse } from "@/types/error";

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const [error, setError] = useState("");
  const { mutateAsync: loginUser } = useLoginUser();
  const navigate = useNavigate();

  const handleSubmit = async (formValues: LoginRequest) => {
    try {
      const response = await loginUser(formValues);
      login(response);
      navigate(ROUTES.HOME);
    } catch (error) {
      const errorMessage = error as ErrorResponse;
      console.error(errorMessage);
      setError(errorMessage.response?.data.message ?? "");
    }
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <h2 className={styles.title}>Login</h2>
          <div className={styles.field}>
            <FormikField name="email" type="email" placeholder="Email" />
          </div>
          <div className={styles.field}>
            <FormikField
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <Button type="submit">Log in</Button>
          <div className={styles.link}>
            <Link to={ROUTES.REGISTER} className={styles.signUp}>
              Don't have an account? Sign up
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
