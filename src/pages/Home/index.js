import React, { useContext } from 'react'
import styled from 'styled-components'
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Post from '../../components/Post';
import PostWriter from '../../components/PostWriter';
import { UserContext } from '../../contexts/UserContext';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    padding: 4rem 0.3rem 0 0.3rem;
    width: 100%;
`;

const Home = () => {

    const { posts } = useContext(UserContext);

    return (
        <Container>
            <Card>
                <PostWriter />
            </Card>
            {!posts && <Loading />}
            {posts && posts.map(post => (<Post key={post.id} {...post} />))}
        </Container>
    )
}

export default Home

