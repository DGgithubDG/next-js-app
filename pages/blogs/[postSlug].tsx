import { NextPage, GetStaticProps, GetStaticPaths, InferGetStaticPropsType, } from "next";
import { useRouter } from "next/router";
import matter from "gray-matter";
import fs from 'fs'
import path from 'path'
import { ParsedUrlQuery } from "querystring";

type Props = InferGetStaticPropsType<typeof getStaticProps> 

const SinglePage: NextPage<Props> = (props) => {

    return (
        <div>
            <div className="text-center">{props.post.title}</div>
            <p className="text-center">{props.post.content}</p>

        </div>

    )
}

export const getStaticPaths: GetStaticPaths = () => {

    const dirPathToRead = path.join(process.cwd(), "posts")
    const dirs = fs.readdirSync(dirPathToRead);
    const paths = dirs.map((filename) => {
        const filePathToRead = path.join(process.cwd(), 'posts/' + filename);
        const fileContent = fs.readFileSync(filePathToRead, { encoding: 'utf-8' });
        return { params: { postSlug: matter(fileContent).data.slug } }
    })

    return {
        paths,
        fallback: false
    }
}

type Post = {
    post: {
        title: string
        content: string
    }
}

export const getStaticProps: GetStaticProps<Post> = (context) => {
    const { params } = context;
    const { postSlug } = params as any;
  
    const filePathToRead = path.join(process.cwd(), 'posts', postSlug + ".md");
    const fileContent = fs.readFileSync(filePathToRead, { encoding: 'utf-8' });
    const { content, data } = matter(fileContent);
  
    return {
      props: {
        post: {
          content,
          title: data.title,
        },
      },
    };
  };


export default SinglePage;