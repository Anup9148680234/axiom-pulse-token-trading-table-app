import { Card, CardContent } from "@/components/ui/Card";
import { SkeletonBlock } from "@/components/ui/SkeletonBlock";

type SkelProps = { className: string };

function Skel({ className }: SkelProps) {
  return <SkeletonBlock className={className} />;
}

function DotRow({ count = 3 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Skel key={i} className="h-2 w-2 rounded-full bg-muted/20" />
      ))}
    </div>
  );
}

function ChipRow({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-4 gap-2 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <Skel key={i} className="h-6 w-full rounded-full bg-muted/10" />
      ))}
    </div>
  );
}

export function Skeleton() {
  return (
    <Card className="bg-[#0f0f0f] border-border overflow-hidden">
      <CardContent className="p-3">
        <div className="flex items-start justify-between mb-3">
          <div className="flex gap-3">
            <Skel className="w-12 h-12 rounded-md bg-muted/20" />

            <div className="flex flex-col justify-between py-0.5 w-24">
              <div className="flex flex-col gap-1.5">
                <Skel className="h-4 w-12 bg-muted/20" />
                <Skel className="h-3 w-20 bg-muted/20" />
              </div>

              <div className="flex items-center gap-2 mt-1">
                <Skel className="h-2 w-8 bg-muted/20" />
                <DotRow count={3} />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between h-12 py-0.5 items-end">
            <Skel className="h-4 w-16 bg-muted/20" />
            <Skel className="h-3 w-12 bg-muted/20" />
          </div>
        </div>

        <ChipRow count={4} />

        <div className="flex items-center justify-between pt-1">
          <div className="flex gap-3">
            <Skel className="h-3 w-8 bg-muted/20" />
            <Skel className="h-3 w-10 bg-muted/20" />
            <Skel className="h-3 w-12 bg-muted/20" />
          </div>
          <Skel className="h-4 w-10 rounded-sm bg-muted/20" />
        </div>
      </CardContent>
    </Card>
  );
}
