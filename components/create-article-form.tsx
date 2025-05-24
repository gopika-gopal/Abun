"use client"

import "../app/globals.css";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Bookmark, Check, ChevronsUpDown, Save } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs";
import { Label } from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";



const formSchema = z.object({
    keyword: z.string().min(1, { message: "Keyword is required." }),
    title: z.string().min(1, { message: "Title is required." }),
    language: z.string().min(1, { message: "Select a language." }),
    instructions: z.string().optional(),
});

type ArticleFormValues = z.infer<typeof formSchema>;

const languages = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "spanish", label: "Spanish" },
    { value: "malayalam", label: "Malayalam" },
    { value: "chinese", label: "Chinese" },
];

export function CreateArticleForm() {
    const form = useForm<ArticleFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            keyword: "",
            title: "",
            language: "",
            instructions: "",
        },
    });

    const [languageOpen, setLanguageOpen] = React.useState(false);

    function onSubmit(values: ArticleFormValues) {
        console.log("Article Data:", values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* keyword */}
                <FormField
                    control={form.control}
                    name="keyword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Keyword</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter keyword" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* article title */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Article Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Article Title or choose from the right widget" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Language Dropdown using Combobox */}
                <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What should be the language of the generated articles?</FormLabel>
                            <Popover open={languageOpen} onOpenChange={setLanguageOpen}>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={languageOpen}
                                            className="w-[200px] justify-between"
                                        >
                                            {field.value
                                                ? languages.find((lang) => lang.value === field.value)?.label
                                                : "Select language..."}
                                            <ChevronsUpDown className="opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search language..." />
                                        <CommandList>
                                            <CommandEmpty>No language found.</CommandEmpty>
                                            <CommandGroup>
                                                {languages.map((lang) => (
                                                    <CommandItem
                                                        key={lang.value}
                                                        value={lang.value}
                                                        onSelect={(currentValue) => {
                                                            form.setValue("language", currentValue);
                                                            setLanguageOpen(false);
                                                        }}
                                                    >
                                                        {lang.label}
                                                        <Check
                                                            className={cn(
                                                                "ml-auto",
                                                                field.value === lang.value ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Instructions (Optional) */}
                <FormField
                    control={form.control}
                    name="instructions"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex items-center justify-between">
                                <FormLabel>Instructions & Context (Optional)</FormLabel>
                                <div className="flex items-center gap-2">
                                    <button type="button" className="p-1.5 rounded-md hover:bg-muted">
                                        <Save className="w-4 h-4 text-muted-foreground" />
                                    </button>
                                    <Select>
                                        <SelectTrigger className="h-8 px-2 text-sm  flex items-center gap-2">
                                            <Bookmark />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="template1">Item 1</SelectItem>
                                            <SelectItem value="template2">Item 2</SelectItem>
                                            <SelectItem value="template3">Item 3</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <FormControl>
                                <Textarea
                                    placeholder="Include MyCompany.com at the top of the list. Also talk more about how MyCompany.com helps with This, This & That"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Buttons */}
                <div className="flex items-center gap-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button type="button" variant="outline">Advanced</Button>
                        </DialogTrigger>
                        <DialogContent >
                            <Tabs defaultValue="account">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="account">Article Settings</TabsTrigger>
                                    <TabsTrigger value="password">Images</TabsTrigger>
                                </TabsList>
                                <TabsContent value="account">
                                    <Card>
                                        <CardHeader>
                                            {/* <CardTitle>Images</CardTitle> */}

                                        </CardHeader>

                                        <CardFooter>
                                            {/* <Button>Save changes</Button> */}
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="password">
                                    <Card>
                                        <CardHeader>
                                            {/* <CardTitle>Images</CardTitle> */}

                                        </CardHeader>

                                        <CardFooter>
                                            {/* <Button>Save password</Button> */}
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </DialogContent>
                    </Dialog>

                    <Button type="submit">Generate Article</Button>
                </div>
            </form>
        </Form>
    );
}
