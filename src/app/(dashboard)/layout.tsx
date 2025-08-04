import DashboardLayoutSetup from "@/view/DashboardComponents/DashboardLayoutSetup/DashboardLayoutSetup";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Main content */}
        <DashboardLayoutSetup children={children} />
      </body>
    </html>
  );
}
