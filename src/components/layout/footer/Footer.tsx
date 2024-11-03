"use client";
import scss from "./Footer.module.scss";
import { FaGooglePlay } from "react-icons/fa6";
import { BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoPaperAirplane } from "react-icons/go";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <h2>Exclusive</h2>
            <h3>Subscribe</h3>
            <h5>Get 10% off your first order</h5>
            <div className={scss.input}>
              <input type="text" placeholder="Enter your email" />
              <a>
                <GoPaperAirplane />
              </a>
            </div>
          </div>
          <div className={scss.block}>
            <h3>Support</h3>
            <h5>
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </h5>
            <h5>exclusive@gmail.com</h5>
            <h5>+88015-88888-9999</h5>
          </div>
          <div className={scss.block}>
            <h3>Account</h3>
            <h5>My Account</h5>
            <h5>Login / Register</h5>
            <h5>Cart</h5>
            <h5>Wishlist</h5>
            <h5>Shop</h5>
          </div>
          <div className={scss.block}>
            <h3>Quick Link</h3>
            <h5>Privacy Policy</h5>
            <h5>Terms Of Use</h5>
            <h5>FAQ</h5>
            <h5>Contact</h5>
          </div>
          <div className={scss.share}>
            <h3>Download App</h3>
            <h6>Save $3 with App New User Only</h6>
            <div className={scss.shareQr}>
              <img
                src="https://s3-alpha-sig.figma.com/img/9913/87c0/5dd6d44594e01b675513068803e2426d?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nZgz31ugl6FYurYxkKaxDBzlzC~Jfo5roW3mAjUoO3EtcHtxFWWRUZ~hFmXW23iAgZlw2q5h3MR9n2R-24393Tnbi3OuD1SxtImFIRBkX3Evu9NOs2z58Cfpk7Ux1qLut12Rm6F44ikUNIbYhdJFL9E2GZr1DBrUKuZTvB0k0kXICO6H7~0R7IJSZ50vzZLEFwrqCb454Ys1JedtIEtEj~ZXnCSUI~HL0f3nm8tHE3LFA69UBXnPnUpQ4dZhAfciYyEutzuMA8HSo4~~b8zTCOskZdyVcBakE-YFwRxxFtCnTtb9GgPGPuT7YKzXB3~I8qMSl15DEhjH3b5NuN6f4w__"
                alt=""
              />
              <div className={scss.shareStore}>
                <button>
                  <FaGooglePlay />
                  Google Play
                </button>
                <button>
                  <BsApple />
                  App Store
                </button>
              </div>
            </div>
            <div className={scss.shareSite}>
              <a>
                <FaFacebookF />
              </a>
              <a>
                <FiTwitter />
              </a>
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className={scss.bottom}>
          <p>
            <FaRegCopyright />
            Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
