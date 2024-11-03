"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import scss from "./SignUp.module.scss";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session, "dataSignIn");

  return (
    <section className={scss.signUp}>
      <div className={scss.content}>
        <div className={scss.detailsImg}>
          <img
            src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FoCe9-r31CQt2esAejYIFOqXZNfasvim6j1aXj0~JaKkoZyIUuuWkZ68w-lK8fPYvP6y-fzNYXOjiTPS6VhgwkwgVDmCglT90t2N47aJNUQgG~Rmc16mx6d0~~uMc~D7NI6WBgyD-5tYFDKldFMjl1lzOPzwwtMP~2RYecIZO8FQ6NrK~E1qRmaGHDe7lfT5M-SF7wSCd7bap89vLqavGV44Ip2g9XaKDV0wlBqvhfh4gyT3vM8eQemh-vuktDfr2M7D14leReKjPnKNthk~BFu4KhiGJR~Zk8h5j6YycPUjRw-ZM5ZFiunpDpUJMr6l0TrYsk-3LdQYnsvcO8oJ4w__"
            alt=""
          />
          <div className={scss.img}></div>
        </div>
        <div className={scss.detailsAuth}>
          <div className={scss.auth}>
            <h1>Create an account</h1>
            <h6>Enter your details bellow</h6>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email or Phone Number" />
              <input type="text" placeholder="Password" />
              <button>Create Account</button>
            </form>
            <button
              onClick={() => {
                signIn("google"), session ? router.push("/") : null;
              }}
            >
              <span>
                <FcGoogle />
              </span>
              SignUp with Google
            </button>
            <button
              onClick={() => {
                signIn("github"), session ? router.push("/") : null;
              }}
            >
              <span>
                <BsGithub />
              </span>
              SignUp with GitHub
            </button>
            <h5>
              Already have account?{" "}
              <span onClick={() => router.push("/auth/signin")}>Sign In</span>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
