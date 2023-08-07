import styled from "styled-components";


export const NotificationContentStyled = styled.div`
    height: calc(100% - 90px);
    width: 100%;
`;

export const FilterSectionStyled = styled.div`
    color: #777777; 
    z-index: 2;
    transition: 1s;

    &.active {
        color: #3983AC; 
    }
`;

export const ActionFilterSectionStyled = styled.div`
    transition: .5s;
`;



