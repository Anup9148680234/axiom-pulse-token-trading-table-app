import React, { useMemo } from "react";
import { Token } from "@/types/token";
import { TokenCard } from "./TokenCard";

import { Zap, SlidersHorizontal } from "lucide-react";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { SOLIcon } from "@/components/icons/SOL";
import { Tooltipp } from "@/components/ui/Tooltipp";

interface TokenColumnProps {
  title: string;
  columnId: string;
  tokens: Token[];
}

type TimeRange = "m5" | "h1" | "h6" | "h24";

interface TableFilter {
  sort: keyof Token;
  direction: "asc" | "desc";
  timeRange: TimeRange;
}

export function TokenColumn({ title, columnId, tokens }: TokenColumnProps) {
  const [filter, setFilter] = React.useState<TableFilter>({
    sort: "marketCap",
    direction: "desc",
    timeRange: "m5",
  });

  const handleSort = (sortKey: keyof Token) => {
    setFilter((prev) => ({
      ...prev,
      sort: sortKey,
      direction:
        prev.sort === sortKey && prev.direction === "asc" ? "desc" : "asc",
    }));
  };
  const sortedTokens = useMemo(() => {
    if (!filter) return tokens;

    const { sort, direction, timeRange } = filter;

    return [...tokens].sort((a, b) => {
      let valA: any = a[sort];
      let valB: any = b[sort];

      if (sort === "priceChange") {
        valA = a.priceChange[timeRange];
        valB = b.priceChange[timeRange];
      }

      if (valA < valB) return direction === "asc" ? -1 : 1;
      if (valA > valB) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [tokens, filter]);

  return (
    <div className="flex flex-col h-full border-r border-border last:border-r-0 min-w-[320px] flex-1 bg-column-background">
      {/* Column Header */}
      <div className="px-3 py-5 border-b border-border flex justify-between items-center bg-column-background sticky top-0 z-10 h-10">
        <div className="flex items-center gap-3">
          <span className="font-medium text-md text-foreground">{title}</span>
        </div>

        <div className="flex items-center">
          <div className="flex items-center h-8 rounded-full border border-border bg-[#101114] overflow-hidden">
            {/* ⚡ Count */}
            <div className="flex items-center gap-1 px-3 text-muted-foreground">
              <Zap size={12} className="opacity-70" />
              <span className="text-xs font-medium">0</span>
            </div>

            <div className="flex items-center gap-1 px-3 text-muted-foreground">
              <SOLIcon height="10px" width="10px" />
            </div>

            {/* Divider */}
            <div className="h-full w-px bg-border" />

            {/* Priority Tabs */}
            <div className="flex items-center px-1">
              {/* Active */}
              <button className="rounded-md h-full px-1 py-0.5 text-xs font-medium text-blue-400  hover:bg-blue-500/20">
                P1
              </button>

              <button className="rounded-md h-full px-1 py-0.5 text-xs text-muted-foreground hover:text-foreground hover:bg-accent">
                P2
              </button>

              <button className=" rounded-md h-full px-1 py-0.5 text-xs text-muted-foreground hover:text-foreground hover:bg-accent">
                P3
              </button>
            </div>

            {/* Divider */}
            <div className="h-full w-px bg-border" />

            {/* Sort */}
          </div>

          <button
            onClick={() => handleSort("marketCap")}
            className="h-full ml-1 px-2 text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            <Tooltipp content="Filters" side="top" offset={10}>
              <SlidersHorizontal size={12} stroke="#fff" />
            </Tooltipp>
          </button>
        </div>
      </div>

      <ScrollArea className="flex-1 w-full h-full">
        <div className="">
          {sortedTokens.map((token) => (
            <Tooltipp
              content={"Bonding " + token.bondingPercent + "%"}
              side="top"
            >
              <TokenCard key={token.id} token={token} />
            </Tooltipp>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
