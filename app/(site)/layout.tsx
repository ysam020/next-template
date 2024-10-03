"use client";

import { Inter } from "next/font/google";
import "../globals.css";

export default function RootLayout({}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ height: "100vh", backgroundColor: "#0060AE !important" }}>
        <div
          style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/images/logo/logo-paymaster.png" alt="" />
        </div>
      </body>
    </html>
  );
}
