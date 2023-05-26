import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, Schema } from "@/utils/rules";
import Input from "@/components/common/Input";
import Image from "next/image";
import { useState } from "react";

// import DatePicker from "@/components/common/DatePicker.tsx";

type FormData = Pick<Schema, "email" | "password" | "confirm_password">;
const registerSchema = schema.pick(["email", "password", "confirm_password"]);

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const [inform, setInform] = useState([
    {
      key: 0,
      title: "Knowledge is power.",
      feature:
        "10 beautiful compliments are not as good as one genuine compliment.",
    },
    {
      key: 1,
      title: "Knowledge is power.",
      feature:
        "10 beautiful compliments are not as good as one genuine compliment.",
    },
    {
      key: 2,
      title: "Knowledge is power.",
      feature:
        "10 beautiful compliments are not as good as one genuine compliment.",
    },
    {
      key: 3,
      title: "Knowledge is power.",
      feature:
        "10 beautiful compliments are not as good as one genuine compliment.",
    },
  ]);

  const [select, setSelect] = useState(0);

  return (
    <div className="text-red-700">123</div>
    // <div className="h-screen w-screen bg-[#717171f5] flex justify-center items-center">

    //   <div className="w-[1056px] h-[700px] rounded-2xl bg-[#f7f4f4d1] flex justify-between p-5 pl-10">
    //     <div className="w-[469px] bg-[#000000] rounded-xl rounded-bl-[50px]">
    //       {inform.map((item, index) => {
    //         return (
    //           index == select && (
    //             <div key={index}>
    //               <div className="h-[450px] relative">
    //                 <Image
    //                   className="absolute left-[87px] top-[55px]"
    //                   width={290}
    //                   height={285}
    //                   src={require("../../public/Images/Login/Vector_1.png")}
    //                   alt="Image"
    //                 />
    //                 <Image
    //                   className="absolute top-2 left-[280px] top-[60px]"
    //                   width={65}
    //                   height={85}
    //                   src={require("../../public/Images/Login/cup_1.png")}
    //                   alt="Cup"
    //                 />
    //                 <Image
    //                   className="absolute top-[227px] left-[21px]"
    //                   width={150}
    //                   height={154}
    //                   src={require("../../public/Images/Login/effect-book-shadow.png")}
    //                   alt="Effect Book Shadow"
    //                 />

    //                 <Image
    //                   className="absolute top-2 left-[69px] top-[56px]"
    //                   width={350}
    //                   height={350}
    //                   src={require("../../public/Images/Login/image_1.png")}
    //                   alt="Image"
    //                 />
    //               </div>
    //               <div className="flex flex-col">
    //                 <div className="flex justify-center mb-10">
    //                   <div className="w-[372px]">
    //                     <h1 className="text-white text-[32px] font-bold text-center pb-5">
    //                       {item.title}
    //                     </h1>
    //                     <p className="text-white text-[16px] font-bold text-center">
    //                       {item.feature}
    //                     </p>
    //                   </div>
    //                 </div>
    //                 <div className="w-[100%] flex justify-center">
    //                   <ul className="bg-[#3c3b3bd2] w-[110px] h-[30px] rounded-xl flex px-2 items-center justify-around">
    //                     {inform.map((item, index1) => {
    //                       return (
    //                         <li
    //                           key={index1}
    //                           className={`${
    //                             item.key == select ? "bg-[#D9D9D9]" : ""
    //                           } w-[20px] h-[20px] rounded-xl flex items-center justify-center`}
    //                         >
    //                           <div
    //                             className={`${
    //                               item.key == select
    //                                 ? "bg-[#00FF85]"
    //                                 : "bg-[#D9D9D9]"
    //                             } w-[10px] h-[10px] rounded-xl`}
    //                           ></div>
    //                         </li>
    //                       );
    //                     })}
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //           )
    //         );
    //       })}
    //     </div>
    //     <div className="w-[469px]">
    //       <div className="pt-5 pb-10">
    //         <h1 className="font-bold text-[32px] pb-5">Welcome you to DGU!</h1>
    //         <p className="text-[14px] font-semibold">
    //           Please fill in form below to become member of DGU
    //         </p>
    //       </div>
    //       <div>
    //         <form onSubmit={onSubmit} className="w-full">
    //           <div className="">
    //             <Input
    //               name="email"
    //               register={register}
    //               type="text"
    //               autoComplete="on"
    //               placeholder="Email"
    //               className="text-xl pb-1"
    //               errorMessage={errors.email?.message}
    //             />

    //             <Input
    //               name="fullname"
    //               register={register}
    //               type="text"
    //               autoComplete="on"
    //               placeholder="full name"
    //               className="text-xl pb-1"
    //             />

    //             <div>
    //             </div>

    //             <Input
    //               name="password"
    //               register={register}
    //               type="password"
    //               autoComplete="on"
    //               className="text-xl pb-1"
    //               placeholder="Password"
    //               errorMessage={errors.password?.message}
    //             />

    //             <Input
    //               name="confirm_password"
    //               register={register}
    //               type="text"
    //               autoComplete="on"
    //               placeholder="Confirm password"
    //               className="text-xl pb-1"
    //               errorMessage={errors.confirm_password?.message}
    //             />
    //           </div>
    //           <div className="flex justify-start">
    //             <div className="flex justify-center">
    //               <input type="checkbox" />
    //               <p className="px-2">Do you agree to the terms of DGU?</p>
    //             </div>
    //           </div>
    //           <button
    //             type="submit"
    //             className="w-full font-bold text-[20px] bg-primary mt-5 text-white bg-black px-5 py-3 rounded-xl"
    //           >
    //             Sign up
    //           </button>
    //         </form>
    //       </div>
    //       <div className="py-5">
    //         <div className="flex justify-center py-5">
    //           <p className="font-medium pr-2 text-[#888585] text-[13px]">
    //             Already have an account?
    //           </p>
    //           <p className="font-bold pr-2 text-[13px]">Sign in</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
