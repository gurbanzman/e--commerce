import React from "react";
import styles from "./style.module.css";

const EmailForm = React.memo(() => {
  return (
    <form className={styles[`email-form`]}>
      <input type="text" name="send_message" className={styles[`email-input`]} placeholder="Enter your email"/>
    </form>
  );
});

EmailForm.displayName = "EmailForm";

export default EmailForm;
