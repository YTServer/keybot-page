import { useState, Fragment } from "react";
import _ from "lodash";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { HomePage } from "./Home";
import { HowToBuy } from "./HowToBuy";
import { BotScript } from "./BotScript";
import { QA } from "./QA";
import { AboutMe } from "./AboutMe";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function jumpToBlock(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  const navigation = [
    { name: "Home", id: "home" },
    { name: "How to buy", id: "how-to-buy" },
    { name: "Bot Script", id: "bot-script" },
    { name: "Q&A", id: "qa" },
    { name: "About Me", id: "about-me" },
  ];

  const navigationItem = _.map(navigation, (item) => {
    return (
      <a
        key={item.id}
        className="text-sm font-semibold leading-6 text-white"
        onClick={() => jumpToBlock(item.id)}
      >
        {item.name}
      </a>
    );
  });

  return (
    <div className="min-h-full">
      <header className="fixed top-0 mx-auto w-full max-w-full  bg-slate-800">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
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
              className="-m-2.5 inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">{navigationItem}</div>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
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
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.id}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                      onClick={() => jumpToBlock(item.id)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </nav>
      </header>
      <div className="mx-8 h-4/5">
        <HomePage />
        <HowToBuy />
        <BotScript />
        <QA />
        <AboutMe />
      </div>
    </div>
  );
}
