import { useState } from "react";
import "./App.css";
import NavbarCompo from "./components/navbar";
import HomePage from "./components/HomePage";
import FeaturesPage from "./components/FeaturesPage";
import ResourcePage from "./components/ResourcePage";
import FooterPage from "./components/FooterPage";
import TeamPage from "./components/teamPage";

function App() {
  return (
    <>
      <NavbarCompo />
      <div className="">
        <section id="home" className="h-screen  items-center justify-center">
          <HomePage />
        </section>
        <section
          id="resources"
          className="h-screen  flex items-center justify-center"
        >
          <ResourcePage />
        </section>
        <section
          id="features"
          className="h-screen  flex items-center justify-center"
        >
          <FeaturesPage />
        </section>

        <section id="team" className="w-full  flex items-center justify-center">
          <TeamPage />
        </section>
        <FooterPage />
      </div>
    </>
  );
}

export default App;
