import { FC } from "react";

import styles from "../form.module.css";
import {Button} from "../../Button";
import {Container} from "../../Container";
import {Title} from "../../Title";
import { InputField } from '../../../utils/InputField';
import { Formik, Form } from 'formik';
import { useAddIdentityUserMutation, IdentityUserInputs } from '../../../../generated/graphql';
import { useRouter } from 'next/router';
import { toErrorMap } from '../../../../utils/toErrorMap';
import { Dropdown } from '../../Dropdown';
import { Datepicker } from '../../Datepicker';
import { countryList, sexList, occupationList, relationshipList } from '../../../../utils/lists';

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
     day: "",
     month: "",
     year: "",
     sex: "",
     relationship: "",
     occupation: "",
     passport_country: "",
     live_country: "",
     phone: ""
   };

  return (
    <Container>
      <Title>Personal information</Title>
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
              <InputField name="phone" label="Phone" />
              <Datepicker label="Birth date" />
              <Dropdown name="sex" label="Gender" options={sexList} />
              <Dropdown name="passport_country" label="Citizenship" options={countryList} />
              <Dropdown name="relationship" label="Beneficiary" options={relationshipList} />
              <Dropdown name="occupation" label="Occupation" options={occupationList} />
              <Dropdown name="live_country" label="Residence country" options={countryList} />
              <Button label="Confirm your data" stretch type="submit" disabled={isSubmitting} />
            </Form>
          )}
      </Formik>
    </Container>
  );
};
