'use client';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { HelpCircle } from "lucide-react"


const data = [
    { id: 1, title: "Unlock Your Potential with AI-Powered Solutions" },
    { id: 2, title: "Revolutionize Your Business with Smart Ideas" },
    { id: 3, title: "Unleashing Creativity in Every Click" },
    { id: 4, title: "Next-Gen Titles to Make You Stand Out" },
    { id: 5, title: "Innovative Strategies for Modern Brands" },
    { id: 6, title: "Revolutionize Your Business with Smart Ideas" },
    { id: 7, title: "Next-Gen Titles to Make You Stand Out" },

];

const serpData = [
    { id: 1, title: "Top 10 AI Tools for Business Growth in 2025" },
    { id: 2, title: "How to Rank #1 on Google Using Smart SEO" },
    { id: 3, title: "The Ultimate Guide to Writing High-CTR Titles" },
    { id: 4, title: "Proven Strategies for Title Tag Optimization" },
    { id: 5, title: "Boost Your Visibility with Keyword-Rich Titles" },
];

export function TabsDemo() {

    const getArticleTitle = (title: string) => {
        console.log(`Clicked ${title}`);
    };

    return (
        <div>

            <Tabs defaultValue="account" >
                <div className="flex justify-center">

                    <TabsList className="grid w-full grid-cols-2 mt-5 w-[400px]">
                        <TabsTrigger value="account">Creative Ideas

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span tabIndex={0} className="cursor-pointer inline-flex items-center">
                                            <HelpCircle className="w-5 h-5 text-muted-foreground" />
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent side="top">
                                        <p>AI brainstormed, Creative Titles designed to help you stand out!</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </TabsTrigger>

                        <TabsTrigger value="password">SERP Based Ideas

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span tabIndex={0} className="cursor-pointer inline-flex items-center">
                                            <HelpCircle className="w-5 h-5 text-muted-foreground" />
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent side="top">
                                        <p>Top-ranking Titles inspired by SERP results!</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="account">
                    <div className="mt-4 space-y-4">
                        <ul className="text-sm font-medium space-y-5 text-left ">
                            {data.map(article => (
                                <li key={article.id} className="hover:underline cursor-pointer" onClick={() => getArticleTitle(article.title)}>
                                    {article.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </TabsContent>

                <TabsContent value="password">
                    <div className="mt-4 space-y-4">
                        <ul className="text-sm font-medium space-y-5 text-left">
                            {serpData.map(article => (
                                <li
                                    key={`serp-${article.id}`}
                                    className="hover:underline cursor-pointer"
                                    onClick={() => getArticleTitle(article.title)}
                                >
                                    {article.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
