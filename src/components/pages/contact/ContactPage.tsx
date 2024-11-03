"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./ContactPage.module.scss";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import axios from "axios";

interface IContact {
  name: string;
  email: string;
  phone: number;
  message: string;
}

const ContactPage = () => {
  const { register, handleSubmit, reset } = useForm<IContact>();

  const onSubmit: SubmitHandler<IContact> = (data) => {
    let my_id = `-1002155692436`;
    let token = `7379926721:AAGdHk5RpkeAFr5TOZApxisySaGqta-Lws4`;
    let api_key = ` https://api.telegram.org/bot${token}/sendMessage`;

    let newProduct = {
      chat_id: my_id,
      parse_model: "html",
      text: `
      Shopping Rtq-Query!
      User Name: ${data.name},
      User Email: ${data.email},
      User Phone: ${data.phone},
      User Message: ${data.message}
      `,
    };

    axios.post(api_key, newProduct);
    reset()
  };

  return (
    <section className={scss.contact}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <h5>
              Home / <span>Contact</span>
            </h5>
          </div>
          <div className={scss.details}>
            <div className={scss.block}>
              <div className={scss.text}>
                <div className={scss.mainBlockText}>
                  <a>
                    <FiPhone />
                  </a>
                  <h4>Call To Us</h4>
                </div>
                <h6>We are available 24/7, 7 days a week.</h6>
                <h6>Phone: +996 (995)-25-55-92</h6>
              </div>
              <hr />
              <div className={scss.text}>
                <div className={scss.mainBlockText}>
                  <a>
                    <MdOutlineMailOutline />
                  </a>
                  <h4>Write To Us</h4>
                </div>
                <h6>
                  Fill out our form and we will contact you within 24 hours.
                </h6>
                <h6>Emails: customer@exclusive.com</h6>
                <h6>Emails: support@exclusive.com</h6>
              </div>
            </div>
            <div className={scss.inputs}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={scss.topInputs}>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    {...register("name", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="Your Email *"
                    {...register("email", { required: true })}
                  />
                  <input
                    type="number"
                    placeholder="Your Phone *"
                    {...register("phone", { required: true })}
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  {...register("message", { required: false })}
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
