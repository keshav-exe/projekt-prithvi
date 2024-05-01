import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-center justify-center align-middle gap-3">
      <div className="w-4 h-4 rounded-full bg-foreground animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-foreground animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-foreground animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
}
