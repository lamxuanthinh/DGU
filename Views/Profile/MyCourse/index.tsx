import Image from "next/image";
import { BsFillEyeFill } from "react-icons/bs";

export default function MyCourse() {
  const dataCardDetail = [
    {
      id: "1",
      image: "",
      title1:
        "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 1: Tha thứ lỗi lầm | Tùng Tâm Lý",
      title2: "Tùng Tâm Lý • 312.103 lượt xem • 1 năm trước",
    },
    {
      id: "2",
      image: "",
      title1:
        "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 1: Tha thứ lỗi lầm | Tùng Tâm Lý",
      title2: "Tùng Tâm Lý • 312.103 lượt xem • 1 năm trước",
    },
    {
      id: "3",
      image: "",
      title1:
        "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 1: Tha thứ lỗi lầm | Tùng Tâm Lý",
      title2: "Tùng Tâm Lý • 312.103 lượt xem • 1 năm trước",
    },
    {
      id: "4",
      image: "",
      title1:
        "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 1: Tha thứ lỗi lầm | Tùng Tâm Lý",
      title2: "Tùng Tâm Lý • 312.103 lượt xem • 1 năm trước",
    },
    {
      id: "5",
      image: "",
      title1:
        "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 1: Tha thứ lỗi lầm | Tùng Tâm Lý",
      title2: "Tùng Tâm Lý • 312.103 lượt xem • 1 năm trước",
    },
    {
      id: "6",
      image: "",
      title1:
        "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 1: Tha thứ lỗi lầm | Tùng Tâm Lý",
      title2: "Tùng Tâm Lý • 312.103 lượt xem • 1 năm trước",
    },
  ];

  const CardDetail = ({ data }: any) => {
    console.log(data);
    return (
      <div className="flex justify-start h-[140px] pb-4">
        <div className="h-full flex items-center p-2">
          <p className="font-bold text-[15px]">{data.id}</p>
        </div>
        <div>
          <Image
            className="h-full rounded-md"
            alt=""
            src={require("@/public/Images/Layout/Profile/detail1.png")}
          />
        </div>
        <div className="flex flex-col p-2">
          <h1 className="font-bold text-[18px]">{data.title1}</h1>
          <p className="font-medium text-[16px]">{data.title2}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div className="h-[916px] w-[33%] flex justify-center rounded-xl mr-2 bg-gradient-to-b from-[#B0997A] via-[rgba(206, 188, 161, 0.7)] to-[rgba(176, 153, 122, 0)]">
        <div className="w-[95%] p-3 rounded-md">
          <div>
            <Image
              className="w-full rounded-md"
              src={require("../../../public/Images/Layout/Profile/main1.png")}
              alt="main1"
            />
          </div>
          <div>
            <h1 className="font-bold text-[25px]">
              CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ?
            </h1>
            <div className="flex items-center justify-between pb-4">
              <h4 className="text-[18px] font-bold">Tùng Tâm Lý</h4>
              <div className="flex items-center">
                <Image
                  src={require("@/public/Images/Layout/Profile/number.png")}
                  width={35}
                  height={26}
                  alt=""
                />
                <p className="text-[10px] px-3">video</p>
              </div>
              <div className="text-[24px] font-bold text-[#007621]">FREE</div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[10px] pb-1">
              Trong cuộc sống, chờ đợi có thể là một thử thách khó khăn. Tuy
              nhiên, nếu ta kiên nhẫn và tin tưởng vào quá trình, kết quả sẽ
              đến. Hãy làm việc chăm chỉ, tập trung vào mục tiêu và hy vọng vào
              tương lai tốt đẹp.
            </p>
            <div className="font-bold text-[10px] pb-2">
              #thanhcong, #chodoi, #hoctap, #chodoilieucokipkhong
            </div>
            <div className="text-[10px] pb-2">
              1.008.005 lượt xem • 98.005 lượt đánh giá • 8.005 lượt chia sẻ
            </div>
          </div>
          <div>
            <div className="w-[60%] rounded-xl flex justify-center items-center bg-[#fff] p-2">
              <div>
                <BsFillEyeFill fontSize={20} />
              </div>
              <h2 className="px-3">See More All</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl w-[66%]">
        {dataCardDetail.map((item, index) => {
          return <CardDetail data={item} />;
        })}
      </div>
    </div>
  );
}
