"use client";

import { PrivyProvider } from "@privy-io/react-auth";

export default function PrivyScaffoldProvider({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId="your-app-id" //update this to {process.env.NEXT_PUBLIC_PRIVY_API_KEY}
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://your-logo-url",
        },
        loginMethods: ["email", "wallet", "google", "apple", "farcaster"],
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
