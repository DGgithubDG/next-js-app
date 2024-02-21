import { useState, useEffect } from "react";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import BlogCard from "../components/blogCard";
import { Infer } from "next/dist/compiled/superstruct";
import readPostsInfo from "./lib/helper";



// type PostAPIResponse = {
//     title: string,
//     slug: string,
//     meta: string,
// }[]

export const getStaticProps = async () => {
    // const { postInfo }: PostAPIResponse = await fetch('http://localhost:3000/api/posts').then((data) => data.json());
    // return {
    //     props: {posts: postInfo}
    // }

    const postInfo = readPostsInfo();

    return {
        props: { posts: postInfo },
    };
};




// const [ posts, setPosts ] = useState<{ title: string, slug: string, meta: string }[]>([]);

// const fetchPosts = async () => {
//     const res = await fetch('/api/posts').then(data => data.json());
//     setPosts(res.postInfo) 
// }

//  useEffect(() => {
// fetchPosts() 
// }, [])

interface Blog {
    title: string;
    description: string;
    slug: string;
    // Add other properties as needed
  }
  
  type Props = {
    posts: Blog[];
  };
  
  const Blogs: NextPage<Props> = ({ posts }) => {
    return (
      <>
        <div className="p-5 max-w-3xl mx-auto rounded padbot">
          {posts.map((post) => (
            <BlogCard key={post.slug} title={post.title} description={post.description} slug={post.slug} />
          ))}
        </div>
      </>
    );
  }; 

export default Blogs;