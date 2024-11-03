"use client";
import { usePathname, useRouter } from "next/navigation";
import scss from "./Header.module.scss";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { useBasketStore } from "@/stores/useShopStore";
import { useFavoriteStore } from "@/stores/useFavoriteStore";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [burger, setBurger] = useState(false);
  const [profile, setProfile] = useState(false);
  const { data: session } = useSession();
  const { basket } = useBasketStore();
  const { favorite } = useFavoriteStore();

  const ILinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Sign Up",
      href: "/auth/signup",
    },
  ];

  return (
    <header className={scss.Header}>
      <div className={scss.main}>
        <div className="container">
          <div className={scss.content}>
            <span></span>
            <div className={scss.text}>
              <h6>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </h6>
              <h4>Shop Now</h4>
            </div>
            <select>
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="kg">Кыргызча</option>
            </select>
          </div>
        </div>
      </div>
      <div className={scss.header}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.burgerMenu}>
              <span onClick={() => setBurger(!burger)}>
                <RiMenu2Line />
              </span>
              {burger ? (
                <div className={scss.burgerComponents}>
                  {ILinks.map((el, idx) => (
                    <Link
                      href={el.href}
                      className={pathname === el.href ? scss.active : scss.link}
                      key={idx}
                      onClick={() => setBurger(false)}
                    >
                      {el.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            <h2>Exclusive</h2>
            <div className={scss.components}>
              {ILinks.map((el, idx) => (
                <Link
                  href={el.href}
                  className={pathname === el.href ? scss.active : scss.link}
                  key={idx}
                >
                  {el.title}
                </Link>
              ))}
            </div>
            <div className={scss.details}>
              <Link href="/search" className={scss.search}>
                <FiSearch />
              </Link>
              <div className={scss.input}>
                <input type="text" placeholder="What are you looking for?" />
                <a>
                  <FiSearch />
                </a>
              </div>
              <Link href="/favorite">
                {favorite.length === 0 ? null : <span></span>}
                <GoHeart />
              </Link>
              <Link href="/basket">
                {basket.length === 0 ? null : <span></span>}
                <HiOutlineShoppingCart />
              </Link>
              {!session ? (
                <img
                  src="https://st.depositphotos.com/1537427/3571/v/450/depositphotos_35717211-stock-illustration-vector-user-icon.jpg"
                  alt=""
                  onClick={() => router.push("/auth/signup")}
                />
              ) : (
                <img
                  src={session?.user?.image!}
                  alt=""
                  onClick={() => setProfile(!profile)}
                />
              )}
              {profile ? (
                <div className={scss.profileModal}>
                  <h4
                    onClick={() => {
                      router.push("/account"), setProfile(false);
                    }}
                  >
                    <FaRegUser />
                    Manage My Account
                  </h4>
                  <h4
                    onClick={() => {
                      router.push("/order"), setProfile(false);
                    }}
                  >
                    <LuShoppingBag />
                    My Order
                  </h4>
                  <h4>
                    <IoCloseCircleOutline />
                    My Cancellations
                  </h4>
                  <h4>
                    <FaRegStar />
                    My Reviews
                  </h4>
                  <h4
                    onClick={() => {
                      signOut(), setProfile(false);
                    }}
                  >
                    <BiLogOut />
                    Logout
                  </h4>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
