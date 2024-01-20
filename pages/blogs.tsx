import { NextPage } from "next";
import BlogCard from "./component/blogCard";

interface Props {

}

const Blogs: NextPage<Props> = () => {
    return(
        <>
        <div className=" bg-blue-200 p-5 max-w-3xl mx-auto rounded">
            <h1 className="text-3xl font-semibold bg-gray-200"> Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p className="text-purple-900">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ipsa unde maxime esse fugit est reiciendis neque hic.</p>
        </div>
        <div className=" max-w-3xl mx-auto p-5  space-y-5 font-semibold bg-green-900">
            <BlogCard title="This is the Title !
            " description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit nisi alias assumenda molestias! Vero aliquam rerum optio aperiam voluptas!
            " />
            <BlogCard title="This is the title" 
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit nisi alias assumenda molestias! Vero aliquam rerum optio aperiam voluptas!
            " />
        </div>
        </>
    )
}  

export default Blogs;