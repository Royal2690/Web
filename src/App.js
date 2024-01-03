import HomePage from "./pages/homePage/";
import Layout from "./global/layout";
import ContactUS from "./pages/contactUs";
import AboutUS from "./pages/aboutUS";

function App() {
  return (
    <div className="App">
      <Layout>
        <HomePage />
        <ContactUS />
        <AboutUS />
      </Layout>
    </div>
  );
}

export default App;
