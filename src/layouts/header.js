/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBacon,
  faBowlFood,
  faBowlRice,
  faCoffee,
  faBeerMugEmpty,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const menus = [
  {
    name: "Streetfood",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: faBowlRice,
  },
  {
    name: "Coffee",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: faCoffee,
  },
  {
    name: "Drinks",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: faBeerMugEmpty,
  },
];

const menusAction = [{ name: "More Menus", icon: faArrowRightLong }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 50)
      );
    }
  }, []);

  return (
    <Popover
      className={`header w-full z-30 ${
        small
          ? "small active fixed z-10 py-4 bg-glass-less border-b border-gray-200"
          : "absolute py-8 items-center"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-0">
        <div className="flex justify-between items-center md:space-x-10">
          {/* LOGO */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a
              href="#"
              className="font-bold tracking-wide text-xl text-yellow-400"
            >
              <span className="sr-only">Workflow</span>
              <FontAwesomeIcon
                icon={faBacon}
                size="xs"
                className="mr-2"
              />{" "}
              meltedmeal
            </a>
          </div>

          {/* MENU */}
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-yellow-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <NavLink
              exact
              to="/"
              className="text-base uppercase tracking-widest font-medium text-yellow-400 hover:text-yellow-600"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-base uppercase tracking-widest font-medium text-yellow-400 hover:text-yellow-600"
            >
              About
            </NavLink>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-yellow-600" : "text-yellow-400",
                      "uppercase tracking-widest group rounded-md inline-flex items-center text-base font-medium hover:text-yellow-600  "
                    )}
                  >
                    <span>MENU</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-yellow-600" : "text-yellow-400",
                        "ml-2 h-5 w-5 group-hover:text-yellow-600"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-2/2 transform -translate-x-1/2 mt-8 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {menus.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <FontAwesomeIcon
                                icon={item.icon}
                                className="flex-shrink-0 h-6 w-6 text-amber-400"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-semibold text-slate-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm font-medium text-gray-900">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {menusAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <NavLink
                                to="/menu"
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <FontAwesomeIcon
                                  icon={item.icon}
                                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </NavLink>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 z-30 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-yellow-400.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-yellow-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-yellow-400 hover:text-yellow-600"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-yellow-400 hover:text-yellow-600"
                >
                  About
                </a>
                {menus.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-yellow-400 hover:text-yellow-600"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-400 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-yellow-400">
                  Existing customer?{" "}
                  <a href="#" className="text-yellow-400 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Header;
