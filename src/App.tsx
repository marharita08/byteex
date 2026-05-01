import { BuildConnection } from "./components/BuildConnection";
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
    </main>
  );
}

export default App;
