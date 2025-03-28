"use client";

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

import { Suspense } from "react";

enum Error {
  Configuration = "Configuration",
}

const errorMap = {
  [Error.Configuration]: (
    <p>
      There was a problem when trying to authenticate. Please contact us if this
      error persists. Unique error code:{" "}
      <code className="text-xs bg-slate-100 p-1 rounded-sm">Configuration</code>
    </p>
  ),
};

function _WrapSearchParams() {
  const search = useSearchParams();
  const error = search.get("error") as Error;

  return <>{errorMap[error] || "Please contact us if this error persists."}</>;
}

export default function AuthErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center"
      >
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-row justify-center items-center gap-2">
          Something went wrong
        </h5>
        <div className="font-normal text-gray-700 dark:text-gray-400">
          <Suspense>
            <_WrapSearchParams />
          </Suspense>
        </div>
      </a>
      <div className="mx-auto text-center p-3">
        <Link href="/auth/signin" className="btn btn-primary">
          Try Again
        </Link>
      </div>
    </div>
  );
}
