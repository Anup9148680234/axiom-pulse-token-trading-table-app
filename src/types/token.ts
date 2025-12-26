export interface Token {
    id: string;
    name: string;
    symbol: string;
    wallet: string;
    image: string;
    marketCap: number;
    volume: number;
    price: number;
    priceChange: {
        m5: number;
        h1: number;
        h6: number;
        h24: number;
    };
    transactions: number;
    tradePressure: {
        buy?: number,
        sell?: number,
    },
    holders: number;
    createdAt: number; 
    socials: {
        twitter?: string;
        telegram?: string;
        website?: string;
    };
    audit: {
        scam: boolean;
        verified: boolean;
    };
    status: 'new' | 'final' | 'migrated';
    signals: TokenSignals;
    bondingPercent: number;
}

export interface PriceUpdate {
    tokenId: string;
    price: number;
    marketCap: number;
    volume: number;
    priceChange: {
        m5: number;
        h1: number;
        h6: number;
        h24: number;
    };
    holders: number;
    transactions: number;
    tradePressure: {
        buy?: number,
        sell?: number,
    },
    bondingPercent: number;
    audit: {
        scam: boolean;
        verified: boolean;
    };
    status: 'new' | 'final' | 'migrated';   
}

export type SortOption = 'age' | 'marketCap' | 'volume' | 'priceChange';
export type SortDirection = 'asc' | 'desc';




export type TokenSignals = {
  momentum: 'bullish' | 'neutral' | 'bearish'
  risk: 'low' | 'medium' | 'high'
  activity: 'hot' | 'normal' | 'dead'
}

export interface TableFilter {
    sort: SortOption;
    direction: SortDirection;
    timeRange: 'm5' | 'h1' | 'h6' | 'h24';
}
