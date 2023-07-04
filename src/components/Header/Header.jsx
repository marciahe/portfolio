// import { useState } from "react";
import { Popover } from "@headlessui/react";
import Button from "../Button/Button";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Example() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="header" className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#header" className="-m-1.5 p-1.5">
            <span className="sr-only">Marcia Hernández</span>
            <p className="logoMarcia">
              marcia<span> </span>
            </p>
          </a>
        </div>
        {/* <div className="flex lg:hidden">
          <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div> */}

        <Popover.Group className="sm:flex lg:gap-x-12">
          <a
            href="#projects"
            className="cursor-pointer z-10 lg:flex hidden text-sm font-semibold leading-6 text-gray-900 hover:text-red-400 duration-300 py-3"
          >
            Projects
          </a>
          <div className="buttonContainer">
            <Button px="px-5" py="py-2" label="Linkedin" />
          </div>
        </Popover.Group>
      </nav>
      {/* <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Marcia Hernández</span>
              <p className="logoMarcia">
                marcia<span> </span>
              </p>
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
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Projects
                </a>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Contact me!
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </header>
  );
}
