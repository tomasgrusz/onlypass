"use client";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">
        Welcome to the Worldcoin MiniKit Example
      </h1>
      <p className="mt-4">Click the button below to verify your identity.</p>
      <button
        onClick={() =>
          alert("This is a placeholder for the verification flow.")
        }
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Verify Identity
      </button>
    </div>
  );
}
