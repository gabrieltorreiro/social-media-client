/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAllLikes, getLikeByPost, setLikeStatus } from '../../api';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--font-color);
    width: 100%;
    max-width: 500px;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.2), -1px -1px 3px rgba(0,0,0,0.2);
`;

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    width: 100%;
`;

const Title = styled.div`
    display: flex;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
`;

const Description = styled.div`
    display: flex;
    font-size: 0.8rem;
    text-transform: capitalize;
`;

const Media = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
`;

const ButtonArea = styled.div`
    display: flex;
    width: 100%;
    min-height: 2rem;
    justify-content: space-around;
    padding: 0.5rem;
`;

const Button = styled.button`
    border: none;
    font-weight: bold;
    cursor: pointer;
    color: var(--font-color);
    &.active{
        color: var(--blue);
    }
`;

const StatisArea = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bold;
    width: 95%;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
`;

const Post = ({ postId, userName, description, image }) => {

    let auth = JSON.parse(localStorage.getItem('auth'));

    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    async function handleLike() {
        const likeStatus = await setLikeStatus(auth, postId);
        setLike(likeStatus);
    }

    useEffect(() => {
        getLikeByPost(auth, postId).then(status => setLike(status));
        getAllLikes(auth, postId).then(count => setLikeCount(count));
    }, [like])

    return (
        <Container>
            <Profile>
                <Title>{userName}</Title>
                <Description>{description}</Description>
            </Profile>
            <Media><Image src={image} /></Media>
            <StatisArea>
                <i className="fa-solid fa-thumbs-up" style={{ color: 'var(--blue)', marginRight: '5px' }} />
                {likeCount}
            </StatisArea>
            <ButtonArea>
                <Button className={like && 'active'} onClick={handleLike}>
                    <i className="fa-solid fa-thumbs-up" style={{ marginRight: '5px' }} />
                    Like
                </Button>
                <Button>Comment</Button>
            </ButtonArea>
        </Container >
    )
}

export default Post