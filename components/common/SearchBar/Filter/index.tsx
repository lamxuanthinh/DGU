import { useState } from "react";
import Button from "../../Button";
import { IoMdArrowDropdown } from "react-icons/io";

function Filter() {
     const [isCollapse, setIsCollapse] = useState<boolean>(false);

     const handleToggleCollapse = () => {
          setIsCollapse(!isCollapse);
     }

     return (
          <div className="flex flex-col px-4 py-1">
               <div className="flex items-center">
                    <span className="text-[#8A8A8A]">Filter by</span>
                    <Button className="ml-1 text-3xl" onClick={handleToggleCollapse}>
                         <IoMdArrowDropdown className="text-[#8A8A8A]" />
                    </Button>
               </div>
               {
                    !isCollapse && <div className="flex mt-2">
                         <Button className="font-semibold px-2 border border-solid border-[#8F8F8F]/[0.66] rounded-[5px] w-[84px] h-[30px] mr-3">
                              Users
                         </Button>
                         <Button className="font-semibold px-2 border border-solid border-[#8F8F8F]/[0.66] rounded-[5px] w-[84px] h-[30px] mr-3">
                              Shorts
                         </Button>
                         <Button className="font-semibold px-2 bg-[#C9C0C0]/[.42] rounded-[5px] w-[84px] h-[30px] mr-3 text-[#605F5F]" >
                              Course
                         </Button>
                    </div>
               }
          </div>
     );
}

export default Filter;