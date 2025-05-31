"use client";
import Image from "next/image";
import styles from "./Header.module.scss";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const RouteTitle: Record<string, string> = {
  home: "Home",
  profile: "Profile",
  passes: "Passes",
  explore: "Explore",
  "": "Sign In",
};

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={cn(styles.Header, "bg-gray-800")}>
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
      <h1 className="text-white text-3xl font-bold text-center ml-auto ml-auto">
        {RouteTitle[pathname.split("/")[1]] || "home"}
      </h1>
    </header>
  );
};

export default Header;
