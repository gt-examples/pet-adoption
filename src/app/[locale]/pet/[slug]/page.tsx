import { T, Num, Currency, DateTime, Branch, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { pets } from "@/data/pets";
import Header from "@/components/Header";

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
  const description = gt(
    "Browse adoptable pets with breed info, age, adoption fees, and availability dates."
  );
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
      languages: {
        en: `/en/pet/${slug}`,
        es: `/es/pet/${slug}`,
        fr: `/fr/pet/${slug}`,
        ja: `/ja/pet/${slug}`,
        zh: `/zh/pet/${slug}`,
      },
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

type PetSlug = "luna" | "mochi" | "bruno" | "cleo" | "rex" | "whiskers";

function PetDescription({ slug }: { slug: string }) {
  return (
    <T>
      <Branch
        branch={slug as PetSlug}
        luna="Luna is a joyful Golden Retriever who loves long walks, swimming, and playing fetch. She gets along wonderfully with children and other dogs. She was rescued from a family that could no longer care for her and has been thriving in our shelter."
        mochi="Mochi is a sweet and quiet Scottish Fold who loves curling up on laps and watching birds from the window. She is an ideal companion for apartment living and does well as the only pet in the household."
        bruno="Bruno is a well-trained German Shepherd with excellent obedience skills. He is loyal and protective, making him a great companion for experienced dog owners. He enjoys structured activities and mental challenges."
        cleo="Cleo is a lively Siamese kitten who loves to talk and play. She is incredibly social and thrives on human interaction. She enjoys puzzle toys and will follow you around the house."
        rex="Rex is a lovable Chocolate Lab who has never met a stranger. He adores water, fetching tennis balls, and belly rubs. He is fantastic with children of all ages and would make an excellent family dog."
        whiskers="Whiskers is a majestic Maine Coon with a big personality to match his size. Despite his imposing appearance, he is incredibly gentle and patient. He loves being brushed and will happily sit beside you for hours."
      />
    </T>
  );
}

function PetHealthInfo({ slug }: { slug: string }) {
  return (
    <T>
      <Branch
        branch={slug as PetSlug}
        luna="Spayed, up to date on all vaccinations, microchipped. No known health issues. Recent dental cleaning performed."
        mochi="Spayed, up to date on all vaccinations, microchipped. Annual checkup completed. FIV/FeLV negative."
        bruno="Neutered, up to date on all vaccinations, microchipped. Hip evaluation completed with good results. On joint supplement."
        cleo="Spayed, up to date on all vaccinations, microchipped. FIV/FeLV negative. Healthy weight for her age."
        rex="Neutered, up to date on all vaccinations, microchipped. Heartworm negative. Allergy-tested, mild seasonal allergies managed with medication."
        whiskers="Neutered, up to date on all vaccinations, microchipped. FIV/FeLV negative. Heart screening completed with normal results. Regular grooming needed for his long coat."
      />
    </T>
  );
}

function PetAdoptionRequirements({ slug }: { slug: string }) {
  return (
    <T>
      <Branch
        branch={slug as PetSlug}
        luna="Requires a home with a fenced yard. Best suited for an active family. Previous dog ownership experience preferred."
        mochi="Indoor-only home required. Suitable for apartments. Best as the sole pet or with another calm cat."
        bruno="Experienced dog owner required. Home with a large fenced yard preferred. Not recommended for homes with small children."
        cleo="Indoor-only home required. Needs daily interactive playtime. Does well with other sociable cats."
        rex="Active family preferred. Fenced yard recommended. Gets along well with other dogs and children."
        whiskers="Indoor-only home required. Needs regular grooming. Does well with children and other pets. Calm household preferred."
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
              {pet.name}
            </h2>
            <p className="text-base text-neutral-400">
              {pet.breed}{" "}
              <span className="text-neutral-600">·</span>{" "}
              <SpeciesLabel species={pet.species} />
            </p>
          </div>
          <StatusBadge status={pet.status} />
        </div>

        <p className="text-base text-neutral-300 leading-relaxed mb-8">
          <PetDescription slug={pet.slug} />
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/50 text-center">
            <p className="text-xs text-neutral-500 mb-1">
              <T>Age</T>
            </p>
            <p className="text-lg font-semibold text-neutral-100">
              <T>
                <Plural
                  n={pet.age}
                  one={<><Num>{pet.age}</Num> year</>}
                  other={<><Num>{pet.age}</Num> years</>}
                />
              </T>
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
              <PetHealthInfo slug={pet.slug} />
            </p>
          </Section>

          <Section title={<T>Adoption Requirements</T>}>
            <p className="text-sm text-neutral-300 leading-relaxed">
              <PetAdoptionRequirements slug={pet.slug} />
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
