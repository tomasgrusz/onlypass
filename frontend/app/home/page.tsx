"use client";

import PassCard from "@/components/PassCard/PassCard";
import passesJson from "@/data/passes.json";
import styles from "./page.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // To be replaced with actual verification logic
    const isVerified = window.localStorage.getItem("isVerified") === "true";
    if (!isVerified) {
      router.replace("/");
    }
  }, []);

  return (
    <div className={styles.Home}>
      <h2>Active Passes</h2>
      <div className={styles.passList}>
        <div className={styles.passesWrapper}>
          {passesJson.map((pass) => (
            <PassCard
              key={pass.id}
              id={pass.id}
              name={pass.name}
              description={pass.description}
              image={pass.image}
              issuedTo={pass.issuedTo}
              date={pass.date}
              location={pass.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
