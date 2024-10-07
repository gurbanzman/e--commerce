import { Link } from "react-router-dom";
import { Btn } from "../../../../../../ui/button/link/view";
import LoginInput from "../../../ui/input";
import ConstantLoginWebPage from "../constant";

const UserLogin = () => {
  return (
    <ConstantLoginWebPage
      title={`Log in to Exclusive`}
      desc={`Enter your details below`}
      sectionClass={`mt-7`}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
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
          <ul className="flex flex-row justify-between items-center">
            <li>
              <Btn
                type={`submit`}
                title={`Log In`}
                className={`same-btn`}
              />
            </li>
            <li>
              <Link className="text-red-600">Forget Password?</Link>
            </li>
          </ul>
        </div>
      </div>
    </ConstantLoginWebPage>
  );
};
export default UserLogin;
