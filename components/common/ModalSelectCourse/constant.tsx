import Image from "next/image";

export const courseInput = {
    title: "Khóa học Web cơ bản Cho nguoi moi bat dau",
    themenails: (
        <Image
            src={require("@/public/Images/CreateCourse/image_not_found.png")}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
            alt="logo"
        />
    ),
    nameUser: "Tung Dev",
    price: 200,
};
