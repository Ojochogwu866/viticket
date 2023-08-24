import { Link } from "@remix-run/react";

export default function Work(){
    return (
        <div className="flex between mt-10">
           <div className="flex m-5">
            <Link to="/">Work</Link>
            <p className=" mt-5">
                Manage your CRAFTS easily
            </p>
            </div> 
        </div>
    )
}
 