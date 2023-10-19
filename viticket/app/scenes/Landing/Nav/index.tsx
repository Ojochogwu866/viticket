import { Link } from '@remix-run/react'

export default function Navbar(){
    return (
        <div className=" w-full h-[full]">
        <div className="flex justify-between items-center py-3 md:py-6">
            <div className=" text-[#DC2B46]">Foundation3</div>
            <div className=" w-full">
                <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="14.8125" y="16.5156" width="16" height="2" fill="#DC2B46"/>
                    <rect x="14.8125" y="26.5156" width="16" height="2" fill="#DC2B46"/>
                    <rect x="1.07812" y="0.78125" width="43.4688" height="43.4688" rx="28.7344" stroke="#DC2B46"/>
                </svg>
            </div>
        </div>
        <nav className=" bg-white bg-opacity-60 absolute w-screen h-screen flex top-0 left-0 z-50">
                <ul>
                <li className="">
                        <Link to={`Events`}>
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link to={`Constructors`}>
                            Constructors
                        </Link>
                    </li>
                    <li>
                        <Link to={`Capital`}>
                            Capital
                        </Link>
                    </li>
                    <li>
                        <Link to={`Login`}>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to={`Signup`}>
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}