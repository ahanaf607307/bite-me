import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DashboardHeader from "./DashboardHeader";

export default function DashboardLayoutSetup({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-gray-800">
          <div className="flex items-center justify-between gap-2 px-4 w-full">
            <div>
              <SidebarTrigger className="" />
            </div>
            <div></div>
            <div>
              <DashboardHeader />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <main>{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
