import Router from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, Schema } from "@/utils/rules";
import Input from "@/components/common/Input";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { FcGoogle } from "react-icons/fc";
import { auth } from "@/apis/auth";
const router = Router;

type FormData = Pick<Schema, "email" | "password">;
const loginSchema = schema.pick(["email", "password"]);

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    // handler API
    console.log("[P]::SignUP::", data);
    const payload = {
      email: data.email,
      password: data.password,
    };
    console.log("[P]::payload::", payload);
    try {
      const holderLogin: any = await auth.login(payload);
      console.log("[P]::Login", holderLogin);
      // handler loading
      if (holderLogin.message !== "ErrorData") {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  });

  const [inform, setInform] = useState([
    {
      key: 0,
      title: "Knowledge is power 1.",
      feature:
        "10 beautiful compliments are not as good as one genuine compliment.",
      images: [
        {
          className: "absolute left-[20%] top-[10%] animate-wiggle",
          width: 290,
          height: 285,
          src: require("../../public/Images/Login/model1/frame.png"),
          alt: "Image",
        },
        {
          className: "absolute top-[15%] animate-spinLeftAnimation",
          width: 65,
          height: 85,
          src: require("../../public/Images/Login/model1/support_1.png"),
          alt: "Cup",
        },
        {
          className: "absolute top-[50%] left-[5%] animate-spinRightAnimation",
          width: 150,
          height: 154,
          src: require("../../public/Images/Login/model1/support_2.png"),
          alt: "Effect Book Shadow",
        },
        {
          className: "absolute left-[15%] top-[10%] animate-slideToRight",
          width: 350,
          height: 350,
          src: require("../../public/Images/Login/model1/person.png"),
          alt: "Image",
        },
      ],
    },
    {
      key: 1,
      title: "Knowledge is power 2.",
      feature:
        "10 beautiful compliments are not as good as one genuine compliment.",
      images: [
        {
          className: "absolute left-[20%] top-[10%] animate-wiggle",
          width: 290,
          height: 285,
          src: require("../../public/Images/Login/model2/frame.png"),
          alt: "Image",
        },
        {
          className: "absolute top-[8%] animate-spinLeftAnimation",
          width: 65,
          height: 85,
          src: require("../../public/Images/Login/model2/support_1.png"),
          alt: "Cup",
        },
        {
          className: "absolute top-[50%] left-[5%] animate-spinRightAnimation",
          width: 150,
          height: 154,
          src: require("../../public/Images/Login/model2/support_2.png"),
          alt: "Effect Book Shadow",
        },
        {
          className: "absolute left-[15%] top-[10%] animate-slideToRight",
          width: 350,
          height: 350,
          src: require("../../public/Images/Login/model2/person.png"),
          alt: "Image",
        },
      ],
    },
    {
      key: 2,
      title: "Knowledge is power 3.",
      feature:
        "10 beautiful compliments are not as good as one genuine compliment.",
      images: [
        {
          className: "absolute left-[20%] top-[20%] animate-wiggle",
          width: 290,
          height: 285,
          src: require("../../public/Images/Login/model3/frame.png"),
          alt: "Image",
        },
        {
          className: "absolute top-[10%] animate-spinLeftAnimation",
          width: 65,
          height: 85,
          src: require("../../public/Images/Login/model3/support_1.png"),
          alt: "Cup",
        },

        {
          className: "absolute top-[50%] left-[5%] animate-spinRightAnimation",
          width: 150,
          height: 154,
          src: require("../../public/Images/Login/model3/support_2.png"),
          alt: "Effect Book Shadow",
        },
        {
          className: "absolute top-[45%] animate-spinLeftBottomAnimation",
          width: 65,
          height: 85,
          src: require("../../public/Images/Login/model3/support_3.png"),
          alt: "Cup",
        },
        {
          className: "absolute left-[15%] top-[15%] rotate-12 animate-slideToRight",
          width: 350,
          height: 350,
          src: require("../../public/Images/Login/model3/person.png"),
          alt: "Image",
        },
      ],
    },
    {
      key: 3,
      title: "Knowledge is power 4.",
      feature:
        "10 beautiful compliments are not as good as one genuine compliment.",
      images: [
        {
          className: "absolute left-[20%] top-[20%] animate-wiggle",
          width: 290,
          height: 285,
          src: require("../../public/Images/Login/model4/frame.png"),
          alt: "Image",
        },
        {
          className: "absolute top-[15%] animate-spinLeftAnimation",
          width: 65,
          height: 85,
          src: require("../../public/Images/Login/model4/support_1.png"),
          alt: "Cup",
        },
        {
          className: "absolute top-[50%] left-[5%] animate-spinRightAnimation",
          width: 150,
          height: 154,
          src: require("../../public/Images/Login/model4/support_2.png"),
          alt: "Effect Book Shadow",
        },
        {
          className: "absolute left-[15%] top-[10%] animate-slideToRight",
          width: 350,
          height: 350,
          src: require("../../public/Images/Login/model4/person.png"),
          alt: "Image",
        },
      ],
    },
  ]);

  const [select, setSelect] = useState(0);

  return (
    <div className="h-screen w-screen bg-[#c3c3c3f5] flex justify-center items-center">
      <div className="w-[1056px] h-[700px] rounded-2xl bg-[#fff] flex justify-between p-5 pl-10 overflow-hidden">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-[469px] flex items-center bg-[#fff] rounded-2xl"
        >
          <div className="w-[100%]">
            <div className="pb-5">
              <Image
                width={60}
                src={require("@/public/Images/logo.png")}
                alt="logo"
              />
            </div>
            <div className="">
              <h1 className="font-bold text-[32px] pb-5">Welcome Back!</h1>
              <p className="pb-7 text-[14px] font-semibold">
                Please enter log in detail below
              </p>
            </div>
            <div className="pb-5">
              <form onSubmit={onSubmit} className="w-full">
                <Input
                  name="email"
                  register={register}
                  type="text"
                  autoComplete="on"
                  placeholder="Email"
                  labelInput="Email"
                  animationBorder
                  errorMessage={errors.email?.message}
                />

                <Input
                  name="password"
                  register={register}
                  type="password"
                  autoComplete="on"
                  className="text-xl pb-1"
                  placeholder="Password"
                  labelInput="Password"
                  animationBorder
                  errorMessage={errors.password?.message}
                />
                <div>
                  <p className="pb-5 text-[14px] text-#6F6D6D text-right font-medium">
                    Forget password?
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full font-bold text-[20px] bg-primary text-white bg-black hover:bg-[#3d3d3d] px-5 py-3 rounded-xl"
                >
                  Login
                </button>
              </form>
            </div>
            <div className="">
              <div className="flex items-center justify-around pb-5">
                <div className="bg-[#C5BCBC] h-[1px] w-[30%]"></div>
                <div className="text-[#888585]">or continute </div>
                <div className="bg-[#C5BCBC] h-[1px] w-[30%]"></div>
              </div>
              <button
                type="submit"
                className="border-[#52525233] border-2 rounded-xl w-full bg-primary bg-white px-5 py-3 flex flex-row justify-center items-center"
              >
                <FcGoogle className="text-2xl" />
                <p className="font-bold text-[20px] px-5">Login with Google</p>
              </button>
              <div className="flex justify-center py-3">
                <p className="font-medium pr-2 text-[#888585] text-[13px]">
                  Don’t have on account?{" "}
                </p>
                <Link href="signup" className="font-bold pr-2 text-[13px]">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="w-[469px] bg-[#000000] rounded-xl rounded-bl-[50px]"
        >
          {inform.map((item, index) => {
            return (
              index == select && (
                <div key={index}>
                  <div className="h-[450px] relative">
                    {item.images?.map((item, key) => (
                      <Image key={key} className={item.className}
                        width={item.width}
                        height={item.height}
                        src={item.src}
                        alt={item.alt}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-center mb-10">
                      <div className="w-[372px] animate-fadeIn">
                        <h1 className="text-white text-[32px] font-bold text-center pb-5">
                          {item.title}
                        </h1>
                        <p className="text-white text-[16px] font-bold text-center">
                          {item.feature}
                        </p>
                      </div>
                    </div>
                    <div className="w-[100%] flex justify-center">
                      <ul className="bg-[#3c3b3bd2] w-[110px] h-[30px] rounded-xl flex px-2 items-center justify-around">
                        {inform.map((item, index1) => {
                          return (
                            <li
                              key={index1}
                              className={`${item.key == select ? "bg-[#D9D9D9]" : ""
                                } w-[20px] h-[20px] rounded-xl flex items-center justify-center hover:cursor-pointer`}
                              onClick={() => {
                                setSelect(index1);
                              }}
                            >
                              <div
                                className={`${item.key == select
                                    ? "bg-[#00FF85]"
                                    : "bg-[#D9D9D9]"
                                  } w-[10px] h-[10px] rounded-xl`}
                              ></div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
