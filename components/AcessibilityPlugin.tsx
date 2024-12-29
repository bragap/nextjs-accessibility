import { PersonStanding } from "lucide-react"
import { ModeToggle } from "./ToggleDarkMode"


export default function AcessibilityPlugin() {
    return (
        <div className="fixed top-[50%] right-0">
            <div className="flex flex-col gap-[1px]">
                <div className="cursor-pointer bg-blue-600 text-white h-9 w-9  rounded-none rounded-l-md flex items-center justify-center">
                    <PersonStanding />
                </div>

                {/* <ModeToggle /> */}
            </div>
        </div >
    )
}