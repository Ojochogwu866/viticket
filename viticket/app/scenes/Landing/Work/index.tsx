import { Link } from "@remix-run/react";


export default function Work(){
    const hover = "hover:border-b-4 hover:border-yellow-300 relative w-auto transition duration-700 ease-in"
    const images = {
        image1:"https://res.cloudinary.com/osca/image/upload/v1690197375/osf/2023/gallery/erjzlrsogcu0ephdvjfw.jpg",
        image2:"https://res.cloudinary.com/osca/image/upload/v1690197301/osf/2023/gallery/lxrxztohyosqcjm198iu.jpg",
    }
    return (
        <div className="flex flex-col justify-between mt-28">
            <div className="flex flex-col text-white">
            <Link to="/">FEATURED EVENTS</Link>
            <div className="flex justify-between items-center ">
                <p className=" mt-2 text-[13px]">
                View our recent events here.
            </p>
            <Link to="/" className=" inline-flex border border-[#E8E8E8] px-[23px] text-[13px] py-[8px] rounded-[100px]">View More Events</Link>
            </div>
            </div> 
            <div className=" w-full absolute py-4 flex left-0 mt-28 bg-white text-black">
                <div className=" italic  flex justify-center items-center font-light text-[12px] pl-5">Foundation3</div>
                <div className=" flex text-[12px] gap-6">
                    <div className={`${hover}`}>Tech Events</div>
                    <div className={`${hover}`}>Music</div>
                    <div className={`${hover}`}>Festivals</div>
                    <div className={`${hover}`}>Others</div>
                </div>
            </div>
            <div className=" mt-32 flex items-center">
            <div className="flex">
            <div className="flex w-full mt-8 relative gap-6">
            <div className="flex flex-col bg-white bg-opacity-10 max-w-[410px] h-[480px] rounded p-1 relative">
                <div className=" mt-[40px] w-11/12 m-auto">
                    <h1 className=" text-gray-400 font-bold text-[14px]">OSCA FEST 2023</h1>
                    <p className=" text-[13px] text-gray-400">Open Source Community Africa, Africa's biggest open source festival. Learn More</p>
                </div>
                <div className="w-full h-full bottom-0 relative flex justify-end items-end">
                    <img className=" w-11/12 h-4/5" src={images.image1} alt="" />
                </div>
            </div>

            <div className="flex flex-col bg-white bg-opacity-10 max-w-[410px] h-[480px] rounded p-1 relative">
                <div className=" mt-[40px] w-11/12 m-auto">
                    <h1 className=" text-gray-400 font-bold text-[14px]">OSCA FEST 2023</h1>
                    <p className=" text-[13px] text-gray-400">Open Source Community Africa, Africa's biggest open source festival. Learn More</p>
                </div>
                <div className="w-full h-full bottom-0 relative flex justify-end items-end">
                    <img className=" w-11/12 h-4/5" src={images.image1} alt="" />
                </div>
            </div>

            <div className="flex flex-col bg-white bg-opacity-10 max-w-[410px] h-[480px] rounded p-1 relative">
                <div className=" mt-[40px] w-11/12 m-auto">
                    <h1 className=" text-gray-400 font-bold text-[14px]">OSCA FEST 2023</h1>
                    <p className=" text-[13px] text-gray-400">Open Source Community Africa, Africa's biggest open source festival. Learn More</p>
                </div>
                <div className="w-full h-full bottom-0 relative flex justify-end items-end">
                    <img className=" w-11/12 h-4/5" src={images.image1} alt="" />
                </div>
            </div>
                </div>
                </div>
            </div>
            <div className=" w-full flex justify-end items-end mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="-rotate-90 pl-3" width="40" height="39" viewBox="0 0 40 39" fill="none">
                    <path d="M20 38.3332V1.6665" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M33.3327 25L19.9994 38.3333L6.66602 25" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="">
                <div className=" mt-20">
                    <h1 className=" text-white text-[13px] uppercase">Get your events featured on our board</h1>
                    </div>
                    <div className=" w-4/5 mx-auto mt-10 flex items-center">
                        <div className="flex w-1/2 h-[400px]">
                            <div className="w-2/6 rounded-sm h-full bg-rose-600"/>
                            <div className="w-2/6 rounded-sm h-full bg-blue-600"/>
                            <div className="w-2/6 rounded-sm h-full bg-teal-600"/>
                        </div>
                        <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 29 20" fill="none">
                            <g clip-path="url(#clip0_4_4582)">
                                <path d="M1.63867 10.1306H23.7499" stroke="white" stroke-width="2.375" stroke-miterlimit="20" stroke-linecap="square"/>
                                <path d="M15.6982 18.5737L25.1982 10.1306L15.6982 1.6851" stroke="white" stroke-width="2.375" stroke-miterlimit="20"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_4_4582">
                                <rect width="28.5" height="19" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <div className=" text-gray-400 text-[50px]">
                            <p>Hala Arvata</p>
                            <p>Chrystome and Onyx</p>
                            <p>Purveteer</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}