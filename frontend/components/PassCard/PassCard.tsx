import React from "react";
import moment from "moment";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface PassCardProps {
  name: string;
  description: string;
  id: string;
  issuedTo: string;
  image: string;
  date: string;
  location: string;
}

const PassCard: React.FC<PassCardProps> = ({ name, image, date, location }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={`${name} image`} style={styles.image} />
      <div style={styles.content} className="flex flex-col gap-2">
        <h2 style={styles.title} className="text-sm truncate">
          {name}
        </h2>
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
        <p className="text-xs">
          {location}, {moment(date).format("MMM Do YY")}
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: "1px solid #ccc",
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
