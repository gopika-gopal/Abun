import { AppSidebar } from "@/components/app-sidebar"
import { CreateArticleForm } from "@/components/create-article-form"
import { CreateArticleHeader } from "@/components/create-article-header"
import { TabsDemo } from "@/components/create-article-suggestion"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { CheckCircle } from "lucide-react"


export default function CreatedArticlePage() {
    //      const handleSubmit = (data: { title: string; content: string }) => {
    //     console.log("Article saved:", data);
    //   };


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
                    <CreateArticleHeader />

                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-5 pl-6">
                        Create Article
                    </h2>

                    <div className="pl-6 flex flex-wrap gap-4 mt-2">
                        {[
                            "Google Compliant",
                            "Optimized for Ranking",
                            "Human-Like Content",
                            "No Plagiarism",
                            "Auto-Publish Blogs",
                            "Factual Content",
                        ].map((text, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-3 py-1 text-md font-semibold"
                            >
                                <CheckCircle className="w-4 h-4 text-green-600" /> {text}
                            </div>
                        ))}
                    </div>
                    {/* Two-column Grid: Form & Tabs */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 mt-2">
                        {/* Form Section */}
                        <div className="p-4 rounded-md shadow">
                            {/* <h2 className="text-lg font-semibold mb-4">Profile Form</h2> */}
                            <CreateArticleForm />
                        </div>

                        {/* Tabs Section */}
                        <div className="p-4 rounded-md shadow" style={{ backgroundColor: "var(--base-100) dark:bg-transparent" }}>
                            <h2 className="text-center mt-3">Article Title Suggestions based on keyword</h2>
                            <TabsDemo />
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
