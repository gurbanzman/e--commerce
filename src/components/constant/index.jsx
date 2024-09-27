import Space from "../custom/ui/space";
import { Footer, MenuBar } from "../layouts";

const ConstantPage = ({ children, ...props }) => {
  return (
    <>
      <MenuBar />
      <header>{props.title}</header>
      <main>{children}</main>
      <Space />
      <Footer />
    </>
  );
};

export default ConstantPage;
