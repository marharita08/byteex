import { BuildConnection } from "./components/BuildConnection";
import { FAQ } from "./components/FAQ";
import { FinalCta } from "./components/FinalCta";
import { HeroSection } from "./components/HeroSection";
import { HowToOrder } from "./components/HowToOrder";
import { InfoBanner } from "./components/InfoBanner";
import { PartnersAndProperties } from "./components/PartnersAndProperties";
import { Reviews } from "./components/Reviews";

function App() {
  return (
    <main>
      <HeroSection />
      <PartnersAndProperties />
      <BuildConnection />
      <HowToOrder />
      <Reviews />
      <FAQ />
      <InfoBanner />
      <FinalCta />
    </main>
  );
}

export default App;
