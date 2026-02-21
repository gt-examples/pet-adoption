import { T, Num, Currency, DateTime, Branch, Plural } from "gt-next";
import Link from "next/link";
import { pets } from "@/data/pets";
import Header from "@/components/Header";

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
      <Branch branch={species as "dog" | "cat"} dog="Dog" cat="Cat" />
    </T>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />

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
            <T>
              <Plural
                n={availableCount}
                one={<><Num>{availableCount}</Num> pet currently available</>}
                other={<><Num>{availableCount}</Num> pets currently available</>}
              />
            </T>
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
            <Link
              key={pet.slug}
              href={`/pet/${pet.slug}`}
              className="block border border-neutral-800 rounded-lg p-5 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-100">
                    {pet.name}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {pet.breed}{" "}
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
                    <T>
                      <Plural
                        n={pet.age}
                        one={<><Num>{pet.age}</Num> year</>}
                        other={<><Num>{pet.age}</Num> years</>}
                      />
                    </T>
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
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
