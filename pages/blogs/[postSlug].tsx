import { NextPage, GetStaticProps, GetStaticPaths, } from "next";
import { useRouter } from "next/router";
import matter from "gray-matter";
import fs from 'fs'
import path from 'path'

interface Props {

}

const SinglePage: NextPage<Props> = () => {

    return (
        <div>
            <div>Single Page</div>

        </div>

    )
}

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {},
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