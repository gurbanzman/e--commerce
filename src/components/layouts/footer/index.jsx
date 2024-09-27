import {FooterMenu, Security} from "../../custom/layouts/index";

const Footer = () => {
  return (
    <footer className="bg-black">
      <section className="container py-12">
        <FooterMenu />
      </section>
      <section>
        <Security />
      </section>
    </footer>
  );
};

export default Footer;
