"use client"
import "../app/globals.css";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
//   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Zod schema
const formSchema = z.object({
  keyword: z.string().min(1, { message: "Keyword is required." }),
  title: z.string().min(1, { message: "Title is required." }),
  language: z.string().min(1, { message: "Select a language." }),
  instructions: z.string().optional(),
})

// Infer type
type ArticleFormValues = z.infer<typeof formSchema>

export function CreateArticleForm() {
  const form = useForm<ArticleFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keyword: "",
      title: "",
      language: "",
      instructions: "",
    },
  })

  function onSubmit(values: ArticleFormValues) {
    console.log("Article Data:", values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Keyword */}
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

        {/* Article Title */}
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

        {/* Language Dropdown */}
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should be the language of the generated articles?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                </SelectContent>
              </Select>
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
              <FormLabel>Instructions & Context (Optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Include MyCompany.com at the top of the list. Also talk more about how MyCompany.com helps with This, This & That" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Button type="button" variant="outline">Advanced</Button>
          <Button type="submit">Generate Article</Button>
        </div>
      </form>
    </Form>
  )
}
