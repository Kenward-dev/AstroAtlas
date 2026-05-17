import Layout from "./components/Layout";
import PlanetSection from "./components/PlanetSection";
import PlanetTable from "./components/PlanetTable";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";

function App() {
  return (
    <Layout>
      <Hero />
      <PlanetSection />
      <PlanetTable />
      <ContactForm />
    </Layout>
  );
}

export default App;
