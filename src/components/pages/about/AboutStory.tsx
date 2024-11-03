"use client";
import scss from "./AboutStory.module.scss";
import { BsShop } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";

const AboutStory = () => {
  return (
    <section className={scss.story}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <h5>
              Home / <span>About</span>
            </h5>
          </div>
          <div className={scss.storyOur}>
            <div className={scss.text}>
              <h1>Our Story</h1>
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
            <img
              src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FXzHaYQnnXzE~fv88ft1rNPl43iOHMz6xOpG6A2dMj0u1nDDOlOcmj5m-uvnotCK8QMOaxyL2i0k18U0eju9dT4juxq-klnQm5iOd3PTgXaDyRTJRDO6J7Mz1-FsBBm37fnOm2xh5zrhcp7PvhZuD83z4~uOYrNwOb0Z0uD90cEL6Tqczt0~4~iBpwoVARWC0lV2hXgLcfubefKJCtI6qBImV7Fr1vO1yBPykZuBJ0j-G2gWWTB3GdX2uvd14AtlGnhbBQWtRhwxJVkvLJEgPaMNtQj7RS9viOidkYVT7LrKSY6Fslk-HFFebyVTpPACaZz2cBpTj8fTdbxYxojbyw__"
              alt=""
            />
          </div>
          <div className={scss.storyBlocks}>
            <div className={scss.block}>
              <div className={scss.icon}>
                <a>
                  <BsShop />
                </a>
              </div>
              <h3>10.5k </h3>
              <h6>Sallers active our site</h6>
            </div>
            <div className={scss.block}>
              <div className={scss.icon}>
                <a>
                  <AiOutlineDollar />
                </a>
              </div>
              <h3>33k</h3>
              <h6>Mopnthly Produduct Sale</h6>
            </div>
            <div className={scss.block}>
              <div className={scss.icon}>
                <a>
                  <RiShoppingBag4Line />
                </a>
              </div>
              <h3>45.5k</h3>
              <h6>Customer active in our site</h6>
            </div>
            <div className={scss.block}>
              <div className={scss.icon}>
                <a>
                  <FaSackDollar />
                </a>
              </div>
              <h3>25k</h3>
              <h6>Anual gross sale in our site</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
