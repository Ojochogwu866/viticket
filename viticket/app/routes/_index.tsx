import type { V2_MetaFunction } from "@remix-run/node";
import WIS from "~/scenes/Landing/WIS"
import Upcomming from "~/scenes/Landing/upcomming";
import Work from "~/scenes/Landing/Work";
import Footer from '../scenes/Landing/footer'
import Home from '../scenes/Landing/home'

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
    <Footer/>
</div>
  );
}