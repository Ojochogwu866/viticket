import type { V2_MetaFunction } from "@remix-run/node";
import Work from "~/scenes/Work";
import Home from './home'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Home - Viticket" },
    { name: "description", content: "Create your event ticket" },
  ];
};

export default function Index() {
  return (
<div className=" bg-black">
    <Home/>
    <Work/>
</div>
  );
}