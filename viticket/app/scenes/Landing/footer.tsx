
export default function footer(){
    const ul = "text-sm text-gray-400 font-semibold uppercase leading-7"
    // const li = "text-sm font-normal leading-4"
    return(
        <div className=" text-gray-400 flex flex-wrap py-20 md:gap-20">
            <div className="">
                <h1 className=" font-bold text-lg text-gray-700 ">Foundation3</h1>
                <span className=" text-sm font-normal">
                    <p>Privacy Policy | Terms and Conditions</p>
                    <p>support@foundation3.io</p>
                </span>
            </div>
            <div>
                <ul className=" text-[13px] font-normal leading-6 text-gray-100">
                    <p className={`${ul}`}>Company</p>
                    <li>About</li>
                    <li>Privacy</li>
                    <li>License</li>
                    <li>Security</li>
                </ul>
            </div>
            <div className="">
            <ul className=" text-[13px] font-normal leading-6 text-gray-100">
                    <p className={`${ul}`}>Documentation</p>
                    <li>Developers</li>
                    <li>Public API</li>
                    <li>Product</li>
                </ul>
            </div>
            <div className="">
            <ul className=" text-[13px] font-normal leading-6 text-gray-100">
                    <p className={`${ul}`}>Resources</p>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Platform</li>
                    <li>Merch Store</li>
                    <li>App Store</li>
                </ul>
            </div>
            <div className="">
                <ul className="grid grid-cols-2 gap-3 text-[13px]">
                    <li>FB</li>
                    <li>TW</li>
                    <li>IG</li>
                    <li>LI</li>
                </ul>
            </div>
        </div>
    )
}