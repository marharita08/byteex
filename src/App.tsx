import { BuildConnection } from "./components/BuildConnection";
import { FAQ } from "./components/FAQ";
import { HeroSection } from "./components/HeroSection";
import { HowToOrder } from "./components/HowToOrder";
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
    </main>
  );
}

export default App;
