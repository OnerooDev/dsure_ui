import React from 'react';
import { CheckAdmin } from '../../../components/admin/CheckAdmin';
import { InputField } from '../../../components/utils/InputField';
import { useGetRequestsQuery, useUpdateCertMutation } from '../../../generated/graphql';
import { createUrqlClient } from '../../../utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import { Metamask } from '../../../components/lib/Metamask'
import { Button } from '../../../components/lib/Button'
import { useEthers} from "@usedapp/core";
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import styles from "../../../components/lib/Forms/form.module.css";

interface requestsCertProps {

}

const requestsCert: React.FC<requestsCertProps> = ({}) => {

  const { account } = useEthers();
  const [requests] = useGetRequestsQuery();
  const [, update_cert] = useUpdateCertMutation();
  const router = useRouter();

  const page = (
    <>
      <div>Requests list:</div>
      <br />
      {!requests.data ? (
        <div>Loading...</div>
      ) : (
        requests.data?.requests.map((p) => (
            <Formik
                initialValues={{ cert_number: "", url_cert: "", expire_date: "Timestamp" }}
                onSubmit={async (values) => {
                  const response = await update_cert({id: p.id, expire_date: parseInt(values.expire_date), url_cert: values.url_cert, cert_number: values.cert_number});
                  if (response.data?.updateCert.id) {
                    router.reload();
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form className={styles.container}>
                    <div key={p.id}>
                      {p.id} dep - {p.deposit_id} plan - {p.plan_status} owner - {p.owner}
                    </div>
                    <InputField name="cert_number" label="Cert number" />
                    <InputField name="url_cert" label="Url to cert" />
                    <InputField name="expire_date" label="Expire date" />
                    <Button label="Activate" stretch type="submit" disabled={isSubmitting} />
                  </Form>
                )}
            </Formik>
        ))
      )}
    </>
  );

  return (!account ? (
          <Metamask />
        ) : (
          <CheckAdmin connected_account={account} page={page}/>
        )
  );
};

export default withUrqlClient(createUrqlClient)(requestsCert);
