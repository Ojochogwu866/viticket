import { Link } from "@remix-run/react";

export default function Work(){
    const hover = "hover:border-b-4 hover:border-yellow-300 relative w-auto transition duration-700 ease-in"
    const images = {
        image1:"https://res.cloudinary.com/osca/image/upload/v1690197375/osf/2023/gallery/erjzlrsogcu0ephdvjfw.jpg",
        image2:"https://res.cloudinary.com/osca/image/upload/v1690197301/osf/2023/gallery/lxrxztohyosqcjm198iu.jpg",
        image3:"",
        image4:"",
        image5:""

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
                <div className=" italic  flex justify-center items-center font-light text-[12px] px-5">Viticket</div>
                <div className=" flex text-[12px] gap-6">
                    <div className={`${hover}`}>Tech Events</div>
                    <div className={`${hover}`}>Music</div>
                    <div className={`${hover}`}>Festivals</div>
                    <div className={`${hover}`}>Others</div>
                </div>
            </div>
            <div className=" mt-32 flex items-center">
            <div className="flex">
                <div className=" w-2/5 h-[444px] relative">
                <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className=" absolute" width="218" height="313" viewBox="0 0 218 313" fill="none">
                <path d="M59.2652 311.678C146.199 311.678 216.667 242.207 216.667 156.477C216.667 70.7476 146.199 1.27686 59.2652 1.27686C-27.6683 1.27686 -98.1367 70.7924 -98.1367 156.522C-98.1367 242.252 -27.6683 311.723 59.2652 311.723V311.678Z" stroke="#E8E8E8" stroke-miterlimit="10"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className=" absolute left-16" width="317" height="313" viewBox="0 0 317 313" fill="none">
                <path d="M158.78 311.678C245.713 311.678 316.182 242.207 316.182 156.477C316.182 70.7476 245.713 1.27686 158.78 1.27686C71.846 1.27686 1.37793 70.7476 1.37793 156.477C1.37793 242.207 71.846 311.678 158.78 311.678Z" stroke="#E8E8E8" stroke-miterlimit="10"/>
            </svg>
            </div>
            <div className="flex w-full mt-8 relative gap-6">
            <div className="flex">
                <div className="">
                        <img className=" max-w-lg h-[350px] rounded border 
                        p-1 dark:border-neutral-700 " alt=""  src={images.image1} />
                        <div className="flex mt-2 gap-3">
                        <p className=" text-white text-sm">OSCA FEST 2023</p>
                        <p className=" text-xs bg-white px-2">Category: Tech Events, Technology</p>
                        </div>
                    </div>
                </div>
                <div className="">
                <div className="">
                        <img alt=""  className=" max-w-lg h-[350px] rounded border 
                        p-1 dark:border-neutral-700 "  src={images.image2} />
                        <div className="flex mt-2 gap-3">
                        <p className=" text-white text-sm">OSCA FEST 2023</p>
                        <p className=" text-xs bg-white px-2">Category: Tech Events, Technology</p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                <div className="">
                        <img className=" max-w-lg h-[350px] rounded border 
                        p-1 dark:border-neutral-700 " alt=""  src={images.image1} />
                        <div className="flex mt-2 gap-3">
                        <p className=" text-white text-sm">OSCA FEST 2023</p>
                        <p className=" text-xs bg-white px-2">Category: Tech Events, Technology</p>
                        </div>
                    </div>
        
                </div>
                </div>
                </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" className="" height="39" viewBox="0 0 40 39" fill="none">
                    <path d="M20 38.3332V1.6665" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M33.3327 25L19.9994 38.3333L6.66602 25" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="">
                <div className=" mt-20">
                <h1 className=" text-white text-[13px] uppercase">Get your events featured on our board</h1>
                <div className="mt-6 ml-10 flex flex-col">
                <span className=" text-left text-2xl text-gray-700 text-opacity-50 italic font-bold pt-5
                    leading-5 ">Feature <br/> On Our <br/> Platform</span>
                    </div>
                    </div>
            </div>
        </div>
    )
}