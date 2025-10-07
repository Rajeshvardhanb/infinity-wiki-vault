import { DocumentationPage } from "./DocumentationPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, GitBranch, Play, AlertCircle, Zap } from "lucide-react";
import { useSidebar } from "@/contexts/SidebarContext";

const cicdContent = (
  <div className="space-y-8">
    {/* Introduction */}
    <div className="bg-gradient-secondary p-6 rounded-lg border">
      <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
        <GitBranch className="h-6 w-6 text-primary" />
        CI/CD Pipeline Implementation
      </h2>
      <p className="text-muted-foreground text-lg mb-4">
        Build robust CI/CD pipelines for INFINITY CLOUD LABS using GitHub Actions, 
        AWS CodePipeline, and Jenkins. Automate testing, building, and deployment processes.
      </p>
      <Badge className="bg-primary text-primary-foreground">
        Level: Intermediate
      </Badge>
    </div>

    {/* Pipeline Architecture */}
    <section>
      <h2 className="text-2xl font-semibold mb-4">Pipeline Architecture</h2>
      <div className="bg-muted p-6 rounded-lg">
        <div className="flex items-center justify-between text-sm font-mono">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
              1
            </div>
            <span>Source</span>
          </div>
          <div className="flex-1 h-px bg-border mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
              2
            </div>
            <span>Build</span>
          </div>
          <div className="flex-1 h-px bg-border mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
              3
            </div>
            <span>Test</span>
          </div>
          <div className="flex-1 h-px bg-border mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
              4
            </div>
            <span>Deploy</span>
          </div>
        </div>
      </div>
    </section>

    {/* GitHub Actions Setup */}
    <section>
      <h2 className="text-2xl font-semibold mb-6">GitHub Actions CI/CD</h2>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-primary" />
              Basic Workflow Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Create <code>.github/workflows/ci-cd.yml</code> in your repository:
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Run linting
      run: npm run lint

  build-and-deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Build application
      run: npm run build
    
    - name: Deploy to S3
      run: aws s3 sync ./dist s3://infinity-labs-app --delete`}</pre>
            </div>
          </CardContent>
        </Card>

        {/* Security Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              Security Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Secrets Management</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Store sensitive data in GitHub Secrets or AWS Secrets Manager</li>
                  <li>• Use OIDC for AWS authentication (no long-lived keys)</li>
                  <li>• Implement least privilege access for service accounts</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Code Scanning</h4>
                <div className="bg-muted p-3 rounded font-mono text-sm">
                  <div>- name: Security scan</div>
                  <div>  uses: github/codeql-action/analyze@v2</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* AWS CodePipeline */}
    <section>
      <h2 className="text-2xl font-semibold mb-4">AWS CodePipeline Setup</h2>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Pipeline Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              <pre>{`# Create CodePipeline with CloudFormation
aws cloudformation create-stack \\
  --stack-name infinity-labs-pipeline \\
  --template-body file://pipeline-template.yaml \\
  --parameters ParameterKey=GitHubToken,ParameterValue=\$GITHUB_TOKEN \\
  --capabilities CAPABILITY_IAM`}</pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Jenkins Integration */}
    <section>
      <h2 className="text-2xl font-semibold mb-4">Jenkins Pipeline</h2>
      <Card>
        <CardHeader>
          <CardTitle>Jenkinsfile Example</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>{`pipeline {
    agent any
    
    environment {
        AWS_REGION = 'us-east-1'
        ECR_REGISTRY = '123456789.dkr.ecr.us-east-1.amazonaws.com'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
        
        stage('Build') {
            steps {
                sh 'docker build -t infinity-labs-app .'
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                script {
                    sh '''
                        aws ecr get-login-password --region \$AWS_REGION | \\
                        docker login --username AWS --password-stdin \$ECR_REGISTRY
                        
                        docker tag infinity-labs-app:latest \\
                        \$ECR_REGISTRY/infinity-labs-app:latest
                        
                        docker push \$ECR_REGISTRY/infinity-labs-app:latest
                    '''
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}`}</pre>
          </div>
        </CardContent>
      </Card>
    </section>

    {/* Monitoring and Notifications */}
    <section>
      <h2 className="text-2xl font-semibold mb-4">Pipeline Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Slack Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-3 rounded font-mono text-sm">
              <div>- name: Slack Notification</div>
              <div>  uses: 8398a7/action-slack@v3</div>
              <div>  with:</div>
              <div>    status: job.status</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">CloudWatch Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Pipeline execution duration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Success/failure rates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Deployment frequency
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

export default function CICDPipelines() {
  const { updateSection } = useSidebar();
  
  const handleEdit = (pageId: string, newTitle: string, newContent: string) => {
    updateSection(pageId, { title: newTitle, content: newContent });
  };

  return (
    <DocumentationPage
      title="CI/CD Pipelines"
      content={cicdContent}
      section="DevOps & CI/CD"
      breadcrumbs={[{ title: "CI/CD Pipelines" }]}
      author="DevOps Team"
      lastModified="4 hours ago"
      pageId="ci-cd-pipelines"
      onEdit={handleEdit}
    />
  );
}