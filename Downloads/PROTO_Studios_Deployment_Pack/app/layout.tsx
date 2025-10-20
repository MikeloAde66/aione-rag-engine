export const metadata = {
  title: "PROTO Studios — NEXUS",
  description: "Build Automations. Ship Super Agents."
};

import "./../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-200">{children}</body>
    </html>
  );
}
