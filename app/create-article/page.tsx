import { AppSidebar } from "@/components/app-sidebar"
import { CreateArticleForm } from "@/components/create-article-form"
import { CreateArticleHeader } from "@/components/create-article-header"
import { TabsDemo } from "@/components/create-article-suggestion"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"


export default function Page() {
  
  return (
      <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset"/>
      <SidebarInset>
        <div>
        <CreateArticleHeader />
          {/* Two-column Grid: Form & Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 mt-2">
            {/* Form Section */}
            <div className="p-4 rounded-md shadow">
              {/* <h2 className="text-lg font-semibold mb-4">Profile Form</h2> */}
              <CreateArticleForm />
            </div>

            {/* Tabs Section */}
            <div className="p-4 rounded-md shadow">
              <h2 className="text-center">Article Title Suggestions based on keyword</h2>
              <TabsDemo />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
