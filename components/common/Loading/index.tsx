import loadingSetting from "@/public/Images/loadingSetting.svg"
import Image from "next/image";

const Loading = () => {
     return (
          <div className="fixed left-0 top-0 w-full h-full z-1 flex items-center justify-center bg-black opacity-70 z-[1000]">
               <Image src={loadingSetting} alt="loading icon" />
          </div>
     );
}

export default Loading;