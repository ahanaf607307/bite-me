import DashboardLayoutSetup from "@/view/DashboardComponents/DashboardLayoutSetup/DashboardLayoutSetup";
import { ThemeProvider } from "@/view/DashboardComponents/ThemeProvider/theme-provider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body>
          {/* Main content */}
          <DashboardLayoutSetup>{children}</DashboardLayoutSetup>
        </body>
      </ThemeProvider>
    </html>
  );
}
