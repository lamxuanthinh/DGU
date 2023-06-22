import styled, { css } from "styled-components";

export const Navigation = styled.div`
  height: 100%;
  width: calc(100% - 26px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BaseNavigationItem = styled.div`
  width: calc(100% - 26px);
  height: 53px;
  display: flex;
  border-radius: 10px;
  flex-wrap: nowrap;
  cursor: pointer;
`;

export const NavigationItem = styled(BaseNavigationItem)`
  width: 100%;
  transition: 0.5s; 


  &:hover {
    background-color: white;
    color: black;
  }
`;
