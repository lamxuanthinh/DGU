import styled from "styled-components";

export const BtnEditProfile = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  position: absolute;
  right: 38px;
  bottom: 22px;
  background: #e1e7ed;
  padding: 6px 30px;
  border-radius: 10px;
  cursor: pointer;
`;

export const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  padding-top: 60px;
  position: relative;
  background: #eef3f9;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;


export const CourseContent = styled.div`

`;

export const CourseCardInfo = styled.div`
  width: calc(100% - 3rem);
  height: calc(100% - 10px);
`;


export const DetailCourseItem = styled.div`
  cursor: pointer;
  transition:  0.2s all;

  &:hover {
    transform:  scale(1.03);
    /* background-color: white; */
    z-index: 5;
  }
`;