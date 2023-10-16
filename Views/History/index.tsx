import { MdOutlineContactless, MdOutlineVideoCameraBack, MdPayment } from "react-icons/md";
import { useState } from "react";
import Video from "@/components/common/History/Video";
import Contact from "@/components/common/History/Contact";
import Payload from "@/components/common/History/Payload";

const History = () => {
    const [indexActiveMenu, setIndexActiveMenu] = useState(0);
    const dataMenuHistory = [
        {
            key: 0,
            title: "Video",
            icon: <MdOutlineVideoCameraBack className="text-2xl" />,
            render: <Video />,
        },

        {
            key: 1,
            title: "Contact",
            icon: <MdOutlineContactless className="text-2xl" />,
            render: <Contact />,
        },
        {
            key: 2,
            title: "Payload",
            icon: <MdPayment className="text-2xl" />,
            render: <Payload />,
        },
    ];

    const handleActiveMenu = (index: number) => {
        setIndexActiveMenu(index);
    };

    return (
        <div className="w-full mx-[50px] my-4">
            <div className="flex gap-x-9 mb-10">
                {dataMenuHistory.map(({ key, icon, title }) => (
                    <div
                        onClick={() => handleActiveMenu(key)}
                        key={key}
                        className={`py-[6px] px-4 flex items-center text-lg gap-x-2 rounded cursor-pointer select-none transition-all ${
                            indexActiveMenu === key ? "bg-[#EEF9FF] text-black" : "text-[#707070]"
                        }`}
                    >
                        {icon}
                        <h3>{title}</h3>
                    </div>
                ))}
            </div>
            {dataMenuHistory[indexActiveMenu].render}
        </div>
    );
};

export default History;
