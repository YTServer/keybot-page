import _ from "lodash";
import HomePage from "./components/Home";
import HowToBuy from "./components/HowToBuy";
import BotScript from "./components/BotScript";
import QA from "./components/QA";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-full scrollbar-hide">
      <header className="fixed top-0 mx-auto w-full max-w-full bg-slate-800 scrollbar-hide">
        <Navbar />
      </header>

      <div className="h-screen snap-y snap-mandatory snap-always overflow-y-auto scroll-smooth scrollbar-hide">
        <HomePage />
        <AboutMe />
        <HowToBuy />
        <BotScript />
        <QA />
      </div>
    </div>
  );
}
