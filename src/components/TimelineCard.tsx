import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { TimelineEvent } from "@/data/careTimeline";
import { categoryColors } from "@/data/careTimeline";

interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
}

export default function TimelineCard({ event, index }: TimelineCardProps) {
  const [expanded, setExpanded] = useState(false);
  const colors = categoryColors[event.category];

  return (
    <div
      className="flex gap-4 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg">
          {event.icon}
        </div>
        <div className="w-0.5 flex-1 bg-border" />
      </div>

      {/* Card */}
      <Card
        className={`mb-6 flex-1 cursor-pointer transition-all duration-200 hover:shadow-md ${
          expanded ? "ring-2 ring-primary/20" : ""
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs font-medium">
                  Week {event.week}
                </Badge>
                <Badge className={`${colors.bg} ${colors.text} border ${colors.border} text-xs`}>
                  {event.category}
                </Badge>
              </div>
              <h3 className="mt-2 font-heading text-base font-bold">{event.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
            </div>
            <button className="mt-1 shrink-0 text-muted-foreground">
              {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          </div>

          {expanded && (
            <div className="mt-3 rounded-lg bg-muted p-3 text-sm leading-relaxed text-foreground animate-fade-in">
              {event.details}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
