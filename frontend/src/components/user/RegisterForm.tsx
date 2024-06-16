import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { useSnackbar } from "notistack";
import { ROUTES } from "@/router/consts";
import Button from "@/components/common/Button";
import FormikField from "@/components/common/FormikInput";
import {
  registerInitialValus,
  reigsterValidationSchema,
} from "@/components/user/consts";
import { RegisterRequest } from "@/components/user/types";
import styles from "./Form.module.scss";
import { useRegisterUser } from "./hooks";
import { ErrorResponse } from "@/types/error";

const RegisterForm = () => {
  const { mutateAsync: registerUser } = useRegisterUser();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSubmit = async (formValues: RegisterRequest) => {
    try {
      await registerUser(formValues);
      navigate(ROUTES.LOGIN);
      enqueueSnackbar("Registration successful", {
        variant: "success",
      });
    } catch (error) {
      const errorMessage = error as ErrorResponse;
      console.log(errorMessage);
      enqueueSnackbar(errorMessage?.response?.data.message ?? "", {
        variant: "error",
      });
    }
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={registerInitialValus}
        validationSchema={reigsterValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <h2 className={styles.title}>Register</h2>
          <div className={styles.field}>
            <FormikField name="name" placeholder="Name" />
          </div>
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
          <Button type="submit">Register</Button>
          <div className={styles.link}>
            <Link to={ROUTES.LOGIN} className={styles.signUp}>
              Already have an account? Log in
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
