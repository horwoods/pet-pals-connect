import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShieldCheck, MapPin } from "lucide-react";
import type { Breeder } from "@/data/breeders";

interface BreederCardProps {
  breeder: Breeder;
}

export default function BreederCard({ breeder }: BreederCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
            {breeder.avatar}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-heading text-lg font-bold truncate">{breeder.name}</h3>
              {breeder.isAccredited && (
                <Badge className="bg-badge-gold text-badge-gold-foreground border-0 gap-1 shrink-0">
                  <ShieldCheck className="h-3 w-3" />
                  Accredited
                </Badge>
              )}
            </div>

            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {breeder.location}
            </div>

            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{breeder.bio}</p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 text-sm font-medium">
                <Star className="h-4 w-4 fill-amber-glow text-amber-glow" />
                {breeder.rating}
                <span className="text-muted-foreground">({breeder.reviewCount})</span>
              </div>

              <span className="text-border">•</span>

              <span className="text-sm text-muted-foreground">{breeder.yearsExperience} yrs exp</span>

              <span className="text-border">•</span>

              <span className="text-sm text-muted-foreground">{breeder.specialty}</span>
            </div>

            {breeder.isAccredited && breeder.accreditationDate && (
              <p className="mt-2 text-xs text-sage">
                Accredited since {new Date(breeder.accreditationDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
            )}

            <div className="mt-3 flex flex-wrap gap-1.5">
              {breeder.breeds.map((breed) => (
                <Badge key={breed} variant="secondary" className="text-xs font-normal">
                  {breed}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
