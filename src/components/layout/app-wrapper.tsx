'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/signup');
  const isDashboardPage = pathname.startsWith('/dashboard');

  const showHeaderAndFooter = !isAuthPage && !isDashboardPage;

  return (
    <div className="flex min-h-screen flex-col">
      {showHeaderAndFooter && <Header />}
      <main className="flex-grow">{children}</main>
      {showHeaderAndFooter && <Footer />}
    </div>
  );
}
