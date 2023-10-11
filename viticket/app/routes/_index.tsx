import type { V2_MetaFunction } from "@remix-run/node";
import WIS from "~/scenes/WIS"
import Upcomming from "~/scenes/upcomming";
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
    <Upcomming/>
    <WIS/>
</div>
  );
}