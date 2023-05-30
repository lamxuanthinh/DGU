import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, Schema } from "@/utils/rules";
import Input from "@/components/common/Input";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import DatePicker from "@/components/common/DatePicker.tsx";
import moment from "moment";
import { FaTransgender } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import Link from "next/link";
import Select from "react-select";
import AOS from "aos";
import "aos/dist/aos.css";
import CheckboxInput from "@/components/common/CheckboxInput";

type FormData = Pick<
  Schema,
  "email" | "password" | "confirm_password" | "birthday" | "gender"
>;

const signUpSchema = schema.pick([
  "email",
  "password",
  "confirm_password",
  "birthday",
  "gender",
]);

export default function SignUp() {
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

  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data);
  });

  const [inform, setInform] = useState([
    {
      key: 0,
      title: "Knowledge is power 1.",
      feature:
        "10 beautiful compliments are not as good as one genuine compliment.",
    },
    {
      key: 1,
      title: "Knowledge is power 2.",
      feature:
        "10 beautiful compliments are not as good as one genuine compliment.",
    },
    {
      key: 2,
      title: "Knowledge is power 3.",
      feature:
        "10 beautiful compliments are not as good as one genuine compliment.",
    },
    {
      key: 3,
      title: "Knowledge is power 4.",
      feature:
        "10 beautiful compliments are not as good as one genuine compliment.",
    },
  ]);

  const [select, setSelect] = useState(0);

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
    <div className="h-screen w-screen bg-[#c3c3c3f5] flex justify-center items-center">
      <div className="w-[1056px] h-[700px] rounded-2xl bg-[#fff] flex justify-between p-5 pr-10">
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="w-[469px] bg-[#000000] rounded-xl rounded-br-[50px] z-3"
        >
          {inform.map((item, index) => {
            return (
              index == select && (
                <div key={index}>
                  <div className="h-[450px] relative">
                    <Image
                      className="absolute left-[87px] top-[55px]"
                      width={290}
                      height={285}
                      src={require("../../public/Images/Login/Vector_1.png")}
                      alt="Image"
                    />
                    <Image
                      className="absolute left-[280px] top-[60px]"
                      width={65}
                      height={85}
                      src={require("../../public/Images/Login/cup_1.png")}
                      alt="Cup"
                    />
                    <Image
                      className="absolute top-[227px] left-[21px]"
                      width={150}
                      height={154}
                      src={require("../../public/Images/Login/effect-book-shadow.png")}
                      alt="Effect Book Shadow"
                    />

                    <Image
                      className="absolute left-[69px] top-[56px]"
                      width={350}
                      height={350}
                      src={require("../../public/Images/Login/image_1.png")}
                      alt="Image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-center mb-10">
                      <div className="w-[372px]">
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
                              className={`${
                                item.key == select ? "bg-[#D9D9D9]" : ""
                              } w-[20px] h-[20px] rounded-xl flex items-center justify-center hover:cursor-pointer`}
                              onClick={() => {
                                setSelect(index1);
                              }}
                            >
                              <div
                                className={`${
                                  item.key == select
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
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-[469px] flex items-center z-2"
        >
          <div className="w-[100%]">
            <div className="pb-8 pt-4">
              <h1 className="font-bold text-[32px] pb-3">
                Welcome you to DGU!
              </h1>
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
                    className="text-xl pb-1"
                    type="text"
                    autoComplete="on"
                    placeholder="Email"
                    labelInput="Email"
                    errorMessage={errors.email?.message}
                  />

                  <Input
                    name="fullname"
                    labelInput="Fullname"
                    register={register}
                    type="text"
                    autoComplete="on"
                    placeholder="full name"
                  />

                  <div className="flex justify-between">
                    <div
                      ref={selectRef}
                      className="bg-white w-[35%] flex justify-start items-center h-[48px] rounded-md text-[14px] border-[#52525233] border-2"
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
                            pointerEvents: selectProps.menuIsOpen
                              ? "none"
                              : "auto",
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
                            <div
                              className="flex items-center"
                              onClick={handleMenu}
                            >
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
                <p className="font-medium pr-2 text-[#888585] text-[13px]">
                  Already have an account?
                </p>
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
