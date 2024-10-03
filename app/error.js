"use client";

import Link from "next/link";
import React from "react";

const Error = ({ error, reset }) => {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex gap-2 flex-col items-center justify-center">
      <h1 className="text-3xl font-medium text-primary">
        Oops, we ran into an error!
      </h1>
      <p className="text-lg text-primary">
        {error.message || "An unexpected error occurred."}
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="border px-4 py-2 rounded-md bg-green-800 text-white hover:bg-green-600"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="border px-4 py-2 rounded-md hover:bg-primary/10 text-primary"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
