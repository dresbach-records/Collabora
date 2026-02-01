'use client';

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import ProfessionalHeader from "@/components/professional/ProfessionalHeader";
import ProfessionalSidebar from "@/components/professional/ProfessionalSidebar";
import ProfessionalFooter from "@/components/professional/ProfessionalFooter";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col bg-background">
        <ProfessionalHeader />
        <div className="relative flex flex-1 overflow-hidden">
          <ProfessionalSidebar />
          <SidebarInset className="bg-secondary p-0 flex flex-col">
            <div className="flex-1 overflow-auto p-4 sm:p-6">
              {children}
            </div>
          </SidebarInset>
        </div>
        <ProfessionalFooter />
      </div>
    </SidebarProvider>
  );
}
