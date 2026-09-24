import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Stacks } from "./components/Stacks/Stacks";
import { Contact } from "./components/Contact/Contact";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <div className="justify-center items-center flex flex-col  max-w-[1500px] px-4 py-13">
        <Header />
        <About />
        <Stacks></Stacks>
        <Projects />
        <Contact></Contact>
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
