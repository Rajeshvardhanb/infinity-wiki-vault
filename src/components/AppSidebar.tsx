import { useState } from "react";
import { 
  Home, 
  Cloud, 
  Zap,
  FileCode,
  Shield,
  Bot,
  Users, 
  Settings,
  GitBranch,
  Box,
  Layers,
  Activity,
  Lock,
  FileCheck,
  AlertTriangle,
  Terminal,
  Code,
  Rocket,
  ChevronRight,
  ChevronDown,
  Plus,
  Edit,
  Trash2,
  MoreVertical,
  FileText
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useSidebar } from "@/contexts/SidebarContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const iconMap: Record<string, any> = {
  Home, Cloud, Zap, FileCode, Shield, Bot, Users, Settings,
  GitBranch, Box, Layers, Activity, Lock, FileCheck, 
  AlertTriangle, Terminal, Code, Rocket, FileText
};

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { sections, addSection, updateSection, deleteSection } = useSidebar();
  const [collapsed, setCollapsed] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['cloud-infrastructure', 'devops']);
  const [isAddingSectionDialog, setIsAddingSectionDialog] = useState(false);
  const [editingSection, setEditingSection] = useState<any>(null);
  const [newSectionData, setNewSectionData] = useState({
    title: '',
    icon: 'FileText',
    url: '',
    parentId: ''
  });

  const isActive = (path: string) => currentPath === path;
  const isGroupActive = (children: any[]) => children?.some(child => isActive(child.url || ''));
  
  const toggleGroup = (id: string) => {
    setExpandedGroups(prev => 
      prev.includes(id) 
        ? prev.filter(g => g !== id)
        : [...prev, id]
    );
  };

  const handleAddSection = () => {
    if (newSectionData.title) {
      const newSection = {
        id: newSectionData.title.toLowerCase().replace(/\s+/g, '-'),
        title: newSectionData.title,
        icon: newSectionData.icon,
        url: newSectionData.url || `/${newSectionData.title.toLowerCase().replace(/\s+/g, '-')}`,
      };
      
      addSection(newSection, newSectionData.parentId || undefined);
      setNewSectionData({ title: '', icon: 'FileText', url: '', parentId: '' });
      setIsAddingSectionDialog(false);
    }
  };

  const handleEditSection = (section: any) => {
    setEditingSection(section);
    setNewSectionData({
      title: section.title,
      icon: section.icon,
      url: section.url || '',
      parentId: ''
    });
  };

  const handleUpdateSection = () => {
    if (editingSection && newSectionData.title) {
      updateSection(editingSection.id, {
        title: newSectionData.title,
        icon: newSectionData.icon,
        url: newSectionData.url || editingSection.url,
      });
      setEditingSection(null);
      setNewSectionData({ title: '', icon: 'FileText', url: '', parentId: '' });
    }
  };

  const getNavClassName = (isActive: boolean) =>
    `flex items-center w-full text-left transition-colors ${
      isActive 
        ? "bg-primary text-primary-foreground font-medium" 
        : "hover:bg-doc-nav-hover text-foreground"
    }`;

  const renderSection = (section: any, level: number = 0) => {
    const IconComponent = iconMap[section.icon] || iconMap.FileText;
    const hasChildren = section.children && section.children.length > 0;
    const isExpanded = expandedGroups.includes(section.id);

    return (
      <SidebarMenuItem key={section.id}>
        <div className="group relative">
          {hasChildren ? (
            <div>
              <SidebarMenuButton
                onClick={() => toggleGroup(section.id)}
                className={`${getNavClassName(isGroupActive(section.children))} justify-between pr-8`}
              >
                <div className="flex items-center gap-2">
                  <IconComponent className="h-4 w-4 shrink-0" />
                  {!collapsed && <span className="text-sm">{section.title}</span>}
                </div>
                {!collapsed && (
                  isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )
                )}
              </SidebarMenuButton>
              
              {/* Section Management Dropdown */}
              {!collapsed && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreVertical className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEditSection(section)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Section
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {
                      setNewSectionData({ ...newSectionData, parentId: section.id });
                      setIsAddingSectionDialog(true);
                    }}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Subsection
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => deleteSection(section.id)}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Section
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
              
              {!collapsed && isExpanded && (
                <div className="mt-1 ml-6 space-y-1">
                  {section.children.map((child: any) => renderSection(child, level + 1))}
                </div>
              )}
            </div>
          ) : (
            <div className="relative group">
              <SidebarMenuButton asChild>
                <NavLink
                  to={section.url!}
                  className={getNavClassName(isActive(section.url!))}
                >
                  <IconComponent className="h-4 w-4 shrink-0" />
                  {!collapsed && <span className="text-sm">{section.title}</span>}
                </NavLink>
              </SidebarMenuButton>
              
              {/* Page Management Dropdown */}
              {!collapsed && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreVertical className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEditSection(section)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Page
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => deleteSection(section.id)}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Page
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          )}
        </div>
      </SidebarMenuItem>
    );
  };

  return (
    <>
      <Sidebar className={`${collapsed ? "w-16" : "w-64"} border-r bg-doc-nav transition-all duration-200`} collapsible="icon">
        <SidebarContent className="px-2">
          {/* Header */}
          <div className="flex items-center gap-2 p-4 border-b">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg text-white font-bold text-sm">
              ∞
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-semibold text-sm text-foreground">INFINITY CLOUD LABS</h1>
                <p className="text-xs text-muted-foreground">Documentation</p>
              </div>
            )}
          </div>

          {/* Add New Section Button */}
          {!collapsed && (
            <div className="p-2">
              <Dialog open={isAddingSectionDialog} onOpenChange={setIsAddingSectionDialog}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Plus className="h-4 w-4" />
                    Add Section
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add New Section</DialogTitle>
                    <DialogDescription>
                      Create a new section or page in your documentation.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="title" className="text-right">
                        Title
                      </Label>
                      <Input
                        id="title"
                        value={newSectionData.title}
                        onChange={(e) => setNewSectionData({...newSectionData, title: e.target.value})}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="icon" className="text-right">
                        Icon
                      </Label>
                      <Select value={newSectionData.icon} onValueChange={(value) => setNewSectionData({...newSectionData, icon: value})}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(iconMap).map(iconName => (
                            <SelectItem key={iconName} value={iconName}>{iconName}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="url" className="text-right">
                        URL
                      </Label>
                      <Input
                        id="url"
                        value={newSectionData.url}
                        onChange={(e) => setNewSectionData({...newSectionData, url: e.target.value})}
                        placeholder="/my-page"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleAddSection}>Add Section</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-4">
            <SidebarGroup>
              <SidebarMenu className="space-y-1">
                {sections.map((section) => renderSection(section))}
              </SidebarMenu>
            </SidebarGroup>
          </div>
        </SidebarContent>
      </Sidebar>

      {/* Edit Section Dialog */}
      <Dialog open={!!editingSection} onOpenChange={(open) => !open && setEditingSection(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Section</DialogTitle>
            <DialogDescription>
              Update the section details.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-title" className="text-right">
                Title
              </Label>
              <Input
                id="edit-title"
                value={newSectionData.title}
                onChange={(e) => setNewSectionData({...newSectionData, title: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-icon" className="text-right">
                Icon
              </Label>
              <Select value={newSectionData.icon} onValueChange={(value) => setNewSectionData({...newSectionData, icon: value})}>
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(iconMap).map(iconName => (
                    <SelectItem key={iconName} value={iconName}>{iconName}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-url" className="text-right">
                URL
              </Label>
              <Input
                id="edit-url"
                value={newSectionData.url}
                onChange={(e) => setNewSectionData({...newSectionData, url: e.target.value})}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleUpdateSection}>Update Section</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}