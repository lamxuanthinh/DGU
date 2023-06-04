import index from "@/pages/login";
import Link from "next/link";
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
      <div className="w-[200px] flex flex-nowrap bg-[#ffffff] rounded-2xl ml-[13px] p-2">
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
      </div>
    </div>
  );
}
