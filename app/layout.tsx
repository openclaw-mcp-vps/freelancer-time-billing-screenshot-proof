import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProofTrack – Screenshot-Verified Time Tracking for Freelancers",
  description: "Automatic screenshot capture during work sessions provides visual proof of billable time. Build client trust and get paid faster."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="71462175-d913-4012-ae08-d109e40adaa7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
