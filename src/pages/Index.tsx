import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Calendar, Search, Heart } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";

const features = [
  {
    icon: ShieldCheck,
    title: "Accredited Breeders",
    description: "Find verified, trustworthy breeders with our accreditation system",
  },
  {
    icon: Calendar,
    title: "Care Timeline",
    description: "Visual 3-month care plan with clickable milestones for your new pet",
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Accredited breeders appear first so you find the best match quickly",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Connect breeders with loving owners for the perfect pet journey",
  },
];

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="animate-fade-in">
              <h1 className="font-heading text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                Your Pet's Journey{" "}
                <span className="text-primary">Starts Here</span>
              </h1>
              <p className="mt-4 max-w-lg text-lg text-muted-foreground">
                Connect with accredited breeders, get personalized care plans, and
                give your new companion the best start in life.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/breeders">
                  <Button size="lg" className="font-semibold">
                    Find a Breeder
                  </Button>
                </Link>
                <Link to="/care-timeline">
                  <Button size="lg" variant="outline" className="font-semibold">
                    View Care Plans
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <img
                src={heroImage}
                alt="Happy pets together in a meadow"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-heading text-3xl font-bold">
            Everything You Need
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-muted-foreground">
            From finding the right breeder to caring for your new pet
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="animate-fade-in rounded-xl border border-border bg-background p-6 text-center transition-shadow hover:shadow-md"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold">
            Ready to Find Your Perfect Pet?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            Join thousands of happy pet owners who found their companions through Pet Relate Hub.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/signup">
              <Button size="lg">Get Started Free</Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
