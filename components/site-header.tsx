import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function SiteHeader() {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Generated Articles</h1>
      </div>
    </header>
  )
}






// export function SiteHeader() {
//    return (
//     <header className="flex h-[--header-height] shrink-0 items-center justify-center pb-2">
//       <h1 className="text-3xl font-bold mt-10 mb-4">Articles</h1>
//     </header>
//   );
// }

