import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 76px;
  border-radius: 20px;
  background-color: white;
`;

export const HeaderInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: #00000085; /* Set the desired color for the placeholder text */
  }
`;

export const SectionIcon = styled.div`
  width: 112px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionCreateVideo = styled.div`
  width: 182px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionLogin = styled.div`
  width: 176px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SectionProfile = styled.div`
  width: 176px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTablet = styled.div`
  width: calc(100% - 125px);

  &.active {
    width: 100%;
  }
`;

export const MenuButton = styled.div`
  
  &.active {
    display: none;
  }
`;