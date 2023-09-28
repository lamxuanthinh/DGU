import { ItemCardShort } from "@/components";
import { DATA_SHORTS } from "../Trending/constants";

function SearchShortVideo() {
    return (
        <section className="p-2 lg:p-4 xl:p-6">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                {DATA_SHORTS.map((item) => (
                    <ItemCardShort key={item.id} dataShort={item} />
                ))}
            </ul>
        </section>
    );
}

export default SearchShortVideo;
