'use client';

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import CompanyHeader from "@/components/company/CompanyHeader";
import CompanySidebar from "@/components/company/CompanySidebar";
import CompanyFooter from "@/components/company/CompanyFooter";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col bg-background">
        <CompanyHeader />
        <div className="relative flex flex-1 overflow-hidden">
          <CompanySidebar />
          <SidebarInset className="bg-secondary p-0 flex flex-col">
            <div className="flex-1 overflow-auto p-4 sm:p-6">
              {children}
            </div>
          </SidebarInset>
        </div>
        <CompanyFooter />
      </div>
    </SidebarProvider>
  );
}
