import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata = {
  icons: {
    icon: "https://mach-consultants.com/wp-content/uploads/2022/03/MACH-LOGO-FINAL-01.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning cz-shortcut-listen="false">
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
