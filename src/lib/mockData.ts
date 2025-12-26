import { Token, TokenSignals } from "@/types/token";

const REALISTIC_TOKENS = [
  {
    symbol: "Advertisement",
    name: "This is an AD",
    image: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/CbjiKg2akRS2RazHPcBgAiGGH9pZT8YdcyfqnnzUe1MW.webp",
    wallet: "7gF2kqPZ8LxTnVdM3JbQKcYh9S4EoR5W2aXU",
  },
  {
    symbol: "EARN",
    name: "Why Solana is the Best",
    image: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/5BEwXnifagDJfMRQ1TEdwYhgRPi1wBQUBiUzxP6pump.webp",
    wallet: "C3mZP8T9XQYd2kA6fWJ4R7SgHnL5oBvUe",
  },
  {
    symbol: "FLYWHEEL",
    name: "The Flywheel Effect",
    image: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/BLSm6co5NAM32bsKfzRWfSR4Ue8rVCPTU4xzHLSKpump.webp",
    wallet: "9A5gVJYcWkEo7P3Zf6S8Q4M2nTBLXHURd",
  },
  {
    symbol: "PEAK",
    name: "Peak",
    image: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/ENoyitfQXWYvnRUCHCm61VdoMkTN4MYsnnuDY1bxpump.webp",
    wallet: "F7R9Y1Q5S2M8cE6PZJgD3nUoK4HBTdW",
  },
  {
    symbol: "MoonWhale",
    name: "The Moon Whale",
    image: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/93fdgLNQGYiFoNHQiz9LDtdAFiJ2oCURXHu4U979pump.webp",
    wallet: "3T9gWQY7P2HkC5M8RZ4o6JFDXnEVSUdA",
  },
  {
    symbol: "NinjaWhale",
    name: "The Ninja Whale",
    image: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/CNb8jQe7cVuywpsz5nmEDZdpY3xmS29BJX2Rt6hjWwHV.webp",
    wallet: "8ZQn5kW4C7R1F3oE2P9gA6JHMSDXYU",
  },
  {
    symbol: "White Dragon",
    name: "The White Dragon",
    image: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/8SM2Rp3ET6PsT7qviKsYWebJ5G1qwQ5hf5hNfNBTpump.webp",
    wallet: "8SM2Rp3ET6PsT7qviKsYWebJ5G1qwQ5hf5hNfNBTpump",
  },
  {
    symbol: "BTP",
    name: "Buy The Pikachu",
    image: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/2a8yzTsNasKGcW7h1VAtGxhhU7dkyPqWdyjAkrjok5FC.webp",
    wallet: "2a8yzTsNasKGcW7h1VAtGxhhU7dkyPqWdyjAkrjok5FC",
  },
  {
    symbol: "Tesla Ai",
    name: "Tesla Ai",
    image: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/8spiKFS8fqS1tpobS5ZBmiAdgEFA1LesmcN3ujhwfSeL.webp",
    wallet: "8spiKFS8fqS1tpobS5ZBmiAdgEFA1LesmcN3ujhwfSeL",
  },
  {
    symbol: "Memes",
    name: "Memes",
    image: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/8iFgwGMvtJ1rYGGpLdgdWms72CZUckdtFMpSdus4pump.webp",
    wallet: "8iFgwGMvtJ1rYGGpLdgdWms72CZUckdtFMpSdus4pump",
  },
  {
    symbol: "Coca-Cola",
    name: "Coca-Cola",
    image: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/7dufC1Xv5nFf9gJ4eDXdjyXb2N7auPFS3zTxyq4mAW9T.webp",
    wallet: "7dufC1Xv5nFf9gJ4eDXdjyXb2N7auPFS3zTxyq4mAW9T",
  },
  {
    symbol: "DUCKOFF",
    name: "DUCKOFF",
    image: "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/DBRBwEiwtHvShaQgRiKuHMUvbwpiUfk2ex4wBXVZmoon.webp",
    wallet: "DBRBwEiwtHvShaQgRiKuHMUvbwpiUfk2ex4wBXVZmoon",
  },
  {
    symbol: "APPLE",
    name: "Apple Official Coin",
    image:
      "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/GL7CUp5xu6VKJhKXrtJYbXgNYULfkaUxrPSM2XJsiiAe.webp",
    wallet: "GL7CUp5xu6VKJhKXrtJYbXgNYULfkaUxrPSM2XJsiiAe",
  },
  {
    symbol: "KurolOS",
    name: "KurolOS",
    image:
      "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/EHtsnWdD7sFDCmQiwEzpJkwuvSuz8KSVFV3AGr7XktGP.webp",
    wallet: "EHtsnWdD7sFDCmQiwEzpJkwuvSuz8KSVFV3AGr7XktGP",
  },
  {
    symbol: "NVDIA",
    name: "Nvidia Meme Token",
    image:
      "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/EdMjMGKqrhcbcs8FQpGK2kL1tPxfq4mu1SGAE3Rhpump.webp",
    wallet: "EdMjMGKqrhcbcs8FQpGK2kL1tPxfq4mu1SGAE3Rhpump",
  },
  
  {
    symbol: "TB",
    name: "The Boys",
    image:
      "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/4XYwKKkt2cCx4KzQn6HZ21GMZpMrjuB82c7i1Z6epump.webp",
    wallet: "4XYwKKkt2cCx4KzQn6HZ21GMZpMrjuB82c7i1Z6epump",
  },
  {
    symbol: "corporatism",
    name: "corporatism",
    image:
      "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/8oT9E8yCXmMoF5KxcQAhS9CfH4AQJEfdfUAMsxB5bonk.webp",
    wallet: "8oT9E8yCXmMoF5KxcQAhS9CfH4AQJEfdfUAMsxB5bonk",
  },
  {
    symbol: "Wailord",
    name: "Whale Pokémon",
    image:
      "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/8bpKXdEqVgio9rATRmbSc9FpSuopWMCZAvcFPGkCpump.webp",
    wallet: "8bpKXdEqVgio9rATRmbSc9FpSuopWMCZAvcFPGkCpump",
  },
  {
    symbol: "NYNM",
    name: "New Year New Me",
    image:
      "https://axiomtrading.sfo3.cdn.digitaloceanspaces.com/AKJi2nniD4Fu8U7NSpMVB7UggPSZeY1NKncHc41Rpump.webp",
    wallet: "AKJi2nniD4Fu8U7NSpMVB7UggPSZeY1NKncHc41Rpump",
  },
];

