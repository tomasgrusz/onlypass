"use client";
import { Home, Search, Ticket, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 px-6 py-4">
      <div className="flex justify-around items-center">
        <button
          className={`flex flex-col items-center gap-1 ${
            pathname === "/home" ? "text-[#E17B7B]" : "text-gray-400"
          }`}
          onClick={() => router.push("/home")}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </button>

        <button
          className={`flex flex-col items-center gap-1 ${
            pathname === "/passes" ? "text-[#E17B7B]" : "text-gray-400"
          }`}
          onClick={() => router.push("/passes")}
        >
          <Ticket className="w-6 h-6" />
          <span className="text-xs">Passes</span>
        </button>

        <button
          className={`flex flex-col items-center gap-1 ${
            pathname === "/explore" ? "text-[#E17B7B]" : "text-gray-400"
          }`}
          onClick={() => router.push("/explore")}
          disabled
        >
          <Search className="w-6 h-6" />
          <span className="text-xs">Explore</span>
        </button>

        <button
          className={`flex flex-col items-center gap-1 ${
            pathname === "/profile" ? "text-[#E17B7B]" : "text-gray-400"
          }`}
          onClick={() => router.push("profile")}
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
