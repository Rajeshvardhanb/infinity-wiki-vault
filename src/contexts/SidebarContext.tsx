import { useState, createContext, useContext, ReactNode } from 'react';

export interface SidebarSection {
  id: string;
  title: string;
  icon: string;
  url?: string;
  children?: SidebarSection[];
}

interface SidebarContextType {
  sections: SidebarSection[];
  addSection: (section: SidebarSection, parentId?: string) => void;
  updateSection: (id: string, updates: Partial<SidebarSection>) => void;
  deleteSection: (id: string) => void;
  moveSection: (id: string, newParentId?: string) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

const defaultSections: SidebarSection[] = [
  { id: 'home', title: 'Home', icon: 'Home', url: '/' },
  { 
    id: 'cloud-infrastructure', 
    title: 'Cloud Infrastructure', 
    icon: 'Cloud',
    children: [
      { id: 'aws-setup', title: 'AWS Setup', icon: 'Settings', url: '/cloud/aws-setup' },
      { id: 'azure-config', title: 'Azure Configuration', icon: 'Settings', url: '/cloud/azure-config' },
      { id: 'gcp-deployment', title: 'GCP Deployment', icon: 'Rocket', url: '/cloud/gcp-deployment' },
      { id: 'multi-cloud', title: 'Multi-Cloud Strategy', icon: 'Layers', url: '/cloud/multi-cloud' },
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    icon: 'Zap',
    children: [
      { id: 'ci-cd-pipelines', title: 'CI/CD Pipelines', icon: 'GitBranch', url: '/devops/ci-cd' },
      { id: 'containerization', title: 'Containerization', icon: 'Box', url: '/devops/docker' },
      { id: 'kubernetes', title: 'Kubernetes', icon: 'Layers', url: '/devops/kubernetes' },
      { id: 'monitoring', title: 'Monitoring & Logging', icon: 'Activity', url: '/devops/monitoring' },
    ]
  },
  {
    id: 'infrastructure-code',
    title: 'Infrastructure as Code',
    icon: 'FileCode',
    children: [
      { id: 'terraform', title: 'Terraform', icon: 'Settings', url: '/iac/terraform' },
      { id: 'ansible', title: 'Ansible', icon: 'Settings', url: '/iac/ansible' },
      { id: 'cloudformation', title: 'CloudFormation', icon: 'Cloud', url: '/iac/cloudformation' },
    ]
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    icon: 'Shield',
    children: [
      { id: 'security-best-practices', title: 'Security Best Practices', icon: 'Lock', url: '/security/best-practices' },
      { id: 'compliance', title: 'Compliance Frameworks', icon: 'FileCheck', url: '/security/compliance' },
      { id: 'vulnerability-management', title: 'Vulnerability Management', icon: 'AlertTriangle', url: '/security/vulnerability' },
    ]
  },
  {
    id: 'automation',
    title: 'Automation & Scripting',
    icon: 'Bot',
    children: [
      { id: 'bash-scripting', title: 'Bash Scripting', icon: 'Terminal', url: '/automation/bash' },
      { id: 'python-automation', title: 'Python Automation', icon: 'Code', url: '/automation/python' },
      { id: 'powershell', title: 'PowerShell', icon: 'Terminal', url: '/automation/powershell' },
    ]
  },
  { id: 'team-management', title: 'Team Management', icon: 'Users', url: '/team' },
  { id: 'settings', title: 'Settings', icon: 'Settings', url: '/settings' },
];

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [sections, setSections] = useState<SidebarSection[]>(defaultSections);

  const addSection = (newSection: SidebarSection, parentId?: string) => {
    setSections(prev => {
      if (!parentId) {
        return [...prev, newSection];
      }
      
      const updateSections = (sections: SidebarSection[]): SidebarSection[] => {
        return sections.map(section => {
          if (section.id === parentId) {
            return {
              ...section,
              children: [...(section.children || []), newSection]
            };
          }
          if (section.children) {
            return {
              ...section,
              children: updateSections(section.children)
            };
          }
          return section;
        });
      };
      
      return updateSections(prev);
    });
  };

  const updateSection = (id: string, updates: Partial<SidebarSection>) => {
    setSections(prev => {
      const updateSections = (sections: SidebarSection[]): SidebarSection[] => {
        return sections.map(section => {
          if (section.id === id) {
            return { ...section, ...updates };
          }
          if (section.children) {
            return {
              ...section,
              children: updateSections(section.children)
            };
          }
          return section;
        });
      };
      
      return updateSections(prev);
    });
  };

  const deleteSection = (id: string) => {
    setSections(prev => {
      const removeSections = (sections: SidebarSection[]): SidebarSection[] => {
        return sections.filter(section => section.id !== id).map(section => ({
          ...section,
          children: section.children ? removeSections(section.children) : undefined
        }));
      };
      
      return removeSections(prev);
    });
  };

  const moveSection = (id: string, newParentId?: string) => {
    // Implementation for moving sections between parents
    console.log('Move section:', id, 'to parent:', newParentId);
  };

  return (
    <SidebarContext.Provider value={{
      sections,
      addSection,
      updateSection,
      deleteSection,
      moveSection
    }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}