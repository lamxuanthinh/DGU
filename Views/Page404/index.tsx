import Link from "next/link";
import icon404 from "@/public/Images/404/icon-404.png";
import image404 from "@/public/Images/404/404.png";
import ImageCustom from "@/components/common/ImageCustom";

const Page404 = () => {
    return (
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 animate-falseIn">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute z-10">
                        <div className="">
                            <h1 className="my-2 text-gray-800 dark:text-white font-bold text-2xl sm:text-4xl">
                                Looks like you&apos;ve found the doorway to the great nothing
                            </h1>
                            <p className="my-2 text-gray-800 dark:text-white sm:text-xl font-medium">
                                Sorry about that! Please visit our hompage to get where you need to go.
                            </p>
                            <Link
                                href="/"
                                className="inline-block sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 transition-colors duration-500"
                            >
                                Take me there!
                            </Link>
                        </div>
                    </div>
                    <div className="opacity-50">
                        <ImageCustom alt="icon 404" src={image404} />
                    </div>
                </div>
            </div>
            <div className="opacity-50">
                <ImageCustom alt="icon 404" src={icon404} />
            </div>
        </div>
    );
};

export default Page404;
