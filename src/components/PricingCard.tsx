import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  cta,
}: PricingCardProps) {
  return (
    <Card
      className={`relative flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        highlighted
          ? "border-primary shadow-xl ring-2 ring-primary/20 scale-[1.02]"
          : "hover:shadow-lg"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className="pb-2 pt-6">
        <h3 className="font-heading text-xl font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="font-heading text-4xl font-extrabold">{price}</span>
          {period && <span className="text-sm text-muted-foreground">{period}</span>}
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col pt-4">
        <ul className="flex-1 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
              {feature}
            </li>
          ))}
        </ul>
        <Link to="/signup" className="mt-6">
          <Button
            className="w-full"
            variant={highlighted ? "default" : "outline"}
          >
            {cta}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
