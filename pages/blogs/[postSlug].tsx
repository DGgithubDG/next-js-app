import { NextPage, GetStaticProps, GetStaticPaths, InferGetStaticPropsType, } from "next";
import { useRouter } from "next/router";
import matter from "gray-matter";
import fs from 'fs'
import path from 'path'
import { ParsedUrlQuery } from "querystring";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

type Props = InferGetStaticPropsType<typeof getStaticProps>

const SinglePage: NextPage<Props> = ({post}) => {

    const {content, title} = post

    return (
        <div>
            <div className="max-w-3xl mx-auto">
            <h1 className="semi-bold text-2xl py-5 text-white">{title}</h1>
            <div className="prose text-white">
            <MDXRemote {... content}/>

            </div>
            </div>
 

        </div>

    )
}

interface IstaticProps extends ParsedUrlQuery {
    postSlug: string
}

type Post = {
    post: {
        title: string,
        content: MDXRemoteSerializeResult,
    }
}

export const getStaticProps: GetStaticProps<Post> = async (context) => {
    const { params } = context;
    const { postSlug } = params as IstaticProps;

    const filePathToRead = path.join(process.cwd(), "posts/" + postSlug + ".md");
    const fileContent = fs.readFileSync(filePathToRead ,{ encoding: "utf-8" });
    // const {content, data} = matter(fileContent)
const source: any = await serialize(fileContent, {parseFrontmatter: true})
    return {
        props: {
            post: {
                content: source,
                title: source.frontmatter.title,
            }
        },
    }
  };


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

export default SinglePage;