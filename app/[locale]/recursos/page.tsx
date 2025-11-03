import { getTranslations } from "next-intl/server";
import { getRecentResources } from "@/lib/resources-data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { RecursosPageClient } from "../components/RecursosPageClient";

export default async function RecursosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("resources");
  const resources = getRecentResources(10, locale);
  return (
    // Accessibility: Restructured to place Header and Footer outside main landmark (WCAG 2.0)
    <div className="bg-warmGray-950 min-h-screen">
      <Header />
      <main>
        <RecursosPageClient
          resources={resources}
          pageTitle={t("pageTitle")}
          pageSubtitle={t("pageSubtitle")}
          comingSoon={t("comingSoon")}
        />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
