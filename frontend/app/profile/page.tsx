import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const Profile = () => {
  return (
    <div
      className={cn(
        "bg-[#E17B7B] pt-4 pb-8 h-[90vh] flex flex-col items-center justify-center"
      )}
    >
      <Avatar className="size-48">
        <AvatarImage src="./user-icon.png" />
        <AvatarFallback>TG</AvatarFallback>
      </Avatar>
      <h2 className="text-white text-3xl font-bold pt-4">grusz.eth</h2>
    </div>
  );
};

export default Profile;
