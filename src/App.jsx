import "./App.css";
import Filter from "./components/Filter";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" max-w-325 w-full h-200 border mx-auto py-1">
      <Navbar></Navbar>
      <Hero></Hero>
      <Filter></Filter>
    </div>
  );
}

export default App;
