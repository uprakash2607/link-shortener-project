import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, Zap, Shield, BarChart3, Globe, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 sm:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Shorten Your Links,
              <span className="block text-primary">Amplify Your Reach</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Create short, memorable links in seconds. Track performance, analyze clicks, and optimize your digital presence with our powerful link management platform.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <SignUpButton mode="modal">
              <Button size="lg" className="text-base">
                Get Started Free
              </Button>
            </SignUpButton>
            <Button size="lg" variant="outline" asChild className="text-base">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Powerful Features for Modern Link Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create, manage, and track your shortened links
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Create shortened links instantly with our optimized infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                No waiting around. Generate short links in milliseconds and share them immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Secure & Reliable</CardTitle>
              <CardDescription>
                Enterprise-grade security for your links and data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Your links are protected with advanced security measures and SSL encryption.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription>
                Track clicks, locations, and engagement metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Gain insights into your link performance with detailed analytics and reporting.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Link2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Custom Short Links</CardTitle>
              <CardDescription>
                Create branded, memorable short URLs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Customize your short links to match your brand and make them easier to remember.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Global CDN</CardTitle>
              <CardDescription>
                Fast redirects from anywhere in the world
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our global network ensures your links load quickly for users worldwide.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Link Management</CardTitle>
              <CardDescription>
                Organize and manage all your links in one place
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Easy-to-use dashboard to view, edit, and organize all your shortened links.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="bg-primary/5 rounded-2xl p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of users who trust our platform for their link shortening needs.
            </p>
            <SignUpButton mode="modal">
              <Button size="lg" className="text-base">
                Create Your Account
              </Button>
            </SignUpButton>
          </div>
        </div>
      </section>
    </div>
  );
}
