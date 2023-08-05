import { useEffect, useState } from "react";
import Button from "../Button";
import SearchList from "./SearchList";
import Filter from "./Filter";
import { MdFilterList, MdOpenInNew } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function SearchBar() {
     const [isFilter, setIsFilter] = useState<boolean>(false);
     const [valueInput, setValueInput] = useState<string>("");
     const [isLoading, setIsLoading] = useState<boolean>(false);

     useEffect(() => {
          const handleSearch = async () => {
               if (valueInput) {
                    setIsLoading(true);
                    // call api in here
                    await new Promise((resolve) => {
                         setTimeout(() => {
                              resolve("done!");
                         }, 500);
                    });
                    setIsLoading(false)
               }
          }
          handleSearch();
     }, [valueInput]);

     const handleToggleFilter = () => {
          setIsFilter(!isFilter);
     }

     const handleClearSearch = () => {
          setValueInput("");
     }

     const onChangeValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
          const valueInput = event.target.value.trim();
          setValueInput(valueInput);
     }

     return (
          <div className="absolute top-0 left-0 w-[55vw] bg-white z-20 rounded-[5px] border-[1px] border-solid border-[rgba(159,159,159,0.2)]">
               <div className="flex px-7 py-1 border-b-[1px] ">
                    <Button className="text-2xl text-[#6D6C6C]">
                         <BiSearch />
                    </Button>
                    <input type="text" placeholder="Search in here" className="outline-none w-full px-4 py-2" onChange={onChangeValueInput} value={valueInput} />
                    <Button className="text-2xl text-[#6D6C6C] mr-3 relative" onClick={handleToggleFilter}>
                         {isFilter ?
                              <>
                                   <MdFilterList className="text-[#0075FF] opacity-70" />
                              </>
                              : <MdFilterList className="text-[#6D6C6C] opacity-70" />
                         }
                    </Button>
                    <Button className="text-2xl text-[#6D6C6C]" onClick={handleClearSearch}>
                         {
                              isLoading ?
                                   <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                                   : <IoMdClose className="text-lg" />
                         }

                    </Button>
               </div>
               {isFilter && <Filter />}
               <div className="h-[1px] w-full bg-[#161823] opacity-[0.12]"></div>
               <div className="overflow-y-scroll no-scrollbar max-h-[60vh]">
                    <SearchList isFilter={isFilter} isUser />
                    <SearchList isFilter={isFilter} />
                    <SearchList isFilter={isFilter} />
               </div>
               <Button className="px-4 py-2 font-semibold" leftIcon={<MdOpenInNew className="text-xl" />}>
                    Open search page
               </Button>
          </div>
     )
}

export default SearchBar;