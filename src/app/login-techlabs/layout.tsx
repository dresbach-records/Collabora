export default function TechLabsAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout allows the page to control its own background and layout completely.
  return <>{children}</>;
}
