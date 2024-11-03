"use client";
import scss from "./Categories.module.scss";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import { PiGameController } from "react-icons/pi";

const Categories = () => {
  const blocks = [
    {
      icon: <IoPhonePortraitOutline />,
      title: "Phones",
    },
    {
      icon: <RiComputerLine />,
      title: "Computers",
    },
    {
      icon: <BsSmartwatch />,
      title: "SmartWatch",
    },
    {
      icon: <IoCameraOutline />,
      title: "Camera",
    },
    {
      icon: <PiHeadphones />,
      title: "HeadPhones",
    },
    {
      icon: <PiGameController />,
      title: "Gaming",
    },
  ];

  return (
    <section className={scss.categories}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainText}>
            <div className={scss.bg}></div>
            <h3>Categories</h3>
          </div>
          <h1>Browse By Category</h1>
          <div className={scss.categoryBlocks}>
            {blocks.map((el, idx) => (
              <div className={scss.block} key={idx}>
                <span>{el.icon}</span>
                <h4>{el.title}</h4>
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Categories;
