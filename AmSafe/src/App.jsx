
import "./App.css";
import NavbarCompo from "./components/navbar";
import HomePage from "./components/HomePage";
import ResourcePage from "./components/ResourcePage";
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
 

        <section id="team" className="w-full   mt-10 flex items-center justify-center">
          <TeamPage />
        </section>
      </div>
    </>
  );
}

export default App;
