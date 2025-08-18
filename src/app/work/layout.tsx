import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Platform engineering case studies and real-world implementations.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="relative container-width mx-auto pt-36 md:pt-32">
          <div className="animate-pulse">
            <div className="h-12 bg-white/10 rounded-lg mb-4"></div>
            <div className="h-6 bg-white/5 rounded w-3/4 mb-8"></div>
            <div className="space-y-4">
              <div className="h-32 bg-white/5 rounded-lg"></div>
              <div className="h-32 bg-white/5 rounded-lg"></div>
              <div className="h-32 bg-white/5 rounded-lg"></div>
            </div>
          </div>
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
