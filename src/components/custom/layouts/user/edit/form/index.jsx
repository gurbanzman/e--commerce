import React from "react";
import styles from "./style.module.css";
import Title from "../../../../ui/title";
import TextInput from "../../../../ui/text-input";
import { Btn } from "../../../../ui/button/link/view";

const UserEditForm = React.memo(() => {
  return (
    <form className={`${styles[`form`]}`}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div>
            <Title
              title={`Edit Your Profile`}
              className={`${styles[`form-title`]}`}
            />
          </div>
          <div className="flex flex-row flex-wrap justify-between gap-y-6">
            <div className={`${styles[`col-6`]} flex flex-col gap-y-2`}>
              <Title
                title={`First Name`}
                className={`${styles[`form-label`]}`}
              />
              <TextInput type={`text`} placeholder={`MD`} name={`first_name`} />
            </div>
            <div className={`${styles[`col-6`]} flex flex-col gap-y-2`}>
              <Title
                title={`Last Name`}
                className={`${styles[`form-label`]}`}
              />
              <TextInput
                type={`text`}
                placeholder={`Rimel`}
                name={`last_name`}
              />
            </div>
            <div className={`${styles[`col-6`]} flex flex-col gap-y-2`}>
              <Title title={`Email`} className={`${styles[`form-label`]}`} />
              <TextInput
                type={`email`}
                placeholder={`rimel1111@gmail.com`}
                name={`email`}
              />
            </div>
            <div className={`${styles[`col-6`]} flex flex-col gap-y-2`}>
              <Title title={`Address`} className={`${styles[`form-label`]}`} />
              <TextInput
                type={`text`}
                placeholder={`Kingston, 5236, United State`}
                name={`address`}
              />
            </div>
            <div className={`${styles[`col-12`]} flex flex-col gap-y-2`}>
              <Title
                title={`Password Changes`}
                className={`${styles[`form-label`]}`}
              />
              <div className="flex flex-col gap-y-4">
                <TextInput
                  type={`password`}
                  placeholder={`Current Password`}
                  name={`current_password`}
                />
                <TextInput
                  type={`password`}
                  placeholder={`New Password`}
                  name={`new_password`}
                />
                <TextInput
                  type={`password`}
                  placeholder={`Confirm New Password`}
                  name={`confirm_new_password`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-8 justify-end">
          <Btn type={`submit`} className={`btn`} title={`Cancel`} />
          <Btn type={`submit`} className={`same-btn`} title={`Save Changes`} />
        </div>
      </div>
    </form>
  );
});

UserEditForm.displayName = "UserEditForm";
export default UserEditForm;
