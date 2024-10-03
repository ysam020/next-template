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
          <div>
            <img src="/images/logo/logo-paymaster.png" alt="" />

            <p
              style={{
                display: "block",
                width: "100%",
                color: "#fff",
                fontSize: "16px",
                textAlign: "center",
                marginTop: "10px",
                
              }}
            >
              Unlock Possibilities Ignite Solutions
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
