import { useParams, Navigate } from "react-router-dom";
import { useSidebar } from "@/contexts/SidebarContext";
import { DocumentationPage } from "./DocumentationPage";

export default function DynamicPage() {
  const { section, pageId } = useParams<{ section: string; pageId: string }>();
  const { sections, updateSection } = useSidebar();

  // Find the page in the sidebar context
  const findPage = (items: any[]): any => {
    for (const item of items) {
      if (item.url === `/${section}/${pageId}`) {
        return item;
      }
      if (item.children) {
        const found = findPage(item.children);
        if (found) return found;
      }
    }
    return null;
  };

  const page = findPage(sections);

  if (!page) {
    return <Navigate to="/404" replace />;
  }

  const handleEdit = (id: string, newTitle: string, newContent: string) => {
    updateSection(id, { title: newTitle, content: newContent });
  };

  return (
    <DocumentationPage
      title={page.title}
      content={page.content || "No content available. Click 'Edit Page' to add content."}
      section={section || "Documentation"}
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: section || "Section", href: `/${section}` },
        { title: page.title },
      ]}
      pageId={page.id}
      onEdit={handleEdit}
    />
  );
}
