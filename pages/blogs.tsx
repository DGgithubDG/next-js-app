import { useState, useEffect } from "react";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import BlogCard from "./components/blogCard";
import { Infer } from "next/dist/compiled/superstruct";

interface PostAPIResponse {
    postInfo: {
        title: string ;
        slug: string;
        meta: string
    } []
}


export const getStaticProps = async () => {
    const {postInfo}: PostAPIResponse = await fetch('http://localhost:3000/api/posts').then(data => data.json());

    return {
        props: {posts: postInfo}
    }
}



// const [ posts, setPosts ] = useState<{ title: string, slug: string, meta: string }[]>([]);

// const fetchPosts = async () => {
//     const res = await fetch('/api/posts').then(data => data.json());
//     setPosts(res.postInfo) 
// }

//  useEffect(() => {
// fetchPosts() 
// }, [])


type Props = InferGetStaticPropsType<typeof getStaticProps>

const Blogs: NextPage<Props> = ({ posts }: InferGetStaticPropsType <typeof getStaticProps>) => {

    return(
        <>
        <div className=" bg-blue-200 p-5 max-w-3xl mx-auto rounded">
         {posts.map((post) => <BlogCard key={post.slug} title={post.title} description={post.meta} slug={post.slug}/>)}
        </div>
        </>
    )
}  

export default Blogs;