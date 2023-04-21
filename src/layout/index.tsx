import React, { FC, PropsWithChildren } from "react";
import styles from 'styles/Layout.module.css'
import Navbar from "./navbar";
import Footer from "./footer";

const Layout : FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  )
}
export default Layout