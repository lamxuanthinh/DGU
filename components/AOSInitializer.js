import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Cấu hình AOS tại đây
  }, []);

  return null;
};

export default AOSInitializer;
