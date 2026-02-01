import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to your Dashboard!</CardTitle>
          <CardDescription>
            This is your central hub for managing projects, applications, and your profile.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>More features and widgets coming soon!</p>
        </CardContent>
      </Card>
    </div>
  );
}
