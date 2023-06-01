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
      <div className="flex justify-center">
        {navPathProfile.map((item, index) => {
          return (
            <div className="p-2">
              <Link
                href={item.path}
                className={`p-1 ${
                  router.pathname == item.path
                    ? "font-bold border-b-[3px] border-[#333]"
                    : ""
                } text-[15px]`}
              >
                {item.value}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="w-[200px] flex flex-nowrap bg-[#F6F6F6] rounded-2xl ml-[13px] p-2">
        <div className="px-3 flex justify-center items-center ">
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
