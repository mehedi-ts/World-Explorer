import { Suspense } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Countrys from "./components/Countries";
import Countries from "./components/Countries";
const countriesPromis = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());
const clickHandle = () => {
  alert("Oops! This button is under development");
};

function App() {
  return (
    <div className=" max-w-325 w-full mx-auto py-1">
      <Navbar clickHandle={clickHandle}></Navbar>
      <Hero></Hero>
      <Filter clickHandle={clickHandle}></Filter>
      <Suspense
        fallback={
          <span class="loading loading-infinity loading-10xl mx-auto"></span>
        }
      >
        <Countries
          countriesPromis={countriesPromis}
          clickHandle={clickHandle}
        ></Countries>
      </Suspense>
    </div>
  );
}

export default App;
