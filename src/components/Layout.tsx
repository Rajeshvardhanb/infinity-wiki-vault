import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Button } from "@/components/ui/button";
import { Search, Plus, User, Edit3 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/contexts/SidebarContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { addSection } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();
  const [isCreatingPage, setIsCreatingPage] = useState(false);
  const [newPageData, setNewPageData] = useState({
    title: '',
    content: '',
    section: 'devops'
  });

  const handleCreatePage = () => {
    if (newPageData.title) {
      const pageId = newPageData.title.toLowerCase().replace(/\s+/g, '-');
      const newPage = {
        id: pageId,
        title: newPageData.title,
        icon: 'FileText',
        url: `/${newPageData.section}/${pageId}`,
      };
      
      // Add to sidebar
      addSection(newPage, newPageData.section);
      
      // Navigate to the new page
      navigate(newPage.url);
      
      // Show success message
      toast({
        title: "Page Created",
        description: `Successfully created "${newPageData.title}" page.`,
      });
      
      // Reset form
      setNewPageData({ title: '', content: '', section: 'devops' });
      setIsCreatingPage(false);
    }
  };

  const handleEditCurrentPage = () => {
    // For now, just show a toast - in a real app this would open an editor
    toast({
      title: "Edit Mode",
      description: "Page editor would open here in a real implementation.",
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-14 border-b bg-doc-content px-4 flex items-center justify-between shadow-soft">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="h-8 w-8" />
            
            <div className="flex items-center gap-3 flex-1 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search documentation..." 
                  className="pl-9 h-9 bg-muted/50 border-border/60"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Dialog open={isCreatingPage} onOpenChange={setIsCreatingPage}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Plus className="h-4 w-4" />
                  New Page
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Create New Page</DialogTitle>
                  <DialogDescription>
                    Add a new documentation page to your cloud/DevOps knowledge base.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="page-title" className="text-right">
                      Page Title
                    </Label>
                    <Input
                      id="page-title"
                      value={newPageData.title}
                      onChange={(e) => setNewPageData({...newPageData, title: e.target.value})}
                      placeholder="e.g., Docker Best Practices"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="page-section" className="text-right">
                      Section
                    </Label>
                    <select
                      id="page-section"
                      value={newPageData.section}
                      onChange={(e) => setNewPageData({...newPageData, section: e.target.value})}
                      className="col-span-3 h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
                    >
                      <option value="cloud-infrastructure">Cloud Infrastructure</option>
                      <option value="devops">DevOps & CI/CD</option>
                      <option value="infrastructure-code">Infrastructure as Code</option>
                      <option value="security">Security & Compliance</option>
                      <option value="automation">Automation & Scripting</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="page-content" className="text-right">
                      Content
                    </Label>
                    <Textarea
                      id="page-content"
                      value={newPageData.content}
                      onChange={(e) => setNewPageData({...newPageData, content: e.target.value})}
                      placeholder="Enter the page content here..."
                      className="col-span-3 min-h-[100px]"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleCreatePage}>Create Page</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" size="sm" className="gap-2" onClick={handleEditCurrentPage}>
              <Edit3 className="h-4 w-4" />
              Edit Page
            </Button>
            
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </header>

          {/* Main Content */}
          <main className="flex-1 bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}