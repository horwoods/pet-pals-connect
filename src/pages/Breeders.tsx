import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import BreederCard from "@/components/BreederCard";
import { getSortedBreeders } from "@/data/breeders";

export default function Breeders() {
  const [query, setQuery] = useState("");
  const breeders = getSortedBreeders(query);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-3xl font-extrabold md:text-4xl">
          Find Your Breeder
        </h1>
        <p className="mt-2 text-muted-foreground">
          Accredited breeders are shown first, then alphabetically
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, breed, location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl gap-4">
        {breeders.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            No breeders found matching "{query}"
          </p>
        ) : (
          breeders.map((breeder) => (
            <BreederCard key={breeder.id} breeder={breeder} />
          ))
        )}
      </div>
    </div>
  );
}
