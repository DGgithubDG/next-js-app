import { useState, useEffect } from "react";
import { NextPage } from "next";
import BlogCard from "./component/blogCard";

interface Props {

}

const Blogs: NextPage<Props> = () => {

const [ posts, setPosts ] = useState<{ title: string, slug: string, meta: string }[]>([]);

const fetchPosts = async () => {
    const res = await fetch('/api/posts').then(data => data.json());
    setPosts(res.postInfo) 
}

 useEffect(() => {
fetchPosts() 
}, [])

    return(
        <>
        <div className=" bg-blue-200 p-5 max-w-3xl mx-auto rounded">
         {posts.map(post => <BlogCard title={post.title} description={post.meta}/>)}
        </div>
        </>
    )
}  

export default Blogs;