import styled from "styled-components";



export const HeaderStyle = styled.div`
    position: absolute;
    top: 10px;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 1115px;
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
`

export const SectionCreateVideo = styled.div`
    width: 182px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SectionLogin = styled.div`
    width: 176px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`



