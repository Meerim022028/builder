
import Layout from "./componets/Layout/Layout"
import "./App.css"
import SandwichBuilder from "./componets/SandwichBuilder/SandwichBuilder";


function App() {
  return (
    <div className="App">
      <Layout>
        <SandwichBuilder />
      </Layout>
    </div>
  );
}

export default App;