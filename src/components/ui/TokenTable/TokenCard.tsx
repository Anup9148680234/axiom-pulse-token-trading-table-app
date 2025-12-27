import { memo, useEffect, useRef, useState } from "react";
import { Token } from "@/types/token";
import { Card, CardContent } from "@/components/ui/Card";
import { formatCurrency, formatTimeAgo } from "@/lib/format";
import { cn } from "@/lib/utils";
import {
  Twitter,
  Globe,
  MessageCircle,
  User,
  Lock,
  ChefHat,
  Crosshair,
  Ghost,
  BoxesIcon,
  ZapIcon,
} from "lucide-react";

import { Tooltipp } from "@/components/ui/Tooltipp";
import { HoverModal } from "@/components/ui/HoverModal";
import { CopyIcon } from "@/components/icons/Copy";

interface TokenCardProps {
  token: Token;
}

const MC_COLOR = {
  bullish: "text-[#12AF80]",
  neutral: "text-yellow-400",
  bearish: "text-red-400",
};

function getTokenImageOutlineColor(
  bondingPercent: number,
  status: "new" | "final" | "migrated"
) {
  if (status === "migrated") return "outline-blue-500";

  if (bondingPercent >= 40) return "outline-green-500";
  if (bondingPercent >= 20) return "outline-yellow-400";

  return "outline-red-500";
}

function getTokenBadgeIconUrl(
  bondingPercent: number,
  status: "new" | "final" | "migrated"
) {
  // Migrated → blue
  if (status === "migrated") {
    return "https://axiom.trade/images/virtual-curve.svg";
  }

  // Green
  if (bondingPercent >= 40) {
    return "https://axiom.trade/images/pump.svg";
  }

  // Yellow
  if (bondingPercent >= 20) {
    return "https://axiom.trade/images/virtual-curve-grad.svg";
  }

  // Red
  return "https://axiom.trade/images/mayhem.svg";
}

