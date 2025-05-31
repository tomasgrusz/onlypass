import { cn } from "@/lib/utils";
import passesJson from "@/data/passes.json";
import PassCard from "@/components/PassCard/PassCard";
import styles from "./page.module.scss";

const Passes = () => {
  return (
    <div
      className={cn("bg-[#E17B7B] pt-4 pb-8 h-[90vh] flex flex-col pr-8 pl-8")}
    >
      <h2 className="text-white text-xl font-bold pt-4">My Passes</h2>
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
  );
};

export default Passes;
