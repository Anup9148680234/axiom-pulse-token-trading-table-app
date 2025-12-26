import TokenTable from "@/components/ui/TokenTable/TokenTable";
import { DisplayButton } from "@/components/ui/DisplayButton";
import { Navbar } from "@/components/ui/Navbar";
import { SOLIcon } from "@/components/icons/SOL";
import { BNBIcon } from "@/components/icons/BNB";
import { Tooltipp } from "@/components/ui/Tooltipp";

export default function Page() {
  return (
    <main className="flex h-screen flex-col bg-background overflow-hidden">
      <Navbar />
      <div className="flex items-center justify-between mt-3 mb-3 px-6 ">
        <div className="flex items-center gap-1 ">
          <h1 className="text-[20px] md:text-[20px] font-medium text-foreground tracking-normal mr-1  ">
            Pulse
          </h1>
          <button className="flex items-center  rounded-full border border-neutral-800 bg-[#22242D99] px-2 py-1.5 pt-2 ml-1">
            <span className="text-xs text-neutral-500">
              <Tooltipp content="Solana" offset={10}>
              <SOLIcon height="16px" width="16px" />
              </Tooltipp>
            </span>
          </button>

          <button className="flex items-center opacity-50  rounded-full  bg-black hover:bg-[#22242D99] hover:opacity-100 px-1 py-1 mt-px  ml-0.5">
            <span className="text-xs text-neutral-500">
              <Tooltipp content="BNB" offset={10}>
                <BNBIcon height="10px" width="18px" />
              </Tooltipp>
            </span>
          </button>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <DisplayButton />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden mx-6 my-2 rounded-[5px] border border-[#22242d] bg-column-background backdrop-blur-sm">
        <TokenTable />
      </div>
    </main>
  );
}
