export interface TimelineEvent {
  id: string;
  week: number;
  title: string;
  description: string;
  details: string;
  category: "health" | "nutrition" | "training" | "socialization" | "grooming";
  icon: string;
}

export const careTimeline: TimelineEvent[] = [
  {
    id: "1",
    week: 1,
    title: "First Vet Visit",
    description: "Initial health check and vaccination schedule",
    details: "Schedule your pet's first veterinary appointment within 48-72 hours of bringing them home. The vet will perform a full physical exam, check for parasites, and set up a vaccination schedule. Bring any health records from the breeder.",
    category: "health",
    icon: "🏥",
  },
  {
    id: "2",
    week: 1,
    title: "Home Setup",
    description: "Create a safe, comfortable space",
    details: "Set up a quiet area with a crate or bed, food and water bowls, and appropriate toys. Remove hazards like electrical cords and toxic plants. Establish where your pet will eat, sleep, and go to the bathroom.",
    category: "training",
    icon: "🏠",
  },
  {
    id: "3",
    week: 2,
    title: "Nutrition Plan",
    description: "Establish feeding routine and diet",
    details: "Continue the same food the breeder was using for at least 2 weeks. Set consistent meal times (3x daily for puppies/kittens, 2x for adults). Monitor appetite and stool quality. Consult your vet about the best long-term diet.",
    category: "nutrition",
    icon: "🍽️",
  },
  {
    id: "4",
    week: 2,
    title: "Begin Socialization",
    description: "Introduce to family members and sounds",
    details: "Gradually introduce your pet to household members, common sounds (vacuum, TV, doorbell), and gentle handling. Keep interactions positive and short. Avoid overwhelming them with too many new experiences at once.",
    category: "socialization",
    icon: "👋",
  },
  {
    id: "5",
    week: 3,
    title: "Basic Training Start",
    description: "Begin name recognition and simple commands",
    details: "Start with name recognition using treats and positive reinforcement. For puppies: sit, stay, come. For kittens: litter box training and scratching post use. Keep sessions to 5-10 minutes, 2-3 times daily.",
    category: "training",
    icon: "🎓",
  },
  {
    id: "6",
    week: 4,
    title: "Second Vaccination",
    description: "Follow-up vaccines and health check",
    details: "Your pet will receive their second round of core vaccinations. The vet will check weight gain, dental development, and overall growth. Discuss flea, tick, and heartworm prevention options.",
    category: "health",
    icon: "💉",
  },
  {
    id: "7",
    week: 5,
    title: "First Grooming",
    description: "Introduce grooming routine gently",
    details: "Start with short, positive grooming sessions. Brush coat, handle paws, ears, and mouth. Use treats as rewards. This builds comfort with grooming that will last a lifetime. Consider professional grooming for breed-specific needs.",
    category: "grooming",
    icon: "✨",
  },
  {
    id: "8",
    week: 6,
    title: "Expand Socialization",
    description: "Meet other pets and visit new places",
    details: "After initial vaccinations, begin supervised introductions to other vaccinated pets. Take short car rides, visit pet-friendly stores. Expose to different surfaces, people of various ages, and gentle outdoor experiences.",
    category: "socialization",
    icon: "🐾",
  },
  {
    id: "9",
    week: 8,
    title: "Third Vaccination",
    description: "Final core vaccine round",
    details: "Complete the core vaccination series. Discuss spay/neuter timeline with your vet. Get a dental check and discuss long-term health screening appropriate for your pet's breed.",
    category: "health",
    icon: "🩺",
  },
  {
    id: "10",
    week: 8,
    title: "Advanced Training",
    description: "Build on basics with new skills",
    details: "Advance to leash walking, recall at distance, and impulse control exercises. For cats, introduce puzzle feeders and clicker training. Consider enrolling in a puppy/kitten training class for professional guidance.",
    category: "training",
    icon: "🏆",
  },
  {
    id: "11",
    week: 10,
    title: "Diet Transition",
    description: "Adjust portions and food as they grow",
    details: "Reassess food portions based on growth rate. Begin transitioning to age-appropriate food if needed (gradual 7-day transition). Monitor body condition score and adjust portions accordingly.",
    category: "nutrition",
    icon: "🥗",
  },
  {
    id: "12",
    week: 12,
    title: "3-Month Milestone",
    description: "Full health review and care plan update",
    details: "Comprehensive 3-month check-up with your vet. Review vaccination records, discuss ongoing preventive care, and plan for adolescent stages. Celebrate your journey together! Your pet should be well-adjusted and thriving.",
    category: "health",
    icon: "🎉",
  },
];

export const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  health: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  nutrition: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  training: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  socialization: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  grooming: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
};
