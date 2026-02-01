export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full items-center justify-center p-4 bg-secondary">
      {children}
    </div>
  );
}
