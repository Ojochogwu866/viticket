import  Menu  from '../../../public/assets/div.svg'

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center py-6">
            <div className=" text-yellow-300">VITICKET</div>
            <div className="">
                <img src={Menu} alt="menu"/>
            </div>
        </nav>
    )
}