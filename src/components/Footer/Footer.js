import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { Fragment } from "react";
const Footer = () => {
  return (
    <div className={styles.div}>
      <div className={styles.div2}>
        <div className={styles.div3}>
          <Fragment>
            <Link className={styles.link} to={"/contacts"}>
              Contacts
            </Link>
          </Fragment>
          <Fragment>
            <Link className={styles.link} to={"/"}>
              Shop
            </Link>
          </Fragment>
        </div>
        <div className={styles.div3}>
          <p className={styles.title}>Call-center</p>
          <p>+38 063 313 82 88</p>
          <p className={styles.title}>Social media</p>
          <div className={styles.icons}>
            <a
              href={"https://www.facebook.com/artem.rusachenko"}
              className={styles["icon"]}
              style={{ paddingRight: "10px" }}
            >
              <SlSocialFacebook />
            </a>
            <a
              className={styles["icon"]}
              href={"https://www.instagram.com/optimiiiist/"}
            >
              <SlSocialInstagram />
            </a>
          </div>
        </div>
      </div>
      <p>© ElectronicsStore.ua, 2023</p>
    </div>
  );
};

export default Footer;
