import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dog } from "lucide-react";

type Role = "owner" | "breeder";

export default function SignUp() {
  const [role, setRole] = useState<Role>("owner");

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="text-center">
          <Dog className="mx-auto h-10 w-10 text-primary" />
          <h1 className="mt-2 font-heading text-2xl font-bold">Join Pet Relate Hub</h1>
          <p className="text-sm text-muted-foreground">Create your account to get started</p>

          {/* Role toggle */}
          <div className="mx-auto mt-4 inline-flex rounded-lg bg-muted p-1">
            <button
              onClick={() => setRole("owner")}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
                role === "owner" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground"
              }`}
            >
              Pet Owner
            </button>
            <button
              onClick={() => setRole("breeder")}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
                role === "breeder" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground"
              }`}
            >
              Breeder
            </button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first">First Name</Label>
              <Input id="first" placeholder="Jane" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last">Last Name</Label>
              <Input id="last" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          {role === "breeder" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="kennel">Kennel / Cattery Name</Label>
                <Input id="kennel" placeholder="e.g. Sunny Paws Kennel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, State" />
              </div>
            </>
          )}

          <Button className="w-full" size="lg">
            Create {role === "owner" ? "Owner" : "Breeder"} Account
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
