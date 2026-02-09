export interface Breeder {
  id: string;
  name: string;
  location: string;
  specialty: string;
  breeds: string[];
  rating: number;
  reviewCount: number;
  isAccredited: boolean;
  accreditationDate?: string;
  yearsExperience: number;
  avatar: string;
  bio: string;
  petTypes: string[];
}

export const breeders: Breeder[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "Austin, TX",
    specialty: "Golden Retrievers",
    breeds: ["Golden Retriever", "Labrador Retriever"],
    rating: 4.9,
    reviewCount: 142,
    isAccredited: true,
    accreditationDate: "2022-03-15",
    yearsExperience: 12,
    avatar: "SM",
    bio: "Dedicated to raising healthy, happy Golden Retrievers with champion bloodlines and gentle temperaments.",
    petTypes: ["Dogs"],
  },
  {
    id: "2",
    name: "James Thornton",
    location: "Portland, OR",
    specialty: "Maine Coons",
    breeds: ["Maine Coon", "Norwegian Forest Cat"],
    rating: 4.8,
    reviewCount: 98,
    isAccredited: true,
    accreditationDate: "2021-08-20",
    yearsExperience: 15,
    avatar: "JT",
    bio: "Specializing in majestic Maine Coons with exceptional health testing and socialization programs.",
    petTypes: ["Cats"],
  },
  {
    id: "3",
    name: "Amanda Chen",
    location: "San Diego, CA",
    specialty: "French Bulldogs",
    breeds: ["French Bulldog", "Boston Terrier"],
    rating: 4.7,
    reviewCount: 76,
    isAccredited: true,
    accreditationDate: "2023-01-10",
    yearsExperience: 8,
    avatar: "AC",
    bio: "Health-focused breeding program with extensive genetic testing for brachycephalic breeds.",
    petTypes: ["Dogs"],
  },
  {
    id: "4",
    name: "Robert Williams",
    location: "Denver, CO",
    specialty: "Bengal Cats",
    breeds: ["Bengal", "Savannah"],
    rating: 4.6,
    reviewCount: 54,
    isAccredited: false,
    yearsExperience: 6,
    avatar: "RW",
    bio: "Passionate about exotic cat breeds with wild beauty and domestic temperaments.",
    petTypes: ["Cats"],
  },
  {
    id: "5",
    name: "Elena Rodriguez",
    location: "Miami, FL",
    specialty: "Cavalier King Charles",
    breeds: ["Cavalier King Charles Spaniel", "Cocker Spaniel"],
    rating: 4.9,
    reviewCount: 120,
    isAccredited: true,
    accreditationDate: "2020-11-05",
    yearsExperience: 18,
    avatar: "ER",
    bio: "Award-winning breeder known for producing Cavaliers with excellent heart health and loving personalities.",
    petTypes: ["Dogs"],
  },
  {
    id: "6",
    name: "David Park",
    location: "Seattle, WA",
    specialty: "Ragdoll Cats",
    breeds: ["Ragdoll", "Birman"],
    rating: 4.5,
    reviewCount: 43,
    isAccredited: false,
    yearsExperience: 5,
    avatar: "DP",
    bio: "Small cattery focused on breeding gentle, affectionate Ragdolls perfect for families.",
    petTypes: ["Cats"],
  },
  {
    id: "7",
    name: "Lisa Harper",
    location: "Nashville, TN",
    specialty: "Mini Dachshunds",
    breeds: ["Miniature Dachshund", "Standard Dachshund"],
    rating: 4.8,
    reviewCount: 89,
    isAccredited: true,
    accreditationDate: "2023-06-22",
    yearsExperience: 10,
    avatar: "LH",
    bio: "Third-generation Dachshund breeder committed to preserving breed standards and health.",
    petTypes: ["Dogs"],
  },
  {
    id: "8",
    name: "Marcus Green",
    location: "Chicago, IL",
    specialty: "Holland Lops",
    breeds: ["Holland Lop", "Mini Rex"],
    rating: 4.7,
    reviewCount: 67,
    isAccredited: false,
    yearsExperience: 7,
    avatar: "MG",
    bio: "Ethical rabbit breeder raising show-quality Holland Lops with wonderful temperaments.",
    petTypes: ["Rabbits"],
  },
  {
    id: "9",
    name: "Karen Brooks",
    location: "Charlotte, NC",
    specialty: "Poodles",
    breeds: ["Standard Poodle", "Miniature Poodle", "Toy Poodle"],
    rating: 4.9,
    reviewCount: 156,
    isAccredited: true,
    accreditationDate: "2019-04-30",
    yearsExperience: 22,
    avatar: "KB",
    bio: "Champion Poodle breeder with multiple Best in Show awards. All puppies come health-tested and socialized.",
    petTypes: ["Dogs"],
  },
  {
    id: "10",
    name: "Tom Nguyen",
    location: "Phoenix, AZ",
    specialty: "Siamese Cats",
    breeds: ["Siamese", "Oriental Shorthair"],
    rating: 4.4,
    reviewCount: 31,
    isAccredited: false,
    yearsExperience: 4,
    avatar: "TN",
    bio: "Growing cattery specializing in traditional Siamese with striking blue eyes and vocal personalities.",
    petTypes: ["Cats"],
  },
];

export function getSortedBreeders(searchQuery = ""): Breeder[] {
  let filtered = breeders;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = breeders.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.specialty.toLowerCase().includes(q) ||
        b.breeds.some((breed) => breed.toLowerCase().includes(q)) ||
        b.location.toLowerCase().includes(q) ||
        b.petTypes.some((pt) => pt.toLowerCase().includes(q))
    );
  }

  return filtered.sort((a, b) => {
    if (a.isAccredited && !b.isAccredited) return -1;
    if (!a.isAccredited && b.isAccredited) return 1;
    return a.name.localeCompare(b.name);
  });
}
