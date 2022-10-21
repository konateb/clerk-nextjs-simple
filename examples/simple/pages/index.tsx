import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import MyFooter from "../components/MyFooter";
import type { NextPage } from "next";
import airbnb from "../public/images/clients/airbnb.svg";
import ge from "../public/images/clients/ge.svg";
import google from "../public/images/clients/google.svg";
import googleCloud from "../public/images/clients/google-cloud.svg";
import microsoft from "../public/images/clients/microsoft.svg";
import netfleix from "../public/images/clients/netflix.svg";
import newTech from "../public/images/NicePng_software-development-png_275969.png";
import styles from "../styles/Home.module.css";
import unifiedTechno from "../public/images/vectorstock_10766495.jpg";

const thisRepoLink =
  "https://github.com/clerkinc/clerk-nextjs-examples/tree/main/examples/simple";

const allExamplesLink = "https://github.com/clerkinc/clerk-nextjs-examples";

const Home: NextPage = () => {
  return (
    <>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600 dark:from-blue-700"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                Learn to build web apps with modern technologies{" "}
                <span className="text-primary dark:text-white">
                  reimagination.
                </span>
              </h1>
              <p className="mt-8 text-gray-700 dark:text-gray-300">
                The most efficient way to learn in-demand skills and get hired
                or build the app for your next startup or side project.
              </p>

              <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The lowest price
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The fastest on the market
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The most loved
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
              </div>
            </div>
            {/* Start */}
            <div className="relative overflow-hidden bg-white">
              <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                  <div className="sm:max-w-lg">
                    <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      Demarquez-vous
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                      Aujourd&apos;hui, les jeunes veulent à tout prix se
                      démarquer en apprenant les technologies qui dominent le
                      monde
                    </p>
                  </div>
                  <div>
                    <div className="mt-10">
                      {/* <!-- Decorative image grid --> */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                      >
                        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                          <div className="flex items-center space-x-6 lg:space-x-8">
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <Image
                                  alt="hero"
                                  src={newTech}
                                  className="object-cover object-center rounded"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
            <p className="mt-10 text-xl text-center text-gray-500">
              Technologies reconnues par
            </p>
            <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <Image
                  src={microsoft}
                  className="h-12 w-auto mx-auto"
                  loading="lazy"
                  alt="client logo"
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <Image
                  src={airbnb}
                  className="h-12 w-auto mx-auto"
                  loading="lazy"
                  alt="client logo"
                />
              </div>
              <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                <Image
                  src={google}
                  className="h-9 w-auto m-auto"
                  loading="lazy"
                  alt="client logo"
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <Image
                  src={ge}
                  className="h-12 w-auto mx-auto"
                  loading="lazy"
                  alt="client logo"
                />
              </div>
              <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                <Image
                  src={netfleix}
                  className="h-8 w-auto m-auto"
                  loading="lazy"
                  alt="client logo"
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <Image
                  src={googleCloud}
                  className="h-12 w-auto mx-auto"
                  loading="lazy"
                  alt="client logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="z-0 text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Les trois dimensions de la compétence
              <br className="hidden lg:inline-block" />
              savoir, savoir-faire et savoir-être a la portee de main
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
                className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Connectez-vous
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              alt="hero"
              src={unifiedTechno}
              className="object-cover object-center rounded"
            />
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Nos cours en vidette
                </h1>
                <div className="h-1 w-20 bg-blue-700 rounded"></div>
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
                  <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">
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
                  <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">
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
                  <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">
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
                  <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">
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
        <MyFooter />
      </section>

      {/* <MySecondFooter /> */}
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
