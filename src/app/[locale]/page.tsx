import { T, Num, Currency, DateTime, Branch, Plural, Var } from "gt-next";
import { LocaleSelector } from "gt-next";

const pets = [
  {
    name: "Luna",
    species: "dog",
    breed: "Golden Retriever",
    age: 3,
    fee: 250,
    availableDate: new Date("2026-03-01"),
    status: "available",
  },
  {
    name: "Mochi",
    species: "cat",
    breed: "Scottish Fold",
    age: 2,
    fee: 180,
    availableDate: new Date("2026-02-20"),
    status: "available",
  },
  {
    name: "Bruno",
    species: "dog",
    breed: "German Shepherd",
    age: 5,
    fee: 200,
    availableDate: new Date("2026-02-15"),
    status: "pending",
  },
  {
    name: "Cleo",
    species: "cat",
    breed: "Siamese",
    age: 1,
    fee: 150,
    availableDate: new Date("2026-01-10"),
    status: "adopted",
  },
  {
    name: "Rex",
    species: "dog",
    breed: "Labrador Retriever",
    age: 4,
    fee: 220,
    availableDate: new Date("2026-03-15"),
    status: "available",
  },
  {
    name: "Whiskers",
    species: "cat",
    breed: "Maine Coon",
    age: 6,
    fee: 190,
    availableDate: new Date("2026-02-28"),
    status: "pending",
  },
];

const availableCount = pets.filter((p) => p.status === "available").length;

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    available: "bg-emerald-900/50 text-emerald-400 border-emerald-800",
    pending: "bg-amber-900/50 text-amber-400 border-amber-800",
    adopted: "bg-neutral-800 text-neutral-500 border-neutral-700",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border ${colors[status] || colors.available}`}
    >
      <T>
        <Branch
          branch={status as "available" | "pending" | "adopted"}
          available="Available"
          pending="Pending"
          adopted="Adopted"
        />
      </T>
    </span>
  );
}

function SpeciesLabel({ species }: { species: string }) {
  return (
    <T>
      <Branch
        branch={species as "dog" | "cat"}
        dog="Dog"
        cat="Cat"
      />
    </T>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              <T>Pet Adoption Center</T>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/pet-adoption"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-10">
          <T>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
              Find your new companion
            </h2>
            <p className="text-base text-neutral-400 max-w-xl leading-relaxed mb-2">
              Browse our adoptable pets below. Each listing includes breed
              details, age, adoption fee, and availability date — all formatted
              for your locale.
            </p>
          </T>
          <p className="text-sm text-neutral-500">
            <Plural
              n={availableCount}
              one={
                <T>
                  <Num>{availableCount}</Num> pet currently available
                </T>
              }
              other={
                <T>
                  <Num>{availableCount}</Num> pets currently available
                </T>
              }
            />
          </p>
        </div>

        <T>
          <p className="text-xs text-neutral-600 mb-8 border border-neutral-800 rounded-lg px-4 py-3">
            This is an example application built with General Translation to
            demonstrate internationalization features including locale-aware
            number, currency, and date formatting.
          </p>
        </T>

        <div className="space-y-4">
          {pets.map((pet) => (
            <div
              key={pet.name}
              className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-100">
                    <Var>{pet.name}</Var>
                  </h3>
                  <p className="text-sm text-neutral-400">
                    <Var>{pet.breed}</Var>{" "}
                    <span className="text-neutral-600">·</span>{" "}
                    <SpeciesLabel species={pet.species} />
                  </p>
                </div>
                <StatusBadge status={pet.status} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="flex flex-col">
                  <span className="text-neutral-500 mb-1">
                    <T>Age</T>
                  </span>
                  <span className="text-neutral-200">
                    <Plural
                      n={pet.age}
                      one={
                        <T>
                          <Num>{pet.age}</Num> year
                        </T>
                      }
                      other={
                        <T>
                          <Num>{pet.age}</Num> years
                        </T>
                      }
                    />
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-neutral-500 mb-1">
                    <T>Adoption Fee</T>
                  </span>
                  <span className="text-neutral-200">
                    <Currency currency="USD">{pet.fee}</Currency>
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-neutral-500 mb-1">
                    <T>Available From</T>
                  </span>
                  <span className="text-neutral-200">
                    <DateTime>{pet.availableDate}</DateTime>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
