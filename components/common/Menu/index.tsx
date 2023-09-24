import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { IMenuItems } from "@/model/menuItems";
import Button from "../Button";
import { authServices, configAuth } from "@/apis";
import { useRouter } from "next/router";

interface IMenuProps {
    className?: string;
    menuItems: Array<IMenuItems>;
    children: string | React.ReactNode;
    theme?: "black";
}

function Menu({ menuItems, children, theme, className }: IMenuProps) {
    const { data: session } = useSession() || {};
    const router = useRouter();
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const lastItems = menuItems[menuItems.length - 1];
    const LastIcon: any = lastItems.icon;
    const menuRef = useRef<HTMLDivElement>(null);

    const handleToggleMenu = () => {
        setIsMenu(!isMenu);
    };

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenu(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        if (session?.user.userId) {
            try {
                const { code } = await authServices.logout(configAuth(session));
                if (code !== 200) router.push("/404");
                await signOut({ redirect: false });
                router.push("/signin");
            } catch (error) {
                console.log("Error during log-out API call :", error);
            }
        }
    };

    return (
        <div className="relative" ref={menuRef}>
            <div className="select-none" onClick={handleToggleMenu}>
                {children}
            </div>
            {isMenu && (
                <ul
                    className={`bg-white dark:bg-[#2C2C2C] absolute top-[60px] right-[-12px] w-[230px]  shadow-menu z-50 rounded-[20px] py-[10px] max-h-[60vh] overflow-y-scroll no-scrollbar  ${className}`}
                >
                    {menuItems.slice(0, -1).map((item) => {
                        const Icon: any = item.icon;
                        return (
                            <li
                                key={item.key}
                                className={`cursor-pointer
                                ${theme === "black" ? "hover:bg-[#7b7b7b08]" : "hover:bg-[#16182308]"}
                                rounded-[10px] mx-[8px] my-[2px]`}
                            >
                                <Link
                                    className="flex items-center text-base font-medium px-[14px] py-[10px]"
                                    href={item.href}
                                >
                                    <Icon fontSize="22px" />
                                    <span className="ml-4">{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                    {lastItems && (
                        <>
                            <div className="w-full h-[1px] bg-[#a8a8a8] opacity-40"></div>
                            <li
                                className={`cursor-pointer font-medium hover:bg-[#16182308] rounded-[10px] mx-[8px] my-[2px]
                                    ${theme === "black" ? "hover:bg-[#7b7b7b08]" : "hover:bg-[#16182308]"}
                                   `}
                            >
                                <Button
                                    onClick={handleLogout}
                                    className="flex items-center text-base  font-medium px-[14px] py-[10px]"
                                >
                                    <LastIcon fontSize="22px" />
                                    <span className="ml-4">{lastItems.name}</span>
                                </Button>
                            </li>
                        </>
                    )}
                </ul>
            )}
        </div>
    );
}

export default Menu;
