import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.css";

const thisRepoLink =
  "https://github.com/clerkinc/clerk-nextjs-examples/tree/main/examples/simple";

const allExamplesLink = "https://github.com/clerkinc/clerk-nextjs-examples";

const Home: NextPage = () => {
  return (
    <>
      <section className="z-0 text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Button
              </button>
              <button
                type="button"
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              width={720}
              height={600}
              alt="hero"
              src="https://dummyimage.com/720x600"
              className="object-cover object-center rounded"
            />
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Pitchfork Kickstarter Taxidermy
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven&#039;t heard of them man bun deep jianbing selfies
                heirloom prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    width={720}
                    height={400}
                    src="https://dummyimage.com/720x400"
                    alt="content"
                    className="h-40 rounded w-full object-cover object-center mb-6"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    width={721}
                    height={401}
                    src="https://dummyimage.com/721x401"
                    alt="content"
                    className="h-40 rounded w-full object-cover object-center mb-6"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Colosseum Roma
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    width={722}
                    height={402}
                    src="https://dummyimage.com/722x402"
                    alt="content"
                    className="h-40 rounded w-full object-cover object-center mb-6"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Great Pyramid of Giza
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    width={723}
                    height={403}
                    src="https://dummyimage.com/723x403"
                    alt="content"
                    className="h-40 rounded w-full object-cover object-center mb-6"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    San Francisco
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </section>
    </>
  );
};

const SignedOutCards = () => {
  const { openSignIn, openSignUp } = useClerk();
  return (
    <>
      <a onClick={() => openSignIn()} className={styles.card}>
        <h2>Sign in &rarr;</h2>
        <p>Show the sign in modal</p>
      </a>
      <a onClick={() => openSignUp()} className={styles.card}>
        <h2>Sign up &rarr;</h2>
        <p>Show the sign up modal</p>
      </a>
      <a
        href={thisRepoLink}
        className={styles.card}
        target="_blank"
        rel="noreferrer"
      >
        <h2>See the Code &rarr;</h2>
        <p>All this in just a few lines.</p>
      </a>
      <a
        href={allExamplesLink}
        className={styles.card}
        target="_blank"
        rel="noreferrer"
      >
        <h2>More Examples &rarr;</h2>
        <p>See what else you can build.</p>
      </a>
    </>
  );
};

const SignedInCards = () => {
  const { user } = useUser();

  return (
    <>
      <a className={styles.staticCard}>
        <h2>Welcome!</h2>
        <p>Signed in as: {user?.primaryEmailAddress!.toString()}</p>
      </a>
      <Link href="/user">
        <a className={styles.card}>
          <h2>Go to User Profile &rarr;</h2>
          <p>Change your password and more</p>
        </a>
      </Link>
      <a
        href={thisRepoLink}
        className={styles.card}
        target="_blank"
        rel="noreferrer"
      >
        <h2>See the Code &rarr;</h2>
        <p>All this in just a few lines.</p>
      </a>
      <a
        href={allExamplesLink}
        className={styles.card}
        target="_blank"
        rel="noreferrer"
      >
        <h2>More Examples &rarr;</h2>
        <p>See what else you can build.</p>
      </a>
    </>
  );
};

export default Home;
