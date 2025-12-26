"use client"

import { useEffect, useState, useMemo } from 'react';
import { Token, PriceUpdate } from '@/types/token';
import { createMockService } from '@/services/websocketMock';
import { TokenColumn } from './TokenGrid';
import { generateMockTokens } from '@/lib/mockData';
import { Skeleton } from '@/components/ui/Skeleton';

export default function TokenTable() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {

    const timer = setTimeout(async () =>{
      const initialTokens = await generateMockTokens(100);
      setTokens(initialTokens);
      setIsLoading(false);

      const ws = createMockService(initialTokens);
      ws.connect();

      const unsubscribe = ws.subscribe((update: PriceUpdate) => {
        setTokens((prev) => 
          prev.map((t) => {
            if (t.id === update.tokenId) {
              return {
                ...t,
                price: update.price,
                marketCap: update.marketCap,
                volume: update.volume,
                priceChange: update.priceChange,
              };
            }
            return t;
          })
        );
      });

      return () => {
        unsubscribe();
        ws.disconnect();
      };
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  const newPairs = useMemo(() => tokens.filter(t => t.status === 'new'), [tokens]);
  const finalStretch = useMemo(() => tokens.filter(t => t.status === 'final'), [tokens]);
  const migrated = useMemo(() => tokens.filter(t => t.status === 'migrated'), [tokens]);

  if (isLoading) {
    return (
      <div className="flex flex-col md:flex-row h-full w-full overflow-hidden bg-[#101114]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col h-full border-r border-border last:border-r-0 min-w-[320px] flex-1 bg-background/50">
             <div className="px-3 py-2 border-b border-border h-10 bg-[#0a0a0a]" />
             <div className="">
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
    <div className="flex flex-col md:flex-row h-full w-full overflow-x-auto bg-[#101114] text-foreground ">
      <TokenColumn title="New Pairs" columnId="new" tokens={newPairs} />
      <TokenColumn title="Final Stretch" columnId="final" tokens={finalStretch} />
      <TokenColumn title="Migrated" columnId="migrated" tokens={migrated} />
    </div>
  );
}
