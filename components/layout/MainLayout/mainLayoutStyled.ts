import styled from "styled-components";

export const BigLayout = styled.div`
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export  const Content = styled.div`
    width: calc(100% - 290px);
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
        width: 100%;

        &.active {
            width: calc(100% - 295px);
        }
    }
`;

export  const MainContent = styled.div`
    height: calc(100% - 70px);
    margin-top: 5px;
    border-radius: 5px;
`;
