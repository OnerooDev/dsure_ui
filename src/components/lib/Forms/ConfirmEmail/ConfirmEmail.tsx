import { FC, useState } from "react";

import styles from "../form.module.css";
import {Button} from "../../Button";
import {Container} from "../../Container";
//import {Description} from "../../Description";
//import {Input} from "../../Input";
//import { InputField } from '../../../utils/InputField';
import { Formik, Form } from 'formik';
import { useConfirmEmailMutation } from '../../../../generated/graphql';
import { useRouter } from 'next/router';
import { toErrorMap } from '../../../../utils/toErrorMap';

interface ConfirmEmailFormProps {
  token: string
}

 export const ConfirmEmailForm: FC<ConfirmEmailFormProps> = ({token}) => {
   const [, confirm] = useConfirmEmailMutation();
   const router = useRouter();
   const [tokenError, setTokenError] = useState('');
  return (
    <Container>
      <Formik
          initialValues={{ token: token }}
          onSubmit={async (values, {setErrors}) => {
            const response = await confirm(values);
            if (response.data?.confirmEmail.errors) {
              const errorMap = toErrorMap(response.data.confirmEmail.errors);
              if ('token' in errorMap) {
                setTokenError(errorMap.token)
              }
              setErrors(errorMap);
            } else if (response.data?.confirmEmail.user) {
              router.push('/');
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.container}>
              {tokenError ? (
                <>
                <div
                  color="red"
                  font-size="12px"
                >
                {tokenError}
                </div>
                </>
              ) : (
                <Button label="Confirm email" stretch type="submit" disabled={isSubmitting} />
              )
              }
            </Form>
          )}
      </Formik>

    </Container>
  );
};
