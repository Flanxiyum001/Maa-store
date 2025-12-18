import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, ShieldCheck, AlertCircle } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const { user, loginMutation, isLoading: authLoading } = useAuth();
  const { toast } = useToast();
  const [isSetup, setIsSetup] = useState(false);
  const [allowedEmails, setAllowedEmails] = useState<string[]>([]);
  const [requiresWhitelist, setRequiresWhitelist] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  // Fetch allowed admin emails
  useEffect(() => {
    const fetchAllowedEmails = async () => {
      try {
        const response = await fetch("/api/admin/allowed-emails");
        const data = await response.json();
        setAllowedEmails(data.allowedEmails);
        setRequiresWhitelist(data.requiresWhitelist);
      } catch (error) {
        console.error("Failed to fetch allowed emails", error);
      }
    };
    fetchAllowedEmails();
  }, []);

  useEffect(() => {
    if (user?.isAdmin) {
      setLocation("/admin");
    }
  }, [user, setLocation]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({
      username: formData.username,
      password: formData.password,
    });
  };

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiRequest("POST", "/api/admin/create-admin", formData);
      toast({
        title: "Admin created!",
        description: "You can now login with your credentials",
      });
      setIsSetup(false);
    } catch (error: any) {
      toast({
        title: "Setup failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary/10">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/10 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="font-serif text-2xl">
            {isSetup ? "Setup Admin Account" : "Admin Login"}
          </CardTitle>
          <CardDescription>
            {isSetup 
              ? "Create your first admin account to manage the store"
              : "Enter your credentials to access the admin panel"
            }
          </CardDescription>
        </CardHeader>
        {isSetup && requiresWhitelist && allowedEmails.length > 0 && (
          <div className="px-6 pt-0">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800 text-sm">
                <strong>Allowed admin emails:</strong>
                <div className="mt-2 space-y-1">
                  {allowedEmails.map((email) => (
                    <div key={email} className="text-xs font-mono bg-white px-2 py-1 rounded">
                      {email}
                    </div>
                  ))}
                </div>
              </AlertDescription>
            </Alert>
          </div>
        )}
        <CardContent>
          <form onSubmit={isSetup ? handleSetup : handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
            </div>
            {isSetup && (
              <div className="space-y-2">
                <Label htmlFor="email">Email (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSetup ? "Create Admin Account" : "Login"}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Button
              variant="link"
              onClick={() => setIsSetup(!isSetup)}
              className="text-sm text-muted-foreground"
            >
              {isSetup ? "Already have an account? Login" : "First time? Setup admin account"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
