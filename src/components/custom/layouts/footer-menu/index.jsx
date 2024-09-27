import { Link } from "react-router-dom";
import Logo from "../../ui/logo";
import EmailForm from "../email";
import styles from "./style.module.css";

const FooterMenu = () => {
   return (
      <ul className={`flex justify-between flex-wrap ${styles[`responsive-footer-menu`]}`}>
         <li>
            <ul className={`flex flex-col gap-4 ${styles[`responsive-footer-list`]}`}>
               <li className="flex flex-col gap-6 text-white">
                  <Logo className={`text-white`} logo={`Exclusive`}/>
                  <span className="text-xl">Subscribe</span>
                  <span className="text-zinc-50 font-normal text-base">Get 10% off your first order</span>
               </li>
               <li>
                  <EmailForm />
               </li>
            </ul>
         </li>
         <li className={`text-zinc-50 flex flex-col gap-6 ${styles[`responsive-footer-list`]}`}>
            <span className="text-xl">Support</span>
            <ul className="text-base flex flex-col gap-4">
               <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
               <li>exclusive@gmail.com</li>
               <li>+88015-88888-9999</li>
            </ul>
         </li>
         <li className={`text-zinc-50 flex flex-col gap-6 ${styles[`responsive-footer-list`]}`}>
            <span className="text-xl">Account</span>
            <ul className="text-base flex flex-col gap-4">
               <li>
                  <Link>My Account</Link>
               </li>
               <li>
                  <Link>Login / Register</Link>
               </li>
               <li>
                  <Link>Cart</Link>
               </li>
               <li>
                  <Link>Wishlist</Link>
               </li>
               <li>
                  <Link>Shop</Link>
               </li>
            </ul>
         </li>
         <li className={`text-zinc-50 flex flex-col gap-6 ${styles[`responsive-footer-list`]}`}>
            <span className="text-xl">Quick Link</span>
            <ul className="text-base flex flex-col gap-4">
               <li>
                  <Link>Privacy Policy</Link>
               </li>
               <li>
                  <Link>Terms Of Use</Link>
               </li>
               <li>
                  <Link>FAQ</Link>
               </li>
               <li>
                  <Link>Contact</Link>
               </li>
            </ul>
         </li>
      </ul>
   )
}

export default FooterMenu;