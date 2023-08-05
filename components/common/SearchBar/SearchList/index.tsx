import { useState } from "react";
import Button from "../../Button";
import SearchItem from "../SearchItem";
// IoMdArrowDropup
import { IoMdArrowDropdown, } from "react-icons/io";

interface ISearchListProps {
     isFilter?: boolean,
     isUser?: boolean
}

function SearchList({ isFilter, isUser }: ISearchListProps) {
     const [isCollapse, setIsCollapse] = useState<boolean>(false);

     const handleToggleCollapse = () => {
          setIsCollapse(!isCollapse);
     }

     return (
          <>
               {
                    isFilter &&
                    <div className="px-4 flex items-center mb-1 mt-[10px]">
                         <span className="font-semibold text-[15px] text-[#8A8A8A]">
                              User
                         </span>
                         <span className="w-5 h-5 bg-[#8A8A8A] rounded-[5px] ml-2 mr-[3px] flex items-center justify-center text-white font-semibold text-[10px]">
                              22
                         </span>
                         <Button className="text-3xl" onClick={handleToggleCollapse}>
                              <IoMdArrowDropdown className="text-[#8A8A8A]" />
                         </Button>
                    </div>
               }
               {
                    !isCollapse &&
                    <>
                         <SearchItem isUser={isUser} />
                         <SearchItem isUser={isUser} />
                         <SearchItem isUser={isUser} />
                         <SearchItem isUser={isUser} />
                         <SearchItem isUser={isUser} />
                         <Button className="font-semibold text-[15px] px-4 !block mt-3 mb-2" href="/searchAll" type="text">
                              See all results
                         </Button>
                         <div className="h-[1px] w-full bg-[#161823] opacity-[0.12]"></div>
                    </>
               }
          </>
     );
}

export default SearchList;