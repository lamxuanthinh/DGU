import styled from "styled-components";


export const NotificationContentStyle = styled.div`
    height: calc(100% - 90px);
    width: 100%;
`;

export const FilterSection = styled.div`
    color: #777777; 
    z-index: 2;
    transition: 1s;

    &.active {
        color: #3983AC; 
    }
`;

export const ActionFilterSection = styled.div`
    transition: .5s;
`;



