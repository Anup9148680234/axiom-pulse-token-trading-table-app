import { Token, PriceUpdate } from '@/types/token';

type Listener = (update: PriceUpdate) => void;

export class WebSocketMock {
    private listeners: Listener[] = [];
    private intervalId: NodeJS.Timeout | null = null;
    private tokens: Token[] = [];

    constructor(initialTokens: Token[]) {
        this.tokens = initialTokens;
    }

    connect() {
        if (this.intervalId) return;

        this.intervalId = setInterval(() => {
            this.emitRandomUpdate();
        }, 300); 
    }

    disconnect() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    subscribe(listener: Listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    }

    private emitRandomUpdate() {
    if (!this.tokens.length) return;

    const index = Math.floor(Math.random() * this.tokens.length);
    const token = this.tokens[index];

    /* ---------------- PRICE ---------------- */
    const priceFactor = 1 + (Math.random() * 0.04 - 0.02); 
    token.price = +(token.price * priceFactor).toFixed(6);

    /* ---------------- MARKET CAP ---------------- */
    token.marketCap = Math.max(
      1000,
      token.marketCap * priceFactor + (Math.random() * 5000 - 2500)
    );

    /* ---------------- VOLUME ---------------- */
    token.volume = Math.max(
      0,
      token.volume + Math.random() * 6000 - 3000
    );

    /* ---------------- HOLDERS ---------------- */
    token.holders = Math.max(
      1,
      token.holders + Math.floor(Math.random() * 6 - 3)
    );

    /* ---------------- TRANSACTIONS ---------------- */
    token.transactions += Math.floor(Math.random() * 15);

    /* ---------------- TRADE PRESSURE ---------------- */
    const buy = Math.floor(Math.random() * 100);
    token.tradePressure = {
      buy,
      sell: 100 - buy,
    };

    /* ---------------- PRICE CHANGE WINDOWS ---------------- */
    token.priceChange = {
      m5: token.priceChange.m5 + (Math.random() * 1 - 0.5),
      h1: token.priceChange.h1 + (Math.random() * 2 - 1),
      h6: token.priceChange.h6 + (Math.random() * 3 - 1.5),
      h24: token.priceChange.h24 + (Math.random() * 5 - 2.5),
    };

    /* ---------------- BONDING % ---------------- */
    token.bondingPercent = Math.min(
      100,
      Math.max(0, token.bondingPercent + Math.floor(Math.random() * 5 - 2))
    );

    /* ---------------- AUDIT FLAGS (RARE) ---------------- */
    if (Math.random() < 0.01) token.audit.scam = !token.audit.scam;
    if (Math.random() < 0.02) token.audit.verified = !token.audit.verified;

    /* ---------------- STATUS MIGRATION ---------------- */
    if (token.bondingPercent > 90 && token.status === "new") {
      token.status = "final";
    }

    if (token.bondingPercent === 100 && token.status === "final") {
      token.status = "migrated";
    }

    /* ---------------- SIGNALS ---------------- */
    token.signals = token.signals || {};

    /* ---------------- EMIT UPDATE ---------------- */
    const update: PriceUpdate = {
      tokenId: token.id,
      price: token.price,
      marketCap: token.marketCap,
      volume: token.volume,
      holders: token.holders,
      transactions: token.transactions,
      tradePressure: token.tradePressure,
      priceChange: token.priceChange,
      bondingPercent: token.bondingPercent,
      audit: token.audit,
      status: token.status,
    };  

    this.listeners.forEach((listener) => listener(update));
  }
}

export const createMockService = (tokens: Token[]) => new WebSocketMock(tokens);
