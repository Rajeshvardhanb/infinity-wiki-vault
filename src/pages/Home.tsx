import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Rocket, 
  Users, 
  TrendingUp, 
  Clock, 
  FileText,
  Star,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const recentPages = [
    { title: "Quick Start Guide", section: "Getting Started", lastModified: "2 hours ago" },
    { title: "API Authentication", section: "Security", lastModified: "1 day ago" },
    { title: "Cloud Infrastructure", section: "Cloud Services", lastModified: "3 days ago" },
    { title: "Database Schema", section: "Database", lastModified: "1 week ago" },
  ];

  const popularPages = [
    { title: "REST API Reference", views: "2.4k", section: "APIs & Integration" },
    { title: "Getting Started", views: "1.8k", section: "Getting Started" },
    { title: "Authentication Setup", views: "1.2k", section: "Security" },
    { title: "Deployment Guide", views: "987", section: "Cloud Services" },
  ];

  const quickActions = [
    { title: "Create New Page", icon: FileText, description: "Start writing documentation" },
    { title: "Browse Templates", icon: BookOpen, description: "Use pre-built page templates" },
    { title: "Team Collaboration", icon: Users, description: "Invite team members" },
    { title: "Analytics", icon: TrendingUp, description: "View usage statistics" },
  ];

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      {/* Welcome Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl text-white font-bold text-lg">
            ∞
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome to INFINITY CLOUD LABS</h1>
            <p className="text-muted-foreground">Your comprehensive documentation and knowledge base</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="gap-1">
            <BookOpen className="h-3 w-3" />
            47 Pages
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Users className="h-3 w-3" />
            12 Contributors
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            Updated today
          </Badge>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickActions.map((action) => (
          <Card key={action.title} className="hover:shadow-medium transition-shadow cursor-pointer group">
            <CardContent className="p-4 text-center">
              <action.icon className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recently Updated
            </CardTitle>
            <CardDescription>Pages that have been modified recently</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer group">
                <div className="flex-1">
                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{page.title}</h4>
                  <p className="text-xs text-muted-foreground">{page.section}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{page.lastModified}</p>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full justify-center" size="sm">
              View All Recent Changes
            </Button>
          </CardContent>
        </Card>

        {/* Popular Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Most Popular
            </CardTitle>
            <CardDescription>Most viewed pages this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {popularPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer group">
                <div className="flex-1">
                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{page.title}</h4>
                  <p className="text-xs text-muted-foreground">{page.section}</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="text-xs">
                    {page.views} views
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full justify-center" size="sm">
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Get Started Section */}
      <Card className="mt-8 bg-gradient-secondary">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
              <p className="text-muted-foreground mb-4">
                Explore our comprehensive documentation or create your first page.
              </p>
              <div className="flex gap-3">
                <Button className="gap-2">
                  <Rocket className="h-4 w-4" />
                  Quick Start Guide
                </Button>
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Create Page
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-32 h-32 bg-gradient-primary rounded-2xl flex items-center justify-center text-white text-6xl font-bold opacity-20">
                ∞
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}