/* ------------------ SIGNAL CALC ------------------ */

function computeSignals(token: Token): TokenSignals {
  const { priceChange, tradePressure, holders, createdAt, audit, transactions } =
    token;

  const ageMinutes = (Date.now() - createdAt) / 60000;

  const buySellRatio =
    tradePressure.sell === 0
      ? tradePressure.buy
      : tradePressure.buy / tradePressure.sell;

  /* ---------- MOMENTUM (MC COLOR) ---------- */

  let momentum: TokenSignals["momentum"] = "neutral";

  if (priceChange.m5 > 5 && priceChange.h1 > 10 && buySellRatio > 1.2) {
    momentum = "bullish";
  } else if (priceChange.m5 < -5 || priceChange.h1 < -10) {
    momentum = "bearish";
  }

  /* ---------- RISK ---------- */

  let risk: TokenSignals["risk"] = "low";

  if (audit.scam || tradePressure.sell > tradePressure.buy * 1.5) {
    risk = "high";
  } else if (ageMinutes < 5 || holders < 20) {
    risk = "medium";
  }

  /* ---------- ACTIVITY (BORDER) ---------- */

  let activity: TokenSignals["activity"] = "normal";

  if (ageMinutes < 2) {
    activity = "hot";
  } else if (transactions < 20) {
    activity = "dead";
  }

  return { momentum, risk, activity };
}

/* ------------------ MAIN GENERATOR ------------------ */

export function generateMockTokens(count: number): Token[] {
  const tokens: Token[] = [];
  const statuses: ("new" | "final" | "migrated")[] = [
    "new",
    "final",
    "migrated",
  ];

  for (let i = 0; i < count; i++) {
    const template = REALISTIC_TOKENS[i % REALISTIC_TOKENS.length];
    const status = statuses[i % statuses.length];

    const buy = Math.floor(Math.random() * 100);
    const sell = 100 - buy;

    const token: Token = {
      id: `token-${i}`,
      name: template.name,
      symbol: template.symbol,
      image: template.image,
      wallet: template.wallet,

      marketCap: Math.random() * 1_000_000 + 5_000,
      volume: Math.random() * 50_000 + 1_000,
      price: +(Math.random() * 10).toFixed(6),

      priceChange: {
        m5: Math.random() * 40 - 10,
        h1: Math.random() * 60 - 20,
        h6: Math.random() * 80 - 30,
        h24: Math.random() * 100 - 40,
      },

      transactions: Math.floor(Math.random() * 1000) + 5,

      tradePressure: {
        buy,
        sell,
      },

      holders: Math.floor(Math.random() * 500) + 5,

      createdAt: Date.now() - Math.floor(Math.random() * 10_000_000),

      socials: {
        twitter: Math.random() > 0.3 ? "https://twitter.com" : undefined,
        telegram: Math.random() > 0.3 ? "https://t.me" : undefined,
        website: Math.random() > 0.5 ? "https://example.com" : undefined,
      },

      audit: {
        scam: Math.random() < 0.1,
        verified: Math.random() > 0.8,
      },

      status,
      signals: {} as TokenSignals,

      bondingPercent: Math.floor(Math.random() * 100),

    };

    token.signals = computeSignals(token);

    tokens.push(token);
  }

  return tokens;
}