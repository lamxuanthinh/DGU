import { IShort } from "@/model";
import Image from "next/image";

interface ICardShortProps {
    dataShort: IShort;
    className?: string;
}

export function ItemCardShort({ dataShort, className }: ICardShortProps) {
    const { srcImage, title, hashtag, view } = dataShort;
    return (
        <li className={`w-full place-content-center cursor-pointer rounded animate-pulse dark:shadow-2xl hover:scale-105 transition-transform duration-500 ${className}`}>
            <Image
                width={700}
                height={500}
                src={srcImage}
                alt="image course"
                className="w-full object-cover rounded max-h-[350px]"
            />
            <div className="flex flex-col justify-between min-h-[100px] p-4">
                <h4 className="font-semibold text-lg line-clamp-1">{title}</h4>
                <p>{hashtag}</p>
                <span className="text-sm text-[#979292] line-clamp-2">{view}K views</span>
            </div>
        </li>
    );
}
