import { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResponse = await appwriteService.getPosts();
                console.log("Fetched posts:", postsResponse);
                if (postsResponse && postsResponse.documents) {
                    setPosts(postsResponse.documents);
                    console.log(posts);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap bg-gray-600">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold text-white hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8 bg-transparent'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <div className="bg-glassWhite backdrop-blur-md border border-glassWhite rounded-lg p-4 shadow-lg transition-all duration-300 hover:shadow-xl">
                                <PostCard {...post} />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
