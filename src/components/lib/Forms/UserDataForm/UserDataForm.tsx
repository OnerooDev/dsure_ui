import { FC } from "react";

import styles from "../form.module.css";
import {Button} from "../../Button";
import {Container} from "../../Container";
import { InputField } from '../../../utils/InputField';
import { Formik, Form } from 'formik';
import { useAddIdentityUserMutation, IdentityUserInputs } from '../../../../generated/graphql';
import { useRouter } from 'next/router';
import { toErrorMap } from '../../../../utils/toErrorMap';

interface UserDataFormProps {
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

 export const UserDataForm: FC<UserDataFormProps> = ({connected_account}) => {
   const [, addData] = useAddIdentityUserMutation();
   const router = useRouter();

   const in_val: IdentityUserInputs = {
     first_name: "",
     last_name: "",
     middle_name: "",
     birth_date: "",
     passport_country: "",
     live_country: ""
   };

  return (
    <Container>
      <Formik
          initialValues={in_val}
          onSubmit={async (values, {setErrors}) => {
            const response = await addData({eth_address: connected_account, userPams: values});
            if (response.data?.addIdentityUser.errors) {
              setErrors(toErrorMap(response.data.addIdentityUser.errors))
            } else if (response.data?.addIdentityUser.user) {
              router.reload();
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.container}>
              <InputField name="first_name" label="First name" />
              <InputField name="last_name" label="Last name" />
              <InputField name="middle_name" label="Middle name" />
              <InputField name="birth_date" label="Birth date" />
              <InputField name="passport_country" label="Passport country" />
              <InputField name="live_country" label="Residence country" />
              <Button label="Confirm your data" stretch type="submit" disabled={isSubmitting} />
            </Form>
          )}
      </Formik>

    </Container>
  );
};
