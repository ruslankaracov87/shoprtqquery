"use client";
import scss from "./AboutMenedger.module.scss";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShieldCheckLine } from "react-icons/ri";

const AboutMenedger = () => {
  const menedger = [
    {
      name: "Tom Cruise",
      position: "Founder & Chairman",
      img: "https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jHWuheRZlnWdpIjB0d3Dt4QcPEriH0~YspD0Wlwptq3YpuOphtNk2bmYgzxWF1Bi59vkLLjvheli3ddWAREJPm9lNt5yH-1JO4fP8x7BhHPfZvNgOq0otOxqMDDUfBLf2O25TMeQiBCjVC0q5ynEj2i6cxlbWZXBIkl9b-RVBgLBGVesxQrefUpqUxPqRjYwOvpPXqUqoaCeLlb5CFVPAfQeQKhLqVVuebXsk75Yzi-e0vPwe7c~StuSsALoQL6Q6Vrc5nkhAYHzpmj6EotkC-RgrWvqXJ1hMJ-hCfidsOXdDrabbMmCPtQUU9GxV01xs8fOeRdHbPquCQ7-wStUQQ__",
    },
    {
      name: "Emma Watson",
      position: "Managing Director",
      img: "https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NxycOHXKG3UAG-UtbYMLMaIR0wbL~Nt8xGNgktbsDwP3fMbw82TJNR00ktS62XziGTvA~VyFpyUABcH7vZkEfhL3-8wIS44uqmJ3FHbUeVu~YH0rMOLnfb70yr3J2XHzbPx2xWwVQZvBgla8W78EPN6wk9T~llycTQ7goWKD1BuJf499qixpd8AKVGlkBCenB~5vg94utyoakXyAdSN7vhX8N1IYn7zqS7XvxHx1gEmwe5HVpJfydBXgfnIWSI0jAQwUJk2Z2EhdbPbEjrtpvANdyCsmB0jqmQSNCHjKYQO7UTIFHkN5gAYoeqBUEQ9ijUTEmOKvQl0wTxzO-DXv0w__",
    },
    {
      name: "Will Smith",
      position: "Product Designer",
      img: "https://s3-alpha-sig.figma.com/img/ede4/8f2b/5df8103b281240ce5bafe5dd7d215ab8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gVaENRENoUmdd14CcnLDaz3BKIZPd2c0jzWfIH005YJvMGKlLO3mtaAygQG7AdpuPnkpaZwVP2TkPoyOKFgILLGqQskQKZRioshHd8iikr-I8cS3qDVmileEvGfpGUs5KRAk708YDTic9uaIqazrTM0vF~dS40rMxuHaR8WepneEZIVeM0hX21Xwve-F-MnvVrIoDZoK4Joy8rEnhQHSjczqMGjq-p2R65TIABQFuaTEUZFPaYVd8gQwatBjfbGoxfmsgTcSSOV3DNRdQuya3WrzRiU3a01OBPo~THNZng0dzpJKiE4giThIUEHdk0Zdm-Ch4eSsiAU7vxTmdkVZSA__",
    },
  ];
  return (
    <section className={scss.menedger}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.menedgerBlocks}>
            {menedger.map((el, idx) => (
              <div className={scss.menedgerBlock} key={idx}>
                <div className={scss.image}>
                  <img src={el.img} alt="" />
                </div>
                <h2>{el.name}</h2>
                <h5>{el.position}</h5>
                <div className={scss.icons}>
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
            ))}
          </div>
          <div className={scss.details}>
            <div className={scss.block}>
              <div className={scss.icon}>
                <a>
                  <TbTruckDelivery />
                </a>
              </div>
              <h2>FREE AND FAST DELIVERY</h2>
              <h6>Free delivery for all orders over $140</h6>
            </div>
            <div className={scss.block}>
              <div className={scss.icon}>
                <a>
                  <TfiHeadphoneAlt />
                </a>
              </div>
              <h2>24/7 CUSTOMER SERVICE</h2>
              <h6>Friendly 24/7 customer support</h6>
            </div>
            <div className={scss.block}>
              <div className={scss.icon}>
                <a>
                  <RiShieldCheckLine />
                </a>
              </div>
              <h2>MONEY BACK GUARANTEE</h2>
              <h6>We reurn money within 30 days</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMenedger;
