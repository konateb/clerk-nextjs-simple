import ActualSidebar from "../components/ActualSidebar";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import React from "react";
import { SidebarProvider } from "../context/SidebarContext";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SidebarProvider>
        <div className="flex dark:bg-gray-900">
          <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
           <h3>YESSSSSS</h3>
          </main>
          <div className="order-1">
            {/* <ActualSidebar /> */}
          </div>
        </div>
      </SidebarProvider>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </>
  );
};

export default Home;
