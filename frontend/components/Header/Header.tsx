"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import styles from "./Header.module.scss";
import { cn } from "@/lib/utils";

const Header = () => {
  return <header className={cn(styles.Header)}></header>;
};

export default Header;
