import { DocumentationPage } from "./DocumentationPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Cloud, Settings, Rocket, Terminal, Code } from "lucide-react";
import { useSidebar } from "@/contexts/SidebarContext";

const awsSetupContent = (
  <div className="space-y-8">
    {/* Introduction */}
    <div className="bg-gradient-secondary p-6 rounded-lg border">
      <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
        <Cloud className="h-6 w-6 text-primary" />
        AWS Cloud Infrastructure Setup
      </h2>
      <p className="text-muted-foreground text-lg mb-4">
        Complete guide to setting up your AWS cloud infrastructure for INFINITY CLOUD LABS projects.
        This guide covers essential services, security best practices, and cost optimization.
      </p>
      <Badge className="bg-primary text-primary-foreground">
        Estimated time: 30-45 minutes
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
              AWS Account
            </h3>
            <p className="text-sm text-muted-foreground">
              Active AWS account with billing information configured and appropriate permissions.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Terminal className="h-5 w-5 text-blue-500" />
              AWS CLI
            </h3>
            <p className="text-sm text-muted-foreground">
              AWS CLI v2 installed and configured with your credentials.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Core Services Setup */}
    <section>
      <h2 className="text-2xl font-semibold mb-6">Core AWS Services Configuration</h2>
      
      <div className="space-y-6">
        {/* VPC Setup */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
            1
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">VPC (Virtual Private Cloud) Setup</h3>
            <p className="text-muted-foreground mb-3">
              Create a secure, isolated network environment for your applications.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
              <div><code># Create VPC</code></div>
              <div><code>aws ec2 create-vpc --cidr-block 10.0.0.0/16 --tag-specifications 'ResourceType=vpc,Tags=[Key=Name,Value=infinity-labs-vpc]'</code></div>
              <div><code></code></div>
              <div><code># Create public and private subnets</code></div>
              <div><code>aws ec2 create-subnet --vpc-id vpc-12345678 --cidr-block 10.0.1.0/24 --availability-zone us-east-1a</code></div>
            </div>
          </div>
        </div>

        {/* IAM Setup */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
            2
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">IAM (Identity and Access Management)</h3>
            <p className="text-muted-foreground mb-3">
              Configure secure access controls and permissions for your team.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
              <div><code># Create IAM role for EC2 instances</code></div>
              <div><code>aws iam create-role --role-name InfinityLabsEC2Role --assume-role-policy-document file://trust-policy.json</code></div>
              <div><code></code></div>
              <div><code># Attach policies</code></div>
              <div><code>aws iam attach-role-policy --role-name InfinityLabsEC2Role --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess</code></div>
            </div>
          </div>
        </div>

        {/* EC2 Configuration */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
            3
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">EC2 Instance Configuration</h3>
            <p className="text-muted-foreground mb-3">
              Launch and configure EC2 instances for your applications.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
              <div><code># Launch EC2 instance</code></div>
              <div><code>aws ec2 run-instances \</code></div>
              <div><code>  --image-id ami-0abcdef1234567890 \</code></div>
              <div><code>  --instance-type t3.medium \</code></div>
              <div><code>  --key-name my-key-pair \</code></div>
              <div><code>  --security-group-ids sg-12345678 \</code></div>
              <div><code>  --subnet-id subnet-12345678</code></div>
            </div>
          </div>
        </div>

        {/* RDS Database */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
            4
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">RDS Database Setup</h3>
            <p className="text-muted-foreground mb-3">
              Configure a managed database service for your applications.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
              <div><code># Create RDS subnet group</code></div>
              <div><code>aws rds create-db-subnet-group \</code></div>
              <div><code>  --db-subnet-group-name infinity-labs-subnet-group \</code></div>
              <div><code>  --db-subnet-group-description "Subnet group for Infinity Labs" \</code></div>
              <div><code>  --subnet-ids subnet-12345678 subnet-87654321</code></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Security Best Practices */}
    <section>
      <h2 className="text-2xl font-semibold mb-4">Security Best Practices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Network Security</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Configure Security Groups with minimal required access
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Use NACLs for additional network-level security
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Enable VPC Flow Logs for monitoring
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Access Management</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Implement least privilege principle
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Enable MFA for all user accounts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Use AWS SSO for centralized access management
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Cost Optimization */}
    <section>
      <h2 className="text-2xl font-semibold mb-4">Cost Optimization Tips</h2>
      <div className="bg-muted/50 p-6 rounded-lg border">
        <h3 className="font-semibold mb-3">💰 Save Money on AWS</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Use <strong>Reserved Instances</strong> for predictable workloads (up to 75% savings)
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Implement <strong>Auto Scaling</strong> to match capacity with demand
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Set up <strong>CloudWatch Billing Alerts</strong> to monitor costs
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Use <strong>S3 Lifecycle Policies</strong> to automatically move data to cheaper storage classes
          </li>
        </ul>
      </div>
    </section>

    {/* Next Steps */}
    <section>
      <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="hover:shadow-medium transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Configure Monitoring
            </h3>
            <p className="text-sm text-muted-foreground">
              Set up CloudWatch dashboards and alerts for your infrastructure.
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-medium transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" />
              Deploy Applications
            </h3>
            <p className="text-sm text-muted-foreground">
              Learn how to deploy your applications using AWS services.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

export default function AWSSetup() {
  const { updateSection } = useSidebar();
  
  const handleEdit = (pageId: string, newTitle: string, newContent: string) => {
    updateSection(pageId, { title: newTitle, content: newContent });
  };

  return (
    <DocumentationPage
      title="AWS Setup Guide"
      content={awsSetupContent}
      section="Cloud Infrastructure"
      breadcrumbs={[{ title: "AWS Setup" }]}
      author="Cloud Infrastructure Team"
      lastModified="2 hours ago"
      pageId="aws-setup"
      onEdit={handleEdit}
    />
  );
}