import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Router, { NextRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { schema, Schema } from "@/utils/rules";
import { FcGoogle } from "react-icons/fc";
import SlideSignIn from "@/components/common/SlideSignIn";
import Input from "@/components/common/Input";
import { useAppContext } from "@/Context";
import { useTheme } from "next-themes";

type FormData = Pick<Schema, "email" | "password">;
const signInSchema = schema.pick(["email", "password"]);

export default function SignIn() {
    const router: NextRouter = Router;
    const { setIsLoading } = useAppContext();
    const [errorEmail, setErrorEmail] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("");
    const { theme } = useTheme();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(signInSchema),
    });

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const onSubmit = handleSubmit(async (data) => {
        setIsLoading(true);
        const { status }: any = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        if (status !== 200) {
            setIsLoading(false);
            setErrorEmail("Gmail not already exist");
            setErrorPassword("Password wrong");
            return;
        }

        await router.push("/");
        setIsLoading(false);
    });

    return (
        <div className="h-screen w-screen bg-white dark:bg-[#363636] md:bg-[#c3c3c3f5] flex justify-center items-center">
            <div className="max-w-[600px] lg:max-w-none w-full lg:w-[1056px] h-[700px] rounded-2xl bg-white dark:bg-[#1a1a1a] flex justify-between p-10 md:p-5 md:pl-10 overflow-hidden">
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="w-full lg:w-[469px] flex items-center rounded-2xl"
                >
                    <div className="w-[100%]">
                        <div className="pb-5">
                            <Link href={"/"}>
                                {theme == "light" ? (
                                    <Image width={60} src={require("@/public/Images/logo.png")} alt="logo" />
                                ) : (
                                    <Image width={60} src={require("@/public/Images/logoDark.png")} alt="logo" />
                                )}
                            </Link>
                        </div>
                        <div className="text-black dark:text-white">
                            <h1 className="font-bold text-[32px] pb-5">Welcome Back!</h1>
                            <p className="pb-7 text-[14px] font-semibold">Please enter sign in detail below</p>
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
                                    errorMessageUtils={errorEmail}
                                />

                                <Input
                                    isShowPassword={true}
                                    name="password"
                                    register={register}
                                    type="password"
                                    autoComplete="on"
                                    placeholder="Password"
                                    labelInput="Password"
                                    animationBorder
                                    errorMessage={errors.password?.message}
                                    errorMessageUtils={errorPassword}
                                />
                                <div>
                                    <p className="pb-5 text-[14px] text-#6F6D6D text-right font-medium text-black dark:text-white">
                                        Forget password?
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full font-bold text-[20px] text-white bg-black border-2 dark:bg-[#1C1C1C] dark:border-[#adadad] hover:bg-[#3d3d3d] dark:hover:bg-[#3b3b3b] px-5 py-3 rounded-xl"
                                >
                                    Sign in
                                </button>
                            </form>
                        </div>
                        <div className="">
                            <div className="flex items-center justify-around pb-5">
                                <div className="bg-[#C5BCBC] h-[1px] w-[30%]"></div>
                                <div className="text-[#888585]">or continute</div>
                                <div className="bg-[#C5BCBC] h-[1px] w-[30%]"></div>
                            </div>
                            <button
                                type="submit"
                                className="border-[#52525233] dark:border-[#adadad] border-2 rounded-xl w-full bg-white dark:bg-[#1a1a1a] dark:hover:bg-[#3b3b3b] px-5 py-3 flex flex-row justify-center items-center"
                            >
                                <FcGoogle className="text-2xl" />
                                <p className="font-bold text-[20px] px-0 sm:px-5 ml-2 text-black dark:text-white">
                                    Sign in with Google
                                </p>
                            </button>
                            <div className="flex justify-center py-3">
                                <p className="font-medium pr-2 text-[#888585] text-[13px]">Don’t have on account? </p>
                                <Link href="signup" className="font-bold pr-2 text-[13px] text-black dark:text-white">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <SlideSignIn />
            </div>
        </div>
    );
}
