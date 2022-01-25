// import { useEffect, useState } from 'react';
import styles from "../main/styles/header.module.css";

type Props = {
  handleOpenModal: any;
};

export default function AlertButton({ handleOpenModal }: Props) {
//  const [activateError, setActivateError] = useState('')

  // useEffect(() => {
  // if (error) {
  //   setActivateError(error.message)
  // }
  // }, [error])


  return (
    <>
      <button
        onClick={handleOpenModal}
        type="button"
        className={styles.buttonProfile}
      >
        Cancel
      </button>
    </>
  );
}
