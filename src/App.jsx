import Layout from "./components/Layout";
import PlanetCard from "./components/PlanetCard";

function App() {
  return (
    <>
      <Layout>
        <PlanetCard
          image="https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg"
          name="Jupiter"
          distance="57.9 million km"
        />
      </Layout>
    </>
  )
    ;
}

export default App;
