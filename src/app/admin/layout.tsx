'use client';

import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminFooter from "@/components/admin/AdminFooter";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col bg-background">
        <AdminHeader />
        <div className="relative flex flex-1 overflow-hidden">
          <AdminSidebar />
          <SidebarInset className="bg-[#F3F4F6] p-0 flex flex-col">
            <div className="flex-1 overflow-auto p-6">
              {children}
            </div>
            <AdminFooter />
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
