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
  border-radius: 5px;
  flex-wrap: nowrap;
  cursor: pointer;
`;

export const NavigationItem = styled(BaseNavigationItem)`
  width: 100%;
  transition: 0.3s; 


  &:hover {
    /* background-color: #7FCFFC; */
    color: black;
  }
`;

export const SideNav = styled.div`
  transition: 0.3s all;


  @media (max-width: 1024px) {
    display: none;

    
    &.active {
        display: flex;
    }
  }
`;
