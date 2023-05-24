import type { NextPage } from "next";
import * as StyledProfile from "./StyledProfile"
const Profile: NextPage = () =>
{
    return <StyledProfile.ContainerProfile>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <StyledProfile.MainProfile>
            <StyledProfile.HeaderProfile>
                <StyledProfile.SectionCoverImage>
                    <StyledProfile.ImgCoverProfile src="https://www.isep.ipp.pt/img/Departments/DMA_770.png">
                    </StyledProfile.ImgCoverProfile>
                    <StyledProfile.SectionAvatar>
                        <StyledProfile.ImgAvatarProfile src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="avatar-profile" />
                </StyledProfile.SectionAvatar>
                </StyledProfile.SectionCoverImage>
                <StyledProfile.SectionDescription>
                        <StyledProfile.NameUser>LMD</StyledProfile.NameUser>
                        <StyledProfile.DescriptionUser>
                            If your central character has a quirky name or a title you can definitely incorporate t
                        </StyledProfile.DescriptionUser>
                        <StyledProfile.BtnEditProfile>
                        <i className="fa-solid fa-pen icon-edit-profile"></i>
                        <style jsx>
                                {
                                    `.icon-edit-profile
                                    {
                                        border-bottom: 2px solid black;
                                        padding: 4px; 
                                    }`
                                }
                            </style>
                            Edit Profile
                        </StyledProfile.BtnEditProfile>
                </StyledProfile.SectionDescription>
            </StyledProfile.HeaderProfile>
            <StyledProfile.BodyProfile>

            </StyledProfile.BodyProfile>
        </StyledProfile.MainProfile>

    </StyledProfile.ContainerProfile>;
}

export default Profile;