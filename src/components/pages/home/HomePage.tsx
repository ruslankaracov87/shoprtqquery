"use client";
import scss from "./HomePage.module.scss";
import Categories from "./HomeSection/Categories";
import Featured from "./HomeSection/Featured";
import Month from "./HomeSection/Month";
import Our from "./HomeSection/Our";
import Todays from "./HomeSection/Todays";
import Welcome from "./HomeSection/Welcome";

const HomePage = () => {
  return (
    <section className={scss.HomePage}>
      <Welcome />
      <Todays />
      <Categories />
      <Month />
      <Our />
      <Featured />
    </section>
  );
};

export default HomePage;
