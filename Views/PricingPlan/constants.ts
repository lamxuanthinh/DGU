import leavesYellowImage from "@/public/Images/leaves-yellow.svg";
import leavesGreenImage from "@/public/Images/leaves-green.svg";
import leavesOrangeImage from "@/public/Images/leaves-orange.svg";
import subAvt1 from "@/public/Images/Profile/Infomation/boy_thanh_lich.png";
import subAvt2 from "@/public/Images/Profile/Infomation/boy_thoi_trang.png";
import subAvt3 from "@/public/Images/Profile/Infomation/cool_green.jpg";

export const listAvatar = [subAvt1, subAvt2, subAvt3];

export const menu = [
    {
        id: 1,
        name: "Monthly",
    },
    {
        id: 2,
        name: "Yearly",
    },
    {
        id: 3,
        name: "Lifetime",
    },
];

export const listPricingPlan = [
    {
        key: "1",
        icon: leavesYellowImage,
        type: "Basic",
        title: "Includes family sharing",
        price: "$75.99",
        bestOffer: false,
        time: "/Per Year",
        features: [
            "Full access to all premium lessons and content",
            "Advanced interactive exercises.",
            "Personalization and custom recommendations",
        ],
    },
    {
        key: "2",
        icon: leavesGreenImage,
        type: "Popular",
        price: "$175.99",
        bestOffer: true,
        time: "/Per Year",
        features: [
            "Full access to all  premium lessons and content",
            "Advanced interactive exercise.",
            "Personalization and custom recommandations",
            "Full access to all  premium lessons and content",
            "Advanced interactive exercise",
        ],
    },
    {
        key: "3",
        icon: leavesOrangeImage,
        type: "Pro",
        price: "$775.99",
        bestOffer: false,
        time: "/Per Year",
        features: [
            "Full access to all  premium lessons and content",
            "Advanced interactive exercise.",
            "Personalization and custom recommandations",
            "Full access to all  premium lessons and content",
            "Advanced interactive exercise.",
            "Personalization and custom recommandations",
            "Full access to all  premium lessons and content",
            "Advanced interactive exercise.",
            "Personalization and custom recommandations",
        ],
    },
];
