import PricingCard from "@/components/PricingCard";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Get started with limited features",
    features: [
      "Browse breeder listings",
      "View basic care timeline",
      "Limited search (5 per day)",
    ],
    cta: "Sign Up Free",
  },
  {
    name: "Basic",
    price: "$5",
    period: "/month",
    description: "Perfect for a single pet",
    features: [
      "Everything in Free",
      "Unlimited breeder search",
      "Full care timeline access",
      "1 pet profile",
      "Email support",
    ],
    cta: "Start Basic",
  },
  {
    name: "Extended Care",
    price: "$8",
    period: "/pet/month",
    description: "Enhanced care for every pet",
    features: [
      "Everything in Basic",
      "Custom care plan per pet",
      "Direct breeder messaging",
      "Health record tracking",
      "Vet appointment reminders",
      "Priority support",
    ],
    cta: "Start Extended",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$15",
    period: "/month",
    description: "All features, up to 3 pets",
    features: [
      "Everything in Extended Care",
      "Up to 3 pet profiles",
      "Video consultations with breeders",
      "Premium badge on profile",
      "Early access to new features",
      "Dedicated account manager",
      "Export health records",
    ],
    cta: "Go Premium",
  },
];

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-3xl font-extrabold md:text-4xl">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-2 text-muted-foreground">
          Choose the plan that's right for you and your pet
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </div>
  );
}
