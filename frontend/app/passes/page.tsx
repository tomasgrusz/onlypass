import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const Passes = () => {
  return (
    <div
      className={cn("bg-[#E17B7B] pt-4 pb-8 h-[90vh] flex flex-col pr-8 pl-8")}
    >
      <h2 className="text-white text-xl font-bold pt-4">My Passes</h2>
    </div>
  );
};

export default Passes;
