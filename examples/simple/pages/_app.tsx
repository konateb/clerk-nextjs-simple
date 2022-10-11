import "../styles/globals.css";

import { ClerkLoaded, ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import {
  HiAdjustments,
  HiArrowNarrowRight,
  HiArrowSmRight,
  HiChartPie,
  HiCheck,
  HiClipboardList,
  HiCloudDownload,
  HiDatabase,
  HiExclamation,
  HiEye,
  HiHome,
  HiInbox,
  HiOutlineAdjustments,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiUserCircle,
  HiViewBoards,
  HiX,
} from "react-icons/hi";
import React, { useState } from "react";

import type { AppProps } from "next/app";
import { BiBuoy } from "react-icons/bi";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import Layout from "../components/layout";
import MyFooter from "../components/MyFooter";
import { SidebarProvider } from "../context/SidebarContext";
import { useRouter } from "next/router";

// import Navbar from "../components/Navbar";


/**
 * List pages you want to be publicly accessible, or leave empty if
 * every page requires authentication. Use this naming strategy:
 *  "/"              for pages/index.js
 *  "/foo"           for pages/foo/index.js
 *  "/foo/bar"       for pages/foo/bar.js
 *  "/foo/[...bar]"  for pages/foo/[...bar].js
 */
const publicPages = ["/", "/about", "/contact", "/sponsor"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ClerkProvider {...pageProps}>
      <ClerkLoaded>
        <Header />
       
        {publicPages.includes(router.pathname) ? (
          <main>
            <Component {...pageProps} />
          </main>
        ) : (
          <>
            <SignedIn>
              <Layout
                baseURI={""}
                childNodes={undefined}
                firstChild={null}
                isConnected={false}
                lastChild={null}
                nextSibling={null}
                nodeName={""}
                nodeType={0}
                nodeValue={null}
                ownerDocument={null}
                parentElement={null}
                parentNode={null}
                previousSibling={null}
                textContent={null}
                appendChild={function <T extends Node>(node: T): T {
                  throw new Error("Function not implemented.");
                }}
                cloneNode={function (deep?: boolean | undefined): Node {
                  throw new Error("Function not implemented.");
                }}
                compareDocumentPosition={function (other: Node): number {
                  throw new Error("Function not implemented.");
                }}
                contains={function (other: Node | null): boolean {
                  throw new Error("Function not implemented.");
                }}
                getRootNode={function (
                  options?: GetRootNodeOptions | undefined
                ): Node {
                  throw new Error("Function not implemented.");
                }}
                hasChildNodes={function (): boolean {
                  throw new Error("Function not implemented.");
                }}
                insertBefore={function <T extends Node>(
                  node: T,
                  child: Node | null
                ): T {
                  throw new Error("Function not implemented.");
                }}
                isDefaultNamespace={function (
                  namespace: string | null
                ): boolean {
                  throw new Error("Function not implemented.");
                }}
                isEqualNode={function (otherNode: Node | null): boolean {
                  throw new Error("Function not implemented.");
                }}
                isSameNode={function (otherNode: Node | null): boolean {
                  throw new Error("Function not implemented.");
                }}
                lookupNamespaceURI={function (
                  prefix: string | null
                ): string | null {
                  throw new Error("Function not implemented.");
                }}
                lookupPrefix={function (
                  namespace: string | null
                ): string | null {
                  throw new Error("Function not implemented.");
                }}
                normalize={function (): void {
                  throw new Error("Function not implemented.");
                }}
                removeChild={function <T extends Node>(child: T): T {
                  throw new Error("Function not implemented.");
                }}
                replaceChild={function <T extends Node>(
                  node: Node,
                  child: T
                ): T {
                  throw new Error("Function not implemented.");
                }}
                ATTRIBUTE_NODE={0}
                CDATA_SECTION_NODE={0}
                COMMENT_NODE={0}
                DOCUMENT_FRAGMENT_NODE={0}
                DOCUMENT_NODE={0}
                DOCUMENT_POSITION_CONTAINED_BY={0}
                DOCUMENT_POSITION_CONTAINS={0}
                DOCUMENT_POSITION_DISCONNECTED={0}
                DOCUMENT_POSITION_FOLLOWING={0}
                DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC={0}
                DOCUMENT_POSITION_PRECEDING={0}
                DOCUMENT_TYPE_NODE={0}
                ELEMENT_NODE={0}
                ENTITY_NODE={0}
                ENTITY_REFERENCE_NODE={0}
                NOTATION_NODE={0}
                PROCESSING_INSTRUCTION_NODE={0}
                TEXT_NODE={0}
                addEventListener={function (
                  type: string,
                  callback: EventListenerOrEventListenerObject | null,
                  options?: boolean | AddEventListenerOptions | undefined
                ): void {
                  throw new Error("Function not implemented.");
                }}
                dispatchEvent={function (event: Event): boolean {
                  throw new Error("Function not implemented.");
                }}
                removeEventListener={function (
                  type: string,
                  callback: EventListenerOrEventListenerObject | null,
                  options?: boolean | EventListenerOptions | undefined
                ): void {
                  throw new Error("Function not implemented.");
                }}
              >
                <Component {...pageProps} />
              </Layout>
            </SignedIn>
            <SignedOut>
              <div className="protected">
                <p>You need to be signed in to access this page.</p>
              </div>
            </SignedOut>
          </>
        )}
                
        
      </ClerkLoaded>
    </ClerkProvider>
  );
}
export default MyApp;
