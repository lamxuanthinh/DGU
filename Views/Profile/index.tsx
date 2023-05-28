
import {ContainerProfile
    ,MainProfile
    ,HeaderProfile
    ,SectionCoverImage
    ,ImgCoverProfile
    ,SectionAvatar
    ,ImgAvatarProfile
    ,SectionDescription
    ,NameUser
    ,DescriptionUser
    ,BtnEditProfile
    ,BodyProfile} from "@/Views/Profile/ProfileStyled"

interface PropsProfile {
    dataUser: any
}


const Profile = ({dataUser}:PropsProfile) =>
{    
    return <ContainerProfile>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <MainProfile>
            <HeaderProfile>
                <SectionCoverImage>
                    <ImgCoverProfile src={dataUser.pathCoverImage}>
                    </ImgCoverProfile>
                    <SectionAvatar>
                        <ImgAvatarProfile src={dataUser.pathAvatar} alt="avatar-profile" />
                </SectionAvatar>
                </SectionCoverImage>
                <SectionDescription>
                        <NameUser>{dataUser.nameUser}</NameUser>
                        <DescriptionUser>
                            {dataUser.description}
                        </DescriptionUser>
                        <BtnEditProfile>
                            <i className="fa-solid fa-pen icon-edit-profile"></i>
                            <style jsx>
                                {
                                    `.icon-edit-profile
                                    {
                                        border-bottom: 2px solid black;
                                        padding: 4px; 
                                        margin-right:10px;
                                    }`
                                }
                            </style>
                            Edit Profile
                        </BtnEditProfile>
                </SectionDescription>
            </HeaderProfile>
            <BodyProfile>

            </BodyProfile>
        </MainProfile>

    </ContainerProfile>;
}

export default Profile;