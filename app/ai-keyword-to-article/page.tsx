import { AiKeywordHeader } from "@/components/ai-keyword-header"
import KeywordForm from "@/components/ai-keyword-search-form"
import { AppSidebar } from "@/components/app-sidebar"

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
            <AppSidebar variant="inset" />
            <SidebarInset>
                <div>
                    <AiKeywordHeader />
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-5 pl-6">
                        AI Keyword to Article
                    </h2>
                    <KeywordForm />

                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
