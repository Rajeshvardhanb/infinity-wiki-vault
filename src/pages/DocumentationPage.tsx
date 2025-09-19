import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Edit3, 
  Share2, 
  Heart, 
  MessageCircle, 
  Clock, 
  User,
  ChevronRight,
  Home
} from "lucide-react";

interface DocumentationPageProps {
  title: string;
  content: React.ReactNode;
  section: string;
  lastModified?: string;
  author?: string;
  breadcrumbs?: { title: string; href?: string }[];
}

export function DocumentationPage({ 
  title, 
  content, 
  section, 
  lastModified = "2 days ago",
  author = "Alex Johnson",
  breadcrumbs = []
}: DocumentationPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
        <Home className="h-4 w-4" />
        <ChevronRight className="h-4 w-4" />
        <span>{section}</span>
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4" />
            <span className={index === breadcrumbs.length - 1 ? "text-foreground font-medium" : ""}>
              {crumb.title}
            </span>
          </div>
        ))}
      </nav>

      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Badge variant="secondary" className="mb-3">{section}</Badge>
            <h1 className="text-4xl font-bold text-foreground mb-2">{title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>By {author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Updated {lastModified}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Heart className="h-4 w-4" />
              Like
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button size="sm" className="gap-2">
              <Edit3 className="h-4 w-4" />
              Edit
            </Button>
          </div>
        </div>
        
        <Separator />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {content}
      </div>

      {/* Page Footer */}
      <div className="mt-12 pt-6 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Comments (3)
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="h-4 w-4" />
              12 likes
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Last modified {lastModified} by {author}
          </div>
        </div>
      </div>
    </div>
  );
}