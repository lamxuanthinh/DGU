import loadingSetting from "@/public/Images/loadingSetting.svg";
import Image from "next/image";

interface ILoadingProps {
    isIcon?: boolean;
}

const Loading = ({ isIcon = true }: ILoadingProps) => {
    return (
        <div
            className={`fixed left-0 top-0 w-full h-full z-1 flex items-center justify-center bg-black z-[50] ${
                isIcon ? "opacity-70" : "opacity-5"
            }`}
        >
            {isIcon && <Image src={loadingSetting} alt="loading icon" />}
        </div>
    );
};

export default Loading;