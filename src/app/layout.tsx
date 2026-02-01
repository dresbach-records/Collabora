import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { AppWrapper } from '@/components/layout/app-wrapper';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Collabora - Conecte-se com profissionais digitais',
  description: 'Contrate os melhores talentos em tecnologia, design, vídeo, redação e muito mais.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={cn('font-body antialiased', inter.variable)}>
        <AppWrapper>{children}</AppWrapper>
        <Toaster />
      </body>
    </html>
  );
}
