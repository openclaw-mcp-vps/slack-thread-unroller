import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread Unroller – Turn Slack threads into shareable docs",
  description: "Convert long Slack threads into formatted documents with context, decisions, and action items highlighted. Built for engineering managers, product managers, and team leads."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="60b84f80-d50e-4fdd-90bb-d62df58fe9c6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
