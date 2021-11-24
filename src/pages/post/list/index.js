import React, {useEffect} from "react";
import {Container,Button,Header, List, Post, HeaderPost, ProfilePost, ImgPost} from './styled'
import {useNavigate} from "react-router-dom";
import imgTest from '../../../assets/imgpost.png'
import imgProfile from '../../../assets/imgprofile.png'
const PostList = () => {
    let navigate = useNavigate();

    useEffect(() => {}, [])
    return <Container>
        <Header>
            <h4>Publicações</h4>
            <Button onClick={() => navigate('/publicacao/nova')}>Nova publicação</Button>
        </Header>
        <List>
            {[1,2,3,4,5,6,7].map(x => <Post>
                <ProfilePost>
                    <div>
                        <img src={imgProfile} alt="profile"/>
                        <div>
                            <h5>Prefeitura da Cidade de São Paulo</h5>
                            <p>12/11/2021 12:11:233</p>
                        </div>
                    </div>
                </ProfilePost>
                <HeaderPost>
                    <h3>São Paulo alcança 1 milhão de pessoas vacinadas</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, </p>
                </HeaderPost>
                <ImgPost src={imgTest} alt="img test"/>
            </Post>)}
        </List>
    </Container>
}

export default PostList