export const TokenCard = memo(({ token }: TokenCardProps) => {
  const prevPriceRef = useRef(token.price);
  const [flash, setFlash] = useState<"green" | "red" | null>(null);

  const [showBuyBadge, setShowBuyBadge] = useState(false);

  useEffect(() => {
    if (token.price > prevPriceRef.current) {
      setFlash("green");
    } else if (token.price < prevPriceRef.current) {
      setFlash("red");
    }
    prevPriceRef.current = token.price;

    const timeout = setTimeout(() => setFlash(null), 300); 
    return () => clearTimeout(timeout);
  }, [token.price]);

  return (
    <Card
      className={cn(
        " rounded-none bg-[#0f0f0f] border-b border-[#1f1f1f] hover:border-b-[#1f1f1f] hover:bg-[#1e1e1e] transition-all duration-200 cursor-pointer overflow-hidden group relative",
        flash === "green" && "bg-green-500/10 border-green-500/30",
        flash === "red" && "bg-red-500/10 border-red-500/30",
        flash === "green" && token.status === "migrated" && "bg-blue-950 border-blue-500/30"
      )}
    >
      <CardContent className="card p-3">
        {/* TOP ROW: avatar left, everything else right */}
        <div
          onMouseEnter={() => setShowBuyBadge(true)}
          onMouseLeave={() => setShowBuyBadge(false)}
          className="flex items-start gap-3 mb-0  h-24"
        >
          {/* LEFT: Token Image */}
          <div className="relative w-17 h-17 shrink-0 mt-2">
            <div
              className={`
      w-full h-full
      rounded-xs
       outline-1
      outline-offset-2
      ${getTokenImageOutlineColor(token.bondingPercent, token.status)}
    `}
            >
              <div className="w-full h-full bg-muted rounded-xs overflow-hidden flex items-center justify-center">
                {token.image ? (
                  <HoverModal
                    tooltip={
                      <img
                        src={token.image}
                        className="w-[236px] h-[236px] object-contain rounded-lg "
                        draggable={false}
                      />
                    }
                    size={90}
                  >
                    <img
                      src={token.image}
                      alt={token.name}
                      className="w-full h-full object-cover"
                    />
                  </HoverModal>
                ) : (
                  <span className="uppercase text-xl font-bold text-muted-foreground">
                    {token.symbol[0]}
                  </span>
                )}
              </div>
            </div>

            {/* CHAIN BADGE */}
            <div
              className={`absolute -bottom-2 -right-2 bg-background rounded-full p-0.5 outline-1
      ${getTokenImageOutlineColor(token.bondingPercent, token.status)}`}
            >
              <img
                src={getTokenBadgeIconUrl(token.bondingPercent, token.status)}
                alt="token badge"
                className="w-2.5 h-2.5 object-contain"
                draggable={false}
              />
            </div>

            <div className="flex items-center mt-[7px] text-[11.5px] text-[#777A8C] hover:text-[#526fff]">
              <span className="min-w-10 font-medium ">
                <Tooltipp content={"Copy " + token.wallet} side="right">
                  {token.wallet.slice(0, 5) + "..." + "pump"}
                </Tooltipp>
              </span>
            </div>
          </div>

          {/* RIGHT: token info + MC/Vol */}
          <div className="flex-1 flex-col justify-between items-start transform -translate-y-10 ">
            {/* Token Info */}
            <div className="flex flex-col justify-between py-0.5 transform translate-y-10">
              <div className="flex items-center gap-1.5 overflow-visible">
                <span className="font-medium text-[14px]  sm:text-[16px] text-foreground tracking-tight ">
                  {token.symbol}
                </span>
                <Tooltipp content={token.name}>
                  <span className="font-medium text-[14px] sm:text-[16px] text-[#777A8C] truncate  xl:line-clamp-1  max-w-5  sm:max-w-35  lg:max-w-10 xl:max-w-40 hover:text-[#526fff]">
                    {token.name}
                  </span>
                </Tooltipp>
                <CopyIcon className="text-[#777A8C] hover:text-[#1DA1F2]" />
              </div>

              <div className="flex items-center gap-2 text-[14px] text-muted-foreground font-medium">
                <span className="text-[#12AF80]">
                  {formatTimeAgo(token.createdAt)}
                </span>
                <div className="flex items-center gap-1.5">
                  <User size={14} />
                  <Lock size={14} />
                  <div className="flex gap-1 ml-1">
                    {token.socials.twitter && (
                      <Twitter
                        size={14}
                        className="hover:text-[#1DA1F2] transition-colors"
                       
                      />
                    )}
                    {token.socials.website && (
                      <Globe
                        size={14}
                        className="hover:text-blue-400 transition-colors"
                      />
                    )}
                    {token.socials.telegram && (
                      <MessageCircle
                        size={14}
                        className="hover:text-[#0088cc] transition-colors"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* MC & Vol */}
            <div className="text-right flex flex-col justify-between h-12 py-0.5 -mt-2 -ml-3 transform -translate-x-2">
              <div className="flex items-center justify-end gap-1">
                <span className="text-[12px] text-muted-foreground font-medium">
                  MC
                </span>
                <span
                  className={cn(
                    `text-[16px] font-medium tracking-tight transition-colors duration-300 ${
                      MC_COLOR[token.signals.momentum]
                    } ${token.status === "migrated" && token.bondingPercent > 70 ? "text-blue-400" : ""}`,
                    flash === "green"
                      ? "text-[#12AF80]"
                      : flash === "red"
                      ? "text-red-400"
                      : ""
                  )}
                >
                  {formatCurrency(token.marketCap)}
                </span>
              </div>
              <div className="flex items-center justify-end gap-1">
                <span className="text-[12px] text-muted-foreground font-medium">
                  V
                </span>
                <span className="text-[16px] font-medium text-foreground/80">
                  {formatCurrency(token.volume)}
                </span>
              </div>
              <div className="flex items-center justify-end gap-1">
                <span className="text-[11px] text-muted-foreground font-medium">
                  TX
                </span>
                <span className="text-[11px] font-medium text-foreground/80">
                  {token.transactions}
                </span>

                {/* Buy / Sell progress bar */}
                <div className="flex h-0.5 w-6 overflow-hidden rounded-full bg-muted">
                  <div
                    className="bg-[#2fe3ac] transition-all"
                    style={{ width: `${token.tradePressure.buy}%` }}
                  />
                  <div
                    className="bg-[#ec397a] transition-all"
                    style={{ width: `${token.tradePressure.sell}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Price Changes Grid */}
            <div className="grid grid-cols-6 sm:grid-cols-7 md:grid-cols-5  xl:grid-cols-7  gap-0.5 text-xs mb-3 mt-4">
              <div
                className={cn(
                  "flex items-center justify-center gap-0 sm:gap-1 rounded-full py-1 px-4 text-[12px] sm:text-[14px] sm:px-0 bg-black/40 border border-border font-medium",
                  token.priceChange.m5 >= 0 ? "text-[#12AF80]" : "text-red-400"
                )}
              >
                <Tooltipp content="Active Traders Map" side="bottom">
                  <User size={14} className="mr-0 sm:mr-1 w-3 sm:w-3.5 transform translate-y-0 sm:translate-y-0.5" />
                  {token.priceChange.m5.toFixed(0)}%
                </Tooltipp>
              </div>
              <div
                className={cn(
                  "flex items-center justify-center gap-0 sm:gap-1 rounded-full py-1 px-4 text-[12px] sm:text-[14px] sm:px-0 bg-black/40 border border-border font-medium",
                  token.priceChange.h1 >= 0 ? "text-[#12AF80]" : "text-red-400"
                )}
              >
                <Tooltipp content="Dev Holding" side="bottom">
                  <ChefHat size={14} className="mr-0 sm:mr-1 w-3 sm:w-3.5 transform translate-y-0 sm:translate-y-0.5" />
                  {token.priceChange.h1.toFixed(0)}%
                </Tooltipp>
              </div>
              <div
                className={cn(
                  "flex items-center justify-center gap-0 sm:gap-1 rounded-full py-1 px-4 text-[12px] sm:text-[14px] sm:px-0 bg-black/40 border border-border font-medium",
                  token.priceChange.h6 >= 0 ? "text-[#12AF80]" : "text-red-400"
                )}
              >
                <Tooltipp content="Snipers Holding" side="bottom">
                  <Crosshair size={14} className="mr-0 sm:mr-1 w-3 sm:w-3.5 transform translate-y-0 sm:translate-y-0.5" />
                  {token.priceChange.h6.toFixed(0)}%
                </Tooltipp>
              </div>
              <div
                className={cn(
                  "flex items-center justify-center gap-0 sm:gap-1 rounded-full py-1 px-4 text-[12px] sm:text-[14px] sm:px-0 bg-black/40 border border-border font-medium",
                  token.priceChange.h24 >= 0 ? "text-[#12AF80]" : "text-red-400"
                )}
              >
                <Tooltipp content="Insiders holding" side="bottom">
                  <Ghost size={14} className="mr-0 sm:mr-1 w-3 sm:w-3.5 transform translate-y-0 sm:translate-y-0.5" />
                  {token.priceChange.h24.toFixed(0)}%
                </Tooltipp>
              </div>

              <div
                className={cn(
                  "hidden xl:flex items-center justify-center gap-0 sm:gap-1 rounded-full py-1 px-4 text-[12px] sm:text-[14px] sm:px-0 bg-black/40 border border-border font-medium",
                  token.priceChange.h24 >= 0 ? "text-[#12AF80]" : "text-red-400"
                )}
              >
                <Tooltipp content="Bundle holding" side="bottom">
                  <BoxesIcon size={14} className="mr-0 sm:mr-1 w-3 sm:w-3.5 transform translate-y-0 sm:translate-y-0.5" />
                  {token.priceChange.h24.toFixed(0)}%
                </Tooltipp>
              </div>

             

              <div
                className={cn(
                  ` flex ml-4 sm:ml-12 md:-ml-3 xl:ml-8  w-16 sm:w-18 ${
                    showBuyBadge ? "opacity-100" : "opacity-0"
                  } items-center justify-center gap-1 rounded-full py-1 px-0 bg-[#3d6aff] text-black border border-border font-bold`
                )}
              >
                <ZapIcon size={14} fill="#000" stroke="#000" />0 SOL
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

TokenCard.displayName = "TokenCard";