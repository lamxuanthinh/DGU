import Image from "next/image";

import { BsFillEyeFill } from "react-icons/bs";

export default function Details() {
  const dataCardDetail = [
    {
      id: 1,
      image: (
        <Image
          className="h-full w-full rounded-xl"
          alt=""
          src={require("@/public/Images/Layout/Profile/detail1.png")}
        />
      ),
      title1:
        "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 1: Tha thứ lỗi lầm | Tùng Tâm Lý",
      title2: "Tùng Tâm Lý • 312.103 lượt xem • 1 năm trước",
    },
    {
      id: 2,
      image: (
        <Image
          className="h-full w-full rounded-xl"
          alt=""
          src={require("@/public/Images/Layout/Profile/detail2.png")}
        />
      ),
      title1:
        "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 2: Chăm chỉ chưa chắc đã thành công | Tùng Tâm Lý",
      title2: "Tùng Tâm Lý  • 31.103 lượt xem • 10 tháng trước",
    },
    {
      id: 3,
      image: (
        <Image
          className="h-full w-full rounded-xl"
          alt=""
          src={require("@/public/Images/Layout/Profile/detail3.png")}
        />
      ),
      title1:
        "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 3: Cố gắng để làm gì ?  | Tùng Tâm Lý",
      title2: "Tùng Tâm Lý  • 42.103 lượt xem • 9 tháng trước",
    },
    {
      id: 4,
      image: (
        <Image
          className="h-full w-full rounded-xl"
          alt=""
          src={require("@/public/Images/Layout/Profile/detail4.png")}
        />
      ),
      title1:
        "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 4: Team work hiệu quả ?  | Tùng Tâm Lý",
      title2: "Tùng Tâm Lý  • 12.103 lượt xem • 5 tháng trước",
    },
    {
      id: 5,
      image: (
        <Image
          className="h-full w-full rounded-xl"
          alt=""
          src={require("@/public/Images/Layout/Profile/detail5.png")}
        />
      ),
      title1:
        "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 5: Học nhiều ngôn ngữ để làm gì? | Tùng Tâm Lý",
      title2: "Tùng Tâm Lý  • 2.103 lượt xem • 3 tháng trước",
    },
    {
      id: 6,
      image: (
        <Image
          className="h-full w-full rounded-xl"
          alt=""
          src={require("@/public/Images/Layout/Profile/detail6.png")}
        />
      ),
      title1:
        "CHỜ ĐỢI LIỆU CÓ KỊP KHÔNG ? - BÀI 6: Học cho đến bao giờ ? | Tùng Tâm Lý",
      title2: "Tùng Tâm Lý  • 103 lượt xem • 1 tuần trước",
    },
  ];

  const CardDetail = ({ data }: any) => {
    return (
      <div className="flex justify-start h-[140px] pb-4">
        <div className="h-full flex items-center p-3">
          <p className="font-bold text-[15px]">{data.id}</p>
        </div>
        <div className="w-[200px]">{data.image}</div>
        <div className="flex flex-col px-2 w-[70%]">
          <h1 className="font-bold text-[18px]">{data.title1}</h1>
          <p className="font-medium text-[16px]">{data.title2}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex justify-center p-[10px]">
      <div className="h-[916px] w-[33%] flex justify-center rounded-xl mr-2 bg-gradient-to-b from-[#B0997A] via-[rgba(206, 188, 161, 0.7)] to-[rgba(176, 153, 122, 0)]">
        <div className="w-[99%] p-3 rounded-md">
          <div className="mb-4">
            <Image
              className="w-full rounded-xl"
              src={require("@/public/Images/Layout/Profile/main1.png")}
              alt="main1"
            />
          </div>
          <div>
            <h1 className="font-bold text-[26px] mb-4">
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
                <p className="text-[13px] px-2 font-bold">video</p>
              </div>
              <div className="text-[24px] font-bold text-[#007621]">FREE</div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[13px] pb-1 font-semibold">
              Trong cuộc sống, chờ đợi có thể là một thử thách khó khăn. Tuy
              nhiên, nếu ta kiên nhẫn và tin tưởng vào quá trình, kết quả sẽ
              đến. Hãy làm việc chăm chỉ, tập trung vào mục tiêu và hy vọng vào
              tương lai tốt đẹp.
            </p>
            <div className="font-bold text-[13px] pb-3">
              #thanhcong, #chodoi, #hoctap, #chodoilieucokipkhong
            </div>
            <div className="text-[13px] pb-4 font-semibold">
              1.008.005 lượt xem • 98.005 lượt đánh giá • 8.005 lượt chia sẻ
            </div>
          </div>
          <div>
            <div className="w-[50%] rounded-xl flex justify-center items-center bg-[#fff] p-2">
              <div>
                <BsFillEyeFill fontSize={20} />
              </div>
              <h2 className="px-3 font-semibold">See More All</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl w-[66%]">
        {dataCardDetail.map((item, index) => {
          return <CardDetail key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}
