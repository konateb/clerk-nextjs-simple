import Link from "next/link";
import { PropsWithChildren } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }: PropsWithChildren<Record<string, unknown>>) {
  const router = useRouter();

  const menuItems = [
    {
      href: "/semaine1",
      title: "Semaine 1",
    },
    {
      href: "/semaine1",
      title: "Semaine 2",
    },
    {
      href: "/semaine1",
      title: "Semaine 3",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-sky-300 sticky top-0 h-14 text-white flex justify-center items-center font-semibold uppercase">
        Formation currente
      </header>
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-fuchsia-100 w-full md:w-60">
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className="m-2" key={title}>
                  <Link href={href}>
                    <a
                      className={`flex p-2 bg-teal-300 rounded hover:bg-cyan-500 cursor-pointer ${
                        router.asPath === href && "bg-fuchsia-600 text-white"
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
