import Layout from "./components/Layout";
import Header from "./components/Header";
import PlanetSection from "./components/PlanetSection";
import PlanetTable from "./components/PlanetTable";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <VideoSection />
      <PlanetSection />
      <PlanetTable />
      <ContactForm />
    </Layout>
  );
}

export default App;
