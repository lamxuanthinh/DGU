import Button from "@/components/common/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { BiBookOpen, BiMessageAlt, BiTrash } from "react-icons/bi";
import { MdOutlineModeEditOutline } from "react-icons/md";

const SideBar = () => {
    return (
        <div className="w-[260px] py-4 px-2.5 hidden lg:block">
            <div className="flex items-center gap-x-2.5">
                <Button
                    className="border border-[#B3B3B3] rounded flex-1 py-2 font-medium"
                    leftIcon={<AiOutlinePlus />}
                >
                    New Chat
                </Button>
                <Button className="w-10 h-10 border border-[#B3B3B3] rounded">
                    <BiBookOpen />
                </Button>
            </div>
            <p className="py-3">Today</p>
            <ul className="space-y-2.5">
                <li className="cursor-pointer hover:bg-[#666666]/[.2] transition-colors flex items-center justify-between px-2.5 py-3 rounded-[10px] bg-[#666666]/[.3]">
                    <BiMessageAlt />
                    <p>Split Into Smaller ....</p>
                    <div className="flex items-center gap-x-1">
                        <Button>
                            <MdOutlineModeEditOutline />
                        </Button>
                        <Button>
                            <BiTrash />
                        </Button>
                    </div>
                </li>
                <li className="cursor-pointer hover:bg-[#666666]/[.2] transition-colors flex items-center justify-between px-2.5 py-3 rounded-[10px]">
                    <BiMessageAlt />
                    <p>Split Into Smaller ....</p>
                    <div className="flex items-center gap-x-1">
                        <Button>
                            <MdOutlineModeEditOutline />
                        </Button>
                        <Button>
                            <BiTrash />
                        </Button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
