import { T, Num } from "gt-next";
import { getGT } from "gt-next/server";
import type { Metadata } from "next";
import Header from "@/components/Header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const gt = await getGT();
  const title = gt("About Our Shelter | Pet Adoption Center");
  const description = gt(
    "Learn about our mission, adoption process, and how you can help give a pet a loving home."
  );
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale,
      type: "website",
      siteName: "General Translation",
    },
    twitter: { card: "summary", title, description },
    alternates: {
      canonical: "https://pet-adoption.generaltranslation.dev/about",
      languages: { en: "/en/about", es: "/es/about", fr: "/fr/about", ja: "/ja/about", zh: "/zh/about" },
    },
  };
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-12">
        <T>
          <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
            About Our Shelter
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl">
            We are a nonprofit animal rescue dedicated to finding loving homes
            for abandoned and surrendered pets. Every animal in our care receives
            veterinary attention, socialization, and patience until the right
            family comes along.
          </p>
        </T>

        <div className="space-y-4 mb-10">
          <div className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50">
            <T>
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We believe every pet deserves a safe, loving home. Our mission is
                to rescue animals from difficult situations, provide them with
                medical care and rehabilitation, and match them with responsible
                adopters who will cherish them for life.
              </p>
            </T>
          </div>

          <div className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50">
            <T>
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                Adoption Process
              </h3>
              <ol className="text-sm text-neutral-300 leading-relaxed space-y-2 list-decimal list-inside">
                <li>
                  Browse our available pets and find one that fits your lifestyle.
                </li>
                <li>
                  Submit an adoption application with information about your home
                  and experience.
                </li>
                <li>
                  Meet your potential new companion at the shelter for a
                  supervised visit.
                </li>
                <li>
                  Complete the adoption agreement and pay the adoption fee, which
                  covers vaccinations, spay/neuter surgery, and microchipping.
                </li>
                <li>
                  Welcome your new family member home with our post-adoption
                  support resources.
                </li>
              </ol>
            </T>
          </div>

          <div className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50">
            <T>
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                Shelter Hours
              </h3>
              <div className="text-sm text-neutral-300 space-y-1">
                <p>Monday through Friday: 10:00 AM to 6:00 PM</p>
                <p>Saturday and Sunday: 10:00 AM to 4:00 PM</p>
                <p className="text-neutral-500 mt-2">
                  Closed on major holidays. Walk-ins are welcome, but
                  appointments are recommended for meet-and-greet sessions.
                </p>
              </div>
            </T>
          </div>

          <div className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50">
            <T>
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                How You Can Help
              </h3>
              <div className="text-sm text-neutral-300 leading-relaxed space-y-2">
                <p>
                  Even if you cannot adopt, there are many ways to support our
                  work. You can volunteer at the shelter, foster a pet
                  temporarily, donate supplies, or help spread the word about
                  animals in need of homes.
                </p>
                <p>
                  Every contribution, no matter how small, makes a difference in
                  the lives of the animals we care for.
                </p>
              </div>
            </T>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/50 text-center">
            <p className="text-2xl font-semibold text-neutral-100 mb-1">
              <Num>{847}</Num>
            </p>
            <p className="text-xs text-neutral-500">
              <T>Pets adopted this year</T>
            </p>
          </div>
          <div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/50 text-center">
            <p className="text-2xl font-semibold text-neutral-100 mb-1">
              <Num>{12}</Num>
            </p>
            <p className="text-xs text-neutral-500">
              <T>Years serving the community</T>
            </p>
          </div>
          <div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/50 text-center">
            <p className="text-2xl font-semibold text-neutral-100 mb-1">
              <Num>{35}</Num>
            </p>
            <p className="text-xs text-neutral-500">
              <T>Active volunteers</T>
            </p>
          </div>
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
