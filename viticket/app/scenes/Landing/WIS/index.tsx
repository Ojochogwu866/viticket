

export default function WhatsInStock(){
    return(
        <div className="flex flex-col">
        <div className=" mt-[100px] flex items-center">
            <div className=" border-t h-[1px] border-gray-400 w-[120px]"/>
            <div className=" flex flex-col pl-[20px] pr-[10px]">
                <p className=" text-white md:text-[14px] text-[10px]">
                    Foundation3
                </p>
            </div>
            <div className="border-t h-[1px] border-gray-400 w-[120px]"/>
            <div className=" flex flex-col pl-[20px] pr-[10px]">
            <p className=" text-white md:text-[14px] text-[10px]">
                    Co-ordination and Interactivity 
                </p>
            </div>
            <div className="md:border-t h-[1px] border-gray-400 w-full"/>
        </div> 
        <div className=" w-full bg-background1 h-[300px] rounded-[8px] mt-[30px]">
        </div>
        </div>
    )
}