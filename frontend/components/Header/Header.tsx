"use client";
import Image from "next/image";
import styles from "./Header.module.scss";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className={cn(styles.Header)}>
      <Image
        id="logo"
        src="/icon-simplified.svg"
        alt="OnlyPass Logo"
        height={24}
        width={24}
        className={cn(styles.logo)}
      />
      <label htmlFor="logo" className={cn(styles.logoLabel)}>
        <span>only</span>
        <span>pass</span>
      </label>
    </header>
  );
};

export default Header;
