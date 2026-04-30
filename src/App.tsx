import { BuildConnection } from "./components/BuildConnection";
import { HeroSection } from "./components/HeroSection";
import { HowToOrder } from "./components/HowToOrder";
import { PartnersAndProperties } from "./components/PartnersAndProperties";

function App() {
  return (
    <main>
      <HeroSection />
      <PartnersAndProperties />
      <BuildConnection />
      <HowToOrder />
    </main>
  );
}

export default App;
