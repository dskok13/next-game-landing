import React from "react";
import styles from "styles/Navbar.module.css";
import Image from "next/image";
import Button from "components/Button";

const Navbar = () => {
  const startBuildingEventHandler = () => {
    console.log("Start Building Button Clicked.");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/assets/images/logo.png"
          alt=""
          width={70}
          height={70}
        ></Image>
        <span>Gradian</span>
      </div>
      <div className={styles.link}>
        <ul className={styles.list}>
          <li>Documentation</li>
          <li>About</li>
          <li>Decentralized Apps</li>
          <li>Our Games</li>
          <li>Blog</li>
        </ul>
        <Button
          onClick={startBuildingEventHandler}
          bgColor="#00AE99"
          color="#fff"
          width="120"
          height="42"
        >
          Start Building
        </Button>
      </div>
    </div>
  );
};
export default Navbar;
