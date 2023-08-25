import Router, { NextRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, Schema } from "@/utils/rules";
import Input from "@/components/common/Input";
import { useEffect, useRef, useState } from "react";
import DatePicker from "@/components/common/DatePicker.tsx";
import moment from "moment";
import { FaTransgender } from "react-icons/fa";
import Link from "next/link";
import Select from "react-select";
import "aos/dist/aos.css";
import CheckboxInput from "@/components/common/CheckboxInput";
import { auth } from "@/apis/auth";
import SlideLogin from "@/components/common/SlideLogin";
import { useAppContext } from "@/Context";
import { QueryNotification } from "@/model";

type FormData = Pick<Schema, "email" | "password" | "confirm_password" | "birthday" | "gender" | "fullName">;

const signUpSchema = schema.pick(["email", "password", "confirm_password", "birthday", "gender"]);

export default function SignUp() {
    const router: NextRouter = Router;
    const { setIsLoading } = useAppContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<FormData>({
        resolver: yupResolver(signUpSchema),
    });

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const handleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const [birthday, setBirthday] = useState("");

    const handleDateBirthday = (value: any) => {
        const formattedValue = moment(value).format("YYYY-MM-DD");
        setBirthday(formattedValue);
        setValue("birthday", formattedValue);
    };

    const handleGender = (value: any) => {
        setValue("gender", value.value);
    };

    const onSubmit = handleSubmit(async (data: FormData) => {
        setIsLoading(true);
        const payload = {
            email: data.email,
            name: data.fullName,
            password: data.confirm_password,
        };
        try {
            const { message, emailSent } = await auth.signUp(payload);
            if (message === "Gmail already exist") {
                setIsLoading(false);
                console.log("Gmail already exist");
                return;
            }
            if (message === "ErrorData") {
                setIsLoading(false);
                router.push("/404");
                return;
            }

            if (!emailSent && !message) {
                setIsLoading(false);
                router.push({
                    pathname: "/verifyemail/notification",
                    query: { emailSent: "dgu@gmail.com" },
                } as { query: QueryNotification });
            }

            setIsLoading(false);
            router.push({
                pathname: "/verifyemail/notification",
                query: { emailSent },
            } as { query: QueryNotification });
        } catch (error) {
            console.log(error);
        }
    });

    const selectRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseDown = (event: any) => {
            if (!selectRef.current?.contains(event.target)) {
                setMenuIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleMouseDown);

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);

    return (
        <div className="h-screen w-screen lg:bg-[#c3c3c3f5] flex justify-center items-center">
            <div className="lg:mx-6 max-w-[600px] lg:max-w-none w-full lg:w-[1056px] h-[700px] rounded-2xl bg-[#fff] flex justify-between p-5 pr-10 overflow-hidden">
                <SlideLogin />
                <div data-aos="fade-up" data-aos-duration="2000" className="w-full lg:w-[469px] flex items-center z-2">
                    <div className="w-[100%]">
                        <div className="pb-8 pt-4">
                            <h1 className="font-bold text-[32px] pb-3">Welcome you to DGU!</h1>
                            <p className="text-[14px] font-semibold">
                                Please fill in form below to become member of DGU
                            </p>
                        </div>
                        <div>
                            <form onSubmit={onSubmit} className="w-full">
                                <div className="">
                                    <Input
                                        name="email"
                                        register={register}
                                        type="text"
                                        autoComplete="on"
                                        placeholder="Email"
                                        labelInput="Email"
                                        errorMessage={errors.email?.message}
                                        animationBorder
                                    />

                                    <Input
                                        name="fullName"
                                        labelInput="fullName"
                                        register={register}
                                        type="text"
                                        autoComplete="on"
                                        placeholder="full name"
                                        animationBorder
                                    />

                                    <div className="flex justify-between">
                                        <div
                                            ref={selectRef}
                                            className="bg-white mr-2 sm:mr-0 w-[35%] flex justify-start items-center h-[48px] rounded-xl text-[14px] border-[#52525233] border-2"
                                        >
                                            <Select
                                                styles={{
                                                    container: (base) => ({
                                                        ...base,
                                                        width: "100%",
                                                        height: "100%",
                                                        display: "flex",
                                                        alignItems: "center",
                                                    }),
                                                    control: (base) => ({
                                                        ...base,
                                                        border: 0,
                                                        boxShadow: "none",
                                                        cursor: "pointer",
                                                        width: "100%",
                                                    }),
                                                    option: (base) => ({
                                                        ...base,
                                                        paddingLeft: "40px",
                                                        backgroundColor: "white",
                                                        color: "black",
                                                    }),
                                                    input: (base, { selectProps }) => ({
                                                        ...base,
                                                        display: "none", // Ẩn thẻ input gây ra sự cố
                                                        opacity: selectProps.menuIsOpen ? 0 : 1,
                                                        pointerEvents: selectProps.menuIsOpen ? "none" : "auto",
                                                    }),
                                                }}
                                                className=""
                                                defaultValue={{ value: "male", label: "Male" }}
                                                onChange={(value) => handleGender(value)}
                                                options={[
                                                    { value: "male", label: "Male" },
                                                    { value: "female", label: "Female" },
                                                    { value: "others", label: "Others" },
                                                ]}
                                                menuIsOpen={menuIsOpen}
                                                onMenuOpen={handleMenu}
                                                onMenuClose={handleMenu}
                                                components={{
                                                    IndicatorSeparator: null,

                                                    SingleValue: ({ data }) => (
                                                        <div className="flex items-center" onClick={handleMenu}>
                                                            <FaTransgender className="text-xl mx-2" />
                                                            <span className="">{data.label}</span>
                                                        </div>
                                                    ),
                                                }}
                                            />
                                        </div>
                                        <DatePicker
                                            classBirthday="border-[#52525233] border-2"
                                            name="birthday"
                                            value={birthday}
                                            onChange={handleDateBirthday}
                                        />
                                    </div>

                                    <Input
                                        name="password"
                                        register={register}
                                        type="password"
                                        autoComplete="on"
                                        placeholder="Password"
                                        labelInput="Password"
                                        isShowPassword={true}
                                        errorMessage={errors.password?.message}
                                        animationBorder
                                    />

                                    <Input
                                        name="confirm_password"
                                        register={register}
                                        type="password"
                                        autoComplete="on"
                                        placeholder="Confirm password"
                                        labelInput="Confirm password"
                                        isShowPassword={true}
                                        errorMessage={errors.confirm_password?.message}
                                        animationBorder
                                    />
                                </div>
                                <div className="flex justify-start">
                                    <div className="flex justify-center items-center">
                                        <CheckboxInput />
                                        <p className="px-2">Do you want to save the password?</p>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full font-bold text-[20px] bg-primary mt-4 text-white bg-black hover:bg-[#3d3d3d] px-5 py-3 rounded-xl"
                                >
                                    Sign up
                                </button>
                            </form>
                        </div>
                        <div className="">
                            <div className="flex justify-center py-5">
                                <p className="font-medium pr-2 text-[#888585] text-[13px]">Already have an account?</p>
                                <Link href="login" className="font-bold pr-2 text-[13px]">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
