import { T, Var, Num, Currency, DateTime, Branch, Plural } from "gt-next";
import { getGT, tx } from "gt-next/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { pets } from "@/data/pets";
import Header from "@/components/Header";

export function generateStaticParams() {
  return pets.map((pet) => ({ slug: pet.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const pet = pets.find((p) => p.slug === slug);
  if (!pet) return {};
  const gt = await getGT();
  const title = gt("Pet Adoption Center | General Translation");
  const description = await tx(pet.description);
  return {
    title: `${pet.name} - ${title}`,
    description,
    openGraph: {
      title: `${pet.name} - ${title}`,
      description,
      locale,
      type: "website",
      siteName: "General Translation",
    },
    twitter: { card: "summary", title: `${pet.name} - ${title}`, description },
    alternates: {
      canonical: `https://pet-adoption.generaltranslation.dev/pet/${slug}`,
      languages: { en: `/en/pet/${slug}`, es: `/es/pet/${slug}`, fr: `/fr/pet/${slug}`, ja: `/ja/pet/${slug}`, zh: `/zh/pet/${slug}` },
    },
  };
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    available: "bg-emerald-900/50 text-emerald-400 border-emerald-800",
    pending: "bg-amber-900/50 text-amber-400 border-amber-800",
    adopted: "bg-neutral-800 text-neutral-500 border-neutral-700",
  };
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full border ${colors[status] || colors.available}`}
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

function SexLabel({ sex }: { sex: string }) {
  return (
    <T>
      <Branch branch={sex as "male" | "female"} male="Male" female="Female" />
    </T>
  );
}

function Section({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50">
      <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

function ColorLabel({ color }: { color: string }) {
  return (
    <T>
      <Branch
        branch={
          color as
            | "Golden"
            | "Gray tabby"
            | "Black and tan"
            | "Seal point"
            | "Chocolate"
            | "Brown tabby"
        }
        Golden="Golden"
        Gray-tabby="Gray tabby"
        Black-and-tan="Black and tan"
        Seal-point="Seal point"
        Chocolate="Chocolate"
        Brown-tabby="Brown tabby"
      />
    </T>
  );
}

export default async function PetProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pet = pets.find((p) => p.slug === slug);
  if (!pet) notFound();

  const translatedDescription = await tx(pet.description);
  const translatedHealth = await tx(pet.healthInfo);
  const translatedRequirements = await tx(pet.adoptionRequirements);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-6 inline-block"
        >
          <T>Back to all pets</T>
        </Link>

        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-1">
              <Var>{pet.name}</Var>
            </h2>
            <p className="text-base text-neutral-400">
              <Var>{pet.breed}</Var>{" "}
              <span className="text-neutral-600">·</span>{" "}
              <SpeciesLabel species={pet.species} />
            </p>
          </div>
          <StatusBadge status={pet.status} />
        </div>

        <p className="text-base text-neutral-300 leading-relaxed mb-8">
          {translatedDescription}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/50 text-center">
            <p className="text-xs text-neutral-500 mb-1">
              <T>Age</T>
            </p>
            <p className="text-lg font-semibold text-neutral-100">
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
            </p>
          </div>
          <div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/50 text-center">
            <p className="text-xs text-neutral-500 mb-1">
              <T>Weight</T>
            </p>
            <p className="text-lg font-semibold text-neutral-100">
              <T>
                <Num>{pet.weight}</Num> lbs
              </T>
            </p>
          </div>
          <div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/50 text-center">
            <p className="text-xs text-neutral-500 mb-1">
              <T>Sex</T>
            </p>
            <p className="text-lg font-semibold text-neutral-100">
              <SexLabel sex={pet.sex} />
            </p>
          </div>
          <div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/50 text-center">
            <p className="text-xs text-neutral-500 mb-1">
              <T>Adoption Fee</T>
            </p>
            <p className="text-lg font-semibold text-neutral-100">
              <Currency currency="USD">{pet.fee}</Currency>
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <Section title={<T>Temperament</T>}>
            <div className="flex flex-wrap gap-2">
              {pet.temperament.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1 text-sm bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700"
                >
                  <T>
                    <Branch
                      branch={
                        trait as
                          | "friendly"
                          | "gentle"
                          | "energetic"
                          | "loyal"
                          | "calm"
                          | "affectionate"
                          | "curious"
                          | "quiet"
                          | "protective"
                          | "intelligent"
                          | "confident"
                          | "trainable"
                          | "vocal"
                          | "playful"
                          | "social"
                          | "outgoing"
                          | "active"
                          | "sociable"
                          | "patient"
                      }
                      friendly="Friendly"
                      gentle="Gentle"
                      energetic="Energetic"
                      loyal="Loyal"
                      calm="Calm"
                      affectionate="Affectionate"
                      curious="Curious"
                      quiet="Quiet"
                      protective="Protective"
                      intelligent="Intelligent"
                      confident="Confident"
                      trainable="Trainable"
                      vocal="Vocal"
                      playful="Playful"
                      social="Social"
                      outgoing="Outgoing"
                      active="Active"
                      sociable="Sociable"
                      patient="Patient"
                    />
                  </T>
                </span>
              ))}
            </div>
          </Section>

          <Section title={<T>Health Information</T>}>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {translatedHealth}
            </p>
          </Section>

          <Section title={<T>Adoption Requirements</T>}>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {translatedRequirements}
            </p>
          </Section>

          <Section title={<T>Details</T>}>
            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <div>
                <span className="text-neutral-500">
                  <T>Color</T>
                </span>
                <p className="text-neutral-200">
                  <ColorLabel color={pet.color} />
                </p>
              </div>
              <div>
                <span className="text-neutral-500">
                  <T>Available From</T>
                </span>
                <p className="text-neutral-200">
                  <DateTime>{pet.availableDate}</DateTime>
                </p>
              </div>
            </div>
          </Section>
        </div>

        <T>
          <p className="text-xs text-neutral-600 border border-neutral-800 rounded-lg px-4 py-3">
            This is an example application built with General Translation to
            demonstrate internationalization features including locale-aware
            number, currency, and date formatting.
          </p>
        </T>
      </main>
    </div>
  );
}
