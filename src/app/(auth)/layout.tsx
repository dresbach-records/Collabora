import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loginBgImage = PlaceHolderImages.find(p => p.id === 'login-background');
  
  return (
    <div className="relative flex min-h-screen items-center justify-center p-4">
      {loginBgImage && (
        <Image
          src={loginBgImage.imageUrl}
          alt={loginBgImage.description}
          fill
          className="object-cover -z-10"
          priority
          data-ai-hint={loginBgImage.imageHint}
        />
      )}
      {children}
    </div>
  );
}
