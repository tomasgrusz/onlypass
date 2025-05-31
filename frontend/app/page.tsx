"use client";
import { Button } from "@/components/ui/button";
import {
  ISuccessResult,
  MiniKit,
  VerificationLevel,
  VerifyCommandInput,
} from "@worldcoin/minikit-js";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

const verifyPayload: VerifyCommandInput = {
  action: "sign-in", // This is your action ID from the Developer Portal
  signal: "0x12312", // Optional additional data
  verification_level: VerificationLevel.Orb, // Orb | Device
};

const handleVerify = async (router: AppRouterInstance) => {
  if (!MiniKit.isInstalled()) {
    return;
  }
  // World App will open a drawer prompting the user to confirm the operation, promise is resolved once user confirms or cancels
  const { finalPayload } = await MiniKit.commandsAsync.verify(verifyPayload);
  if (finalPayload.status === "error") {
    return console.log("Error payload", finalPayload);
  }

  // Verify the proof in the backend
  const verifyResponse = await fetch("/api/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payload: finalPayload as ISuccessResult, // Parses only the fields we need to verify
      action: "sign-in",
      signal: "0x12312", // Optional
    }),
  });

  // TODO: Handle Success!
  const verifyResponseJson = await verifyResponse.json();
  if (verifyResponseJson.status === 200) {
    window.localStorage.setItem("isVerified", "true");
    router.push("/home");
  } else {
    window.localStorage.setItem("isVerified", "false");
    alert("Verification failed. Please try again.");
  }
};

export default function Home() {
  const router = useRouter();

  return (
    <div
      onClick={() => handleVerify(router)}
      className="flex flex-col items-center justify-center h-screen w-screen"
    >
      <div className="flex flex-col flex-wrap items-center gap-2 md:flex-row ml-auto mr-auto">
        <Button>Verify your humanity</Button>
        <p className="text-xs w-[200px] text-center">
          To access this application, we need to verify you&apos;re a real
          person.
        </p>
      </div>
    </div>
  );
}
