import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/nextjs";

import Link from "next/link";
import type { NextPage } from "next";
import styles from "./Header.module.css";
import { useState } from "react";

// Header component using <SignedIn> & <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://clerk.dev/docs/component-reference/signed-in
// https://clerk.dev/docs/component-reference/signed-out

const Header: NextPage = () => {
  const { openSignIn, openSignUp } = useClerk();
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="sticky top-0  z-10 w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <h2 className="text-2xl text-blue-700 font-bold">
                  KALE Academy
                </h2>
              </a>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6  text-blue-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6  text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className=" text-blue-700">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>

            <li className=" text-blue-700">
              <Link href="/about">
                <a>Qui sommes-nous?</a>
              </Link>
            </li>
            <SignedIn>
              <li className=" text-blue-700">
                <Link href="/dashborad">
                  <a>Mon cours</a>
                </Link>
              </li>
            </SignedIn>

            <li className=" text-blue-700">
              <Link href="/sponsor">
                <a>Devenez sponsor</a>
              </Link>
            </li>

            <li className=" text-blue-700">
              <Link href="/contact">
                <a>Nous contacter</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block top-0 right-400">
          <SignedIn>
            <div className={styles.headerItem}>
              <UserButton userProfileUrl="/user" afterSignOutUrl="/" />
            </div>
          </SignedIn>
          <SignedOut>
            <div className={styles.headerItem}>
              <a
                onClick={() => openSignIn()}
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Sign in
              </a>

              <a
                onClick={() => openSignUp()}
                className="text-white bg-blue-700 m-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Sign up
              </a>
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Header;
