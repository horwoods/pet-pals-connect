import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import TimelineCard from "@/components/TimelineCard";
import { careTimeline, categoryColors } from "@/data/careTimeline";

const categories = ["all", "health", "nutrition", "training", "socialization", "grooming"] as const;

export default function CareTimeline() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? careTimeline
      : careTimeline.filter((e) => e.category === filter);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-3xl font-extrabold md:text-4xl">
          First 3 Months Care Plan
        </h1>
        <p className="mt-2 text-muted-foreground">
          Click on any event to see detailed guidance for your new pet
        </p>
      </div>

      {/* Filters */}
      <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
        {categories.map((cat) => {
          const colors = cat !== "all" ? categoryColors[cat] : null;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : colors
                  ? `${colors.bg} ${colors.text} border ${colors.border} hover:opacity-80`
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Week markers */}
      <div className="mx-auto mt-6 flex max-w-2xl justify-between px-14 text-xs text-muted-foreground">
        <span>Week 1</span>
        <span>Week 4</span>
        <span>Week 8</span>
        <span>Week 12</span>
      </div>
      <div className="mx-auto mt-1 max-w-2xl px-14">
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-primary via-amber-glow to-sage" style={{ width: "100%" }} />
        </div>
      </div>

      {/* Timeline */}
      <div className="mx-auto mt-10 max-w-2xl">
        {filtered.map((event, i) => (
          <TimelineCard key={event.id} event={event} index={i} />
        ))}
      </div>
    </div>
  );
}
