'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { User, Lock, Loader2 } from 'lucide-react';

// Custom Rocket Icon based on the image
const RocketIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.6758 35.1585L22.9351 32.8992C26.8447 28.9896 32.5516 27.537 37.4093 29.1764L41.3406 20.3134C42.7932 17.4081 40.8379 14.1539 37.7554 13.5682L29.7447 12.2275C24.71 11.4079 19.4977 13.174 15.6465 17.0252L6.15178 26.52C4.5422 28.1296 4.60077 30.708 6.26892 32.3761L11.5976 37.7048C13.2657 39.373 15.8441 39.4315 17.4537 37.822L20.6758 35.1585Z"
      fill="#F97316"
    />
    <path
      d="M13.8828 40.0939L5.27832 48.6984C4.49727 49.4794 5.74441 50.7266 6.52546 49.9455L15.13 41.341C16.143 40.328 14.8959 39.0809 13.8828 40.0939Z"
      fill="#F97316"
    />
    <path
      d="M37.7554 13.5682C37.5644 13.5298 37.3703 13.5015 37.1741 13.4849C36.9631 10.749 34.7087 8.52382 31.9567 8.20117L30.9858 3.51593C30.7303 2.22917 29.2312 1.67057 28.2046 2.48206L23.9554 5.92245C23.076 6.6433 23.2335 7.9944 24.237 8.52802L28.1631 10.7185C28.2917 10.787 28.435 10.8291 28.5804 10.8427L29.7447 12.2275L37.7554 13.5682Z"
      fill="#F97316"
    />
  </svg>
);

// Custom Google Icon
const GoogleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22px" height="22px" {...props}>
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.223,0-9.651-3.356-11.303-8H6.306C9.656,39.663,16.318,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C43.021,36.25,44,30.45,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
);

// Custom LinkedIn Icon to match the image
const LinkedInIcon = (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" fill="white" stroke="#E0E0E0" strokeWidth="1.5" />
        <text x="5" y="16" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#0A66C2">in</text>
    </svg>
);


export default function TechLabsLoginPage() {
  const loginIllustration = PlaceHolderImages.find(p => p.id === 'techlabs-login-bg');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call for demonstration
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard-techlabs');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f89d4b] p-4 sm:p-6 md:p-8 flex items-center justify-center font-body">
      <div className="w-full max-w-6xl mx-auto bg-[#FFF7ED] rounded-xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:flex items-center justify-center p-8">
          {loginIllustration && (
            <Image
              src={loginIllustration.imageUrl}
              alt="Tech Labs Illustration"
              width={800}
              height={800}
              objectFit="contain"
              data-ai-hint={loginIllustration.imageHint}
            />
          )}
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-8 sm:p-12 flex flex-col justify-between rounded-l-xl">
          <div className="w-full max-w-sm mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <RocketIcon className="h-8 w-8" />
              <span className="text-3xl font-bold text-gray-800 font-headline">Tech Labs</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 font-headline">Bem-vindo(a) de volta.</h1>
            <p className="text-gray-500 mt-2 mb-8">Faça login na sua conta da Tech Labs.</p>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input id="email" type="email" placeholder="seu@email.com" className="pl-10 bg-gray-50 border-gray-200" required />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-10 bg-gray-50 border-gray-200" required />
              </div>
              <div className="text-right">
                <Link href="#" className="text-sm text-[#F97316] hover:underline">
                  Esqueceu sua senha?
                </Link>
              </div>
              <Button type="submit" className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-semibold mt-6" size="lg" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'Entrando...' : 'Entrar'}
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-12">
              © 2024 Tech Labs — Todos os direitos reservados
            </p>
          </div>
          
          <footer className="text-center">
            <div className="flex justify-center items-center space-x-4 text-xs text-gray-500">
                <Link href="#" className="hover:text-[#F97316]">Termos de Uso</Link>
                <span className="border-l h-3 border-gray-400"></span>
                <Link href="#" className="hover:text-[#F97316]">Política de Privacidade</Link>
                <span className="border-l h-3 border-gray-400"></span>
                <Link href="#" className="hover:text-[#F97316]">Suporte</Link>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
