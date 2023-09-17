import styled from "styled-components";

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

export const SideNav = styled.div`
    @media (max-width: 1024px) {
        display: none;

        &.active {
            display: flex;
        }
    }
`;
