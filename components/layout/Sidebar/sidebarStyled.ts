import styled, { css } from "styled-components";



export const Navigation = styled.div`
    height: 100%;
    width: calc(100% - 26px);
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const BaseNavigationItem  = styled.div`
    height: 53px;
    width: 100%;
    display: flex;
    border-radius: 10px;
    flex-wrap: nowrap;
    cursor: pointer;
`;

export const NavigationItem = styled(BaseNavigationItem)`
    &:hover {
        background-color: white;
        color: black;
    }
`;


