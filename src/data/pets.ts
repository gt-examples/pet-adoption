export interface Pet {
  slug: string;
  name: string;
  species: "dog" | "cat";
  breed: string;
  age: number;
  fee: number;
  availableDate: Date;
  status: "available" | "pending" | "adopted";
  weight: number; // lbs
  sex: "male" | "female";
  color: string;
  temperament: string[];
  description: string;
  healthInfo: string;
  adoptionRequirements: string;
}

export const pets: Pet[] = [
  {
    slug: "luna",
    name: "Luna",
    species: "dog",
    breed: "Golden Retriever",
    age: 3,
    fee: 250,
    availableDate: new Date("2026-03-01"),
    status: "available",
    weight: 65,
    sex: "female",
    color: "Golden",
    temperament: ["friendly", "gentle", "energetic", "loyal"],
    description:
      "Luna is a joyful Golden Retriever who loves long walks, swimming, and playing fetch. She gets along wonderfully with children and other dogs. She was rescued from a family that could no longer care for her and has been thriving in our shelter.",
    healthInfo:
      "Spayed, up to date on all vaccinations, microchipped. No known health issues. Recent dental cleaning performed.",
    adoptionRequirements:
      "Requires a home with a fenced yard. Best suited for an active family. Previous dog ownership experience preferred.",
  },
  {
    slug: "mochi",
    name: "Mochi",
    species: "cat",
    breed: "Scottish Fold",
    age: 2,
    fee: 180,
    availableDate: new Date("2026-02-20"),
    status: "available",
    weight: 9,
    sex: "female",
    color: "Gray tabby",
    temperament: ["calm", "affectionate", "curious", "quiet"],
    description:
      "Mochi is a sweet and quiet Scottish Fold who loves curling up on laps and watching birds from the window. She is an ideal companion for apartment living and does well as the only pet in the household.",
    healthInfo:
      "Spayed, up to date on all vaccinations, microchipped. Annual checkup completed. FIV/FeLV negative.",
    adoptionRequirements:
      "Indoor-only home required. Suitable for apartments. Best as the sole pet or with another calm cat.",
  },
  {
    slug: "bruno",
    name: "Bruno",
    species: "dog",
    breed: "German Shepherd",
    age: 5,
    fee: 200,
    availableDate: new Date("2026-02-15"),
    status: "pending",
    weight: 80,
    sex: "male",
    color: "Black and tan",
    temperament: ["protective", "intelligent", "confident", "trainable"],
    description:
      "Bruno is a well-trained German Shepherd with excellent obedience skills. He is loyal and protective, making him a great companion for experienced dog owners. He enjoys structured activities and mental challenges.",
    healthInfo:
      "Neutered, up to date on all vaccinations, microchipped. Hip evaluation completed with good results. On joint supplement.",
    adoptionRequirements:
      "Experienced dog owner required. Home with a large fenced yard preferred. Not recommended for homes with small children.",
  },
  {
    slug: "cleo",
    name: "Cleo",
    species: "cat",
    breed: "Siamese",
    age: 1,
    fee: 150,
    availableDate: new Date("2026-01-10"),
    status: "adopted",
    weight: 7,
    sex: "female",
    color: "Seal point",
    temperament: ["vocal", "playful", "social", "intelligent"],
    description:
      "Cleo is a lively Siamese kitten who loves to talk and play. She is incredibly social and thrives on human interaction. She enjoys puzzle toys and will follow you around the house.",
    healthInfo:
      "Spayed, up to date on all vaccinations, microchipped. FIV/FeLV negative. Healthy weight for her age.",
    adoptionRequirements:
      "Indoor-only home required. Needs daily interactive playtime. Does well with other sociable cats.",
  },
  {
    slug: "rex",
    name: "Rex",
    species: "dog",
    breed: "Labrador Retriever",
    age: 4,
    fee: 220,
    availableDate: new Date("2026-03-15"),
    status: "available",
    weight: 72,
    sex: "male",
    color: "Chocolate",
    temperament: ["friendly", "outgoing", "active", "gentle"],
    description:
      "Rex is a lovable Chocolate Lab who has never met a stranger. He adores water, fetching tennis balls, and belly rubs. He is fantastic with children of all ages and would make an excellent family dog.",
    healthInfo:
      "Neutered, up to date on all vaccinations, microchipped. Heartworm negative. Allergy-tested, mild seasonal allergies managed with medication.",
    adoptionRequirements:
      "Active family preferred. Fenced yard recommended. Gets along well with other dogs and children.",
  },
  {
    slug: "whiskers",
    name: "Whiskers",
    species: "cat",
    breed: "Maine Coon",
    age: 6,
    fee: 190,
    availableDate: new Date("2026-02-28"),
    status: "pending",
    weight: 18,
    sex: "male",
    color: "Brown tabby",
    temperament: ["gentle", "playful", "sociable", "patient"],
    description:
      "Whiskers is a majestic Maine Coon with a big personality to match his size. Despite his imposing appearance, he is incredibly gentle and patient. He loves being brushed and will happily sit beside you for hours.",
    healthInfo:
      "Neutered, up to date on all vaccinations, microchipped. FIV/FeLV negative. Heart screening completed with normal results. Regular grooming needed for his long coat.",
    adoptionRequirements:
      "Indoor-only home required. Needs regular grooming. Does well with children and other pets. Calm household preferred.",
  },
];
