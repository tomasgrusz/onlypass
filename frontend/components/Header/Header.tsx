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
      <label htmlFor="logo">OnlyPass</label>
    </header>
  );
};

export default Header;
