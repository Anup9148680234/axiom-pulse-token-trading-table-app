// app/components/Navbar.tsx or src/components/Navbar.tsx
"use client";

import Image from "next/image";
import { DownIcon } from "../icons/Down";
import { FC } from "react";
import { BellIcon } from "../icons/Bell";
import { LogoIcon } from "../icons/Logo";
import { SearchIcon } from "../icons/Search";
import { StarIcon } from "../icons/Star";
import { Wallet , Search } from "lucide-react";
import { SOLIcon } from "../icons/SOL";
import { SettingsIcon } from "../icons/Settings";
import { USDCIcon } from "../icons/USDC";

const navItems = [
  "Discover",
  "Pulse",
  "Trackers",
  "Perpetuals",
  "Yield",
  "Vision",
  "Portfolio",
  "Rewards",
];

export const Navbar: FC = () => {
  return (
    <header className="w-full border-b border-neutral-800 bg-[#050509] text-sm text-neutral-200 mb-2.5 px-4">
      <div className="mx-auto flex h-16 w-full items-between justify-between gap-6 px-2">
        {/* Left: Logo */}
        <button className="flex items-center justify-center rounded-full bg-transparent p-1 -ml-1 -mt-px hover:opacity-120">
          {/* Replace with your logo image if you want */}
          <LogoIcon />
        </button>

        {/* Center: Nav links */}
        <nav className="hidden lg:flex flex-1 items-center gap-3 -ml-3 -mt-px">
          {navItems.map((item) => (
            <button
              key={item}
              className={`relative text-[14px] font-medium tracking-normal transition-colors ${
                item === "Pulse"
                  ? "text-[#3d6aff] px-2.5 pb-[6px] pt-1 hover:text-[#3d6aff] hover:bg-[rgba(82,111,255,0.2)] rounded-[5px]"
                  : "text-white hover:text-[#3d6aff] hover:bg-[rgba(82,111,255,0.2)] px-2.5 pb-1.5 pt-1 rounded-[5px]"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search circle */}
          <button className="flex h-8 w-9 items-center justify-center rounded-full border border-neutral-800 bg-black/40 hover:bg-black/70">
            <SearchIcon />
          </button>

          {/* Token selector pill */}
          <button className="flex h-8 items-center gap-2 rounded-full border border-neutral-800 bg-black/40 px-3 py-1.5 hover:bg-black/70">
            <div className="flex h-3 w-3 items-center justify-center rounded-full ">
              <SOLIcon height="11px" width="11px" />
            </div>
            <span className="text-sm text-white font-semibold">SOL</span>
            <span className="text-xs text-neutral-500">
              <DownIcon />
            </span>
          </button>

          {/* Deposit button */}
          <button className="rounded-full bg-[#526fff] h-8  px-3  pb-1.5 pt-1 text-sm font-bold text-black shadow-sm hover:bg-[#3155d5]">
            Deposit
          </button>

          {/* Icon pills (star, bell, etc.) */}
          <button className="hidden lg:flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-[#22242d] text-lg hover:bg-black/70">
            <StarIcon />
          </button>

          {/* Notification bell */}
          <button className="hidden lg:flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-[#22242d] text-lg hover:bg-black/70">
            <BellIcon />
          </button>

          {/* Small stats pill */}
          <button className="hidden lg:flex items-center gap-2 rounded-full border border-neutral-800 bg-[#22242d] px-3 py-1.5 hover:bg-black/70">
            
            <Wallet  size={16} stroke="#fff" />
            <SOLIcon height="8px" width="11x" />
            <span className="text-sm font-bold text-white">0</span>

            {/* divider line vertical */}
            <span className="h-4 w-px bg-neutral-700" />

            <USDCIcon height="16px" width="16x" />
            <span className="text-sm font-bold text-white">0</span>
            <span className="text-xs text-neutral-500">
              {" "}
              <DownIcon />
            </span>
          </button>

          {/* Profile circle */}
          <button className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-lime-300 to-emerald-500">
            <span className="text-xs font-bold text-white">2E</span>
            <span className="absolute -bottom-0.5 -right-0.5 h-[16px] w-[16px] rounded-full border border-black border-[4px] bg-emerald-500" />
          </button>

          {/* Settings icon */}
          <button className="hidden lg:flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-[#22242d] text-lg hover:bg-black/70">
            <SettingsIcon size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};
