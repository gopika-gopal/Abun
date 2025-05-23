import { AiKeywordHeader } from "@/components/ai-keyword-header"
import KeywordForm from "@/components/ai-keyword-search-form"
import { AppSidebar } from "@/components/app-sidebar"
import { CreateArticleForm } from "@/components/create-article-form"
import { CreateArticleHeader } from "@/components/create-article-header"
import { TabsDemo } from "@/components/create-article-suggestion"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"


export default function CreatedArticlePage() {
  
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
        <AiKeywordHeader />
        <KeywordForm />
        
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
