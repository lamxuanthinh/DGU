import Image, { StaticImageData } from 'next/image';
interface ISearchItemProps {
     isUser?: boolean,
     srcImage: StaticImageData
}

function SearchItem({ isUser, srcImage }: ISearchItemProps) {
     return (
          <div className="flex items-center px-4 py-1 cursor-pointer transition-opacity hover:opacity-80">
               <div className={`w-[40px] h-[40px] rounded-[10px] overflow-hidden mr-3 relative ${isUser ? "rounded-[50%]" : ""}`}>
                    <Image fill src={srcImage} alt="avt image" />
               </div>
               <div>
                    <h4 className="font-bold text-base">Kenny tung</h4>
                    <p className="text-xs text-[#8F8F8F]">
                         Hoc gioi korean trong 5 ngay #korean #kenny
                    </p>
               </div>
          </div>
     )
}

export default SearchItem;