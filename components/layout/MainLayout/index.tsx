import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import { LayoutProps } from "@/model";

import styled from "styled-components";

const BigLayout = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: calc(100% - 295px);
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  height: calc(100% - 75px);
  margin-top: 10px;
  background: #fff;
  border-radius: 20px;
`;


const MainLayout = (props: LayoutProps) => {
  return (
    <>
      <div className="w-screen h-screen bg-[#DBDBDB] flex justify-center items-center">
        <BigLayout>
          <div className="w-full h-full bg-[#DBDBDB] flex justify-between p-3 rounded-[20px] backgroud-shadow ">
            <Sidebar />
            <Content>
              <Header />
              <MainContent>
                <div className="w-full h-full overflow-y-auto scrollbar-none rounded-[20px]">
                  <div className="h-full flex justify-center">{props.children}</div>
                </div>
              </MainContent>
            </Content>
          </div>
        </BigLayout>
      </div>
    </>
  );
};

export default MainLayout;
