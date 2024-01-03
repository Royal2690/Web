import HomePage from "./pages/homePage/";
import Layout from "./global/layout";
import ContactUS from "./pages/contactUs";
import AboutUS from "./pages/aboutUS";
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about-us" exact element={<AboutUS />} />
          <Route path="/contact-us" exact element={<ContactUS />} />
        </Routes>
        {/*<HomePage />
        <ContactUS />
  <AboutUS />*/}
      </Layout>
    </div>
  );
}

export default App;
