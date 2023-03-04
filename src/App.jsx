import { useState } from "react";
import _ from 'lodash';
import { Bars3Icon } from "@heroicons/react/24/outline";
import { HomePage } from "./Home";
import { HowToBuy } from "./HowToBuy";
import { BotScript } from "./BotScript";
import { QA } from "./QA";
import { AboutMe } from "./AboutMe";



export default function App() {
  const [ setMobileMenuOpen] = useState(false);

  function jumpToBlock(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'How to buy', id: 'how-to-buy' },
    { name: 'Bot Script', id: 'bot-script' },
    { name: 'Q&A', id: 'qa' },
    { name: 'About Me', id: 'about-me' },
  ];

  const navigationItem = _.map(navigation, (item) => {
    return <a
      className="text-sm font-semibold leading-6 text-white"
      onClick={() => jumpToBlock(item.id)}
    >
      { item.name }
    </a>
  });

  return (
    <div>
      <header className="fixed top-0 mx-auto flex h-20 w-full  bg-slate-800">
        <nav
          className="flex w-full  items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex flex-wrap lg:flex-1 ">
            <a
              href="https://steamcommunity.com/id/Whitey_Keybot/"
              className="-m-1.5 flex items-center p-1.5 lg:flex-1"
            >
              <span className="sr-only">Whitey's TF2 Key Bot</span>
              <img
                className="h-8 w-auto"
                src="https://avatars.cloudflare.steamstatic.com/83858abbec5112e8312a787df7d5f47da6f17e62_full.jpg"
                alt=""
              />
              <p className="ml-2 text-white ">Whitey's TF2 Key Bot</p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            { navigationItem }
          </div>
        </nav>
      </header>
      <div className="h-4/5 mx-8">
        <HomePage />
        <HowToBuy />
        <BotScript />
        <QA />
        <AboutMe />
      </div>
    </div>
  );
}
