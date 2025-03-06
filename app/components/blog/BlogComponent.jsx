import axios from 'axios';
import { useEffect, useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const BlogComponent = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40gilangadtia712'
                );
                const postsWithImages = response.data.items.map(post => ({
                    ...post,
                    image: extractImageUrl(post.description),
                }));
                setPosts(postsWithImages);
            } catch (error) {
                console.error('Error fetching Medium feed:', error);
            }
        };

        fetchData();
    }, []);

    const extractImageUrl = (htmlContent) => {
        if (!htmlContent) return '/images/404-2.png';
    
        const match = htmlContent.match(/<img[^>]+src="([^">]+)"/);
        const imageUrl = match ? match[1] : '/images/404-2.png';
    
        // Pastikan hanya URL yang valid (JPG, PNG, GIF, dsb.)
        return /\.(jpeg|jpg|gif|png)$/.test(imageUrl) ? imageUrl : '/images/404-2.png';
    };
    
    
    return (
        <div id="Blog" className="w-full px-[12%] py-10 pt-20 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo mt-12">My Feeds Medium</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest feeds in Medium</h2>

            <div className="grid grid-cols-1 py-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 dark:text-black">
                {posts.map((post, index) => (
                    <article key={index}
                        className="aspect-square shadow-lg dark:border-white/50 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                        style={{ backgroundImage: `url(${post.image || '/images/404-2.png'})` }}>
                        
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 items-center flex justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h3 className="font-semibold">{post.title}</h3>
                                <a href={post.link} target="_blank" rel="noopener noreferrer">
                                    Read more
                                </a>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <a href={post.link} target="_blank" rel="noopener noreferrer">
                                    <Image src={assets.send_icon} alt="send icon" className="w-5" />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default BlogComponent;
