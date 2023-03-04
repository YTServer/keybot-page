import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { HomePage } from "./Home";
import { HowToBuy } from "./HowToBuy";
import { BotScript } from "./BotScript";
import { QA } from "./QA";
import { AboutMe } from "./AboutMe";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleClick(pages) {
    window.scrollTo({
      top: window.innerHeight * pages,
      left: 0,
      behavior: "smooth",
    });
  }

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
            <a
              className="text-sm font-semibold leading-6 text-white"
              onClick={() => handleClick("0")}
            >
              Home
            </a>
            <a
              className="text-sm font-semibold leading-6 text-white"
              onClick={() => handleClick("1")}
            >
              How to buy
            </a>
            <a
              className="text-sm font-semibold leading-6 text-white"
              onClick={() => handleClick("2")}
            >
              Bot Script
            </a>
            <a
              className="text-sm font-semibold leading-6 text-white"
              onClick={() => handleClick("3")}
            >
              Q&A
            </a>
            <a
              className="text-sm font-semibold leading-6 text-white"
              onClick={() => handleClick("4")}
            >
              About Me
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
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
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                          Product
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="h-4/5">
        <HomePage />
      </div>
      <div className="h-4/5">
        <HowToBuy />
      </div>
      <div className="h-4/5">
        <BotScript />
      </div>
      <div className="h-4/5">
        <QA />
      </div>
      <div className="h-4/5">
        <AboutMe />
      </div>
    </div>
  );
}
