import Link from "next/link";
import { useRouter } from "next/router";

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
        <div className=" flex justify-between items-center w-full">
            <div className=" flex justify-center w-[240px] ml-[4rem] relative ">
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
