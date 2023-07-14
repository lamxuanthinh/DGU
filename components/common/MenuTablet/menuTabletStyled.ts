import styled from "styled-components";


export const HeaderName = styled.div`
    width: calc(100% - 150px);
    height: 100%;
`;

export const MenuItem = styled.div`
    width: calc(100% - 160px);
`;

export const MenuBottom = styled.div`
    margin-top: 10px;
    min-height: calc(100% - 490px);
`;

export const MenuListBottom = styled.div`
    min-height: calc(100% - 80px);
    /* overflow: scroll; */
`;

export const LogoutBtn = styled.div`
    width: calc(100% - 20px);
`;

export const ScrollContainer = styled.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;


