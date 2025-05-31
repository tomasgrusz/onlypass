import React from "react";
import moment from "moment";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";

interface PassCardProps {
  name: string;
  description: string;
  id: string;
  issuedTo: string;
  image: string;
  date: string;
  location: string;
}

const PassCard: React.FC<PassCardProps> = ({
  name,
  image,
  date,
  location,
  issuedTo,
}) => {
  return (
    <div
      style={styles.card}
      className={cn("bg-gray-800 text-gray-300 border-none")}
    >
      <img src={image} alt={`${name} image`} style={styles.image} />
      <div
        style={styles.content}
        className="flex flex-col justify-between gap-2 h-[100px]"
      >
        <h2 style={styles.title} className="text-sm truncate">
          {name}
        </h2>
        {issuedTo && (
          <p className="text-sm flex align-center text-center gap-1">
            grusz.eth{" "}
            <Avatar
              className="inline-block"
              style={{ width: "20px", height: "20px" }}
            >
              <AvatarImage src="./user-icon.png" />
              <AvatarFallback>TG</AvatarFallback>
            </Avatar>
          </p>
        )}
        <p className="text-xs">
          {location}, {moment(date).format("MMM Do YY")}
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    borderRadius: "8px",
    overflow: "hidden",
    width: "150px",
    height: "200px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    flexShrink: 0,
  },
  image: {
    width: "100%",
    height: "100px",
    objectFit: "cover",
  },
  content: {
    padding: "10px",
  },
};

export default PassCard;
