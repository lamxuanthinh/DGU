import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import { LayoutProps } from "@/model";

const MainLayout = (props: LayoutProps) => {
  return (
    <div className="w-screen h-screen bg-[#DBDBDB] flex justify-between p-3">
      <Sidebar />
      <div className="flex flex-col w-[80%]">
        <Header />
        <div className="mt-2 p-[10px] h-[90%] bg-[#fff] rounded-[20px]">
          <div className="w-full h-full overflow-y-auto scrollbar-none rounded-[20px]">
            <div className="h-full flex justify-center">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
