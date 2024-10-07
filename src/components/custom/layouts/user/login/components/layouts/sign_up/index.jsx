import { Link } from "react-router-dom";
import { Btn } from "../../../../../../ui/button/link/view";
import LoginInput from "../../../ui/input";
import ConstantLoginWebPage from "../constant";
import styles from "./style.module.css";


const UserSign = () => {
  return (
    <ConstantLoginWebPage
      title={`Create an account`}
      desc={`Enter your details`}
      sectionClass={`mt-7`}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <div>
            <LoginInput type={`text`} name={`user_name`} placeholder={`Name`} />
          </div>
          <div>
            <LoginInput
              type={`email`}
              name={`user_email`}
              placeholder={`Email`}
            />
          </div>
          <div>
            <LoginInput
              type={`password`}
              name={`user_password`}
              placeholder={`Password`}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <ul className="flex flex-col gap-4">
            <li className="flex flex-col">
               <Btn type={`submit`} title={`Create Account`} className={`same-btn`}/>
            </li>
            <li className="flex flex-col">
               <Btn type={`submit`} title={<><span className="icon-google1"></span><span>Sign up with Google</span></>} className={`same-btn`} customClass={`${styles[`btn-auth`]}`}/>
            </li>
          </ul>
          <p className="flex flex-row gap-4 justify-center items-center">
            <span className={styles[`relation-style`]}>Already have account?</span>
            <Link className="block pb-1 border-b-2">Log in</Link>
          </p>
        </div>
      </div>
    </ConstantLoginWebPage>
  );
};

export default UserSign;
