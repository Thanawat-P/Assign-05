import React from "react";
import Image from "next/image";
import styles from "./TopMenu.module.css"; // Import the CSS module

export default function TopMenu() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <a href="/booking" className={styles.bookingButton}>
          Booking
        </a>
      </div>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="Logo" width={50} height={50} priority />
      </div>
    </nav>
  );
}
