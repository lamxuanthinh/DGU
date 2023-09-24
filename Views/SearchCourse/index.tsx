import { ItemCardCourse } from "@/components";
import { DATA_TRENDING_COURSE } from "../Trending/constants";
import Button from "@/components/common/Button";
import { AiOutlineDown } from "react-icons/ai";

function SearchCourse() {
    return (
        <section className="px-2 lg:px-7 pb-10">
            <h1 className="text-xl text-[#757474] p-2.5">Result Search Course</h1>
            <div className="flex flex-wrap">
                {DATA_TRENDING_COURSE.map((item, index) => (
                    <ItemCardCourse className="w-full sm:w-1/2 xl:w-1/3 2xl:w-1/4 p-3" key={index} dataCard={item} />
                ))}
            </div>
            <Button className="mx-auto mt-4 font-semibold" rightIcon={<AiOutlineDown />}>
                Show More
            </Button>
        </section>
    );
}

export default SearchCourse;
