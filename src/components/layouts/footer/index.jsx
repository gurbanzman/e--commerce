import FooterMenu from "../../custom/layouts/footer-menu";
import Security from "../../custom/layouts/security";

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
