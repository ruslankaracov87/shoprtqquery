"use client";
import { useSession } from "next-auth/react";
import scss from "./AccountPage.module.scss";

const AccountPage = () => {
  const { data: session } = useSession();
  return (
    <section className={scss.account}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <h5>
              Home / <span>My Account</span>
            </h5>
            <h4>
              Welcome! <span>Md Rimel</span>
            </h4>
          </div>
          <div className={scss.accountDetails}>
            <div className={scss.mainText}>
              <div className={scss.text}>
                <h3>Manage My Account</h3>
                <h4>My Profile</h4>
                <h4>Address Book</h4>
                <h4>My Payment Options</h4>
              </div>
              <div className={scss.text}>
                <h3>My Orders</h3>
                <h4>My Returns</h4>
                <h4>My Cancellations</h4>
              </div>
            </div>
            <div className={scss.myProfile}>
              <h3>Edit Your Profile</h3>
              <div className={scss.blocks}>
                <div className={scss.block}>
                  <h5>First Name</h5>
                  <input type="text" value={session?.user?.name!} />
                </div>
                <div className={scss.block}>
                  <h5>Last Name</h5>
                  <input type="text" placeholder="Your last name" />
                </div>
              </div>
              <div className={scss.blocks}>
                <div className={scss.block}>
                  <h5>Email</h5>
                  <input type="text" value={session?.user?.email!} />
                </div>
                <div className={scss.block}>
                  <h5>Address</h5>
                  <input type="text" placeholder="Your address" />
                </div>
              </div>
              <div className={scss.password}>
                <h5>Password Changes</h5>
                <input type="text" placeholder="Current Password" />
                <input type="text" placeholder="New Password" />
                <input type="text" placeholder="Confirm New Password" />
              </div>
              <div className={scss.buttons}>
                <button className={scss.cancel}>Cancel</button>
                <button>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
