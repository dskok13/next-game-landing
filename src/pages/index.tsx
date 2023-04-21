import Button from "components/Button";
import { Inter } from "next/font/google";
import Image from "next/image";

import styles from "styles/Landing.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const startBuildingEventHandler = () => {};
  const BuildEventHandler = () => {};

  return (
    <div className="section">
      <div className="container">
        <div className={styles["ct-landing-area"]}>
          <div className={styles["ct-landing-text"]}>
            <p>
              Unlock <span>Web3 Gaming</span>
            </p>
            <p>
              Layer-2 Algorand-based Web3 as a service to simplify inclusion of
              web3 transactions in your games. Showcased in our games as a
              Publisher and Developer.
            </p>
            <div className={styles["ct-landing-handle-building-btn"]}>
              <Button
                onClick={startBuildingEventHandler}
                bgColor="#00AE99"
                color="#fff"
                width="218"
                height="42"
              >
                Start Building
              </Button>
              <Button
                onClick={BuildEventHandler}
                bgColor="linear-gradient(180deg, rgba(158, 218, 209, 0.1) 0%, rgba(61, 179, 162, 0.1) 100%);"
                color="#00AE99"
                width="159"
                height="42"
              >
                Let Us Build It
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/assets/images/landing/image1.png"
              alt="iamge"
              width={320}
              height={304}
            ></Image>
          </div>
          <div className={styles["ct-story"]}>
            <span>THE STORY</span>
            <span>Triangle Icon</span>
          </div>
        </div>
      </div>
    </div>
  );
}
