import styled from "styled-components";

export const BigLayout = styled.div`
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export  const Content = styled.div`
    width: calc(100% - 295px);
    display: flex;
    flex-direction: column;

    @media (max-width: 1280px) {
        width: 100%;

        &.active {
            width: calc(100% - 295px);
        }
    }
`;

export  const MainContent = styled.div`
    height: calc(100% - 75px);
    margin-top: 10px;
    background: #fff;
    border-radius: 5px;
`;
