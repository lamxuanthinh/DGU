import { StaticImageData } from 'next/image';
import { BiArrowBack } from "react-icons/bi";
import Button from "../Button";
import Image from "next/image";

interface IVerifyAuthProps {
     heading: string,
     title?: string,
     srcImage: StaticImageData,
     description: string,
     isVerifySuccess?: boolean,
     isVerifyError?: boolean,
}

function VerifyAuth({ heading, srcImage, description, isVerifySuccess, isVerifyError }: IVerifyAuthProps) {
     return (
          <main className="flex items-center justify-center p-3 min-h-screen">
               <Button href="/signup" className="fixed top-2 left-2 text-2xl px-4 py-3">
                    <BiArrowBack />
               </Button>
               <div className="flex flex-col items-center justify-center gap-y-5">
                    <Image className="max-w-[340px]" src={srcImage} alt="image notification" priority={true} />
                    <h1 className={`font-bold text-3xl lg:text-5xl ${isVerifyError ? "text-[#FF0000]" : ""}`}>{heading}</h1>
                    <p className={`max-w-[700px] text-center text-base text-[#565656] dark:text-white lg:text-xl ${isVerifyError ? "text-[#FF0000]" : ""}`}>
                         {description}
                    </p>
                    <div className="flex font-bold flex-col gap-3 lg:flex-row lg:gap-5">
                         {
                              isVerifySuccess ?
                                   <Button href="/" className="bg-[#000] text-[#fff] px-10 rounded-[5px] lg:w-[330px] py-3">
                                        Go To Home Page
                                   </Button>
                                   :
                                   <>
                                        <Button className="bg-[#000] text-[#fff] px-10 rounded-[5px] lg:w-[330px] py-3">
                                             Resend Email
                                        </Button>
                                        <Button href="/support" type="outline" className="px-10 rounded-[5px] border-[3px] lg:w-[330px] py-3">
                                             Contact Support
                                        </Button>
                                   </>
                         }
                    </div>
               </div>
          </main >
     );
}

export default VerifyAuth;