import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import vars from '../variable';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: '購買流程', id: 'buy' },
    { name: '指令列表', id: 'script' },
    { name: '常見問題', id: 'faq' },
    { name: '聯絡我們', id: 'about' },
  ];
  const navigationItem = navigation.map((item) => {
    return (
      <a
        key={item.id}
        className="cursor-pointer text-sm font-semibold leading-6 text-white"
        href={'#' + item.id}
      >
        {item.name}
      </a>
    );
  });
  const navigationItemMobile = navigation.map((item) => {
    return (
      <a
        key={item.id}
        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
        href={'#' + item.id}
        onClick={() => setMobileMenuOpen(false)}
      >
        {item.name}
      </a>
    );
  });
  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex flex-wrap lg:flex-1">
        <a href="#home" className="-m-1.5 flex items-center p-1.5">
          <span className="sr-only">{vars.botName}</span>
          <img
            width={32}
            height={32}
            className="h-8 w-auto rounded-full"
            src={vars.botAvatar}
            alt="avatar"
          />

          <p className="ml-2 text-white">{vars.botName}</p>
        </a>
      </div>
      <div className="flex md:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
        </button>
      </div>
      <div className="hidden md:flex md:gap-x-4 lg:gap-x-12">
        {navigationItem}
        <button className="hidden" onClick={console.log('login')}>
          <img src={vars.steamOpenIdButton}></img>
        </button>
      </div>
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
                href="#home"
                className="-m-1.5 flex items-center p-1.5 lg:flex-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">{vars.botName}</span>
                <img
                  className="h-8 w-auto rounded-full"
                  src={vars.botAvatar}
                  alt="avatar"
                />
                <p className="ml-2 text-white ">{vars.botName}</p>
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
            <div className="space-y-2 py-6">{navigationItemMobile}</div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
}

export default Navbar;
