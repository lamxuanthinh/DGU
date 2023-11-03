import Router, { NextRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, Schema } from "@/utils/rules";
import Input from "@/components/common/Input";
import { useEffect, useState } from "react";
import DatePicker from "@/components/common/DatePicker.tsx";
import moment from "moment";
import { FaTransgender } from "react-icons/fa";
import Link from "next/link";
import "aos/dist/aos.css";
import CheckboxInput from "@/components/common/CheckboxInput";
import { authServices } from "@/apis/auth";
import SlideSignIn from "@/components/common/SlideSignIn";
import { useAppContext } from "@/Context";
import { IDropdownOption, IGenderOption, IQueryNotification } from "@/model";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "@/components/common/Dropdown";
import { useTranslation } from "next-i18next";

type FormData = Pick<Schema, "email" | "password" | "confirm_password" | "birthday" | "gender" | "fullName">;

const signUpSchema = schema.pick(["email", "password", "confirm_password", "birthday", "gender", "fullName"]);

export default function SignUp() {
    const { t } = useTranslation("auth");
    const router: NextRouter = Router;
    const { setIsLoading } = useAppContext();
    const [errorEmail, setErrorEmail] = useState<string>("");
    const [birthday, setBirthday] = useState("");
    const genderOptions = [
        { value: 0, label: t("sign-up.male") },
        { value: 1, label: t("sign-up.female") },
        { value: 2, label: t("sign-up.other") },
    ];
    const [genderSelected, setGenderSelected] = useState<IGenderOption>({ value: 0, label: "Male" });

    useEffect(() => {
        setValue("gender", 0);
        setGenderSelected(genderOptions[0]);
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<FormData>({
        resolver: yupResolver(signUpSchema),
    });

    const handleDateBirthday = (value: string | Date) => {
        const formattedValue = moment(value).format("YYYY-MM-DD");
        setBirthday(formattedValue);
        setValue("birthday", formattedValue);
    };

    const handleGender = (item: IDropdownOption) => {
        const genderItem = item as IGenderOption;
        setGenderSelected(genderItem);
        setValue("gender", genderItem.value);
    };

    const onSubmit = handleSubmit(async (data: FormData) => {
        setIsLoading(true);

        const payload = {
            email: data.email,
            name: data.fullName,
            password: data.confirm_password,
            birthday: data.birthday,
            gender: data.gender,
        };

        try {
            const { code, metaData } = (await authServices.signUp(payload)) || {};
            const { emailSent } = metaData || {};

            if (code === 4999) {
                setErrorEmail("Email already");
                setIsLoading(false);
                return;
            }
            if (emailSent) {
                await router.push({
                    pathname: "/verifyemail/notification",
                    query: { emailSent },
                } as { query: IQueryNotification });
                setIsLoading(false);
            }
        } catch (error) {
            console.log("Error during sign-up API call :", error);
        }
    });
    return (
        <div className="h-screen w-screen lg:bg-[#c3c3c3f5] dark:bg-[#363636] flex justify-center items-center">
            <div className="lg:mx-6 max-w-[600px] lg:max-w-none w-full lg:w-[1056px] h-[700px] rounded-2xl bg-[#fff] dark:bg-[#1a1a1a] flex justify-between p-5 lg:pr-10 overflow-hidden">
                <SlideSignIn keyCurrentSlide={2} />
                <div data-aos="fade-up" data-aos-duration="2000" className="w-full lg:w-[469px] flex items-center z-2">
                    <div className="w-[100%]">
                        <div className="py-4 lg:pb-8 text-black dark:text-white">
                            <h1 className="font-bold text-[27px] lg:text-[32px] text-center lg:text-left pb-3">
                                {t("sign-up.heading")}
                            </h1>
                            <p className="text-[14px] font-semibold hidden lg:flex">{t("sign-up.sub-heading")}</p>
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
                                        labelInput={t("common.email")}
                                        errorMessage={errors.email?.message}
                                        errorMessageUtils={errorEmail}
                                    />

                                    <Input
                                        name="fullName"
                                        labelInput={t("sign-up.full-name")}
                                        register={register}
                                        type="text"
                                        autoComplete="on"
                                        placeholder="full name"
                                        errorMessage={errors.fullName?.message}
                                    />

                                    <div className="flex justify-between">
                                        <Dropdown
                                            className="w-[35%] mr-2 sm:mr-0"
                                            menuItems={genderOptions}
                                            setItemSelected={handleGender}
                                        >
                                            <div className="flex">
                                                <FaTransgender className="text-xl mr-3" />
                                                <p>{genderSelected.label}</p>
                                            </div>
                                            <IoIosArrowDown className="hover:cursor-pointer text-[27px] px-1 font-extrabold text-[#38383844] dark:text-[#fff] hover:text-[#999]" />
                                        </Dropdown>
                                        <DatePicker
                                            label={t("sign-up.birthday")}
                                            classBirthday="border-[#52525233] dark:border-[#9f9f9f] border-2"
                                            name="birthday"
                                            value={birthday}
                                            onChange={handleDateBirthday}
                                            errorMessage={errors.birthday?.message}
                                        />
                                    </div>

                                    <Input
                                        name="password"
                                        register={register}
                                        type="password"
                                        autoComplete="on"
                                        placeholder="Password"
                                        labelInput={t("common.password")}
                                        isShowPassword={true}
                                        errorMessage={errors.password?.message}
                                    />

                                    <Input
                                        name="confirm_password"
                                        register={register}
                                        type="password"
                                        autoComplete="on"
                                        placeholder="Confirm password"
                                        labelInput={t("sign-up.confirm-password")}
                                        isShowPassword={true}
                                        errorMessage={errors.confirm_password?.message}
                                    />
                                </div>
                                <div className="flex justify-start">
                                    <div className="flex justify-center items-center">
                                        <CheckboxInput />
                                        <p className="px-2 text-black dark:text-white">{t("sign-up.save-password")}</p>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full font-bold text-[20px] mt-4 text-white bg-black border-2 dark:bg-[#1C1C1C] hover:bg-[#3d3d3d] dark:hover:bg-[#3b3b3b] px-5 py-3 rounded-xl"
                                >
                                    {t("common.sign-in")}
                                </button>
                            </form>
                        </div>
                        <div className="">
                            <div className="flex justify-center py-5">
                                <p className="font-medium pr-2 text-[#888585] text-[13px]">
                                    {t("sign-up.already-account")}
                                </p>
                                <Link href="signin" className="font-bold pr-2 text-[13px] text-black dark:text-white">
                                    {t("common.sign-in")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
