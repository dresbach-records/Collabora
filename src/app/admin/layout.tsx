'use client';

import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminFooter from "@/components/admin/AdminFooter";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background p-4">
        <Alert variant="destructive" className="max-w-md">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Acesso Restrito</AlertTitle>
          <AlertDescription>
            O painel administrativo está disponível apenas em desktop.
          </AlertDescription>
        </Alert>
      </div>
    );
  }
  
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
