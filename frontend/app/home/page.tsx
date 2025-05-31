"use client";

import PassCard from "@/components/PassCard/PassCard";
import passesJson from "@/data/passes.json";
import exploreJson from "@/data/explore.json";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Music");

  const categories = ["Music", "Sports", "Theater", "Comedy", "Arts"];
  useEffect(() => {
    // To be replaced with actual verification logic
    const isVerified = window.localStorage.getItem("isVerified") === "true";
    if (!isVerified) {
      //   router.replace("/");
    }
  }, []);

  return (
    <div className={cn(styles.Home, "bg-[#E17B7B] pt-4 pb-8")}>
      <h2 className="text-white text-xl font-bold">Active Passes</h2>
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
      <h2 className="text-white text-xl font-bold mb-4">
        Explore upcoming events
      </h2>
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          placeholder="Search..."
          className="bg-gray-700 border-none text-white placeholder-gray-400 pl-12 py-3 rounded-2xl"
        />
      </div>
      {/* Category Pills */}
      <ScrollArea className="w-full">
        <div className="flex gap-3 pb-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              className={`px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === category
                  ? "bg-white text-gray-800"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </ScrollArea>
      <div className={styles.passList}>
        <div className={styles.passesWrapper}>
          {exploreJson.map((pass) => (
            <PassCard
              key={pass.id}
              id={pass.id}
              name={pass.name}
              description={pass.description}
              image={pass.image}
              date={pass.date}
              location={pass.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
