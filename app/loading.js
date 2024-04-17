import React from "react";

export default function Loading() {
  return (
    <div className="h-100vh w-100% flex flex-center my-[50vh] justify-center align-middle">
      <div className="flex flex-row gap-2 ">
        <div className="w-4 h-4 rounded-full bg-foreground animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-foreground animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-foreground animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
}
