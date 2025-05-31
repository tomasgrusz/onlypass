import {
  ISuccessResult,
  MiniKit,
  VerificationLevel,
  VerifyCommandInput,
} from "@worldcoin/minikit-js";

const verifyPayload: VerifyCommandInput = {
  action: "sign-in", // This is your action ID from the Developer Portal
  signal: "0x12312", // Optional additional data
  verification_level: VerificationLevel.Orb, // Orb | Device
};

const handleVerify = async () => {
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
    console.log("Verification success!");
  }
};

export default function Home() {
  console.log(MiniKit.isInstalled());
  return (
    <div
      onClick={handleVerify}
      className="flex flex-col items-center justify-center h-screen"
    >
      <button>Verify</button>
    </div>
  );
}
