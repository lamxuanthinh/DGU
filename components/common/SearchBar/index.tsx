import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import SearchList from "./SearchList";
import Filter from "./Filter";
import { MdFilterList, MdOpenInNew } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useTranslation } from "next-i18next";

function SearchBar() {
    const {t} = useTranslation("home")
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [isFilter, setIsFilter] = useState<boolean>(false);
    const [valueInput, setValueInput] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSearchResult, setIsSearchResult] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const targetElement = event.target as HTMLElement;

            if (searchInputRef.current && !searchInputRef.current.contains(targetElement)) {
                setIsSearchResult(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleSearch = async () => {
            if (valueInput.trim()) {
                setIsLoading(true);
                // call api in here
                await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve("done!");
                    }, 500);
                });
                setIsLoading(false);
            }
        };
        handleSearch();
    }, [valueInput]);

    const handleToggleFilter = () => {
        setIsFilter(!isFilter);
    };

    const handleClearSearch = () => {
        setValueInput("");
    };

    const onChangeValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.target.value);
    };

    const handleOpenSearchResult = () => {
        setIsSearchResult(true);
    };

    return (
        <div className="relative w-[70vw] lg:w-[50vw] bg-white dark:bg-[#2C2C2C]" ref={searchInputRef}>
            <div className="flex px-7 py-1 relative">
                <Button className="text-base text-[#909090]">
                    <BsSearch />
                </Button>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={t("search.placeholder")}
                    className="outline-none w-full px-4 py-2 dark:bg-[#2C2C2C]"
                    onChange={onChangeValueInput}
                    value={valueInput}
                    onFocus={handleOpenSearchResult}
                />
                {isSearchResult && (
                    <>
                        <Button className="text-2xl text-[#6D6C6C] mr-3 relative" onClick={handleToggleFilter}>
                            {isFilter ? (
                                <>
                                    <MdFilterList className="text-[#0075FF] opacity-70" />
                                </>
                            ) : (
                                <MdFilterList className="text-[#6D6C6C] opacity-70" />
                            )}
                        </Button>
                        <Button className="text-2xl text-[#6D6C6C]" onClick={handleClearSearch}>
                            {isLoading ? (
                                <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                            ) : (
                                <IoMdClose className="text-lg" />
                            )}
                        </Button>
                    </>
                )}
            </div>
            {isSearchResult && (
                <div className="bg-white  dark:bg-[#2C2C2C] absolute top-[61px] left-[-20px] w-full sm:w-[500px] lg:w-[400px] xl:w-full shadow-md shadow-[#000]/20 rounded-[5px] py-3 px-[30px] z-[1]">
                    <div className="overflow-y-scroll no-scrollbar max-h-[60vh] pb-8">
                        {isFilter && (
                            <>
                                <Filter />
                                <div className="h-[1px] w-full bg-[#979797] opacity-[0.12]" />
                            </>
                        )}
                        <SearchList isFilter={isFilter} isUser />
                        <SearchList isFilter={isFilter} />
                        <SearchList isFilter={isFilter} />
                    </div>
                    <div className="bg-white dark:bg-[#2C2C2C] absolute bottom-0 w-[calc(100%-30px)]">
                        <Button className="px-4 py-3 font-semibold" leftIcon={<MdOpenInNew className="text-xl" />}>
                            Open search page
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchBar;
