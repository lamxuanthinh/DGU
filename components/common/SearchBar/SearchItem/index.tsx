import Image, { StaticImageData } from "next/image";
interface ISearchItemProps {
    isUser?: boolean;
    srcImage: StaticImageData;
    dataUserSearch: any;
}

function SearchItem({ isUser, srcImage, dataUserSearch }: ISearchItemProps) {
    return (
        <div className="flex items-center px-4 py-1 cursor-pointer transition-opacity hover:opacity-80">
            <div
                className={`w-[40px] h-[40px] rounded-[10px] overflow-hidden mr-3 relative ${
                    isUser ? "rounded-[50%]" : ""
                }`}
            >
                <Image fill src={srcImage} alt="avt image" />
            </div>
            <div>
                <h4 className="font-bold text-base">{dataUserSearch.name}</h4>
                <p className="text-xs text-[#8F8F8F]">{dataUserSearch.title}</p>
            </div>
        </div>
    );
}

export default SearchItem;
