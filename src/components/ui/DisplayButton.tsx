
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { List, } from "lucide-react";
import { DownIcon } from "@/components/icons/Down";

export function DisplayButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
        
          className="flex items-center rounded-full font-bold tracking-normal h-8 px-3 bg-[#22242d] hover:bg-[#2a2a2a] text-white border border-border"
        >
          <List size={14} className="mr-2" />
          Display
          <DownIcon className="icon h-3 w-3 ml-2 mt-1" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={8}
        className="
    w-[300px]
    rounded-xl
    bg-[#0f0f10]
    border border-white/10
    p-4
    shadow-2xl
  "
      >
        <div className="space-y-5 text-sm text-white">
          {/* METRICS */}
          <div>
            <div className="mb-2 text-xs font-semibold text-muted-foreground">
              Metrics
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-white/10 p-2 text-center text-xs">
                <div className="font-semibold">MC 77K</div>
                <div className="text-muted-foreground">Small</div>
              </div>
              <div className="rounded-lg bg-[#2a2d38] p-2 text-center text-xs">
                <div className="font-semibold">MC 77K</div>
                <div className="text-muted-foreground">Large</div>
              </div>
            </div>
          </div>

          {/* QUICK BUY */}
          <div>
            <div className="mb-2 text-xs font-semibold text-muted-foreground">
              Quick Buy
            </div>
            <div className="grid grid-cols-4 gap-2">
              {["Small", "Large", "Mega", "Ultra"].map((label, i) => (
                <div
                  key={label}
                  className={`
              flex flex-col items-center justify-center
              rounded-lg p-2 text-xs
              ${
                i === 0
                  ? "bg-[#2a2d38]"
                  : "border border-white/10 text-muted-foreground"
              }
            `}
                >
                  <span className="mb-1 rounded bg-blue-500 px-1.5 text-[10px] font-bold text-black">
                    +7
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* THEME */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">☀</span>
            Grey
          </div>

          {/* TABS */}
          <div className="flex gap-2">
            {["Layout", "Metrics", "Row", "Extras"].map((tab, i) => (
              <div
                key={tab}
                className={`
            rounded-full px-3 py-1 text-xs
            ${i === 0 ? "bg-[#2a2d38] text-white" : "text-muted-foreground"}
          `}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* OPTIONS */}
          <div className="space-y-3 pt-2">
            {[
              "Show Search Bar",
              "No Decimals",
              "Show Hidden Tokens",
              "Unhide on Migrated",
              "Circle Images",
              "Progress Bar",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-white/90"
              >
                <div className="h-4 w-4 rounded border border-white/20" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
