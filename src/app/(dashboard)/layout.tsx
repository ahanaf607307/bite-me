import DashboardLayoutSetup from "@/view/DashboardComponents/DashboardLayoutSetup/DashboardLayoutSetup";
import { ThemeProvider } from "@/view/DashboardComponents/ThemeProvider/theme-provider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Main content */}
          <DashboardLayoutSetup>{children}</DashboardLayoutSetup>
        </ThemeProvider>
      </body>
    </html>
  );
}
