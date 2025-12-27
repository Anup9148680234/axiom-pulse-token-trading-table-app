"use client";

import { useEffect, useState, useMemo } from "react";
import { Token, PriceUpdate } from "@/types/token";
import { createMockService } from "@/services/websocketMock";
import { TokenColumn } from "./TokenGrid";
import { generateMockTokens } from "@/lib/mockData";
import { Skeleton } from "@/components/ui/Skeleton";
import { cn } from "@/lib/utils";

type ColumnKey = "new" | "final" | "migrated";

export default function TokenTable() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Mobile column state
  const [activeColumn, setActiveColumn] = useState<ColumnKey>("new");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const initialTokens = await generateMockTokens(100);
      setTokens(initialTokens);
      setIsLoading(false);

      const ws = createMockService(initialTokens);
      ws.connect();

      const unsubscribe = ws.subscribe((update: PriceUpdate) => {
        setTokens((prev) =>
          prev.map((t) =>
            t.id === update.tokenId
              ? {
                  ...t,
                  price: update.price,
                  marketCap: update.marketCap,
                  volume: update.volume,
                  priceChange: update.priceChange,
                }
              : t
          )
        );
      });

      return () => {
        unsubscribe();
        ws.disconnect();
      };
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const newPairs = useMemo(
    () => tokens.filter((t) => t.status === "new"),
    [tokens]
  );
  const finalStretch = useMemo(
    () => tokens.filter((t) => t.status === "final"),
    [tokens]
  );
  const migrated = useMemo(
    () => tokens.filter((t) => t.status === "migrated"),
    [tokens]
  );

  // ============================
  // LOADING STATE (unchanged)
  // ============================
  if (isLoading) {
    return (
      <div className="flex flex-col md:flex-row h-full w-full overflow-hidden bg-[#101114]">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex flex-col h-full border-r border-border last:border-r-0 min-w-[320px] flex-1 bg-background/50"
          >
            <div className="px-3 py-2 border-b border-border h-10 bg-[#0a0a0a]" />
            <div>
              {[1, 2, 3, 4, 5].map((j) => (
                <Skeleton key={j} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full bg-[#101114] text-foreground">
      {/* ============================
          MOBILE COLUMN SWITCHER
          ============================ */}
      <div className="flex md:hidden gap-2 p-2 border-b border-[#1f1f1f] bg-[#0f0f0f]">
        {[
          { key: "new", label: "New Pairs", count: newPairs.length },
          { key: "final", label: "Final Stretch", count: finalStretch.length },
          { key: "migrated", label: "Migrated", count: migrated.length },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveColumn(tab.key as ColumnKey)}
            className={cn(
              "flex-1 rounded-2xl py-1.5 text-[12px] font-medium transition flex items-center justify-center gap-1",
              activeColumn === tab.key
                ? "bg-[#3d6aff] text-black"
                : "bg-[#181a20] text-muted-foreground"
            )}
          >
            {tab.label}
            {/* <span className="text-xs opacity-70">({tab.count})</span> */}
          </button>
        ))}
      </div>

      {/* ============================
          COLUMNS
          ============================ */}
      <div className="flex flex-col md:flex-row h-full w-full overflow-x-auto">
        {/* DESKTOP (unchanged layout) */}
        <div className="hidden md:flex w-full">
          <TokenColumn title="New Pairs" columnId="new" tokens={newPairs} />
          <TokenColumn
            title="Final Stretch"
            columnId="final"
            tokens={finalStretch}
          />
          <TokenColumn
            title="Migrated"
            columnId="migrated"
            tokens={migrated}
          />
        </div>

        {/* MOBILE (single column) */}
        <div className="md:hidden w-full">
          {activeColumn === "new" && (
            <TokenColumn
              title="New Pairs"
              columnId="new"
              tokens={newPairs}
            />
          )}
          {activeColumn === "final" && (
            <TokenColumn
              title="Final Stretch"
              columnId="final"
              tokens={finalStretch}
            />
          )}
          {activeColumn === "migrated" && (
            <TokenColumn
              title="Migrated"
              columnId="migrated"
              tokens={migrated}
            />
          )}
        </div>
      </div>
    </div>
  );
}