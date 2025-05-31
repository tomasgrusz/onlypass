"use client";

import PassCard from "@/components/PassCard/PassCard";
import passesJson from "@/data/passes.json";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <h2>Discover</h2>
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
