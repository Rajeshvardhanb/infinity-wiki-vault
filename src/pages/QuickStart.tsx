import { DocumentationPage } from "./DocumentationPage";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Terminal, Download, Settings, Rocket } from "lucide-react";

const quickStartContent = (
  <div className="space-y-8">
    {/* Introduction */}
    <div className="bg-gradient-secondary p-6 rounded-lg border">
      <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
        <Rocket className="h-6 w-6 text-primary" />
        Welcome to INFINITY CLOUD LABS
      </h2>
      <p className="text-muted-foreground text-lg mb-4">
        Get up and running with our cloud platform in under 10 minutes. This guide will walk you through 
        the essential steps to start building amazing applications.
      </p>
      <Badge className="bg-primary text-primary-foreground">
        Estimated time: 5-10 minutes
      </Badge>
    </div>

    {/* Prerequisites */}
    <section>
      <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Account Setup
            </h3>
            <p className="text-sm text-muted-foreground">
              Ensure you have an active INFINITY CLOUD LABS account with appropriate permissions.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Terminal className="h-5 w-5 text-blue-500" />
              Development Environment
            </h3>
            <p className="text-sm text-muted-foreground">
              Node.js 18+, Git, and your preferred code editor installed.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Step-by-step Guide */}
    <section>
      <h2 className="text-2xl font-semibold mb-6">Step-by-Step Guide</h2>
      
      <div className="space-y-6">
        {/* Step 1 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
            1
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Install the CLI</h3>
            <p className="text-muted-foreground mb-3">
              Download and install the INFINITY CLOUD LABS command-line interface.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              <code>npm install -g @infinity-cloud/cli</code>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Download className="h-4 w-4" />
              Alternative: Download the installer from our releases page
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
            2
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Authenticate</h3>
            <p className="text-muted-foreground mb-3">
              Log in to your INFINITY CLOUD LABS account using the CLI.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              <code>infinity-cloud auth login</code>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              This will open your browser to complete the authentication process.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
            3
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Create Your First Project</h3>
            <p className="text-muted-foreground mb-3">
              Initialize a new project with our starter template.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
              <div><code>infinity-cloud create my-first-app</code></div>
              <div><code>cd my-first-app</code></div>
              <div><code>infinity-cloud dev</code></div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
            4
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Configure Your Environment</h3>
            <p className="text-muted-foreground mb-3">
              Set up your development environment variables and configuration.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              <code>infinity-cloud config set --region us-east-1</code>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-primary">
              <Settings className="h-4 w-4" />
              See full configuration options in our Configuration Guide
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Next Steps */}
    <section>
      <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="hover:shadow-medium transition-shadow cursor-pointer group">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 flex items-center justify-between">
              Explore APIs
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-sm text-muted-foreground">
              Learn about our REST and GraphQL APIs for building integrations.
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-medium transition-shadow cursor-pointer group">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 flex items-center justify-between">
              Deploy Your App
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-sm text-muted-foreground">
              Deploy your application to our global cloud infrastructure.
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-medium transition-shadow cursor-pointer group">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 flex items-center justify-between">
              Security Setup
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-sm text-muted-foreground">
              Configure authentication and authorization for your applications.
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-medium transition-shadow cursor-pointer group">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 flex items-center justify-between">
              Join Community
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-sm text-muted-foreground">
              Connect with other developers and get help from our community.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Help Section */}
    <div className="bg-muted/50 p-6 rounded-lg border">
      <h3 className="font-semibold mb-2">Need Help?</h3>
      <p className="text-muted-foreground mb-4">
        If you run into any issues during setup, we're here to help:
      </p>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          Check our <strong>Troubleshooting Guide</strong> for common issues
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          Join our <strong>Community Discord</strong> for real-time support
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          Contact our <strong>Support Team</strong> for enterprise customers
        </li>
      </ul>
    </div>
  </div>
);

export default function QuickStart() {
  return (
    <DocumentationPage
      title="Quick Start Guide"
      content={quickStartContent}
      section="Getting Started"
      breadcrumbs={[{ title: "Quick Start Guide" }]}
      author="INFINITY CLOUD LABS Team"
      lastModified="1 hour ago"
    />
  );
}