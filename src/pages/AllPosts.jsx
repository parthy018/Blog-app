import { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts()
            .then((response) => {
                console.log("Response from getPosts:", response);
                const { documents } = response;
                console.log("this is documents", documents);
                setPosts(documents);
                console.log(posts);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
                setPosts([]);
            });
    }, [posts]);

    useEffect(() => {
        console.log("Posts state updated:", posts);
    }, [posts]);

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
