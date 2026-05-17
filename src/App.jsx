import Layout from "./components/Layout";
import Header from "./components/Header";
import PlanetSection from "./components/PlanetSection";
import PlanetTable from "./components/PlanetTable";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Layout>
      <Header />
      <PlanetSection />
      <PlanetTable />
      <ContactForm />
    </Layout>
  );
}

export default App;
