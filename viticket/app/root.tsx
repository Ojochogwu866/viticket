import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import Navigation from '~/scenes/Landing/Nav'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { ReactNode } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Vit Ticket" },
    {
      name: "description",
      content: "This app is the best",
    },
  ];
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className=" overflow-x-hidden">
        <Layout>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        </Layout>
      </body>
    </html>
  );
}

function Layout ({children}: {children: ReactNode}){
return (
  <>
  <div className=" bg-black px-5 md:px-20">
    <Navigation/>
    <main>{children}</main>
  </div>
  </>
)
}