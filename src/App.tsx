import { useQuery } from "@tanstack/react-query";

import { HeroSection } from "@/components/HeroSection";
import { getPageBySlug } from "@/lib/contentful.queries";
import type {
  PageSection,
  SectionBuildConnection,
  SectionFaq,
  SectionFinalCta,
  SectionHero,
  SectionHowToOrder,
  SectionInfoBanner,
  SectionPartnersAndProperties,
  SectionReviews,
} from "@/types/types";

import { BuildConnection } from "./components/BuildConnection";
import { FAQ } from "./components/FAQ";
import { FinalCta } from "./components/FinalCta";
import { HowToOrder } from "./components/HowToOrder";
import { InfoBanner } from "./components/InfoBanner";
import { PartnersAndProperties } from "./components/PartnersAndProperties";
import { Reviews } from "./components/Reviews";
import { ErrorMessage } from "./components/common/ErrorMessage";
import { Spinner } from "./components/common/Spinner";

function renderSection(section: PageSection) {
  switch (section.sys.contentType.sys.id) {
    case "section-Hero":
      return <HeroSection key={section.sys.id} data={section as SectionHero} />;
    case "section-PartnersAndProperties":
      return (
        <PartnersAndProperties
          key={section.sys.id}
          data={section as SectionPartnersAndProperties}
        />
      );
    case "section-BuildConnection":
      return (
        <BuildConnection
          key={section.sys.id}
          data={section as SectionBuildConnection}
        />
      );
    case "section-HowToOrder":
      return (
        <HowToOrder key={section.sys.id} data={section as SectionHowToOrder} />
      );
    case "section-Reviews":
      return <Reviews key={section.sys.id} data={section as SectionReviews} />;
    case "sectionFaq":
      return <FAQ key={section.sys.id} data={section as SectionFaq} />;
    case "section-InfoBanner":
      return (
        <InfoBanner key={section.sys.id} data={section as SectionInfoBanner} />
      );
    case "sectionFinalCta":
      return (
        <FinalCta key={section.sys.id} data={section as SectionFinalCta} />
      );
    default:
      return null;
  }
}

function App() {
  const {
    data: page,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["page", "home"],
    queryFn: () => getPageBySlug("home"),
  });

  if (isPending) return <Spinner />;
  if (isError || !page) return <ErrorMessage />;

  return <main>{page.fields.sectionsVillage?.map(renderSection)}</main>;
}

export default App;
