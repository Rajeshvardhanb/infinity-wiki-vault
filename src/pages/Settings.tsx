import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Bell, 
  Shield, 
  Database, 
  Cloud,
  Save,
  RefreshCw
} from "lucide-react";

export default function Settings() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences for INFINITY CLOUD LABS documentation.</p>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Profile Settings
            </CardTitle>
            <CardDescription>
              Update your personal information and profile preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john.doe@infinitycloudlabs.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" placeholder="DevOps Engineer" />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notification Preferences
            </CardTitle>
            <CardDescription>
              Configure how you want to receive updates and notifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email updates when pages are modified
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Page Comments</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when someone comments on your pages
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Weekly Digest</Label>
                <p className="text-sm text-muted-foreground">
                  Receive a weekly summary of documentation updates
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Security & Access
            </CardTitle>
            <CardDescription>
              Manage your account security and access permissions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Two-Factor Authentication</Label>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Enabled
                </Badge>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>API Keys</Label>
              <div className="flex items-center gap-2">
                <Input value="cl_••••••••••••••••••••••••••••••••" readOnly />
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Regenerate
                </Button>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Change Password</Label>
              <Button variant="outline" size="sm">Update Password</Button>
            </div>
          </CardContent>
        </Card>

        {/* Team & Permissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Documentation Preferences
            </CardTitle>
            <CardDescription>
              Configure your documentation editing and viewing preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-save</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically save changes while editing
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Show Line Numbers</Label>
                <p className="text-sm text-muted-foreground">
                  Display line numbers in code blocks
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="defaultEditor">Default Editor Mode</Label>
              <select 
                id="defaultEditor"
                className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="wysiwyg">WYSIWYG Editor</option>
                <option value="markdown">Markdown Mode</option>
                <option value="code">Code Editor</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Cloud Integration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-primary" />
              Cloud Integration
            </CardTitle>
            <CardDescription>
              Connect and configure your cloud service integrations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>AWS Integration</Label>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Connected
                  </Badge>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Azure Integration</Label>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">
                    Not Connected
                  </Badge>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>GCP Integration</Label>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">
                    Not Connected
                  </Badge>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}