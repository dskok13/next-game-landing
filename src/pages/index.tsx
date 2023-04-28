import Button from "components/Button";
import { Inter } from "next/font/google";
import Image from "next/image";

import styles from "styles/Landing.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const landingGallery1 = [
    {
      imgPath: "/assets/images/landing/galleryImg11.png",
      title: "Access Mainstream Gamers",
      desc: "Easy onboarding with custodial wallets, web3 authentication, and purchase support for all major payment methods.",
    },
    {
      imgPath: "/assets/images/landing/galleryImg12.png",
      title: "Assets at Scale",
      desc: "Let Players Live Mint NFTs based on traits, or generate large batches with our minting cloud service. Propagate them to all major marketplaces.",
    },
    {
      imgPath: "/assets/images/landing/galleryImg13.png",
      title: "Low Code Building",
      desc: " Low Code access to powerful web3 game services via intuitive APIs & SDKs for most game engines via Swagger code generation.",
    },
    {
      imgPath: "/assets/images/landing/galleryImg14.png",
      title: "On-Chain Gameplay",
      desc: "Audited scalable dApps for common gaming transactions, such as player trading, in-game stores, and crafting. ",
    },
  ];
  const landingGallery2 = [
    {
      imgPath: "/assets/images/landing/galleryImg21.png",
      title: "Unlimited Growth Potential",
      desc: "Focus on growing your audience, knowing our serverless infrastructure and high TPS capacity can scale to support you.",
    },
    {
      imgPath: "/assets/images/landing/galleryImg22.png",
      title: "Algorand-grade Security",
      desc: "Gradian utilizes Algorand's quantum-resistant encryption and Pure Proof of Stake consensus for unparalleled, future-proof security.",
    },
    {
      imgPath: "/assets/images/landing/galleryImg23.png",
      title: "Carbon-Negative Gaming",
      desc: "Gradian powered transactions are carbon-negative and eco-friendly, thanks to Algorand’s efficiency and eco-friendly initiatives.",
    },
    {
      imgPath: "/assets/images/landing/galleryImg24.png",
      title: "Precise Asset Control",
      desc: "Optionally Clawback and Freeze assets, offering powerful asset recovery options and legal compliance if applicable",
    },
  ];

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

        <div className={styles["gallery-area"]}>
          <div className={styles["sub-gallery-container"]}>
            <p>Next generation gaming</p>
            <div className={styles["sub-gallery-image-container"]}>
              {landingGallery1.map((item, key) => (
                <div key={key}>
                  <Image
                    src={item.imgPath}
                    alt="Landing Image"
                    width={85}
                    height={85}
                  ></Image>
                  <span className={styles["gallery-title"]}>{item.title}</span>
                  <span className={styles["gallery-desc"]}>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles["sub-gallery-container"]}>
            <p>Planet Scale Infrastructure</p>
            <div className={styles["sub-gallery-image-container"]}>
              {landingGallery2.map((item, key) => (
                <div key={key}>
                  <Image
                    src={item.imgPath}
                    alt="Landing Image"
                    width={85}
                    height={85}
                  ></Image>
                  <span className={styles["gallery-title"]}>{item.title}</span>
                  <span className={styles["gallery-desc"]}>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
