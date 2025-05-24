import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function KeywordResearchUI() {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-10 text-center mt-15">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Enter a Keyword to <br /> Find Relevant Keywords in the Niche
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Add a keyword for your site that you want to rank for:
            </p>

            <div className="mt-6 w-96 max-w-md space-y-4">
                <div className="text-left">
                    <Label htmlFor="location" className="text-sm text-muted-foreground">
                        Location
                    </Label>
                    <Select defaultValue="IN">
                        <SelectTrigger className="w-full mt-1">
                            <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="IN">India (IN)</SelectItem>
                            <SelectItem value="US">United States (US)</SelectItem>
                            <SelectItem value="UK">United Kingdom (UK)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="relative">
                    <Input placeholder="Keyword 1" />
                </div>
                <div className="relative">
                    <Input placeholder="Keyword 2" />
                </div>
                <div className="relative">
                    <Input placeholder="Keyword 3" />
                </div>

                <p className="text-sm text-muted-foreground cursor-pointer">
                    + Add More
                </p>

                <Button>
                    PROCEED
                </Button>
            </div>
        </div>
    )
}


