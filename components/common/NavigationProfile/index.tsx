import index from "@/pages/login";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";

export default function NavigationProfile() {
  const router = useRouter();

  const navPathProfile = [
    {
      value: "My Course",
      path: "/profile/mycourse",
    },
    {
      value: "Studying",
      path: "/profile/studying",
    },
  ];

  const SearchElement = styled.div`
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    /* box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset; */
  `;

  return (
    <div className="pt-6 pb-3 flex justify-between items-center w-full">
      <div className=" flex justify-center w-[200px] relative ">
        {navPathProfile.map((item, index) => {
          return (
            <div
              className="w-[100px] h-[40px] flex justify-center items-center choose-link"
              key={index}
              get-link={index}
            >
              <Link
                href={item.path}
                className={` flex justify-center items-center  text-[15px]
                            ${router.pathname == item.path ? "font-bold " : ""}
                          `}
              >
                {item.value}
              </Link>
            </div>
          );
        })}
        <div
          id="action"
          className={`w-[100px] h-[40px] 
          ${router.pathname == "/profile/mycourse" ? "left-[0px]" : "left-[100px]"}`}
        ></div>
      </div>
      <SearchElement className="w-[200px] flex flex-nowrap  rounded-2xl ml-[13px] p-2 ">
        <div className="px-3 flex justify-center items-center  ">
          <BsSearch color="#909090" fontSize={"15px"} fontWeight={700} />
        </div>
        <div className="w-[410px] flex justify-center items-center">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="w-[100%] bg-transparent border-none outline-none"
          />
        </div>
      </SearchElement>
    </div>
  );
}
