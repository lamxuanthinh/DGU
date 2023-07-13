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
    <div className=" flex justify-between items-center w-full">
      <div className=" flex justify-center ml-[5rem] w-[240px] relative ">
        {navPathProfile.map((item, index) => {
          return (
            <div
              className="w-[120px] h-[40px] flex justify-center items-center choose-link"
              key={index}
              get-link={index}
            >
              <Link
                href={item.path}
                className={` flex justify-center items-center  text-[18px]
                            ${router.pathname == item.path ? "font-bold " : ""}
                          `}
              >
                {item.value}
              </Link>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
