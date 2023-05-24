import styled from "styled-components";
export const ContainerProfile = styled.div`
width: 1115px;
height: 655px;
padding: 16px;
border-radius: 20px;
`
export const HeaderProfile = styled.div`
width: 100%;
border-radius: 20px;
`
export const BodyProfile = styled.div`

`
export const SectionCoverImage = styled.div`
width: 100%;
height: 100%;
position: relative;
`
export const SectionDescription = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
padding-top: 60px;
position: relative;
background: #EEF3F9;
border-bottom-right-radius: 20px;
border-bottom-left-radius: 20px;
`
export const SectionAvatar = styled.div`
position: absolute;
bottom: 0;
left: 50%;
transform: translateX(-50%) translateY(50%);
z-index: 1;
background: #EEF3F9;
border-radius:50%;
padding: 4px;
`
export const ImgAvatarProfile = styled.img`
width:120px;
height:120px;
border-radius: 50%;
`

export const ImgCoverProfile = styled.img`
width: 100%;
height: 100%;
border-top-right-radius: 20px;
border-top-left-radius: 20px;
`

export const MainProfile = styled.div`
border-radius:20px
`

export const NameUser = styled.div`
font-weight: bold; 
`
export const DescriptionUser = styled.div`
font-weight: bold; 
`
export const BtnEditProfile = styled.div`
position: absolute;
right:38px;
bottom:22px;
background: #E1E7ED;
padding:8px;
border-radius: 10px;
`
