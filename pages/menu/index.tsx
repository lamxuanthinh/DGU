import MainLayout from "@/components/layout/MainLayout";
import MenuTablet from "@/Views/MenuTablet";

import { useEffect, useState } from "react";

const Menu = () => {

    const [isTabletLayout, setIsTabletLayout] = useState(false); 

    useEffect(() => {
        const handleResize = () => {
            setIsTabletLayout(window.innerWidth <= 1280);
        } 

        handleResize();
        window.removeEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);


    return (
        <>
            {isTabletLayout ? (
                    <MenuTablet />
                ) : (
                    <div className="w-full h-full bg-[#ffffff] absolute top-0 left-0 z-10 flex justify-center items-center ">
                        This page does not exist at the screen ( &gt; 1280px)
                    </div>
                )
            }
        </>
    );
}
export default Menu;
Menu.Layout = MainLayout;
