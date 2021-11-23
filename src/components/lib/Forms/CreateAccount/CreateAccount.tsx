import { FC, FormEvent } from "react";

import styles from "../form.module.css";
import {Button} from "../../Button";
import {Container} from "../../Container";
import {Title} from "../../Title";
import {Description} from "../../Description";
//import {Input} from "../../Input";
import { InputField } from '../../../utils/InputField';
import { Formik, Form } from 'formik';
import { useCreateUserMutation } from '../../../../generated/graphql';
import { useRouter } from 'next/router';
import { toErrorMap } from '../../../../utils/toErrorMap';

interface CreateAccountFormProps {
  connected_account: string
}

// export type CreateAccountFormProps = {
//   email: string;
//   error: string;
//   loading: boolean;
//   onSubmit: (email: string) => void;
//   onChange: (email: string) => void;
//   onBlur: (email: string) => void;
// }
//
// export const CreateAccountForm: FC<CreateAccountFormProps> = ({
//   email,
//   error,
//   loading,
//   onSubmit,
//   onChange,
//   onBlur,
// }) => {
//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//
//     if (onSubmit) {
//       onSubmit(email);
//     }
//   };

 export const CreateAccountForm: FC<CreateAccountFormProps> = ({connected_account}) => {
   const [, register] = useCreateUserMutation();
   const router = useRouter();

  return (
    <Container>
      <Title>
        Create an account
      </Title>
      <Formik
          initialValues={{ eth_address: connected_account, email: ""}}
          onSubmit={async (values, {setErrors}) => {
            const response = await register({userPams: values});
            if (response.data?.createUser.errors) {
              setErrors(toErrorMap(response.data.createUser.errors))
            } else if (response.data?.createUser.user) {
              router.reload();
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.container}>
              <InputField name="email" label="Your email" />
              <Description alignLeft desktopSmall>
                By clicking Create account, I agree that I have read
                and accepted the
                {" "}
                <a href="#">
                  Terms of Service
                </a>
                {" "}
                and
                {" "}
                <a href="#">
                  Privacy Policy.
                </a>
              </Description>
              <Button label="Create Account" stretch type="submit" disabled={isSubmitting} />
            </Form>
          )}
      </Formik>

    </Container>
  );
};
