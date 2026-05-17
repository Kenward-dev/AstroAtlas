import Layout from "./components/Layout";
import PlanetSection from "./components/PlanetSection";
import PlanetTable from "./components/PlanetTable";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Layout>
      <PlanetSection />
      <PlanetTable />
      <ContactForm />
    </Layout>
  );
}

export default App;
